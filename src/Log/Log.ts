import defaultsDeep from 'lodash/defaultsDeep';
import cloneDeep from 'lodash/cloneDeep';
import {
  Configuration,
  Defaults,
  LogRender,
  LogTimestamp,
  ModifierQueue,
  PrintFunction,
  MetaData,
  LogLevelDefinition,
  TerminatedLog,
  SelectedDef,
  DefGroup,
} from '../_contracts';
import {
  printDir,
  printDirxml,
  printTable,
  printGroup,
  printGroupCollapsed,
  printGroupEnd,
  printTrace,
} from '../printers';
import {
  isString,
  cloneObject,
  cloneArray,
  stacktrace,
  timestamp,
  toConsole,
} from '../util';
import { Label, addLabel, getLabel } from '../label';
import { LogData } from './LogData';
import { defaults } from '../_defaults';
import { printLog } from '../printers';
import { env } from '../global';
import { allowed, evalPasses } from '../conditions';
import { shedExists } from '../shed';

export class Log {
  /**
   * The Adze log configuration merged with defaults.
   */
  private cfg: Defaults;

  /**
   * The level of this log instance.
   */
  private level: number | null = null;

  /**
   * The log level definition selected for this log
   * after it has been terminated.
   */
  private definition: LogLevelDefinition | null = null;

  /**
   * Arguments passed into a terminating method.
   */
  private args: unknown[] | null = null;

  /**
   * The log render after this log has been terminated.
   */
  private render: LogRender | null = null;

  /**
   * The timestamp object generated when this log has been terminated.
   */
  private timestamp: LogTimestamp | null = null;

  /**
   * The stacktrace of the log when it has been terminated.
   */
  private stacktrace: string | null = null;

  /**
   * The namespaces assigned to this log.
   */
  private namespaceVal: string[] | null = null;

  /**
   * The label instance assigned to this log.
   */
  private labelVal: Label | null = null;

  /**
   * The time ellapsed when this log was terminated.
   */
  private timeNowVal: string | null = null;

  /**
   * Queue of modifiers applied to this log instance.
   * These will be executed in order when the log is terminated.
   */
  private modifierQueue: ModifierQueue = [];

  /**
   * The function used to generate a log render when
   * the log is terminated.
   */
  private printer: PrintFunction = printLog();

  /**
   * Meta data attached to this log instance through the
   * meta modifier or through MDC threads. This is retrievable
   * in log listeners.
   */
  private metaData: MetaData = {};

  // ======================================
  //   Flags
  // ======================================

  /**
   * The result of the expression evaluated from
   * the assertion modifier. If this value is false,
   * the log will print the provided message denoting
   * the failure of the assertion.
   */
  private assertion: boolean | undefined;

  /**
   * The result of the expression evaluated from
   * the assertion modifier. If this value is false,
   * the log will print the provided message denoting
   * the failure of the assertion.
   */
  private expression: boolean | undefined;

  /**
   * Flag which tells the log instance to skip rendering.
   */
  private isSilent = false;

  /**
   * Flag which tells the log instance to add the
   * MDC context to the log render arguments.
   */
  private dumpContext = false;

  constructor(user_cfg?: Configuration) {
    this.cfg = defaultsDeep(user_cfg, defaults) as Defaults;
  }

  // ======================================
  //   Terminating Methods (return void)
  // ======================================
  // public attention logMethod('attention'),
  // public error = logMethod('error'),
  // public warn = logMethod('warn'),
  // public info = logMethod('info'),
  // public fail = logMethod('fail'),
  // public success = logMethod('success'),
  // public log = logMethod('log'),
  // public debug = logMethod('debug'),
  // public verbose = logMethod('verbose'),
  // public custom = customMethod(),

  /**
   * Seals the configuration of a log and returns a function that
   * constructs a new log with the same configuration.
   *
   * **Example:**
   * ```javascript
   * const sealed = adze({ use_emoji: true }).ns('sealed').label('sealed-label').seal();
   * sealed().success('Success!'); // -> prints "#sealed [sealed-label] Success!"
   * sealed().log('Another log.'); // -> prints "#sealed [sealed-label] Another log."
   * ```
   */
  public seal(): () => Log {
    // Run the modifier queue to apply their results
    this.runModifierQueue();
    // Clear the queue as to not repeat the actions when the subsequent logs are terminated.
    this.modifierQueue = [];
    // Create a new Adze log and hydrate it with the data from this instance.
    // This effectively clones the Adze log.
    return () => new Log().hydrate(this.data);
  }

  /**
   * Following the MDC (Mapped Diagnostic Context) pattern this method enables you to create
   * a thread for adding context from different scopes before finally terminating the log.
   *
   * In order to create a thread, this log must specify a label that will be used to link the
   * context and your environment must have a **shed** created.
   *
   * **Example:**
   * ```typescript
   * import { adze, createShed } from 'adze';
   *
   * const shed = createShed();
   *
   * // Creating a shed listener is a great way to get meta data from your
   * // threaded logs to write to disk or pass to another plugin, library,
   * // or service.
   * shed.addListener([1,2,3,4,5,6,7,8], (log) => {
   *   // Do something with `log.context.added` or `log.context.subtracted`.
   * });
   *
   * function add(a, b) {
   *   const answer = a + b;
   *   adze().label('foo').thread('added', { a, b, answer });
   *   return answer;
   * }
   *
   * function subtract(x, y) {
   *   const answer = x - y;
   *   adze().label('foo').thread('subtracted', { x, y, answer });
   *   return answer;
   * }
   *
   * add(1, 2);
   * subtract(4, 3);
   *
   * adze().label('foo').dump().info('Results from our thread');
   * // Info => Results from our thread, { a: 1, b: 2, answer: 3 }, { x: 4, y: 3, answer: 1 }
   *
   * ```
   */
  public thread<T>(key: string, value: T): void {
    // Check if the log has a label. If not, console.warn the user.
    // If the log has a label, attach the context to the label.
    this.runModifierQueue();
    if (this.labelVal) {
      this.labelVal.addContext(key, value);
    } else {
      console.warn('Thread context was not added! Threads must have a label.');
    }
  }

  /**
   * Closes a thread assigned to the log by clearing the context values.
   */
  public close(): void {
    if (this.labelVal) {
      this.labelVal.clearContext();
    }
  }

  /**
   * Alias for console.clear().
   */
  public clear(): void {
    console.clear();
  }

  /**
   * Alias for clear() which is an alias for console.clear().
   */
  public clr(): void {
    this.clear();
  }

  // =============================
  //   MODIFIERS
  // =============================

  /**
   * Adds to the log count for log instances that share this log's label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/count)
   */
  public get count(): this {
    return this.modifier(() => {
      if (this.labelVal) {
        this.labelVal.addCount();
      }
    });
  }

  /**
   * Resets the count for the log instances that share this log's label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset)
   */
  public get countReset(): this {
    return this.modifier(() => {
      if (this.labelVal) {
        this.labelVal.resetCount();
      }
    });
  }

  /**
   * Unsets the count for the log instances that share this log's label.
   *
   * This is a non-standard method.
   */
  public get countClear(): this {
    return this.modifier(() => {
      if (this.labelVal) {
        this.labelVal.clearCount();
      }
    });
  }

  /**
   * Instructs the log terminator to add the key/value pairs from the
   * thread context to the console output.
   */
  public get dump(): this {
    return this.modifier(() => {
      this.dumpContext = true;
    });
  }

  /**
   * Assign meta data to this log instance that is retrievable
   * in a log listener.
   */
  public meta<T>(key: string, val: T): this {
    return this.modifier(() => {
      this.metaData[key] = val;
    });
  }

  /**
   * Instructs this log to print in the dir format. Typically this is useful
   * for rendering deeply nested objects in the console.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)
   */
  public get dir(): this {
    return this.modifier(() => {
      this.printer = printDir;
    });
  }

  /**
   * Instructs this log to print in the dirxml format. Typically this is useful
   * for rendering HTML/DOM or XML Elements in the console.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dirxml)
   */
  public get dirxml(): this {
    return this.modifier(() => {
      this.printer = printDirxml;
    });
  }

  /**
   * Instructs this log to print its argument in a table format.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)
   */
  public get table(): this {
    return this.modifier(() => {
      this.printer = printTable;
    });
  }

  /**
   * This modifier method allows the log to execute normally but
   * prevent it from printing to the console.
   */
  public get silent(): this {
    return this.modifier(() => {
      this.isSilent = true;
    });
  }

  /**
   * Starts a log group.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/group)
   */
  public get group(): this {
    return this.modifier(() => {
      this.printer = printGroup();
    });
  }

  /**
   * Starts a log group that is collapsed by default.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupCollapsed)
   */
  public get groupCollapsed(): this {
    return this.modifier(() => {
      this.printer = printGroupCollapsed();
    });
  }

  /**
   * Ends the most recently opened log group.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd)
   */
  public get groupEnd(): this {
    return this.modifier(() => {
      this.printer = printGroupEnd;
    });
  }

  /**
   * Adds a label to the log. Label's can be used for log identification
   * and grouping. Label's also link log instances together.
   *
   * This is a non-standard API, but it replaces the need to provide
   * a label to `count` or `time`.
   */
  public label(name: string): this {
    return this.prependModifier(() => {
      this.labelVal = addLabel(getLabel(name) ?? new Label(name));
    });
  }

  /**
   * Adds a namespace to the log. Namespace's are primarily useful
   * for grouping logs together.
   *
   * This is a non-standard API.
   */
  public namespace(ns: string | string[]): this {
    return this.modifier(() => {
      this.namespaceVal = isString(ns) ? [ns] : ns;
    });
  }

  /**
   * An alias for `namespace()`.
   */
  public ns(ns: string | string[]): this {
    return this.namespace(ns);
  }

  /**
   * Prints a stacktrace along with the log.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)
   */
  public get trace(): this {
    return this.modifier(() => {
      this.printer = printTrace();
    });
  }

  /**
   * Prints a log warning that the assertion failed if the assertion is false.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/console/assert)
   */
  public assert(assertion: boolean): this {
    return this.modifier(() => {
      this.assertion = assertion;
    });
  }

  /**
   * Allows the log to print if the expression is true.
   *
   * This is a non-standard method.
   */
  public test(expression: boolean): this {
    return this.modifier(() => {
      this.expression = expression;
    });
  }

  /**
   * Starts a timer associated with this log's *label*. This will do nothing if
   * this log has no label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/time).
   */
  public get time(): this {
    return this.modifier(() => {
      if (this.labelVal) {
        this.labelVal.startTime();
      }
    });
  }

  /**
   * Modifies the log render to show the current high-resolution real time.
   *
   * This is a non-standard method.
   */
  public get timeNow(): this {
    return this.modifier(() => {
      if (this.labelVal) {
        this.labelVal.captureTimeNow();
      } else {
        this.timeNowVal = Label.createTimeNow();
      }
    });
  }

  /**
   * Stops a timer that was previously started by calling time() on a *labeled* log. Calculates the
   * difference between the start time and when this method was called. This then
   * modifies the log render to show the time difference. This will do nothing if the *label* does
   * not exist.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd).
   */
  public get timeEnd(): this {
    return this.modifier(() => {
      if (this.labelVal) {
        this.labelVal.endTime();
      }
    });
  }

  /*
    ! console.timeLog() is purposefully omitted from this API.

    timeLog() is a useless method within the Adze API. The same effect can be 
    accomplished by created a new log with the same label.
  */

  /**
   * Getter shortcut for retrieving MDC context from the log instance.
   */
  public get context(): MetaData {
    return this.labelVal?.getContext() ?? {};
  }

  // public get bundle(): Bundle {
  //   return;
  // }

  // ==============================
  //   Private Methods
  // ==============================

  /**
   * Queues a modifier method for execution when the log is terminated.
   */
  private modifier(func: () => void): this {
    this.modifierQueue = this.modifierQueue.concat([func]);
    return this;
  }

  /**
   * Queues a modifier method for execution at the beginning of the queue when the log is terminated.
   * This is used to ensure that labels are applied before modifiers that use labels are executed.
   */
  private prependModifier(func: () => void): this {
    this.modifierQueue = [func].concat(this.modifierQueue);
    return this;
  }

  /**
   * Executes all of the log modifier functions within the queue.
   */
  private runModifierQueue(): void {
    this.modifierQueue.forEach((func) => func());
  }

  // ===================================
  //   Private Methods for Terminators
  // ===================================

  /**
   * Generates a terminating log method the specified log level name.
   */
  private logMethod(levelName: string, args: unknown[]): TerminatedLog {
    return this.executionPipeline(
      this.getDefinition('log_levels', levelName),
      args
    );
  }

  /**
   * Generates a terminating log method that enables the user to specify a custom
   * log level by key as the format for the log.
   */
  private customMethod(levelName: string, args: unknown[]): TerminatedLog {
    return this.executionPipeline(
      this.getDefinition('custom_levels', levelName),
      args
    );
  }

  /**
   * Gets the log level definition from the log configuration.
   */
  private getDefinition(type: DefGroup, levelName: string): SelectedDef {
    const shed = env().$shed;
    if (shedExists(shed)) {
      const definition = shed.hasOverrides
        ? shed.overrides?.[type]?.[levelName]
        : this.cfg[type][levelName];

      if (definition) {
        return { ...definition, levelName };
      }
    }
  }

  /**
   * The primary execution pipeline for terminating log methods.
   */
  private executionPipeline(def: SelectedDef, args: unknown[]): TerminatedLog {
    if (def && allowed(this.cfg, def)) {
      // Apply modifiers in the proper order.
      this.runModifierQueue();

      // Check the test modifiers.
      if (evalPasses(this)) {
        // Save values to this log instance for later recall
        this.args = args;
        this.level = def.level;
        this.definition = def;
        this.timestamp = timestamp();
        this.stacktrace = this.cfg.capture_stacktrace ? stacktrace() : null;

        // If a global context exists, check if this log is allowed.
        const globally_allowed = env().$shed?.logGloballyAllowed(this) ?? true;

        if (globally_allowed) {
          // Render the log and print to the console
          const render = toConsole(print(this), this.isSilent);

          // Fire log events
          this.store();
          this.fireListeners();

          // Return the terminated log object for testing purposes
          return { log: this, render };
        }
      }
    }

    // Return the terminated log object for testing purposes
    return { log: this, render: null };
  }

  // ===================================
  //   Log Events
  // ===================================

  /**
   * Stores this log in the Shed if the Shed exists.
   */
  private store(): void {
    const shed = env().$shed;
    if (shedExists(shed)) {
      shed.store(this);
    }
  }

  /**
   * Fires listeners for this log instance if a Shed exists.
   */
  private fireListeners(): void {
    const shed = env().$shed;
    if (shedExists(shed)) {
      shed.fireListeners(this);
    }
  }

  // ===================================
  //   Generate Log Data
  // ===================================

  /**
   * Creates a slimmed down object comprised of data from a log.
   */
  public get data(): LogData {
    return new LogData(this, {
      cfg: cloneDeep(this.cfg),
      level: this.level,
      timestamp: cloneObject<LogTimestamp>(this.timestamp),
      stacktrace: this.stacktrace,
      definition: cloneObject<LogLevelDefinition>(this.definition),
      args: cloneArray<unknown>(this.args),
      namespace: cloneArray<string>(this.namespaceVal),
      label: {
        name: this.labelVal?.name ?? null,
        timeNow: this.labelVal?.timeNow ?? null,
        timeEllapsed: this.labelVal?.timeEllapsed ?? null,
        count: this.labelVal?.count ?? null,
      },
      dumpContext: this.dumpContext,
      isSilent: this.isSilent,
      timeNow: this.timeNowVal,
      meta: { ...this.metaData },
      context: { ...this.context },
    });
  }

  /**
   * Hydrate this log's properties from a log data object.
   */
  public hydrate(data: LogData): this {
    this.cfg = cloneDeep(data.cfg);
    this.level = data.level;
    this.timestamp = cloneObject<LogTimestamp>(data.timestamp);
    this.stacktrace = data.stacktrace;
    this.definition = cloneObject<LogLevelDefinition>(data.definition);
    this.args = cloneArray<unknown>(data.args);
    this.namespaceVal = cloneArray<string>(data.namespace);
    this.labelVal = getLabel(data.label.name ?? '') ?? null;
    this.dumpContext = data.dumpContext;
    this.isSilent = data.isSilent;
    this.timeNowVal = data.timeNow;
    this.metaData = { ...data.meta };

    return this;
  }
}
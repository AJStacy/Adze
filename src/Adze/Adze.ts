import hrtime from 'browser-process-hrtime';
import defaultsDeep from 'lodash/defaultsDeep';
import {
  printDir,
  printDirxml,
  printTable,
  printGroup,
  printGroupCollapsed,
  printGroupEnd,
  printTrace,
} from '../printers';
import { addLabel, getLabel } from '../label';
import { isString } from '../util';
import {
  Configuration,
  Defaults,
  LogRender,
  LogTimestamp,
  ModifierQueue,
  PrintFunction,
  MetaData,
  Label,
  HrTime,
} from '../_contracts';
import { printLog } from '../printers';

export class Adze {
  /**
   * The Adze log configuration merged with defaults.
   */
  private cfg: Defaults;

  /**
   * The level of this log instance.
   */
  private level: number | null = null;

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
  private namespaceVal: string[] | undefined;

  /**
   * The label instance assigned to this log.
   */
  private labelVal: Label | undefined;

  /**
   * The time ellapsed when this log was terminated.
   */
  private timeNowVal: string | undefined;

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

  /**
   * Adds to the log count for log instances that share this log's label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/count)
   */
  public get count(): ThisType<Adze> {
    return this.modifier(() => {
      if (this.labelVal) {
        this.labelVal.count = this.labelVal.count ?? 0;
        this.labelVal.count += 1;
      }
    });
  }

  /**
   * Resets the count for the log instances that share this log's label.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset)
   */
  public get countReset(): ThisType<Adze> {
    return this.modifier(() => {
      if (this.labelVal) {
        this.labelVal.count = 0;
      }
    });
  }

  /**
   * Unsets the count for the log instances that share this log's label.
   *
   * This is a non-standard method.
   */
  public get countClear(): ThisType<Adze> {
    return this.modifier(() => {
      if (this.labelVal) {
        this.labelVal.count = undefined;
      }
    });
  }

  /**
   * Instructs the log terminator to add the key/value pairs from the
   * thread context to the console output.
   */
  public get dump(): ThisType<Adze> {
    return this.modifier(() => {
      this.dumpContext = true;
    });
  }

  /**
   * Assign meta data to this log instance that is retrievable
   * in a log listener.
   */
  public meta<T>(key: string, val: T): ThisType<Adze> {
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
  public get dir(): ThisType<Adze> {
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
  public get dirxml(): ThisType<Adze> {
    return this.modifier(() => {
      this.printer = printDirxml;
    });
  }

  /**
   * Instructs this log to print its argument in a table format.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)
   */
  public get table(): ThisType<Adze> {
    return this.modifier(() => {
      this.printer = printTable;
    });
  }

  /**
   * This modifier method allows the log to execute normally but
   * prevent it from printing to the console.
   */
  public get silent(): ThisType<Adze> {
    return this.modifier(() => {
      this.isSilent = true;
    });
  }

  /**
   * Starts a log group.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/group)
   */
  public get group(): ThisType<Adze> {
    return this.modifier(() => {
      this.printer = printGroup();
    });
  }

  /**
   * Starts a log group that is collapsed by default.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupCollapsed)
   */
  public get groupCollapsed(): ThisType<Adze> {
    return this.modifier(() => {
      this.printer = printGroupCollapsed();
    });
  }

  /**
   * Ends the most recently opened log group.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd)
   */
  public get groupEnd(): ThisType<Adze> {
    return this.modifier(() => {
      this.printer = printGroupEnd;
    });
  }

  /**
   * Adds a label to the log. Label's can be used for log identification
   * and grouping. Label's also link log instances together.
   *
   * This is a non-standard API, but it replaces the need to provide
   * a label to `count()` or `time()`.
   */
  public label(name: string): ThisType<Adze> {
    return this.prependModifier(() => {
      this.labelVal = addLabel(getLabel(name) ?? { name, context: {} });
    });
  }

  /**
   * Adds a namespace to the log. Namespace's are primarily useful
   * for grouping logs together.
   *
   * This is a non-standard API.
   */
  public namespace(ns: string | string[]): ThisType<Adze> {
    return this.modifier(() => {
      this.namespaceVal = isString(ns) ? [ns] : ns;
    });
  }

  /**
   * An alias for `namespace()`.
   */
  public ns(ns: string | string[]): ThisType<Adze> {
    return this.namespace(ns);
  }

  /**
   * Prints a stacktrace along with the log.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)
   */
  public get trace(): ThisType<Adze> {
    return this.modifier(() => {
      this.printer = printTrace();
    });
  }

  /**
   * Prints a log warning that the assertion failed if the assertion is false.
   *
   * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/console/assert)
   */
  public assert(assertion: boolean): ThisType<Adze> {
    return this.modifier(() => {
      this.assertion = assertion;
    });
  }

  /**
   * Allows the log to print if the expression is true.
   *
   * This is a non-standard method.
   */
  public test(expression: boolean): ThisType<Adze> {
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
  public get time(): ThisType<Adze> {
    return this.modifier(() => {
      if (this.labelVal) {
        this.labelVal.timeStart = hrtime();
      }
    });
  }

  /**
   * Modifies the log render to show the current high-resolution real time.
   *
   * This is a non-standard method.
   */
  public get timeNow(): ThisType<Adze> {
    return this.modifier(() => {
      const time_now = this.formatTime(hrtime());
      this.labelVal
        ? (this.labelVal.timeNow = time_now)
        : (this.timeNowVal = time_now);
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
  public get timeEnd(): ThisType<Adze> {
    return this.modifier(() => {
      if (this.labelVal) {
        this.labelVal.timeEllapsed = this.formatTime(
          hrtime(this.labelVal.timeStart)
        );
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
  public get context() {
    return this.labelVal?.context;
  }

  /**
   * Takes an HrTime tuple and converts it into a human-readable formatted
   * string in the format of `{sec}s {ms}ms`.
   */
  private formatTime([sec, nano]: HrTime): string {
    return `${sec}s ${nano / 1000000}ms`;
  }

  /**
   * Queues a modifier method for execution when the log is terminated.
   */
  private modifier(func: () => void): ThisType<Adze> {
    this.modifierQueue = this.modifierQueue.concat([func]);
    return this;
  }

  /**
   * Queues a modifier method for execution at the beginning of the queue when the log is terminated.
   * This is used to ensure that labels are applied before modifiers that use labels are executed.
   */
  private prependModifier(func: () => void): ThisType<Adze> {
    this.modifierQueue = [func].concat(this.modifierQueue);
    return this;
  }
}

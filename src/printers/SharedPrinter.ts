import { FinalLog, LogRender, ConsoleMethod } from '../_contracts';
import { Log } from '../Log';
import { env } from '../global';
import { isString } from '../util';

export class SharedPrinter {
  private log: Log;

  constructor(log: Log) {
    this.log = log;
  }

  get args(): unknown[] {
    return this.log.args;
  }

  get use_emoji(): boolean {
    return (
      env().$shed?.overrides?.use_emoji === true ||
      this.log.cfg.use_emoji === true
    );
  }

  // ------- PRINT ENTRY -------- //

  public print(): LogRender {
    return this.log.printer(use_emoji);
  }

  // ------- PRINT METHODS -------- //

  private printGroupEnd(): LogRender {
    return this.applyRender('groupEnd', []);
  }

  private printTable(): LogRender {
    return this.applyRender('table', log.args, false);
  }

  private printDir(): LogRender {
    return this.applyRender('dir', log.args, false);
  }

  private printDirxml(): LogRender {
    return this.applyRender('dirxml', log.args, false);
  }

  // ------ Print to the console ------- //

  /**
   * Applies the render tuple to the log instance. If spread is indicated, the args
   * value will be an array. If spread is false, the args value will be an array with
   * a nested array to prevent the spread operator from destructuring the values.
   */
  private applyRender(
    method: ConsoleMethod,
    args: unknown[],
    spread = true
  ): LogRender {
    const expanded_args = log.dumpContext ? args.concat([log.context]) : args;
    const spread_args = spread ? expanded_args : [expanded_args];
    log.render = [method, spread_args];
    return log.render;
  }

  /**
   * Render the log. If the ADZE_ENV is set to "dev" the log will not render and
   * will be returned for unit library development purposes.
   */
  private toConsole(render: LogRender, is_silent: boolean): LogRender {
    const [method, args] = render;
    if (env().ADZE_ENV !== 'dev' && !is_silent) {
      console[method](...args);
    }
    return render;
  }

  // ------ Shared Formatters ------- //

  /**
   * Formats the namespace on the log string based on the namespace
   * modifier applied to this log.
   */
  private fNamespace(): string {
    const ns = log.namespaceVal;
    if (ns) {
      if (isString(ns)) {
        return `#${log.namespaceVal} `;
      } else {
        return ns.reduce((acc, name) => `${acc}#${name} `, '');
      }
    }
    return '';
  }
}

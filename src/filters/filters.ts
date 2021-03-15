import { LogRender, Collection, LogData } from '../_contracts';
import { Log } from '../log';
import { isString } from '../util';

/**
 * Filter a collection of logs by the namespace.
 */
export function filterNamespace(
  collection: Collection = [],
  ns: string[]
): Collection {
  return filterCollection(collection, (log) => {
    const log_ns = log.namespace;
    if (log_ns) {
      // Loop over each log ns value and see if any match any ns value.
      return log_ns
        .map((val) => (isString(ns) ? val === ns : ns.includes(val)))
        .includes(true);
    }
    return false;
  });
}

/**
 * Filter and render the bundle of logs by the label.
 */
export function filterLabel(
  collection: Collection = [],
  lbl: string
): Collection {
  return filterCollection(collection, (log) => log.label?.name === lbl);
}

/**
 * Filter the bundle of logs by their log level.
 */
export function filterLevelRange(
  collection: Collection = [],
  low: number,
  high: number
): Collection {
  return filterCollection(collection, (log) => {
    const level = log.level ?? Infinity;
    return level >= low && level <= high;
  });
}

/**
 * Executes a callback on each value of a collection. The callback receives a
 * log data object for each log in the collection. If a truthy value is returned the
 * current log of the iteration will be added into a new collection. If a falsy value is
 * returned it will be omitted.
 */
export function filterCollection(
  collection: Collection,
  cb: (log: LogData) => boolean
): Collection {
  return collection.reduce((acc, log) => {
    const result = cb(log.data);
    return result ? acc.concat([log]) : acc;
  }, [] as Collection);
}

/**
 * If the provided log has been previously rendered, this function
 * re-renders it to the console.
 */
export function rerender(log: Log): void {
  if (log.render) {
    render(log.render);
  }
}

/**
 * Render a log to the console based on a render object.
 */
export function render([method, args]: LogRender): void {
  console[method](...args);
}

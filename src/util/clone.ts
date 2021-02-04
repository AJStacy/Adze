import cloneDeep from 'lodash/cloneDeep';
import { Log } from '../_contracts';
import { Adze } from '../AdzeClass';

/**
 * For API convenience, modifiers are getters. A wholesale copy
 * or cloneDeep of a log instance causes all of the modifiers to
 * execute and add themselves to the queue which results in a
 * corrupted new log instance. Rather than wholesale copy, we will
 * individually select the properties that are safe to copy.
 */
// export function cloneLog(
//   log: Adze,
//   additional: Record<string, unknown> = {}
// ): Adze {
//   const {
//     cfg: cfgRaw,
//     timestamp: timestampRaw,
//     stacktrace,
//     render,
//     level,
//     args: argsRaw,
//     namespaceVal: namespaceValRaw,
//     labelVal,
//     timeNowVal,
//     dumpContext,
//     isSilent,
//     modifierQueue: modifierQueueRaw,
//     printer,
//     metaData: metaDataRaw,
//     assertion,
//     expression,
//   } = log;

//   // Deep clone the configuration
//   const cfg = cloneDeep(cfgRaw);

//   // Deep clone the timestamp object
//   const timestamp =
//     timestampRaw === null ? timestampRaw : cloneDeep(timestampRaw);

//   // Clone the args array. This does not prevent mutation of individual args.
//   const args = argsRaw === null ? argsRaw : [...argsRaw];

//   // Clone the namespace array
//   const namespaceVal =
//     namespaceValRaw !== undefined ? [...namespaceValRaw] : namespaceValRaw;

//   // Clone the modifier queue
//   const modifierQueue = [...modifierQueueRaw];

//   // Clone any MDC meta data
//   const metaData = cloneDeep(metaDataRaw);

//   return Object.assign(new Adze(), {
//     ...additional,
//     cfg,
//     timestamp,
//     stacktrace,
//     render,
//     level,
//     args,
//     namespaceVal,
//     labelVal,
//     timeNowVal,
//     dumpContext,
//     isSilent,
//     modifierQueue,
//     printer,
//     metaData,
//     assertion,
//     expression,
//   });
// }

/**
 * Clones an object if it is not null.
 */
export function cloneObject<T>(obj: T | null): T | null {
  return obj ? { ...obj } : null;
}

/**
 * Clones an array if it is not null.
 */
export function cloneArray<T>(arr: T[] | null): T[] | null {
  return arr ? [...arr] : null;
}

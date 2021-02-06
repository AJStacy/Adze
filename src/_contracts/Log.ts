import { Label } from '../label';
import { LogLevelDefinition, ConsoleMethod, Defaults, LabelData } from '.';

/**
 * The keys of the default terminating log methods included with Adze.
 */
export type TerminatingMethodKeys =
  | 'attention'
  | 'error'
  | 'warn'
  | 'fail'
  | 'success'
  | 'info'
  | 'log'
  | 'debug'
  | 'verbose';

export interface LogTimestamp {
  unixMilli: number;
  utc: string;
}

export type ModifierQueue = Array<() => void>;

export type PrintMethodNames =
  | 'Dir'
  | 'Dirxml'
  | 'Log'
  | 'Group'
  | 'GroupCollapsed'
  | 'GroupEnd'
  | 'Trace'
  | 'Table';
export type PrintMethod = `print${PrintMethodNames}`;

/**
 * Boolean flags that represent various states of how the log
 * should be printed.
 */
export interface LogFlags {
  assertion?: boolean;
  expression?: boolean;
  isSilent: boolean;
  dumpContext: boolean;
}

/**
 * Values of the log instance that determine how it should
 * be printed.
 */
export interface LogValues {
  cfg: Defaults;
  timestamp: LogTimestamp | null;
  stacktrace: string | null;
  render: LogRender | null;
  level: number | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: unknown[] | null;
  namespaceVal?: string[];
  labelVal?: Label;
  timeNowVal?: string;
  metaData: MetaData;
  modifierQueue: ModifierQueue;
  printer: PrintFunction;
}

export interface MetaData {
  [key: string]: unknown;
}

/**
 * All of the user accessible methods that can be chained to
 * create a customized log.
 */
interface LogMethods {
  custom: CustomLogFunction;
  seal(this: Log): () => Log;
  context<T>(): T;
  thread(key: string, value: unknown): void;
  close(): void;
  clear(): void;
  clr(): void;
  // Modifier Functions
  count: Log;
  countReset: Log;
  countClear: Log;
  dir: Log;
  dirxml: Log;
  dump: Log;
  table: Log;
  assert(assertion: boolean): Log;
  test(expression: boolean): Log;
  group: Log;
  groupCollapsed: Log;
  groupEnd: Log;
  label(name: string): Log;
  meta<T>(key: string, val: T): Log;
  ns(ns: string): Log;
  namespace(ns: string | string[]): Log;
  silent: Log;
  trace: Log;
  time: Log;
  timeNow: Log;
  timeEnd: Log;
}

/**
 * The final Adze log object prototype interface.
 */
export interface Log extends LogFlags, LogValues, LogMethods {}

export interface FinalLog extends Log {
  level: number;
  timestamp: LogTimestamp;
  render: LogRender;
  args: unknown[];
  definition: LogLevelDefinition;
}

/**
 * The render value for a Log.
 */
type Arguments = unknown[];
export type LogRender = [ConsoleMethod, Arguments];

export type Collection = FinalLog[];

export interface LogDataValues {
  cfg: Defaults;
  level: number | null;
  definition: LogLevelDefinition | null;
  args: unknown[] | null;
  timestamp: LogTimestamp | null;
  stacktrace: string | null;
  namespace: string[] | null;
  dumpContext: boolean;
  meta: MetaData;
  context: MetaData;
  label: LabelData;
  timeNow: string | null;
  assertion?: boolean;
  expression?: boolean;
  isSilent: boolean;
}

export interface FinalLogDataValues extends LogDataValues {
  level: number;
  definition: LogLevelDefinition;
  args: unknown[];
  timestamp: LogTimestamp;
}

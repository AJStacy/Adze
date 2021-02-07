import { Log } from '../Log';
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

export interface MetaData {
  [key: string]: unknown;
}

/**
 * The render value for a Log.
 */
type Arguments = unknown[];
export type LogRender = [ConsoleMethod, Arguments];

export type Collection = Log[];

export interface LogData {
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

export interface FinalLogData extends LogData {
  level: number;
  definition: LogLevelDefinition;
  args: unknown[];
  timestamp: LogTimestamp;
}

/**
 * The final value of a log after it has been terminated. This is useful for
 * gleaning the final render information and getting the Log instance for
 * unit testing purposes.
 */
export interface TerminatedLog {
  log: Log;
  render: LogRender | null;
}

import { LogLevelDefinition, ConsoleMethod, Defaults, Arguments } from '.';
import { Adze } from '../AdzeClass';

/**
 * The final value of a log after it has been terminated. This is useful for
 * gleaning the final render information and getting the Log instance for
 * unit testing purposes.
 */
export interface TerminatedLog {
  log: Adze;
  render: LogRender | null;
}

export type DefGroup = 'log_levels' | 'custom_levels';

export type SelectedDef = LogLevelDefinition | undefined;

type Arguments = unknown[];
export type LogRender = [ConsoleMethod, Arguments];

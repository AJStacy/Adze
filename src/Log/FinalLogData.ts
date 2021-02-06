import {
  FinalLogDataValues,
  LogLevelDefinition,
  LogTimestamp,
} from '../_contracts';
import { Log } from './Log';
import { LogData } from './LogData';

export class FinalLogData extends LogData {
  /**
   * Data values derived from an Adze log instance.
   */
  protected readonly values: FinalLogDataValues;

  constructor(log: Log, values: FinalLogDataValues) {
    super(log, values);
    this.values = values;
  }

  public get level(): number {
    return this.values.level;
  }

  public get definition(): LogLevelDefinition {
    return this.values.definition;
  }

  public get args(): unknown[] {
    return this.values.args;
  }

  public get timestamp(): LogTimestamp {
    return this.values.timestamp;
  }
}

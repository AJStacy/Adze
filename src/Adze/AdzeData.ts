import defaultsDeep from 'lodash/defaultsDeep';
import {
  Configuration,
  Defaults,
  LogRender,
  LogTimestamp,
  ModifierQueue,
  PrintFunction,
  MetaData,
  Label,
} from '../_contracts';
import { printLog } from '../printers';
import { defaults } from '../_defaults';
import { Adze } from './Adze';

export class AdzeData {
  // ======================================
  // Data Properties
  // ======================================
  protected cfg: Defaults;
  protected level: number | null = null;
  protected args: unknown[] | null = null;
  protected render: LogRender | null = null;
  protected timestamp: LogTimestamp | null = null;
  protected stacktrace: string | null = null;
  protected namespaceVal: string[] | undefined;
  protected labelVal: Label | undefined;
  protected timeNowVal: string | undefined;
  protected modifierQueue: ModifierQueue = [];
  protected printer: PrintFunction = printLog();
  protected metaData: MetaData = {};

  constructor(user_cfg?: Configuration) {
    this.cfg = defaultsDeep(user_cfg, defaults) as Defaults;
  }
}

import { Bundle, Configuration } from 'src/_contracts';
import { Log } from './Log';

export class BundledLog extends Log {
  private _bundle: Bundle;

  constructor(bundle: Bundle, user_cfg?: Configuration) {
    super(user_cfg);
    this._bundle = bundle;
  }

  public get bundle(): Bundle {
    return this._bundle;
  }
}

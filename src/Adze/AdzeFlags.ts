import { Configuration } from '../_contracts';
import { Adze } from './Adze';
import { AdzeData } from './AdzeData';

export class AdzeFlags extends AdzeData {
  protected traceable = false;
  protected assertion: boolean | undefined;
  protected expression: boolean | undefined;
  protected isSilent = false;
  protected dumpContext = false;

  constructor(user_cfg?: Configuration) {
    super(user_cfg);
  }
}

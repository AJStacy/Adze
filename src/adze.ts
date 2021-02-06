import defaultsDeep from 'lodash/defaultsDeep';

import { Configuration, Defaults } from './_contracts';
import { defaults } from './_defaults';
import { Log } from './Log';
import { Printer } from './printers';
import { Env } from './Env';

/*
 * Planned features:
 *
 * - Select log levels optionally by name in listener creation.
 * - Analytics and Reporting support.
 * - Remote server for receiving and analyzing logs.
 * - Add easy functions for transporting logging data to various sources.
 *     - Write to a file.
 *     - Write to local storage.
 *     - Push to an API endpoint.
 */

/**
 * The entry point for creating Adze logs. This factory function can be used directly or configuration
 * can be provided and the result can be assigned to a new variable. This allows for multiple
 * logging instances with different configurations.
 *
 * --- Default levels ---
 *
 * 0. attention
 * 1. error
 * 2. warn
 * 3. info
 * 4. fail
 * 5. success
 * 6. log
 * 7. debug
 * 8. verbose
 */
export function adze(user_cfg: Configuration = {}) {
  const cfg = defaultsDeep(user_cfg, defaults) as Defaults;
  const log = new Log(new Env(), user_cfg);
}

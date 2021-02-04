/* eslint-disable @typescript-eslint/no-namespace */
import { Shed } from './shed';

declare global {
  interface Window {
    $shed?: Shed;
    ADZE_ENV?: 'test' | 'dev';
    ADZE_ENV_CONTEXT?: 'global' | 'window';
  }
  namespace NodeJS {
    export interface Global {
      $shed?: Shed;
      ADZE_ENV?: 'test' | 'dev';
      ADZE_ENV_CONTEXT?: 'global' | 'window';
    }
  }
}

/**
 * Class with various properties describing the current environment.
 */
export class Env {
  public readonly global: Window | NodeJS.Global;

  public readonly isBrowser: boolean = typeof window !== 'undefined';

  public _isChrome = false;

  public _isFirefox = false;

  public _isSafari = false;

  constructor() {
    this.global = this.isBrowser ? window : global;

    if (this.envIsWindow(this.global)) {
      this._isChrome = this.global.navigator?.userAgent?.indexOf('Chrome') > -1;

      this._isFirefox =
        this.global.navigator?.userAgent?.indexOf('Firefox') > -1;

      this._isSafari =
        this.global.navigator?.userAgent?.indexOf('Safari') > -1 &&
        !this._isChrome;
    }
  }

  /**
   * TypeGuard to determine if the env value is the Window object.
   */
  public envIsWindow = (env: Window | NodeJS.Global): env is Window => {
    return this.isBrowser;
  };

  /**
   * Getter for identifying if the current environment is the Chrome browser.
   */
  public get isChrome(): boolean {
    return this._isChrome;
  }

  /**
   * Getter for identifying if the current environment is the Firefox browser.
   */
  public get isFirefox(): boolean {
    return this._isFirefox;
  }

  /**
   * Getter for identifying if the current environment is the Safari browser.
   */
  public get isSafari(): boolean {
    return this._isSafari;
  }
}

// import defaultsDeep from 'lodash/defaultsDeep';

// import {
//   Log,
//   Configuration,
//   Defaults,
//   LogRender,
//   LogTimestamp,
//   ModifierQueue,
//   PrintFunction,
//   MetaData,
// } from '../_contracts';
// import {
//   logMethod,
//   customMethod,
//   seal,
//   thread,
//   close,
//   clear,
//   clr,
// } from '../terminators';
// import { test } from '../modifiers';
// import { AdzeModifiers } from './AdzeModifiers';

// export class Adze extends AdzeModifiers {

//   constructor(user_cfg?: Configuration) {
//     super(user_cfg);
//   }

//   // ======================================
//   // Terminating Methods (return void)
//   // ======================================
//   // attention: logMethod('attention'),
//   // error: logMethod('error'),
//   // warn: logMethod('warn'),
//   // info: logMethod('info'),
//   // fail: logMethod('fail'),
//   // success: logMethod('success'),
//   // log: logMethod('log'),
//   // debug: logMethod('debug'),
//   // verbose: logMethod('verbose'),
//   // custom: customMethod(),
//   // seal,
//   // thread,
//   // close,
//   // clear,
//   // clr,

//   public testing(): void {
//     console.log('TESTING');
//   }

//   // ======================================
//   // Shortcuts
//   // ======================================
//   // get context() {
//   //   // return this.labelVal?.context;
//   // }
// }

// const x = new Adze();
// x.silent.testing();

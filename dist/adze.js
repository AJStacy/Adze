(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AdzeLib"] = factory();
	else
		root["AdzeLib"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/ansi-styles/index.js":
/*!*******************************************!*\
  !*** ./node_modules/ansi-styles/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

const wrapAnsi16 = (fn, offset) => (...args) => {
	const code = fn(...args);
	return `\u001B[${code + offset}m`;
};

const wrapAnsi256 = (fn, offset) => (...args) => {
	const code = fn(...args);
	return `\u001B[${38 + offset};5;${code}m`;
};

const wrapAnsi16m = (fn, offset) => (...args) => {
	const rgb = fn(...args);
	return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
};

const ansi2ansi = n => n;
const rgb2rgb = (r, g, b) => [r, g, b];

const setLazyProperty = (object, property, get) => {
	Object.defineProperty(object, property, {
		get: () => {
			const value = get();

			Object.defineProperty(object, property, {
				value,
				enumerable: true,
				configurable: true
			});

			return value;
		},
		enumerable: true,
		configurable: true
	});
};

/** @type {typeof import('color-convert')} */
let colorConvert;
const makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
	if (colorConvert === undefined) {
		colorConvert = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");
	}

	const offset = isBackground ? 10 : 0;
	const styles = {};

	for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
		const name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace;
		if (sourceSpace === targetSpace) {
			styles[name] = wrap(identity, offset);
		} else if (typeof suite === 'object') {
			styles[name] = wrap(suite[targetSpace], offset);
		}
	}

	return styles;
};

function assembleStyles() {
	const codes = new Map();
	const styles = {
		modifier: {
			reset: [0, 0],
			// 21 isn't widely supported and 22 does the same thing
			bold: [1, 22],
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		color: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],

			// Bright color
			blackBright: [90, 39],
			redBright: [91, 39],
			greenBright: [92, 39],
			yellowBright: [93, 39],
			blueBright: [94, 39],
			magentaBright: [95, 39],
			cyanBright: [96, 39],
			whiteBright: [97, 39]
		},
		bgColor: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49],

			// Bright color
			bgBlackBright: [100, 49],
			bgRedBright: [101, 49],
			bgGreenBright: [102, 49],
			bgYellowBright: [103, 49],
			bgBlueBright: [104, 49],
			bgMagentaBright: [105, 49],
			bgCyanBright: [106, 49],
			bgWhiteBright: [107, 49]
		}
	};

	// Alias bright black as gray (and grey)
	styles.color.gray = styles.color.blackBright;
	styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
	styles.color.grey = styles.color.blackBright;
	styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;

	for (const [groupName, group] of Object.entries(styles)) {
		for (const [styleName, style] of Object.entries(group)) {
			styles[styleName] = {
				open: `\u001B[${style[0]}m`,
				close: `\u001B[${style[1]}m`
			};

			group[styleName] = styles[styleName];

			codes.set(style[0], style[1]);
		}

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});
	}

	Object.defineProperty(styles, 'codes', {
		value: codes,
		enumerable: false
	});

	styles.color.close = '\u001B[39m';
	styles.bgColor.close = '\u001B[49m';

	setLazyProperty(styles.color, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false));
	setLazyProperty(styles.color, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false));
	setLazyProperty(styles.color, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false));
	setLazyProperty(styles.bgColor, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true));
	setLazyProperty(styles.bgColor, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true));
	setLazyProperty(styles.bgColor, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true));

	return styles;
}

// Make the export immutable
Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/browser-process-hrtime/index.js":
/*!******************************************************!*\
  !*** ./node_modules/browser-process-hrtime/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {module.exports = process.hrtime || hrtime

// polyfil for window.performance.now
var performance = global.performance || {}
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() }

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3
  var seconds = Math.floor(clocktime)
  var nanoseconds = Math.floor((clocktime%1)*1e9)
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0]
    nanoseconds = nanoseconds - previousTimestamp[1]
    if (nanoseconds<0) {
      seconds--
      nanoseconds += 1e9
    }
  }
  return [seconds,nanoseconds]
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/chalk/source/index.js":
/*!********************************************!*\
  !*** ./node_modules/chalk/source/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const ansiStyles = __webpack_require__(/*! ansi-styles */ "./node_modules/ansi-styles/index.js");
const {stdout: stdoutColor, stderr: stderrColor} = __webpack_require__(/*! supports-color */ "./node_modules/supports-color/browser.js");
const {
	stringReplaceAll,
	stringEncaseCRLFWithFirstIndex
} = __webpack_require__(/*! ./util */ "./node_modules/chalk/source/util.js");

const {isArray} = Array;

// `supportsColor.level` → `ansiStyles.color[name]` mapping
const levelMapping = [
	'ansi',
	'ansi',
	'ansi256',
	'ansi16m'
];

const styles = Object.create(null);

const applyOptions = (object, options = {}) => {
	if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
		throw new Error('The `level` option should be an integer from 0 to 3');
	}

	// Detect level if not set manually
	const colorLevel = stdoutColor ? stdoutColor.level : 0;
	object.level = options.level === undefined ? colorLevel : options.level;
};

class ChalkClass {
	constructor(options) {
		// eslint-disable-next-line no-constructor-return
		return chalkFactory(options);
	}
}

const chalkFactory = options => {
	const chalk = {};
	applyOptions(chalk, options);

	chalk.template = (...arguments_) => chalkTag(chalk.template, ...arguments_);

	Object.setPrototypeOf(chalk, Chalk.prototype);
	Object.setPrototypeOf(chalk.template, chalk);

	chalk.template.constructor = () => {
		throw new Error('`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.');
	};

	chalk.template.Instance = ChalkClass;

	return chalk.template;
};

function Chalk(options) {
	return chalkFactory(options);
}

for (const [styleName, style] of Object.entries(ansiStyles)) {
	styles[styleName] = {
		get() {
			const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
			Object.defineProperty(this, styleName, {value: builder});
			return builder;
		}
	};
}

styles.visible = {
	get() {
		const builder = createBuilder(this, this._styler, true);
		Object.defineProperty(this, 'visible', {value: builder});
		return builder;
	}
};

const usedModels = ['rgb', 'hex', 'keyword', 'hsl', 'hsv', 'hwb', 'ansi', 'ansi256'];

for (const model of usedModels) {
	styles[model] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
				return createBuilder(this, styler, this._isEmpty);
			};
		}
	};
}

for (const model of usedModels) {
	const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = {
		get() {
			const {level} = this;
			return function (...arguments_) {
				const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
				return createBuilder(this, styler, this._isEmpty);
			};
		}
	};
}

const proto = Object.defineProperties(() => {}, {
	...styles,
	level: {
		enumerable: true,
		get() {
			return this._generator.level;
		},
		set(level) {
			this._generator.level = level;
		}
	}
});

const createStyler = (open, close, parent) => {
	let openAll;
	let closeAll;
	if (parent === undefined) {
		openAll = open;
		closeAll = close;
	} else {
		openAll = parent.openAll + open;
		closeAll = close + parent.closeAll;
	}

	return {
		open,
		close,
		openAll,
		closeAll,
		parent
	};
};

const createBuilder = (self, _styler, _isEmpty) => {
	const builder = (...arguments_) => {
		if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
			// Called as a template literal, for example: chalk.red`2 + 3 = {bold ${2+3}}`
			return applyStyle(builder, chalkTag(builder, ...arguments_));
		}

		// Single argument is hot path, implicit coercion is faster than anything
		// eslint-disable-next-line no-implicit-coercion
		return applyStyle(builder, (arguments_.length === 1) ? ('' + arguments_[0]) : arguments_.join(' '));
	};

	// We alter the prototype because we must return a function, but there is
	// no way to create a function with a different prototype
	Object.setPrototypeOf(builder, proto);

	builder._generator = self;
	builder._styler = _styler;
	builder._isEmpty = _isEmpty;

	return builder;
};

const applyStyle = (self, string) => {
	if (self.level <= 0 || !string) {
		return self._isEmpty ? '' : string;
	}

	let styler = self._styler;

	if (styler === undefined) {
		return string;
	}

	const {openAll, closeAll} = styler;
	if (string.indexOf('\u001B') !== -1) {
		while (styler !== undefined) {
			// Replace any instances already present with a re-opening code
			// otherwise only the part of the string until said closing code
			// will be colored, and the rest will simply be 'plain'.
			string = stringReplaceAll(string, styler.close, styler.open);

			styler = styler.parent;
		}
	}

	// We can move both next actions out of loop, because remaining actions in loop won't have
	// any/visible effect on parts we add here. Close the styling before a linebreak and reopen
	// after next line to fix a bleed issue on macOS: https://github.com/chalk/chalk/pull/92
	const lfIndex = string.indexOf('\n');
	if (lfIndex !== -1) {
		string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
	}

	return openAll + string + closeAll;
};

let template;
const chalkTag = (chalk, ...strings) => {
	const [firstString] = strings;

	if (!isArray(firstString) || !isArray(firstString.raw)) {
		// If chalk() was called by itself or with a string,
		// return the string itself as a string.
		return strings.join(' ');
	}

	const arguments_ = strings.slice(1);
	const parts = [firstString.raw[0]];

	for (let i = 1; i < firstString.length; i++) {
		parts.push(
			String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'),
			String(firstString.raw[i])
		);
	}

	if (template === undefined) {
		template = __webpack_require__(/*! ./templates */ "./node_modules/chalk/source/templates.js");
	}

	return template(chalk, parts.join(''));
};

Object.defineProperties(Chalk.prototype, styles);

const chalk = Chalk(); // eslint-disable-line new-cap
chalk.supportsColor = stdoutColor;
chalk.stderr = Chalk({level: stderrColor ? stderrColor.level : 0}); // eslint-disable-line new-cap
chalk.stderr.supportsColor = stderrColor;

module.exports = chalk;


/***/ }),

/***/ "./node_modules/chalk/source/templates.js":
/*!************************************************!*\
  !*** ./node_modules/chalk/source/templates.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;

const ESCAPES = new Map([
	['n', '\n'],
	['r', '\r'],
	['t', '\t'],
	['b', '\b'],
	['f', '\f'],
	['v', '\v'],
	['0', '\0'],
	['\\', '\\'],
	['e', '\u001B'],
	['a', '\u0007']
]);

function unescape(c) {
	const u = c[0] === 'u';
	const bracket = c[1] === '{';

	if ((u && !bracket && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
		return String.fromCharCode(parseInt(c.slice(1), 16));
	}

	if (u && bracket) {
		return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
	}

	return ESCAPES.get(c) || c;
}

function parseArguments(name, arguments_) {
	const results = [];
	const chunks = arguments_.trim().split(/\s*,\s*/g);
	let matches;

	for (const chunk of chunks) {
		const number = Number(chunk);
		if (!Number.isNaN(number)) {
			results.push(number);
		} else if ((matches = chunk.match(STRING_REGEX))) {
			results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
		} else {
			throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
		}
	}

	return results;
}

function parseStyle(style) {
	STYLE_REGEX.lastIndex = 0;

	const results = [];
	let matches;

	while ((matches = STYLE_REGEX.exec(style)) !== null) {
		const name = matches[1];

		if (matches[2]) {
			const args = parseArguments(name, matches[2]);
			results.push([name].concat(args));
		} else {
			results.push([name]);
		}
	}

	return results;
}

function buildStyle(chalk, styles) {
	const enabled = {};

	for (const layer of styles) {
		for (const style of layer.styles) {
			enabled[style[0]] = layer.inverse ? null : style.slice(1);
		}
	}

	let current = chalk;
	for (const [styleName, styles] of Object.entries(enabled)) {
		if (!Array.isArray(styles)) {
			continue;
		}

		if (!(styleName in current)) {
			throw new Error(`Unknown Chalk style: ${styleName}`);
		}

		current = styles.length > 0 ? current[styleName](...styles) : current[styleName];
	}

	return current;
}

module.exports = (chalk, temporary) => {
	const styles = [];
	const chunks = [];
	let chunk = [];

	// eslint-disable-next-line max-params
	temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
		if (escapeCharacter) {
			chunk.push(unescape(escapeCharacter));
		} else if (style) {
			const string = chunk.join('');
			chunk = [];
			chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
			styles.push({inverse, styles: parseStyle(style)});
		} else if (close) {
			if (styles.length === 0) {
				throw new Error('Found extraneous } in Chalk template literal');
			}

			chunks.push(buildStyle(chalk, styles)(chunk.join('')));
			chunk = [];
			styles.pop();
		} else {
			chunk.push(character);
		}
	});

	chunks.push(chunk.join(''));

	if (styles.length > 0) {
		const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
		throw new Error(errMessage);
	}

	return chunks.join('');
};


/***/ }),

/***/ "./node_modules/chalk/source/util.js":
/*!*******************************************!*\
  !*** ./node_modules/chalk/source/util.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const stringReplaceAll = (string, substring, replacer) => {
	let index = string.indexOf(substring);
	if (index === -1) {
		return string;
	}

	const substringLength = substring.length;
	let endIndex = 0;
	let returnValue = '';
	do {
		returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
		endIndex = index + substringLength;
		index = string.indexOf(substring, endIndex);
	} while (index !== -1);

	returnValue += string.substr(endIndex);
	return returnValue;
};

const stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
	let endIndex = 0;
	let returnValue = '';
	do {
		const gotCR = string[index - 1] === '\r';
		returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? '\r\n' : '\n') + postfix;
		endIndex = index + 1;
		index = string.indexOf('\n', endIndex);
	} while (index !== -1);

	returnValue += string.substr(endIndex);
	return returnValue;
};

module.exports = {
	stringReplaceAll,
	stringEncaseCRLFWithFirstIndex
};


/***/ }),

/***/ "./node_modules/color-convert/conversions.js":
/*!***************************************************!*\
  !*** ./node_modules/color-convert/conversions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
/* eslint-disable no-mixed-operators */
const cssKeywords = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

const reverseKeywords = {};
for (const key of Object.keys(cssKeywords)) {
	reverseKeywords[cssKeywords[key]] = key;
}

const convert = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

module.exports = convert;

// Hide .channels and .labels properties
for (const model of Object.keys(convert)) {
	if (!('channels' in convert[model])) {
		throw new Error('missing channels property: ' + model);
	}

	if (!('labels' in convert[model])) {
		throw new Error('missing channel labels property: ' + model);
	}

	if (convert[model].labels.length !== convert[model].channels) {
		throw new Error('channel and label counts mismatch: ' + model);
	}

	const {channels, labels} = convert[model];
	delete convert[model].channels;
	delete convert[model].labels;
	Object.defineProperty(convert[model], 'channels', {value: channels});
	Object.defineProperty(convert[model], 'labels', {value: labels});
}

convert.rgb.hsl = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);
	const delta = max - min;
	let h;
	let s;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	const l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	let rdif;
	let gdif;
	let bdif;
	let h;
	let s;

	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const v = Math.max(r, g, b);
	const diff = v - Math.min(r, g, b);
	const diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = 0;
		s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}

		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = convert.rgb.hsl(rgb)[0];
	const w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;

	const k = Math.min(1 - r, 1 - g, 1 - b);
	const c = (1 - r - k) / (1 - k) || 0;
	const m = (1 - g - k) / (1 - k) || 0;
	const y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

function comparativeDistance(x, y) {
	/*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/
	return (
		((x[0] - y[0]) ** 2) +
		((x[1] - y[1]) ** 2) +
		((x[2] - y[2]) ** 2)
	);
}

convert.rgb.keyword = function (rgb) {
	const reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	let currentClosestDistance = Infinity;
	let currentClosestKeyword;

	for (const keyword of Object.keys(cssKeywords)) {
		const value = cssKeywords[keyword];

		// Compute comparative distance
		const distance = comparativeDistance(rgb, value);

		// Check if its less, if so set as closest
		if (distance < currentClosestDistance) {
			currentClosestDistance = distance;
			currentClosestKeyword = keyword;
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	let r = rgb[0] / 255;
	let g = rgb[1] / 255;
	let b = rgb[2] / 255;

	// Assume sRGB
	r = r > 0.04045 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
	g = g > 0.04045 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
	b = b > 0.04045 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

	const x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	const y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	const z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	const xyz = convert.rgb.xyz(rgb);
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	const h = hsl[0] / 360;
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;
	let t2;
	let t3;
	let val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	const t1 = 2 * l - t2;

	const rgb = [0, 0, 0];
	for (let i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}

		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	const h = hsl[0];
	let s = hsl[1] / 100;
	let l = hsl[2] / 100;
	let smin = s;
	const lmin = Math.max(l, 0.01);

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	const v = (l + s) / 2;
	const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	const h = hsv[0] / 60;
	const s = hsv[1] / 100;
	let v = hsv[2] / 100;
	const hi = Math.floor(h) % 6;

	const f = h - Math.floor(h);
	const p = 255 * v * (1 - s);
	const q = 255 * v * (1 - (s * f));
	const t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	const h = hsv[0];
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;
	const vmin = Math.max(v, 0.01);
	let sl;
	let l;

	l = (2 - s) * v;
	const lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	const h = hwb[0] / 360;
	let wh = hwb[1] / 100;
	let bl = hwb[2] / 100;
	const ratio = wh + bl;
	let f;

	// Wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	const i = Math.floor(6 * h);
	const v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	const n = wh + f * (v - wh); // Linear interpolation

	let r;
	let g;
	let b;
	/* eslint-disable max-statements-per-line,no-multi-spaces */
	switch (i) {
		default:
		case 6:
		case 0: r = v;  g = n;  b = wh; break;
		case 1: r = n;  g = v;  b = wh; break;
		case 2: r = wh; g = v;  b = n; break;
		case 3: r = wh; g = n;  b = v; break;
		case 4: r = n;  g = wh; b = v; break;
		case 5: r = v;  g = wh; b = n; break;
	}
	/* eslint-enable max-statements-per-line,no-multi-spaces */

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	const c = cmyk[0] / 100;
	const m = cmyk[1] / 100;
	const y = cmyk[2] / 100;
	const k = cmyk[3] / 100;

	const r = 1 - Math.min(1, c * (1 - k) + k);
	const g = 1 - Math.min(1, m * (1 - k) + k);
	const b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;
	let r;
	let g;
	let b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// Assume sRGB
	r = r > 0.0031308
		? ((1.055 * (r ** (1.0 / 2.4))) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * (g ** (1.0 / 2.4))) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * (b ** (1.0 / 2.4))) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let x;
	let y;
	let z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	const y2 = y ** 3;
	const x2 = x ** 3;
	const z2 = z ** 3;
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let h;

	const hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	const c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	const l = lch[0];
	const c = lch[1];
	const h = lch[2];

	const hr = h / 360 * 2 * Math.PI;
	const a = c * Math.cos(hr);
	const b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args, saturation = null) {
	const [r, g, b] = args;
	let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	let ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// Optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	const r = args[0];
	const g = args[1];
	const b = args[2];

	// We use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	const ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	let color = args % 10;

	// Handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	const mult = (~~(args > 50) + 1) * 0.5;
	const r = ((color & 1) * mult) * 255;
	const g = (((color >> 1) & 1) * mult) * 255;
	const b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// Handle greyscale
	if (args >= 232) {
		const c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	let rem;
	const r = Math.floor(args / 36) / 5 * 255;
	const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	const b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	const integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	let colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(char => {
			return char + char;
		}).join('');
	}

	const integer = parseInt(colorString, 16);
	const r = (integer >> 16) & 0xFF;
	const g = (integer >> 8) & 0xFF;
	const b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const max = Math.max(Math.max(r, g), b);
	const min = Math.min(Math.min(r, g), b);
	const chroma = (max - min);
	let grayscale;
	let hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;

	const c = l < 0.5 ? (2.0 * s * l) : (2.0 * s * (1.0 - l));

	let f = 0;
	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;

	const c = s * v;
	let f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	const h = hcg[0] / 360;
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	const pure = [0, 0, 0];
	const hi = (h % 1) * 6;
	const v = hi % 1;
	const w = 1 - v;
	let mg = 0;

	/* eslint-disable max-statements-per-line */
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}
	/* eslint-enable max-statements-per-line */

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const v = c + g * (1.0 - c);
	let f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const l = g * (1.0 - c) + 0.5 * c;
	let s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;
	const v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	const w = hwb[1] / 100;
	const b = hwb[2] / 100;
	const v = 1 - b;
	const c = v - w;
	let g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hsv = convert.gray.hsl;

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	const val = Math.round(gray[0] / 100 * 255) & 0xFF;
	const integer = (val << 16) + (val << 8) + val;

	const string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ "./node_modules/color-convert/index.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");
const route = __webpack_require__(/*! ./route */ "./node_modules/color-convert/route.js");

const convert = {};

const models = Object.keys(conversions);

function wrapRaw(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];
		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		return fn(args);
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];

		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		const result = fn(args);

		// We're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (let len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(fromModel => {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	const routes = route(fromModel);
	const routeModels = Object.keys(routes);

	routeModels.forEach(toModel => {
		const fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ "./node_modules/color-convert/route.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");

/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	const graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	const models = Object.keys(conversions);

	for (let len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	const graph = buildGraph();
	const queue = [fromModel]; // Unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		const current = queue.pop();
		const adjacents = Object.keys(conversions[current]);

		for (let len = adjacents.length, i = 0; i < len; i++) {
			const adjacent = adjacents[i];
			const node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	const path = [graph[toModel].parent, toModel];
	let fn = conversions[graph[toModel].parent][toModel];

	let cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	const graph = deriveBFS(fromModel);
	const conversion = {};

	const models = Object.keys(graph);
	for (let len = models.length, i = 0; i < len; i++) {
		const toModel = models[i];
		const node = graph[toModel];

		if (node.parent === null) {
			// No possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/lodash.defaultsdeep/index.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash.defaultsdeep/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = baseRest(function(args) {
  args.push(undefined, customDefaultsMerge);
  return apply(mergeWith, undefined, args);
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = defaultsDeep;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/supports-color/browser.js":
/*!************************************************!*\
  !*** ./node_modules/supports-color/browser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {
	stdout: false,
	stderr: false
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/_contracts/Adze.ts":
/*!********************************!*\
  !*** ./src/_contracts/Adze.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/_contracts/Bundle.ts":
/*!**********************************!*\
  !*** ./src/_contracts/Bundle.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/_contracts/Configuration.ts":
/*!*****************************************!*\
  !*** ./src/_contracts/Configuration.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;
;

/***/ }),

/***/ "./src/_contracts/HrTime.ts":
/*!**********************************!*\
  !*** ./src/_contracts/HrTime.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/_contracts/Label.ts":
/*!*********************************!*\
  !*** ./src/_contracts/Label.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/_contracts/Log.ts":
/*!*******************************!*\
  !*** ./src/_contracts/Log.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Fingerprint of the function that is called when you execute
 * a log method such as info().
 */

/**
 * Fingerprint of the function that is called when you execute
 * a custom log method defined in the configuration.
 */

/**
 * The keys of the default terminating log methods included with Adze.
 */

/**
 * The configuration interface for the default Adze terminating log methods.
 */

/**
 * Boolean flags that represent various states of how the log
 * should be printed.
 */

/**
 * Values of the log instance that determine how it should
 * be printed.
 */

/**
 * All of the user accessible methods that can be chained to
 * create a customized log.
 */

/**
 * The final Adze log object prototype interface.
 */
;
;

/***/ }),

/***/ "./src/_contracts/Shed.ts":
/*!********************************!*\
  !*** ./src/_contracts/Shed.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/_contracts/Styles.ts":
/*!**********************************!*\
  !*** ./src/_contracts/Styles.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/_contracts/Utility.ts":
/*!***********************************!*\
  !*** ./src/_contracts/Utility.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/_contracts/index.ts":
/*!*********************************!*\
  !*** ./src/_contracts/index.ts ***!
  \*********************************/
/*! exports provided: Adze, LogFactory, Log, FinalLog, LogFunction, CustomLogFunction, TerminatingMethods, TerminatingMethodKeys, LogRender, TerminatedLog, Bundle, BundledLog, Bundler, Shed, ShedConfig, ShedUserConfig, ListenerCallback, ListenerBuckets, ListenerBucket, ListenerLocations, LabelMap, Defaults, LogLevels, LogLevelDefinition, Filters, Configuration, ConsoleMethod, Label, ChalkStyles, HrTime, RecursivePartial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Adze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Adze */ "./src/_contracts/Adze.ts");
/* harmony import */ var _Adze__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Adze__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Adze", function() { return _Adze__WEBPACK_IMPORTED_MODULE_0__["Adze"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogFactory", function() { return _Adze__WEBPACK_IMPORTED_MODULE_0__["LogFactory"]; });

/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Log */ "./src/_contracts/Log.ts");
/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Log__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _Log__WEBPACK_IMPORTED_MODULE_1__["Log"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FinalLog", function() { return _Log__WEBPACK_IMPORTED_MODULE_1__["FinalLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogFunction", function() { return _Log__WEBPACK_IMPORTED_MODULE_1__["LogFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomLogFunction", function() { return _Log__WEBPACK_IMPORTED_MODULE_1__["CustomLogFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TerminatingMethods", function() { return _Log__WEBPACK_IMPORTED_MODULE_1__["TerminatingMethods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TerminatingMethodKeys", function() { return _Log__WEBPACK_IMPORTED_MODULE_1__["TerminatingMethodKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogRender", function() { return _Log__WEBPACK_IMPORTED_MODULE_1__["LogRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TerminatedLog", function() { return _Log__WEBPACK_IMPORTED_MODULE_1__["TerminatedLog"]; });

/* harmony import */ var _Bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bundle */ "./src/_contracts/Bundle.ts");
/* harmony import */ var _Bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bundle", function() { return _Bundle__WEBPACK_IMPORTED_MODULE_2__["Bundle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BundledLog", function() { return _Bundle__WEBPACK_IMPORTED_MODULE_2__["BundledLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bundler", function() { return _Bundle__WEBPACK_IMPORTED_MODULE_2__["Bundler"]; });

/* harmony import */ var _Shed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shed */ "./src/_contracts/Shed.ts");
/* harmony import */ var _Shed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Shed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shed", function() { return _Shed__WEBPACK_IMPORTED_MODULE_3__["Shed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShedConfig", function() { return _Shed__WEBPACK_IMPORTED_MODULE_3__["ShedConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShedUserConfig", function() { return _Shed__WEBPACK_IMPORTED_MODULE_3__["ShedUserConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListenerCallback", function() { return _Shed__WEBPACK_IMPORTED_MODULE_3__["ListenerCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListenerBuckets", function() { return _Shed__WEBPACK_IMPORTED_MODULE_3__["ListenerBuckets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListenerBucket", function() { return _Shed__WEBPACK_IMPORTED_MODULE_3__["ListenerBucket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListenerLocations", function() { return _Shed__WEBPACK_IMPORTED_MODULE_3__["ListenerLocations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelMap", function() { return _Shed__WEBPACK_IMPORTED_MODULE_3__["LabelMap"]; });

/* harmony import */ var _Configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Configuration */ "./src/_contracts/Configuration.ts");
/* harmony import */ var _Configuration__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Configuration__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Defaults", function() { return _Configuration__WEBPACK_IMPORTED_MODULE_4__["Defaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevels", function() { return _Configuration__WEBPACK_IMPORTED_MODULE_4__["LogLevels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevelDefinition", function() { return _Configuration__WEBPACK_IMPORTED_MODULE_4__["LogLevelDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filters", function() { return _Configuration__WEBPACK_IMPORTED_MODULE_4__["Filters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _Configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleMethod", function() { return _Configuration__WEBPACK_IMPORTED_MODULE_4__["ConsoleMethod"]; });

/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Label */ "./src/_contracts/Label.ts");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Label__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_5__["Label"]; });

/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Styles */ "./src/_contracts/Styles.ts");
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChalkStyles", function() { return _Styles__WEBPACK_IMPORTED_MODULE_6__["ChalkStyles"]; });

/* harmony import */ var _HrTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HrTime */ "./src/_contracts/HrTime.ts");
/* harmony import */ var _HrTime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_HrTime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HrTime", function() { return _HrTime__WEBPACK_IMPORTED_MODULE_7__["HrTime"]; });

/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Utility */ "./src/_contracts/Utility.ts");
/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Utility__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecursivePartial", function() { return _Utility__WEBPACK_IMPORTED_MODULE_8__["RecursivePartial"]; });











/***/ }),

/***/ "./src/_defaults/defaults.ts":
/*!***********************************!*\
  !*** ./src/_defaults/defaults.ts ***!
  \***********************************/
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.ts");

var defaults = {
  log_level: 8,
  log_cache_size: 300,
  use_emoji: false,
  base_style: 'font-size: 10px; font-weight: bold; border-radius: 0 10px 10px 0; border-width: 1px; border-style: solid;',
  custom_levels: {},
  log_levels: {
    verbose: {
      level: 8,
      style: 'padding-right: 26px; border-color: 1px solid #d9dce0; color: #999999; border-color: #cbc9c9;',
      terminal: ['italic', 'white'],
      method: 'debug',
      emoji: '💤'
    },
    debug: {
      level: 7,
      style: 'padding-right: 38px; border-right: 1px solid #d9dce0; color: #465464; border-color: #999999;',
      terminal: ['bgBlack', 'white'],
      method: 'debug',
      emoji: '🐞'
    },
    log: {
      level: 6,
      style: "padding-right: 50px; background: linear-gradient(to right, #fff, #d9dce0); color: #333435; border-color: #bfc1c5;",
      terminal: ['bgGray', 'white'],
      method: 'log',
      emoji: '📓'
    },
    success: {
      level: 5,
      style: 'padding-right: 26px; background: linear-gradient(to right, #fff, #ceedc9); color: #4e594d; border-color: #b7d1b3;',
      terminal: ['bgGreen', 'gray'],
      method: 'info',
      emoji: '🎉'
    },
    fail: {
      level: 4,
      style: "padding-right: ".concat(_global__WEBPACK_IMPORTED_MODULE_0__["isChrome"] ? '42' : '44', "px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;"),
      terminal: ['bgRed', 'white'],
      method: 'info',
      emoji: '❌'
    },
    info: {
      level: 3,
      style: "padding-right: ".concat(_global__WEBPACK_IMPORTED_MODULE_0__["isSafari"] ? '49' : '44', "px; background: linear-gradient(to right, #fff, #b2d7ff); color: #465464; border-color: #96b5d7;"),
      terminal: ['bgBlue', 'white'],
      method: 'info',
      emoji: '📬'
    },
    warn: {
      level: 2,
      style: "background: linear-gradient(to right, #fff, #fff0a8); color: #715100; border-color: #e3d696; padding-right: ".concat(_global__WEBPACK_IMPORTED_MODULE_0__["isChrome"] ? '34' : '44', "px; "),
      terminal: ['bgYellow', 'gray'],
      method: 'warn',
      emoji: '🔔'
    },
    error: {
      level: 1,
      style: "padding-right: ".concat(_global__WEBPACK_IMPORTED_MODULE_0__["isChrome"] ? '29' : '27', "px; background: linear-gradient(to right, #fff, #ffd1d1); color: #a4000f; border-color: #e3bbbb;"),
      terminal: ['bgRed', 'white'],
      method: 'error',
      emoji: '🔥'
    },
    attention: {
      level: 0,
      style: 'padding-right: 15px; background: linear-gradient(to right, #fff, #e2baff); color: #483c51; border-color: #c19fd9;',
      terminal: ['white', 'bold', 'bgMagenta'],
      method: 'info',
      emoji: '🌈'
    }
  },
  filters: {
    hideAll: false,
    namespace: {
      hideAll: false,
      exclude: [],
      include: []
    },
    label: {
      hideAll: false,
      exclude: [],
      include: []
    }
  }
};

/***/ }),

/***/ "./src/_defaults/index.ts":
/*!********************************!*\
  !*** ./src/_defaults/index.ts ***!
  \********************************/
/*! exports provided: defaults, shed_defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults */ "./src/_defaults/defaults.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _defaults__WEBPACK_IMPORTED_MODULE_0__["defaults"]; });

/* harmony import */ var _shed_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shed_defaults */ "./src/_defaults/shed_defaults.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shed_defaults", function() { return _shed_defaults__WEBPACK_IMPORTED_MODULE_1__["shed_defaults"]; });




/***/ }),

/***/ "./src/_defaults/shed_defaults.ts":
/*!****************************************!*\
  !*** ./src/_defaults/shed_defaults.ts ***!
  \****************************************/
/*! exports provided: shed_defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shed_defaults", function() { return shed_defaults; });
var shed_defaults = {
  cache_limit: 300,
  global_cfg: null,
  filters: {}
};

/***/ }),

/***/ "./src/adze.ts":
/*!*********************!*\
  !*** ./src/adze.ts ***!
  \*********************/
/*! exports provided: adze */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adze", function() { return adze; });
/* harmony import */ var _terminators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terminators */ "./src/terminators/index.ts");
/* harmony import */ var _modifiers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers */ "./src/modifiers/index.ts");
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printers */ "./src/printers/index.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_defaults */ "./src/_defaults/index.ts");
var defaultsDeep = __webpack_require__(/*! lodash.defaultsdeep */ "./node_modules/lodash.defaultsdeep/index.js");





/*
 * Future planned features:
 * 
 * 1. URL Param to control the Adze environment (param name is configurable).
 * 2. Analytics and Reporting support.
 * 3. Remote server for receiving and analyzing logs.
 * 4. Attach meta data to logs (for listeners to take advantage of).
 * 5. Add default meta data to the configuration of the log.
 * 6. Persist logs in localStorage (configurable, off by default).
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

function adze() {
  var user_cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cfg = defaultsDeep(user_cfg, _defaults__WEBPACK_IMPORTED_MODULE_3__["defaults"]);
  return {
    cfg: cfg,
    traceable: false,
    modifierQueue: [],
    printer: _printers__WEBPACK_IMPORTED_MODULE_2__["printLog"],
    attention: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'attention'),
    error: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'error'),
    warn: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'warn'),
    info: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'info'),
    fail: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'fail'),
    success: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'success'),
    log: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'log'),
    debug: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'debug'),
    verbose: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"])(cfg, 'verbose'),
    custom: Object(_terminators__WEBPACK_IMPORTED_MODULE_0__["customMethod"])(cfg),
    seal: _terminators__WEBPACK_IMPORTED_MODULE_0__["seal"],
    count: _modifiers__WEBPACK_IMPORTED_MODULE_1__["count"],
    countReset: _modifiers__WEBPACK_IMPORTED_MODULE_1__["countReset"],
    dir: _modifiers__WEBPACK_IMPORTED_MODULE_1__["dir"],
    dirxml: _modifiers__WEBPACK_IMPORTED_MODULE_1__["dirxml"],
    table: _modifiers__WEBPACK_IMPORTED_MODULE_1__["table"],
    assert: _modifiers__WEBPACK_IMPORTED_MODULE_1__["assert"],
    test: _modifiers__WEBPACK_IMPORTED_MODULE_1__["test"],
    group: _modifiers__WEBPACK_IMPORTED_MODULE_1__["group"],
    groupCollapsed: _modifiers__WEBPACK_IMPORTED_MODULE_1__["groupCollapsed"],
    groupEnd: _modifiers__WEBPACK_IMPORTED_MODULE_1__["groupEnd"],
    label: _modifiers__WEBPACK_IMPORTED_MODULE_1__["label"],
    namespace: _modifiers__WEBPACK_IMPORTED_MODULE_1__["namespace"],
    ns: _modifiers__WEBPACK_IMPORTED_MODULE_1__["ns"],
    trace: _modifiers__WEBPACK_IMPORTED_MODULE_1__["trace"],
    time: _modifiers__WEBPACK_IMPORTED_MODULE_1__["time"],
    timeNow: _modifiers__WEBPACK_IMPORTED_MODULE_1__["timeNow"],
    timeEnd: _modifiers__WEBPACK_IMPORTED_MODULE_1__["timeEnd"]
  };
}

/***/ }),

/***/ "./src/bundle.ts":
/*!***********************!*\
  !*** ./src/bundle.ts ***!
  \***********************/
/*! exports provided: bundle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bundle", function() { return bundle; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Bundles all logs together by wrapping all subsequent logs in a Bundle callback
 * that curries them into an array. This bundle array can be used to recall and
 * filter logs.
 * 
 * **Example:**
 * ```javascript
 * const bundled = bundle(adze());
 * bundled.log("This is a log.");
 * bundled.log("This is another log.");
 * bundle.all(); // -> reprints all "bundled" logs.
 * ```
 */
function bundle(log) {
  var bundle_arr = [];
  return function () {
    var bundled_log = _objectSpread(_objectSpread({}, log), {}, {
      get bundle() {
        return bundle_arr;
      }

    });

    bundle_arr.push(bundled_log);
    return bundled_log;
  };
}
;

/***/ }),

/***/ "./src/conditions/conditions.ts":
/*!**************************************!*\
  !*** ./src/conditions/conditions.ts ***!
  \**************************************/
/*! exports provided: allowed, levelActive, evalPasses, notTestEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowed", function() { return allowed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelActive", function() { return levelActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evalPasses", function() { return evalPasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notTestEnv", function() { return notTestEnv; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.ts");

/**
 * Determine the fate of whether this log will terminate.
 */

function allowed(cfg, def) {
  return levelActive(def, cfg.log_level) && notTestEnv();
}
/**
 * Check if the log level is high enough for the log to terminate.
 */

function levelActive(def, level) {
  return def.level <= level;
}
/**
 * Check if any assertions or expressions pass for this log to terminate.
 */

function evalPasses(log) {
  if (log.assertion !== undefined && log.expression !== undefined) {
    console.warn("You have declared both an assertion and test on the same log. Please only declare one or nefarious results may occur.");
    return true;
  }

  if (log.assertion !== undefined) {
    return log.assertion === false;
  }

  if (log.expression !== undefined) {
    return log.expression === true;
  }

  return true;
}
/**
 * Verify that this log is not in a test environment and prevent
 * termination if it is.
 */

function notTestEnv() {
  if (_global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
    return true;
  }

  return (_global__WEBPACK_IMPORTED_MODULE_0__["env"] === null || _global__WEBPACK_IMPORTED_MODULE_0__["env"] === void 0 ? void 0 : _global__WEBPACK_IMPORTED_MODULE_0__["env"].ADZE_ENV) !== 'test';
}

/***/ }),

/***/ "./src/conditions/index.ts":
/*!*********************************!*\
  !*** ./src/conditions/index.ts ***!
  \*********************************/
/*! exports provided: allowed, levelActive, evalPasses, notTestEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditions */ "./src/conditions/conditions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allowed", function() { return _conditions__WEBPACK_IMPORTED_MODULE_0__["allowed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "levelActive", function() { return _conditions__WEBPACK_IMPORTED_MODULE_0__["levelActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "evalPasses", function() { return _conditions__WEBPACK_IMPORTED_MODULE_0__["evalPasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notTestEnv", function() { return _conditions__WEBPACK_IMPORTED_MODULE_0__["notTestEnv"]; });



/***/ }),

/***/ "./src/filters/filters.ts":
/*!********************************!*\
  !*** ./src/filters/filters.ts ***!
  \********************************/
/*! exports provided: filterAll, filterNamespace, filterLabel, filterLevelRange, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterAll", function() { return filterAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNamespace", function() { return filterNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterLabel", function() { return filterLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterLevelRange", function() { return filterLevelRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);


// CONVERT API TO EXPORT FILTER FUNCS

/**
 * Re-render the bundle of logs.
 */
function filterAll() {
  var bundle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  loopBundle(bundle, function (log) {
    return true;
  });
}
/**
 * Filter the bundle of logs by the namespace.
 */

function filterNamespace() {
  var bundle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var ns = arguments.length > 1 ? arguments[1] : undefined;
  loopBundle(bundle, function (log) {
    return log.namespaceVal === ns;
  });
}
/**
 * Filter and render the bundle of logs by the label.
 */

function filterLabel() {
  var bundle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var lbl = arguments.length > 1 ? arguments[1] : undefined;
  loopBundle(bundle, function (log) {
    var _log$labelVal;

    return ((_log$labelVal = log.labelVal) === null || _log$labelVal === void 0 ? void 0 : _log$labelVal.name) === lbl;
  });
}
/**
 * Filter the bundle of logs by their log level.
 */

function filterLevelRange() {
  var bundle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var low = arguments.length > 1 ? arguments[1] : undefined;
  var high = arguments.length > 2 ? arguments[2] : undefined;
  loopBundle(bundle, function (log, rndr) {
    var _log$level;

    var level = (_log$level = log.level) !== null && _log$level !== void 0 ? _log$level : Infinity;
    return level >= low && level <= high;
  });
}
/**
 * Loops over a bundle of logs and executes the callback for each log that 
 * has a render value.
 */

function loopBundle(bundle, cb) {
  bundle.forEach(function (log) {
    if (log.render) {
      var result = cb(log, log.render);
      if (result) render(log.render);
    }
  });
}
/**
 * Render a log based on a render object.
 */


function render(_ref) {
  var _console;

  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
      method = _ref2[0],
      args = _ref2[1];

  (_console = console)[method].apply(_console, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args));
}

/***/ }),

/***/ "./src/filters/index.ts":
/*!******************************!*\
  !*** ./src/filters/index.ts ***!
  \******************************/
/*! exports provided: filterAll, filterLabel, filterNamespace, filterLevelRange, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters */ "./src/filters/filters.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterAll", function() { return _filters__WEBPACK_IMPORTED_MODULE_0__["filterAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterLabel", function() { return _filters__WEBPACK_IMPORTED_MODULE_0__["filterLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterNamespace", function() { return _filters__WEBPACK_IMPORTED_MODULE_0__["filterNamespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterLevelRange", function() { return _filters__WEBPACK_IMPORTED_MODULE_0__["filterLevelRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _filters__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/global.ts":
/*!***********************!*\
  !*** ./src/global.ts ***!
  \***********************/
/*! exports provided: env, isBrowser, envIsWindow, isChrome, isFirefox, isSafari */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "envIsWindow", function() { return envIsWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChrome", function() { return isChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirefox", function() { return isFirefox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSafari", function() { return isSafari; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

var env = global ? global : window;
var isBrowser = typeof window !== 'undefined';
var envIsWindow = function envIsWindow(env) {
  return (typeof window === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(window)) !== undefined;
};
var isChromeVar = false;
var isFirefoxVar = false;
var isSafariVar = false;

if (envIsWindow(env)) {
  var _env$navigator, _env$navigator2, _env$navigator3;

  isChromeVar = (env === null || env === void 0 ? void 0 : (_env$navigator = env.navigator) === null || _env$navigator === void 0 ? void 0 : _env$navigator.userAgent.indexOf("Chrome")) > -1;
  isFirefoxVar = (env === null || env === void 0 ? void 0 : (_env$navigator2 = env.navigator) === null || _env$navigator2 === void 0 ? void 0 : _env$navigator2.userAgent.indexOf("Firefox")) > -1;
  isSafariVar = (env === null || env === void 0 ? void 0 : (_env$navigator3 = env.navigator) === null || _env$navigator3 === void 0 ? void 0 : _env$navigator3.userAgent.indexOf("Safari")) > -1 && !isChromeVar;
}

var isChrome = isChromeVar;
var isFirefox = isFirefoxVar;
var isSafari = isSafariVar;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: adze, shedExists, createShed, teardownShed, defaults, Log, LogFunction, bundle, filterAll, filterLabel, filterLevelRange, filterNamespace, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_contracts */ "./src/_contracts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _contracts__WEBPACK_IMPORTED_MODULE_0__["Log"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogFunction", function() { return _contracts__WEBPACK_IMPORTED_MODULE_0__["LogFunction"]; });

/* harmony import */ var _adze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adze */ "./src/adze.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adze", function() { return _adze__WEBPACK_IMPORTED_MODULE_1__["adze"]; });

/* harmony import */ var _bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bundle */ "./src/bundle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bundle", function() { return _bundle__WEBPACK_IMPORTED_MODULE_2__["bundle"]; });

/* harmony import */ var _shed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shed */ "./src/shed.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shedExists", function() { return _shed__WEBPACK_IMPORTED_MODULE_3__["shedExists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createShed", function() { return _shed__WEBPACK_IMPORTED_MODULE_3__["createShed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teardownShed", function() { return _shed__WEBPACK_IMPORTED_MODULE_3__["teardownShed"]; });

/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_defaults */ "./src/_defaults/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _defaults__WEBPACK_IMPORTED_MODULE_4__["defaults"]; });

/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters */ "./src/filters/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterAll", function() { return _filters__WEBPACK_IMPORTED_MODULE_5__["filterAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterLabel", function() { return _filters__WEBPACK_IMPORTED_MODULE_5__["filterLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterLevelRange", function() { return _filters__WEBPACK_IMPORTED_MODULE_5__["filterLevelRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterNamespace", function() { return _filters__WEBPACK_IMPORTED_MODULE_5__["filterNamespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _filters__WEBPACK_IMPORTED_MODULE_5__["render"]; });









/***/ }),

/***/ "./src/label/index.ts":
/*!****************************!*\
  !*** ./src/label/index.ts ***!
  \****************************/
/*! exports provided: getLabel, addLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label */ "./src/label/label.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLabel", function() { return _label__WEBPACK_IMPORTED_MODULE_0__["getLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addLabel", function() { return _label__WEBPACK_IMPORTED_MODULE_0__["addLabel"]; });



/***/ }),

/***/ "./src/label/label.ts":
/*!****************************!*\
  !*** ./src/label/label.ts ***!
  \****************************/
/*! exports provided: getLabel, addLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabel", function() { return getLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLabel", function() { return addLabel; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.ts");
/* harmony import */ var _shed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shed */ "./src/shed.ts");


/**
 * Attempts to get a label by the given name from the shed if it exists.
 */

function getLabel(name) {
  var shed = _global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed;

  if (Object(_shed__WEBPACK_IMPORTED_MODULE_1__["shedExists"])(shed)) {
    return shed.getLabel(name);
  }
}
/**
 * Attempts to add a label to the global store if it exists.
 */

function addLabel(label) {
  var shed = _global__WEBPACK_IMPORTED_MODULE_0__["env"].$shed;

  if (Object(_shed__WEBPACK_IMPORTED_MODULE_1__["shedExists"])(shed)) {
    shed.addLabel(label);
  }

  return label;
}

/***/ }),

/***/ "./src/modifiers/counting.ts":
/*!***********************************!*\
  !*** ./src/modifiers/counting.ts ***!
  \***********************************/
/*! exports provided: count, countReset, countClear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countReset", function() { return countReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countClear", function() { return countClear; });
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");

/**
 * Adds to the log count for log instances that share this log's label.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/count)
 */

function count() {
  var _this = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    if (_this.labelVal) {
      var _this$labelVal$count;

      _this.labelVal.count = (_this$labelVal$count = _this.labelVal.count) !== null && _this$labelVal$count !== void 0 ? _this$labelVal$count : 0;
      _this.labelVal.count += 1;
    }
  });
}
/**
 * Resets the count for the log instances that share this log's label.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset)
 */

function countReset() {
  var _this2 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    if (_this2.labelVal) {
      _this2.labelVal.count = 0;
    }
  });
}
/**
 * Unsets the count for the log instances that share this log's label.
 * 
 * This is a non-standard method.
 */

function countClear() {
  var _this3 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    if (_this3.labelVal) {
      _this3.labelVal.count = undefined;
    }
  });
}

/***/ }),

/***/ "./src/modifiers/formatting.ts":
/*!*************************************!*\
  !*** ./src/modifiers/formatting.ts ***!
  \*************************************/
/*! exports provided: dir, dirxml, table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dir", function() { return dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirxml", function() { return dirxml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "table", function() { return table; });
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../printers */ "./src/printers/index.ts");


/**
 * Instructs this log to print in the dir format. Typically this is useful
 * for rendering deeply nested objects in the console.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)
 */

function dir() {
  var _this = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    _this.printer = _printers__WEBPACK_IMPORTED_MODULE_1__["printDir"];
  });
}
/**
 * Instructs this log to print in the dirxml format. Typically this is useful
 * for rendering HTML/DOM or XML Elements in the console.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/dirxml)
 */

function dirxml() {
  var _this2 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    _this2.printer = _printers__WEBPACK_IMPORTED_MODULE_1__["printDirxml"];
  });
}
/**
 * Instructs this log to print its argument in a table format.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)
 */

function table() {
  var _this3 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    _this3.printer = _printers__WEBPACK_IMPORTED_MODULE_1__["printTable"];
  });
}

/***/ }),

/***/ "./src/modifiers/grouping.ts":
/*!***********************************!*\
  !*** ./src/modifiers/grouping.ts ***!
  \***********************************/
/*! exports provided: group, groupCollapsed, groupEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group", function() { return group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupCollapsed", function() { return groupCollapsed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupEnd", function() { return groupEnd; });
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../printers */ "./src/printers/index.ts");


/**
 * Starts a log group.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/group)
 */

function group() {
  var _this = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    _this.printer = _printers__WEBPACK_IMPORTED_MODULE_1__["printGroup"];
  });
}
/**
 * Starts a log group that is collapsed by default.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupCollapsed)
 */

function groupCollapsed() {
  var _this2 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    _this2.printer = _printers__WEBPACK_IMPORTED_MODULE_1__["printGroupCollapsed"];
  });
}
/**
 * Ends the most recently opened log group.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd)
 */

function groupEnd() {
  var _this3 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    _this3.printer = _printers__WEBPACK_IMPORTED_MODULE_1__["printGroupEnd"];
  });
}

/***/ }),

/***/ "./src/modifiers/identifying.ts":
/*!**************************************!*\
  !*** ./src/modifiers/identifying.ts ***!
  \**************************************/
/*! exports provided: label, namespace, ns, trace, meta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "label", function() { return label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return namespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ns", function() { return ns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../label */ "./src/label/index.ts");
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../printers */ "./src/printers/index.ts");



/**
 * Adds a label to the log. Label's can be used for log identification
 * and grouping. Label's also link log instances together.
 * 
 * This is a non-standard API, but it replaces the need to provide
 * a label to `count()` or `time()`.
 */

function label(name) {
  var _this = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["prependModifier"])(this, function () {
    var _getLabel;

    _this.labelVal = Object(_label__WEBPACK_IMPORTED_MODULE_0__["addLabel"])((_getLabel = Object(_label__WEBPACK_IMPORTED_MODULE_0__["getLabel"])(name)) !== null && _getLabel !== void 0 ? _getLabel : {
      name: name
    });
  });
}
/**
 * Adds a namespace to the log. Namespace's are primarily useful
 * for grouping logs together.
 * 
 * This is a non-standard API.
 */

function namespace(ns) {
  var _this2 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, function () {
    _this2.namespaceVal = ns;
  });
}
/**
 * An alias for `namespace()`.
 */

function ns(ns) {
  return this.namespace(ns);
}
/**
 * Prints a stacktrace along with the log.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)
 */

function trace() {
  var _this3 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, function () {
    _this3.printer = _printers__WEBPACK_IMPORTED_MODULE_2__["printTrace"];
  });
}
/**
 * Adds custom meta data to the log instance. This is useful
 * for scraping extra data from a log from a log listener.
 */

function meta(data) {
  var _this4 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, function () {
    _this4.meta = data;
  });
}

/***/ }),

/***/ "./src/modifiers/index.ts":
/*!********************************!*\
  !*** ./src/modifiers/index.ts ***!
  \********************************/
/*! exports provided: time, timeNow, timeEnd, count, countReset, dir, dirxml, table, group, groupCollapsed, groupEnd, label, namespace, ns, trace, modifier, prependModifier, assert, test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timing */ "./src/modifiers/timing.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "time", function() { return _timing__WEBPACK_IMPORTED_MODULE_0__["time"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeNow", function() { return _timing__WEBPACK_IMPORTED_MODULE_0__["timeNow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeEnd", function() { return _timing__WEBPACK_IMPORTED_MODULE_0__["timeEnd"]; });

/* harmony import */ var _counting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counting */ "./src/modifiers/counting.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "count", function() { return _counting__WEBPACK_IMPORTED_MODULE_1__["count"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countReset", function() { return _counting__WEBPACK_IMPORTED_MODULE_1__["countReset"]; });

/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatting */ "./src/modifiers/formatting.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dir", function() { return _formatting__WEBPACK_IMPORTED_MODULE_2__["dir"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dirxml", function() { return _formatting__WEBPACK_IMPORTED_MODULE_2__["dirxml"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "table", function() { return _formatting__WEBPACK_IMPORTED_MODULE_2__["table"]; });

/* harmony import */ var _grouping__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grouping */ "./src/modifiers/grouping.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "group", function() { return _grouping__WEBPACK_IMPORTED_MODULE_3__["group"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupCollapsed", function() { return _grouping__WEBPACK_IMPORTED_MODULE_3__["groupCollapsed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupEnd", function() { return _grouping__WEBPACK_IMPORTED_MODULE_3__["groupEnd"]; });

/* harmony import */ var _identifying__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identifying */ "./src/modifiers/identifying.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "label", function() { return _identifying__WEBPACK_IMPORTED_MODULE_4__["label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _identifying__WEBPACK_IMPORTED_MODULE_4__["namespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ns", function() { return _identifying__WEBPACK_IMPORTED_MODULE_4__["ns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return _identifying__WEBPACK_IMPORTED_MODULE_4__["trace"]; });

/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifier", function() { return _modifier__WEBPACK_IMPORTED_MODULE_5__["modifier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prependModifier", function() { return _modifier__WEBPACK_IMPORTED_MODULE_5__["prependModifier"]; });

/* harmony import */ var _testing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testing */ "./src/modifiers/testing.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _testing__WEBPACK_IMPORTED_MODULE_6__["assert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "test", function() { return _testing__WEBPACK_IMPORTED_MODULE_6__["test"]; });









/***/ }),

/***/ "./src/modifiers/modifier.ts":
/*!***********************************!*\
  !*** ./src/modifiers/modifier.ts ***!
  \***********************************/
/*! exports provided: modifier, prependModifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifier", function() { return modifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependModifier", function() { return prependModifier; });
/**
 * Queues a modifier method for execution when the log is terminated.
 */
function modifier(log, func) {
  log.modifierQueue = log.modifierQueue.concat([func]);
  return log;
}
/**
 * Queues a modifier method for execution at the beginning of the queue when the log is terminated.
 * This is used to ensure that labels are applied before modifiers that use labels are executed.
 */

function prependModifier(log, func) {
  log.modifierQueue = [func].concat(log.modifierQueue);
  return log;
}

/***/ }),

/***/ "./src/modifiers/testing.ts":
/*!**********************************!*\
  !*** ./src/modifiers/testing.ts ***!
  \**********************************/
/*! exports provided: assert, test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");

/**
 * Prints a log warning that the assertion failed if the assertion is false.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/console/assert)
 */

function assert(assertion) {
  var _this = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    _this.assertion = assertion;
  });
}
/**
 * Allows the log to print if the expression is true.
 * 
 * This is a non-standard method.
 */

function test(expression) {
  var _this2 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_0__["modifier"])(this, function () {
    _this2.expression = expression;
  });
}

/***/ }),

/***/ "./src/modifiers/timing.ts":
/*!*********************************!*\
  !*** ./src/modifiers/timing.ts ***!
  \*********************************/
/*! exports provided: time, timeNow, timeEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeNow", function() { return timeNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeEnd", function() { return timeEnd; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifier */ "./src/modifiers/modifier.ts");


var hrtime = __webpack_require__(/*! browser-process-hrtime */ "./node_modules/browser-process-hrtime/index.js");


/**
 * Starts a timer associated with this log's *label*. This will do nothing if
 * this log has no label.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/time).
 */

function time() {
  var _this = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, function () {
    if (_this.labelVal) {
      _this.labelVal.timeStart = hrtime();
    }
  });
}
/**
 * Modifies the log render to show the current high-resolution real time.
 * 
 * This is a non-standard method.
 */

function timeNow() {
  var _this2 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, function () {
    var time_now = formatTime(hrtime());
    _this2.labelVal ? _this2.labelVal.timeNow = time_now : _this2.timeNowVal = time_now;
  });
}
/**
 * Stops a timer that was previously started by calling time() on a *labeled* log. Calculates the 
 * difference between the start time and when this method was called. This then
 * modifies the log render to show the time difference. This will do nothing if the *label* does
 * not exist.
 * 
 * MDN API Docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd).
 */

function timeEnd() {
  var _this3 = this;

  return Object(_modifier__WEBPACK_IMPORTED_MODULE_1__["modifier"])(this, function () {
    if (_this3.labelVal) {
      _this3.labelVal.timeEllapsed = formatTime(hrtime(_this3.labelVal.timeStart));
    }
  });
}
/*
  ! console.timeLog() is purposefully omitted from this API.

  timeLog() is a useless method within the Adze API. The same effect can be 
  accomplished by created a new log with the same label.
*/

/**
 * Takes an HrTime tuple and converts it into a human-readable formatted
 * string in the format of `{sec}s {ms}ms`.
 */

function formatTime(_ref) {
  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
      sec = _ref2[0],
      nano = _ref2[1];

  return "".concat(sec, "s ").concat(nano / 1000000, "ms");
}

/***/ }),

/***/ "./src/printers/browser/index.ts":
/*!***************************************!*\
  !*** ./src/printers/browser/index.ts ***!
  \***************************************/
/*! exports provided: printLog, printGroup, printGroupCollapsed, fLeader, fMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printers */ "./src/printers/browser/printers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printLog", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printGroup", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printGroupCollapsed", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printGroupCollapsed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fLeader", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["fLeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fMeta", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["fMeta"]; });



/***/ }),

/***/ "./src/printers/browser/printers.ts":
/*!******************************************!*\
  !*** ./src/printers/browser/printers.ts ***!
  \******************************************/
/*! exports provided: printLog, printGroup, printGroupCollapsed, fLeader, fMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printLog", function() { return printLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGroup", function() { return printGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGroupCollapsed", function() { return printGroupCollapsed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fLeader", function() { return fLeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fMeta", function() { return fMeta; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ "./src/printers/shared.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./src/util/index.ts");



 // ------- PRINT METHODS -------- //

function printLog(log, def, use_emoji, args) {
  var _ref = [def.method, fLeader(def, use_emoji, args), log.cfg.base_style + def.style, fMeta(log, use_emoji)],
      method = _ref[0],
      leader = _ref[1],
      style = _ref[2],
      meta = _ref[3];
  var render_args = meta === '' ? [leader, style].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args)) : [leader, style, meta].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args));
  return Object(_shared__WEBPACK_IMPORTED_MODULE_1__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_1__["applyRender"])(log, method, render_args));
}
function printGroup(log, def, use_emoji, args) {
  var partial_args = [fLeader(def, use_emoji, args), log.cfg.base_style + def.style];
  var render_args = typeof args[0] === "string" ? [].concat(partial_args, [args[0]]) : partial_args;
  return Object(_shared__WEBPACK_IMPORTED_MODULE_1__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_1__["applyRender"])(log, 'group', render_args));
}
function printGroupCollapsed(log, def, use_emoji, args) {
  var partial_args = [fLeader(def, use_emoji, args), log.cfg.base_style + def.style];
  var render_args = typeof args[0] === "string" ? [].concat(partial_args, [args[0]]) : partial_args;
  return Object(_shared__WEBPACK_IMPORTED_MODULE_1__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_1__["applyRender"])(log, 'groupCollapsed', render_args));
} // ------- PRINT FORMATTERS -------- //

function fLeader(def, use_emoji, args) {
  return " %c".concat(fEmoji(def, use_emoji), " ").concat(fName(def.levelName), "(").concat(args.length, ")");
}

function fEmoji(def, use_emoji) {
  var _env$$shed, _env$$shed$overrides;

  return ((_env$$shed = _global__WEBPACK_IMPORTED_MODULE_2__["env"].$shed) === null || _env$$shed === void 0 ? void 0 : (_env$$shed$overrides = _env$$shed.overrides) === null || _env$$shed$overrides === void 0 ? void 0 : _env$$shed$overrides.use_emoji) || use_emoji ? " ".concat(def.emoji) : '';
}

function fName(name) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_3__["initialCaps"])(name !== null && name !== void 0 ? name : '');
}

function fMeta(log, use_emoji) {
  return "".concat(fNamespace(log)).concat(fLabel(log)).concat(fTime(log, use_emoji)).concat(fCount(log)).concat(fTest(log, use_emoji));
}

function fTime(log, use_emoji) {
  var _ref2, _log$labelVal$timeNow, _log$labelVal, _log$labelVal2, _env$$shed2, _env$$shed2$overrides;

  var label_txt = "".concat((_ref2 = (_log$labelVal$timeNow = (_log$labelVal = log.labelVal) === null || _log$labelVal === void 0 ? void 0 : _log$labelVal.timeNow) !== null && _log$labelVal$timeNow !== void 0 ? _log$labelVal$timeNow : (_log$labelVal2 = log.labelVal) === null || _log$labelVal2 === void 0 ? void 0 : _log$labelVal2.timeEllapsed) !== null && _ref2 !== void 0 ? _ref2 : '');
  return label_txt !== '' ? " (".concat(((_env$$shed2 = _global__WEBPACK_IMPORTED_MODULE_2__["env"].$shed) === null || _env$$shed2 === void 0 ? void 0 : (_env$$shed2$overrides = _env$$shed2.overrides) === null || _env$$shed2$overrides === void 0 ? void 0 : _env$$shed2$overrides.use_emoji) || use_emoji ? '⏱' : '').concat(label_txt, ") ") : '';
}

function fCount(log) {
  var _log$labelVal3;

  var count = (_log$labelVal3 = log.labelVal) === null || _log$labelVal3 === void 0 ? void 0 : _log$labelVal3.count;
  return count !== undefined ? "(Count: ".concat(count, ")") : '';
}

function fNamespace(log) {
  return log.namespaceVal ? "#".concat(log.namespaceVal, " ") : '';
}

function fLabel(log) {
  return log.labelVal ? "[".concat(log.labelVal.name, "] ") : '';
}

function fTest(log, use_emoji) {
  return log.assertion === false ? "".concat(use_emoji ? '❌ ' : '', "Assertion failed:") : '';
}

/***/ }),

/***/ "./src/printers/index.ts":
/*!*******************************!*\
  !*** ./src/printers/index.ts ***!
  \*******************************/
/*! exports provided: print, printLog, printGroup, printGroupCollapsed, printGroupEnd, printTable, printDir, printDirxml, printTrace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printLog", function() { return printLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGroup", function() { return printGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGroupCollapsed", function() { return printGroupCollapsed; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.ts");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./src/printers/browser/index.ts");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ "./src/printers/node/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "./src/printers/shared.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "print", function() { return _shared__WEBPACK_IMPORTED_MODULE_3__["print"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printGroupEnd", function() { return _shared__WEBPACK_IMPORTED_MODULE_3__["printGroupEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printTable", function() { return _shared__WEBPACK_IMPORTED_MODULE_3__["printTable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printDir", function() { return _shared__WEBPACK_IMPORTED_MODULE_3__["printDir"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printDirxml", function() { return _shared__WEBPACK_IMPORTED_MODULE_3__["printDirxml"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printTrace", function() { return _shared__WEBPACK_IMPORTED_MODULE_3__["printTrace"]; });





var printLog = _global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] ? _browser__WEBPACK_IMPORTED_MODULE_1__["printLog"] : _node__WEBPACK_IMPORTED_MODULE_2__["printLog"];
var printGroup = _global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] ? _browser__WEBPACK_IMPORTED_MODULE_1__["printGroup"] : _node__WEBPACK_IMPORTED_MODULE_2__["printGroup"];
var printGroupCollapsed = _global__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] ? _browser__WEBPACK_IMPORTED_MODULE_1__["printGroupCollapsed"] : _node__WEBPACK_IMPORTED_MODULE_2__["printGroupCollapsed"];


/***/ }),

/***/ "./src/printers/node/index.ts":
/*!************************************!*\
  !*** ./src/printers/node/index.ts ***!
  \************************************/
/*! exports provided: printLog, printGroup, printGroupCollapsed, fLeader, fMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printers */ "./src/printers/node/printers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printLog", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printGroup", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printGroupCollapsed", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["printGroupCollapsed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fLeader", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["fLeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fMeta", function() { return _printers__WEBPACK_IMPORTED_MODULE_0__["fMeta"]; });



/***/ }),

/***/ "./src/printers/node/printers.ts":
/*!***************************************!*\
  !*** ./src/printers/node/printers.ts ***!
  \***************************************/
/*! exports provided: printLog, printGroup, printGroupCollapsed, fLeader, fMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printLog", function() { return printLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGroup", function() { return printGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGroupCollapsed", function() { return printGroupCollapsed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fLeader", function() { return fLeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fMeta", function() { return fMeta; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chalk */ "./node_modules/chalk/source/index.js");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./src/printers/shared.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util */ "./src/util/index.ts");




 // ------- PRINT METHODS -------- //

function printLog(log, def, use_emoji, args) {
  var _ref = [def.method, fLeader(def, use_emoji, args), def.terminal, fMeta(log, use_emoji)],
      method = _ref[0],
      leader = _ref[1],
      style = _ref[2],
      meta = _ref[3];
  var render_args = meta === '' ? [leader].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args)) : [leader, style, meta].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args));
  return Object(_shared__WEBPACK_IMPORTED_MODULE_2__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_2__["applyRender"])(log, method, render_args));
}
function printGroup(log, def, use_emoji, args) {
  var render_args = setupPrintGroup(def, use_emoji, args);
  return Object(_shared__WEBPACK_IMPORTED_MODULE_2__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_2__["applyRender"])(log, 'group', render_args));
}
function printGroupCollapsed(log, def, use_emoji, args) {
  var render_args = setupPrintGroup(def, use_emoji, args);
  return Object(_shared__WEBPACK_IMPORTED_MODULE_2__["toConsole"])(Object(_shared__WEBPACK_IMPORTED_MODULE_2__["applyRender"])(log, 'groupCollapsed', render_args));
}

function setupPrintGroup(def, use_emoji, args) {
  var partial_args = [fLeader(def, use_emoji, args)];
  return typeof args[0] === "string" ? [].concat(partial_args, [args[0]]) : partial_args;
} // ------- PRINT FORMATTERS -------- //


function fLeader(def, use_emoji, args) {
  var emoji = use_emoji ? fEmoji(def.emoji) : '';
  var padding = use_emoji ? 14 + emoji.length : 14;
  var padded_leader = addPadding("".concat(emoji, " ").concat(fName(def.levelName), "(").concat(args.length, ")"), padding);
  return def.terminal.reduce(function (acc, style) {
    return chalk__WEBPACK_IMPORTED_MODULE_1__[style](acc);
  }, padded_leader);
}
/**
 * Add spaces to the end of a log title to make them all align.
 */

function addPadding(str, len) {
  var diff = len - str.length;
  var padded = str;

  for (var i = 0; i <= diff; i += 1) {
    padded += ' ';
  }

  return padded;
}

function fEmoji(emoji) {
  return " ".concat(emoji);
}

function fName(name) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_4__["initialCaps"])(name !== null && name !== void 0 ? name : '');
}

function fMeta(log, use_emoji) {
  return "".concat(fNamespace(log)).concat(fLabel(log)).concat(fTime(log, use_emoji)).concat(fCount(log)).concat(fTest(log, use_emoji));
}

function fTime(log, use_emoji) {
  var _ref2, _log$timeNowVal, _log$labelVal, _env$$shed, _env$$shed$overrides;

  var label_txt = "".concat((_ref2 = (_log$timeNowVal = log.timeNowVal) !== null && _log$timeNowVal !== void 0 ? _log$timeNowVal : (_log$labelVal = log.labelVal) === null || _log$labelVal === void 0 ? void 0 : _log$labelVal.timeEllapsed) !== null && _ref2 !== void 0 ? _ref2 : '');
  return label_txt !== '' ? "(".concat(((_env$$shed = _global__WEBPACK_IMPORTED_MODULE_3__["env"].$shed) === null || _env$$shed === void 0 ? void 0 : (_env$$shed$overrides = _env$$shed.overrides) === null || _env$$shed$overrides === void 0 ? void 0 : _env$$shed$overrides.use_emoji) || use_emoji ? '⏱' : '').concat(label_txt, ") ") : '';
}

function fCount(log) {
  var _log$labelVal2;

  var count = (_log$labelVal2 = log.labelVal) === null || _log$labelVal2 === void 0 ? void 0 : _log$labelVal2.count;
  return count !== undefined ? "(Count: ".concat(count, ")") : '';
}

function fNamespace(log) {
  return log.namespaceVal ? "#".concat(log.namespaceVal, " ") : '';
}

function fLabel(log) {
  return log.labelVal ? "[".concat(log.labelVal.name, "] ") : '';
}

function fTest(log, use_emoji) {
  return log.assertion === false ? "".concat(use_emoji ? '❌ ' : '', "Assertion failed:") : '';
}

/***/ }),

/***/ "./src/printers/shared.ts":
/*!********************************!*\
  !*** ./src/printers/shared.ts ***!
  \********************************/
/*! exports provided: print, printGroupEnd, printTable, printDir, printDirxml, printTrace, applyRender, toConsole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return print; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printGroupEnd", function() { return printGroupEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printTable", function() { return printTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printDir", function() { return printDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printDirxml", function() { return printDirxml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printTrace", function() { return printTrace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyRender", function() { return applyRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toConsole", function() { return toConsole; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global */ "./src/global.ts");


 // ------- PRINT ENTRY -------- //

function print(log, def, args) {
  var _env$$shed, _env$$shed$overrides;

  var use_emoji = ((_env$$shed = _global__WEBPACK_IMPORTED_MODULE_2__["env"].$shed) === null || _env$$shed === void 0 ? void 0 : (_env$$shed$overrides = _env$$shed.overrides) === null || _env$$shed$overrides === void 0 ? void 0 : _env$$shed$overrides.use_emoji) === true || log.cfg.use_emoji === true;
  return log.printer(log, def, use_emoji, args);
} // ------- PRINT METHODS -------- //

function printGroupEnd(log, def, use_emoji, args) {
  return toConsole(applyRender(log, 'groupEnd', []));
}
function printTable(log, def, use_emoji, args) {
  return toConsole(applyRender(log, 'table', args), false);
}
function printDir(log, def, use_emoji, args) {
  return toConsole(applyRender(log, 'dir', args), false);
}
function printDirxml(log, def, use_emoji, args) {
  return toConsole(applyRender(log, 'dirxml', args), false);
}
function printTrace(log, def, use_emoji, args) {
  return toConsole(applyRender(log, 'trace', args));
} // ------ Print to the console ------- //

function applyRender(log, method, args) {
  log.render = [method, args];
  return log.render;
}
function toConsole(render) {
  var spread = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var _render = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(render, 2),
      method = _render[0],
      args = _render[1];

  if (_global__WEBPACK_IMPORTED_MODULE_2__["env"].ADZE_ENV !== 'dev') {
    if (spread) {
      var _console;

      (_console = console)[method].apply(_console, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args));
    } else {
      console[method](args);
    }
  }

  return render;
}

/***/ }),

/***/ "./src/shed.ts":
/*!*********************!*\
  !*** ./src/shed.ts ***!
  \*********************/
/*! exports provided: shedExists, createShed, teardownShed, Shed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shedExists", function() { return shedExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShed", function() { return createShed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teardownShed", function() { return teardownShed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shed", function() { return Shed; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.defaultsdeep */ "./node_modules/lodash.defaultsdeep/index.js");
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_defaults */ "./src/_defaults/index.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global */ "./src/global.ts");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/**
 * A typeguard that indicates that a global shed store exists.
 */
function shedExists(store) {
  return store !== undefined;
}
/**
 * Creates a new shed instance in your environment's global context.
 */

function createShed(config) {
  _global__WEBPACK_IMPORTED_MODULE_6__["env"].$shed = new Shed(config);
}
/**
 * Removes the shed from the environment's global context.
 */

function teardownShed() {
  delete _global__WEBPACK_IMPORTED_MODULE_6__["env"].$shed;
}
/**
 * A global store for caching, listening, and recalling Adze logs.
 */

var Shed = /*#__PURE__*/function () {
  /**
   * The configuration for Shed. Shed is constructed with a set of 
   * defaults that can overriden by the configuration supplied by the user.
   */

  /**
   * Cache of finalized logs (terminated and have meta data applied to them). This
   * is mainly used for recalling logs and filtering them.
   */

  /**
   * Cache of label instances. Useful for globally linking labelled logs.
   */

  /**
   * Counter for generating ID's for listeners.
   */

  /**
   * Cache of log listeners. These are fire when specified log levels
   * are printed.
   */
  function Shed(config) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Shed);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "cfg", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "cache", []);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "labels", new Map());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "id_counter", -1);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "listeners", new Map());

    this.cfg = lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4___default()(config, _defaults__WEBPACK_IMPORTED_MODULE_5__["shed_defaults"]);
  }
  /*************************************\
   * GET/SET METHODS
  \*************************************/

  /**
   * Store a log in the shed for later recall.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Shed, [{
    key: "store",
    value: function store(log) {
      if (this.cache.length < this.cfg.cache_limit) {
        this.cache = this.cache.concat([log]);
      }
    }
    /**
     * Sets the limit for the maximum number of logs that Shed will cache.
     */

  }, {
    key: "getBundle",

    /**
     * Returns all of the cached logs of the provided levels as a bundle.
     * This is useful for recalling logs and applying filters.
     */
    value: function getBundle(levels) {
      return this.cache.reduce(function (acc, log) {
        return acc.concat(levels.includes(log.level) ? [log] : []);
      }, []);
    }
    /**
     * Indicates whether this shed instance has global Adze config overrides set.
     */

  }, {
    key: "getLabel",

    /**
     * Get a label from the Shed by name.
     */
    value: function getLabel(name) {
      return this.labels.get(name);
    }
    /**
     * Adds a label to the Shed to be tracked globally.
     */

  }, {
    key: "addLabel",
    value: function addLabel(label) {
      if (!this.hasLabel(label.name)) {
        this.labels.set(label.name, label);
      }
    }
    /**
     * Validates whether a label with the given name exists in the Shed label cache.
     */

  }, {
    key: "hasLabel",
    value: function hasLabel(name) {
      return this.labels.has(name);
    }
    /*************************************\
     * LISTENER METHODS
    \*************************************/

    /**
     * Add a listener callback that fires any time a log of one of the provided levels is generated.
     */

  }, {
    key: "addListener",
    value: function addListener(levels, cb) {
      var _this = this;

      return levels.map(function (lvl) {
        // Get the map for the listeners of the given log level.
        var level_map = _this.listenerBucket(lvl); // Generate a new ID for the listener.


        var id = _this.assignId(); // Assign an ID to the listener for later teardown.


        level_map.set(id, cb);

        _this.listeners.set(lvl, level_map); // Return the listener location tuple


        return [lvl, id];
      });
    }
    /**
     * Remove log listeners at the given bucket locations.
     */

  }, {
    key: "removeListener",
    value: function removeListener(locations) {
      var _this2 = this;

      locations.forEach(function (_ref) {
        var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
            lvl_id = _ref2[0],
            id = _ref2[1];

        var level = _this2.listeners.get(lvl_id);

        level === null || level === void 0 ? void 0 : level["delete"](id);
      });
    }
    /**
     * Fire any log listeners for the provided log.
     */

  }, {
    key: "fireListeners",
    value: function fireListeners(log, def) {
      var _this$listeners$get;

      (_this$listeners$get = this.listeners.get(log.level)) === null || _this$listeners$get === void 0 ? void 0 : _this$listeners$get.forEach(function (listener) {
        listener(_objectSpread(_objectSpread({}, log), def));
      });
    }
    /*************************************\
     * GLOBAL FILTER METHODS
    \*************************************/

    /**
     * Returns a boolean indicating if this log instance should be 
     * allowed to print.
     */

  }, {
    key: "logGloballyAllowed",
    value: function logGloballyAllowed(log) {
      var _log$labelVal;

      return !this.hideAll && this.logAllowedLogic('label', log === null || log === void 0 ? void 0 : (_log$labelVal = log.labelVal) === null || _log$labelVal === void 0 ? void 0 : _log$labelVal.name) && this.logAllowedLogic('level', log.level) && this.logAllowedLogic('namespace', log.namespaceVal);
    }
    /**
     * Determines if provided value passes user configured
     * global filters.
     */

  }, {
    key: "logAllowedLogic",
    value: function logAllowedLogic(category, value) {
      // If the value is undefined we cannot determine if it should hide the log
      if (value === undefined) {
        return true;
      }

      if (this.filterIsSet('include', category)) {
        return this.isIncluded(category, value);
      }

      if (this.filterIsSet('exclude', category)) {
        return this.isNotExcluded(category, value);
      }

      return true;
    }
    /**
     * Has the user has defined rules for a specific filter?
     */

  }, {
    key: "filterIsSet",
    value: function filterIsSet(type, filter) {
      var _this$cfg$filters$fil, _this$cfg, _this$cfg$filters, _this$cfg$filters$fil2;

      var include_prop = (_this$cfg$filters$fil = (_this$cfg = this.cfg) === null || _this$cfg === void 0 ? void 0 : (_this$cfg$filters = _this$cfg.filters) === null || _this$cfg$filters === void 0 ? void 0 : (_this$cfg$filters$fil2 = _this$cfg$filters[filter]) === null || _this$cfg$filters$fil2 === void 0 ? void 0 : _this$cfg$filters$fil2.include) !== null && _this$cfg$filters$fil !== void 0 ? _this$cfg$filters$fil : [];
      return include_prop.length > 0;
    }
    /**
     * Is the log in the included filter?
     */

  }, {
    key: "isIncluded",
    value: function isIncluded(filter, value) {
      var _this$cfg$filters$fil3, _this$cfg2, _this$cfg2$filters, _this$cfg2$filters$fi;

      var filter_vals = (_this$cfg$filters$fil3 = (_this$cfg2 = this.cfg) === null || _this$cfg2 === void 0 ? void 0 : (_this$cfg2$filters = _this$cfg2.filters) === null || _this$cfg2$filters === void 0 ? void 0 : (_this$cfg2$filters$fi = _this$cfg2$filters[filter]) === null || _this$cfg2$filters$fi === void 0 ? void 0 : _this$cfg2$filters$fi.include) !== null && _this$cfg$filters$fil3 !== void 0 ? _this$cfg$filters$fil3 : [];
      return filter_vals.length > 0 && filter_vals.indexOf(value) !== -1;
    }
    /**
     * Is the log not in the excluded filter?
     */

  }, {
    key: "isNotExcluded",
    value: function isNotExcluded(filter, value) {
      var _this$cfg$filters$fil4, _this$cfg3, _this$cfg3$filters, _this$cfg3$filters$fi;

      var filter_vals = (_this$cfg$filters$fil4 = (_this$cfg3 = this.cfg) === null || _this$cfg3 === void 0 ? void 0 : (_this$cfg3$filters = _this$cfg3.filters) === null || _this$cfg3$filters === void 0 ? void 0 : (_this$cfg3$filters$fi = _this$cfg3$filters[filter]) === null || _this$cfg3$filters$fi === void 0 ? void 0 : _this$cfg3$filters$fi.exclude) !== null && _this$cfg$filters$fil4 !== void 0 ? _this$cfg$filters$fil4 : [];
      return filter_vals.length > 0 && filter_vals.indexOf(value) === -1;
    }
    /*************************************\
     * HELPER METHODS
    \*************************************/

    /**
     * Guarantee that a listener bucket exists for the given log level and return the bucket.
     */

  }, {
    key: "listenerBucket",
    value: function listenerBucket(lvl) {
      if (!this.listeners.has(lvl)) {
        this.listeners.set(lvl, new Map());
      } // Override TS because the ListenerBucket is guaranteed by the condition above.


      return this.listeners.get(lvl);
    }
    /**
     * Increment the ID counter and return the new value.
     */

  }, {
    key: "assignId",
    value: function assignId() {
      return this.id_counter += 1;
    }
  }, {
    key: "cacheLimit",
    set: function set(limit) {
      this.cfg.cache_limit = limit;
    }
    /**
     * Gets the limit for the maximum number of logs that Shed will cache.
     */
    ,
    get: function get() {
      return this.cfg.cache_limit;
    }
  }, {
    key: "hasOverrides",
    get: function get() {
      return this.cfg.global_cfg !== null;
    }
    /**
     * Returns the current value of the global Adze configuration overrides.
     */

  }, {
    key: "overrides",
    get: function get() {
      return this.cfg.global_cfg;
    }
    /**
     * Getter for configuration of the hideAll filter property.
     */

  }, {
    key: "hideAll",
    get: function get() {
      var _this$cfg$filters$hid, _this$cfg4;

      return (_this$cfg$filters$hid = (_this$cfg4 = this.cfg) === null || _this$cfg4 === void 0 ? void 0 : _this$cfg4.filters.hideAll) !== null && _this$cfg$filters$hid !== void 0 ? _this$cfg$filters$hid : false;
    }
    /**
     * Sets the current value of the global Adze configuration overrides.
     */

  }, {
    key: "config",
    set: function set(cfg) {
      var defaulted = cfg ? lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4___default()(cfg, _defaults__WEBPACK_IMPORTED_MODULE_5__["defaults"]) : cfg;
      this.cfg.global_cfg = defaulted;
    }
  }]);

  return Shed;
}();

/***/ }),

/***/ "./src/terminators/index.ts":
/*!**********************************!*\
  !*** ./src/terminators/index.ts ***!
  \**********************************/
/*! exports provided: logMethod, customMethod, seal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _terminators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terminators */ "./src/terminators/terminators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logMethod", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["logMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customMethod", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["customMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seal", function() { return _terminators__WEBPACK_IMPORTED_MODULE_0__["seal"]; });



/***/ }),

/***/ "./src/terminators/terminators.ts":
/*!****************************************!*\
  !*** ./src/terminators/terminators.ts ***!
  \****************************************/
/*! exports provided: seal, logMethod, customMethod, store, fireListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seal", function() { return seal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logMethod", function() { return logMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customMethod", function() { return customMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fireListeners", function() { return fireListeners; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _printers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../printers */ "./src/printers/index.ts");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../conditions */ "./src/conditions/index.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./src/util/index.ts");
/* harmony import */ var _shed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shed */ "./src/shed.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global */ "./src/global.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/**
 * Seals the configuration of a log and returns a function that
 * constructs a new log with the same configuration.
 * 
 * **Example:**
 * ```javascript
 * const sealed = adze({ use_emoji: true }).ns('sealed').label('sealed-label').seal();
 * sealed().success('Success!'); // -> prints "#sealed [sealed-label] Success!"
 * sealed().log('Another log.'); // -> prints "#sealed [sealed-label] Another log."
 * ```
 */

function seal() {
  var _this = this;

  // Run the modifier queue to apply their results
  runModifierQueue(this.modifierQueue); // Clear the queue as to not repeat the actions when the subsequent logs are terminated.

  this.modifierQueue = [];
  return function () {
    return _objectSpread({}, _this);
  };
}
/**
 * Generates a terminating log method the specified log level name.
 */

function logMethod(cfg, levelName) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return executionPipeline(this, cfg, getDefinition(cfg, 'log_levels', levelName), args);
  };
}
/**
 * Generates a terminating log method that enables the user to specify a custom
 * log level by key as the format for the log.
 */

function customMethod(cfg) {
  return function (levelName) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return executionPipeline(this, cfg, getDefinition(cfg, 'custom_levels', levelName), args);
  };
}
;
/**
 * Gets the log level definition from the log configuration.
 */

function getDefinition(cfg, type, levelName) {
  var shed = _global__WEBPACK_IMPORTED_MODULE_5__["env"].$shed;
  var definition = undefined;

  if (Object(_shed__WEBPACK_IMPORTED_MODULE_4__["shedExists"])(shed) && shed.hasOverrides) {
    var _shed$overrides, _shed$overrides$type;

    definition = (_shed$overrides = shed.overrides) === null || _shed$overrides === void 0 ? void 0 : (_shed$overrides$type = _shed$overrides[type]) === null || _shed$overrides$type === void 0 ? void 0 : _shed$overrides$type[levelName];
  } else {
    definition = cfg[type][levelName];
  }

  return definition ? _objectSpread(_objectSpread({}, definition), {}, {
    levelName: levelName
  }) : undefined;
}
/**
 * The primary execution pipeline for terminating log methods.
 */


function executionPipeline(log, cfg, def, args) {
  if (def && Object(_conditions__WEBPACK_IMPORTED_MODULE_2__["allowed"])(cfg, def)) {
    // Apply modifiers in the proper order.
    runModifierQueue(log.modifierQueue); // Check the test modifiers.

    if (Object(_conditions__WEBPACK_IMPORTED_MODULE_2__["evalPasses"])(log)) {
      // Save terminator props for recall purposes
      var final_log = Object(_util__WEBPACK_IMPORTED_MODULE_3__["mutateProps"])(log, [['args', args], ['level', def.level]]); // Render the log

      var render = Object(_printers__WEBPACK_IMPORTED_MODULE_1__["print"])(final_log, def, args); // Fire log events

      store(final_log);
      fireListeners(final_log, def); // Return the terminated log object for testing purposes

      return {
        log: final_log,
        render: render
      };
    }
  } // Return the terminated log object for testing purposes


  return {
    log: log,
    render: null
  };
}
/**
 * Executes all of the log modifier functions within the queue.
 */


function runModifierQueue(queue) {
  queue.forEach(function (func) {
    return func();
  });
}
/*----------------------------------------*\
 * Log Events
\*----------------------------------------*/

/**
 * Stores this log in the Shed if the Shed exists.
 */


function store(log) {
  var shed = _global__WEBPACK_IMPORTED_MODULE_5__["env"].$shed;

  if (Object(_shed__WEBPACK_IMPORTED_MODULE_4__["shedExists"])(shed)) {
    shed.store(log);
  }
}
/**
 * Fires listeners for this log instance if a Shed exists.
 */

function fireListeners(log, def) {
  var shed = _global__WEBPACK_IMPORTED_MODULE_5__["env"].$shed;

  if (Object(_shed__WEBPACK_IMPORTED_MODULE_4__["shedExists"])(shed)) {
    shed.fireListeners(log, def);
  }
}

/***/ }),

/***/ "./src/util/index.ts":
/*!***************************!*\
  !*** ./src/util/index.ts ***!
  \***************************/
/*! exports provided: initialCaps, mutateProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util/util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialCaps", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["initialCaps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mutateProps", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["mutateProps"]; });



/***/ }),

/***/ "./src/util/util.ts":
/*!**************************!*\
  !*** ./src/util/util.ts ***!
  \**************************/
/*! exports provided: initialCaps, mutateProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialCaps", function() { return initialCaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutateProps", function() { return mutateProps; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Capitalizes the first character of the provided string.
 */
function initialCaps(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Applies property mutations to the provided object.
 */

function mutateProps(obj, mutations) {
  mutations.forEach(function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
        prop = _ref2[0],
        val = _ref2[1];

    return obj[prop] = val;
  });
  return obj;
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BZHplTGliL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9BZHplTGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvYW5zaS1zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9icm93c2VyLXByb2Nlc3MtaHJ0aW1lL2luZGV4LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL2luZGV4LmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvY2hhbGsvc291cmNlL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2NoYWxrL3NvdXJjZS91dGlsLmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzIiwid2VicGFjazovL0FkemVMaWIvLi9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9BZHplTGliLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5kZWZhdWx0c2RlZXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL25vZGVfbW9kdWxlcy9zdXBwb3J0cy1jb2xvci9icm93c2VyLmpzIiwid2VicGFjazovL0FkemVMaWIvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0FkemVMaWIvKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvX2NvbnRyYWN0cy9Db25maWd1cmF0aW9uLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvX2NvbnRyYWN0cy9Mb2cudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9fY29udHJhY3RzL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvX2RlZmF1bHRzL2RlZmF1bHRzLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvX2RlZmF1bHRzL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvX2RlZmF1bHRzL3NoZWRfZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9hZHplLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvYnVuZGxlLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvY29uZGl0aW9ucy9jb25kaXRpb25zLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvY29uZGl0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2ZpbHRlcnMvZmlsdGVycy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2ZpbHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL2xhYmVsL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbGFiZWwvbGFiZWwudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9tb2RpZmllcnMvY291bnRpbmcudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9tb2RpZmllcnMvZm9ybWF0dGluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9ncm91cGluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9pZGVudGlmeWluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy9tb2RpZmllci50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL21vZGlmaWVycy90ZXN0aW5nLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvbW9kaWZpZXJzL3RpbWluZy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3ByaW50ZXJzL2Jyb3dzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9wcmludGVycy9icm93c2VyL3ByaW50ZXJzLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvcHJpbnRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy9wcmludGVycy9ub2RlL2luZGV4LnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvcHJpbnRlcnMvbm9kZS9wcmludGVycy50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3ByaW50ZXJzL3NoYXJlZC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3NoZWQudHMiLCJ3ZWJwYWNrOi8vQWR6ZUxpYi8uL3NyYy90ZXJtaW5hdG9ycy9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3Rlcm1pbmF0b3JzL3Rlcm1pbmF0b3JzLnRzIiwid2VicGFjazovL0FkemVMaWIvLi9zcmMvdXRpbC9pbmRleC50cyIsIndlYnBhY2s6Ly9BZHplTGliLy4vc3JjL3V0aWwvdXRpbC50cyJdLCJuYW1lcyI6WyJkZWZhdWx0cyIsImxvZ19sZXZlbCIsImxvZ19jYWNoZV9zaXplIiwidXNlX2Vtb2ppIiwiYmFzZV9zdHlsZSIsImN1c3RvbV9sZXZlbHMiLCJsb2dfbGV2ZWxzIiwidmVyYm9zZSIsImxldmVsIiwic3R5bGUiLCJ0ZXJtaW5hbCIsIm1ldGhvZCIsImVtb2ppIiwiZGVidWciLCJsb2ciLCJzdWNjZXNzIiwiZmFpbCIsImlzQ2hyb21lIiwiaW5mbyIsImlzU2FmYXJpIiwid2FybiIsImVycm9yIiwiYXR0ZW50aW9uIiwiZmlsdGVycyIsImhpZGVBbGwiLCJuYW1lc3BhY2UiLCJleGNsdWRlIiwiaW5jbHVkZSIsImxhYmVsIiwic2hlZF9kZWZhdWx0cyIsImNhY2hlX2xpbWl0IiwiZ2xvYmFsX2NmZyIsImRlZmF1bHRzRGVlcCIsInJlcXVpcmUiLCJhZHplIiwidXNlcl9jZmciLCJjZmciLCJ0cmFjZWFibGUiLCJtb2RpZmllclF1ZXVlIiwicHJpbnRlciIsInByaW50TG9nIiwibG9nTWV0aG9kIiwiY3VzdG9tIiwiY3VzdG9tTWV0aG9kIiwic2VhbCIsImNvdW50IiwiY291bnRSZXNldCIsImRpciIsImRpcnhtbCIsInRhYmxlIiwiYXNzZXJ0IiwidGVzdCIsImdyb3VwIiwiZ3JvdXBDb2xsYXBzZWQiLCJncm91cEVuZCIsIm5zIiwidHJhY2UiLCJ0aW1lIiwidGltZU5vdyIsInRpbWVFbmQiLCJidW5kbGUiLCJidW5kbGVfYXJyIiwiYnVuZGxlZF9sb2ciLCJwdXNoIiwiYWxsb3dlZCIsImRlZiIsImxldmVsQWN0aXZlIiwibm90VGVzdEVudiIsImV2YWxQYXNzZXMiLCJhc3NlcnRpb24iLCJ1bmRlZmluZWQiLCJleHByZXNzaW9uIiwiY29uc29sZSIsImlzQnJvd3NlciIsImVudiIsIkFEWkVfRU5WIiwiZmlsdGVyQWxsIiwibG9vcEJ1bmRsZSIsImZpbHRlck5hbWVzcGFjZSIsIm5hbWVzcGFjZVZhbCIsImZpbHRlckxhYmVsIiwibGJsIiwibGFiZWxWYWwiLCJuYW1lIiwiZmlsdGVyTGV2ZWxSYW5nZSIsImxvdyIsImhpZ2giLCJybmRyIiwiSW5maW5pdHkiLCJjYiIsImZvckVhY2giLCJyZW5kZXIiLCJyZXN1bHQiLCJhcmdzIiwiZ2xvYmFsIiwid2luZG93IiwiZW52SXNXaW5kb3ciLCJpc0Nocm9tZVZhciIsImlzRmlyZWZveFZhciIsImlzU2FmYXJpVmFyIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5kZXhPZiIsImlzRmlyZWZveCIsImdldExhYmVsIiwic2hlZCIsIiRzaGVkIiwic2hlZEV4aXN0cyIsImFkZExhYmVsIiwibW9kaWZpZXIiLCJjb3VudENsZWFyIiwicHJpbnREaXIiLCJwcmludERpcnhtbCIsInByaW50VGFibGUiLCJwcmludEdyb3VwIiwicHJpbnRHcm91cENvbGxhcHNlZCIsInByaW50R3JvdXBFbmQiLCJwcmVwZW5kTW9kaWZpZXIiLCJwcmludFRyYWNlIiwibWV0YSIsImRhdGEiLCJmdW5jIiwiY29uY2F0IiwiaHJ0aW1lIiwidGltZVN0YXJ0IiwidGltZV9ub3ciLCJmb3JtYXRUaW1lIiwidGltZU5vd1ZhbCIsInRpbWVFbGxhcHNlZCIsInNlYyIsIm5hbm8iLCJmTGVhZGVyIiwiZk1ldGEiLCJsZWFkZXIiLCJyZW5kZXJfYXJncyIsInRvQ29uc29sZSIsImFwcGx5UmVuZGVyIiwicGFydGlhbF9hcmdzIiwiZkVtb2ppIiwiZk5hbWUiLCJsZXZlbE5hbWUiLCJsZW5ndGgiLCJvdmVycmlkZXMiLCJpbml0aWFsQ2FwcyIsImZOYW1lc3BhY2UiLCJmTGFiZWwiLCJmVGltZSIsImZDb3VudCIsImZUZXN0IiwibGFiZWxfdHh0IiwicHJpbnRMb2dCcm93c2VyIiwicHJpbnRMb2dOb2RlIiwicHJpbnRHcm91cEJyb3dzZXIiLCJwcmludEdyb3VwTm9kZSIsInByaW50R3JvdXBDb2xsYXBzZWRCcm93c2VyIiwicHJpbnRHcm91cENvbGxhcHNlZE5vZGUiLCJzZXR1cFByaW50R3JvdXAiLCJwYWRkaW5nIiwicGFkZGVkX2xlYWRlciIsImFkZFBhZGRpbmciLCJyZWR1Y2UiLCJhY2MiLCJjaGFsayIsInN0ciIsImxlbiIsImRpZmYiLCJwYWRkZWQiLCJpIiwicHJpbnQiLCJzcHJlYWQiLCJzdG9yZSIsImNyZWF0ZVNoZWQiLCJjb25maWciLCJTaGVkIiwidGVhcmRvd25TaGVkIiwiTWFwIiwiY2FjaGUiLCJsZXZlbHMiLCJpbmNsdWRlcyIsImxhYmVscyIsImdldCIsImhhc0xhYmVsIiwic2V0IiwiaGFzIiwibWFwIiwibHZsIiwibGV2ZWxfbWFwIiwibGlzdGVuZXJCdWNrZXQiLCJpZCIsImFzc2lnbklkIiwibGlzdGVuZXJzIiwibG9jYXRpb25zIiwibHZsX2lkIiwibGlzdGVuZXIiLCJsb2dBbGxvd2VkTG9naWMiLCJjYXRlZ29yeSIsInZhbHVlIiwiZmlsdGVySXNTZXQiLCJpc0luY2x1ZGVkIiwiaXNOb3RFeGNsdWRlZCIsInR5cGUiLCJmaWx0ZXIiLCJpbmNsdWRlX3Byb3AiLCJmaWx0ZXJfdmFscyIsImlkX2NvdW50ZXIiLCJsaW1pdCIsImRlZmF1bHRlZCIsInJ1bk1vZGlmaWVyUXVldWUiLCJleGVjdXRpb25QaXBlbGluZSIsImdldERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwiaGFzT3ZlcnJpZGVzIiwiZmluYWxfbG9nIiwibXV0YXRlUHJvcHMiLCJmaXJlTGlzdGVuZXJzIiwicXVldWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwib2JqIiwibXV0YXRpb25zIiwicHJvcCIsInZhbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7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Q0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUSxTQUFTO0FBQ2pDLGdCQUFnQixRQUFRLFNBQVM7QUFDakMsaUJBQWlCLE9BQU8sUUFBUTtBQUNoQyxpQkFBaUIsT0FBTyxRQUFRO0FBQ2hDLGdCQUFnQixTQUFTLE9BQU87QUFDaEMsZ0JBQWdCLFNBQVMsT0FBTztBQUNoQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUU7O0FBRXpFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsRUFBRSxVQUFVLEVBQUU7QUFDL0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3QwQkEsb0JBQW9CLG1CQUFPLENBQUMsa0VBQWU7QUFDM0MsY0FBYyxtQkFBTyxDQUFDLHNEQUFTOztBQUUvQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdEQUF3RCx1Q0FBdUM7QUFDL0Ysc0RBQXNELHFDQUFxQzs7QUFFM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7O0FDaEZBLG9CQUFvQixtQkFBTyxDQUFDLGtFQUFlOztBQUUzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsU0FBUztBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvRlk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixLQUEwQjs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLEVBQUU7QUFDYixXQUFXLE1BQU07QUFDakIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFB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LGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtB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Ozs7QUFHTyxTQUFTd00sYUFBVCxDQUF1QnhNLEdBQXZCLEVBQXNDbUQsR0FBdEMsRUFBb0U7QUFDekUsTUFBTXdDLElBQUksR0FBRy9CLDJDQUFHLENBQUNnQyxLQUFqQjs7QUFDQSxNQUFJQyx3REFBVSxDQUFDRixJQUFELENBQWQsRUFBc0I7QUFDcEJBLFFBQUksQ0FBQzZHLGFBQUwsQ0FBbUJ4TSxHQUFuQixFQUF3Qm1ELEdBQXhCO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7QUM3SEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7QUFHTyxTQUFTOEUsV0FBVCxDQUFxQm9CLEdBQXJCLEVBQXlDO0FBQzlDLFNBQU9BLEdBQUcsQ0FBQ3FELE1BQUosQ0FBVyxDQUFYLEVBQWNDLFdBQWQsS0FBOEJ0RCxHQUFHLENBQUN1RCxLQUFKLENBQVUsQ0FBVixDQUFyQztBQUNEO0FBRUQ7Ozs7QUFHTyxTQUFTTCxXQUFULENBQXdCTSxHQUF4QixFQUFrQ0MsU0FBbEMsRUFBcUU7QUFDMUVBLFdBQVMsQ0FBQ2xJLE9BQVYsQ0FBa0I7QUFBQTtBQUFBLFFBQUVtSSxJQUFGO0FBQUEsUUFBUUMsR0FBUjs7QUFBQSxXQUFpQkgsR0FBRyxDQUFDRSxJQUFELENBQUgsR0FBWUMsR0FBN0I7QUFBQSxHQUFsQjtBQUNBLFNBQU9ILEdBQVA7QUFDRCxDIiwiZmlsZSI6ImFkemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBZHplTGliXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFkemVMaWJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHdyYXBBbnNpMTYgPSAoZm4sIG9mZnNldCkgPT4gKC4uLmFyZ3MpID0+IHtcblx0Y29uc3QgY29kZSA9IGZuKC4uLmFyZ3MpO1xuXHRyZXR1cm4gYFxcdTAwMUJbJHtjb2RlICsgb2Zmc2V0fW1gO1xufTtcblxuY29uc3Qgd3JhcEFuc2kyNTYgPSAoZm4sIG9mZnNldCkgPT4gKC4uLmFyZ3MpID0+IHtcblx0Y29uc3QgY29kZSA9IGZuKC4uLmFyZ3MpO1xuXHRyZXR1cm4gYFxcdTAwMUJbJHszOCArIG9mZnNldH07NTske2NvZGV9bWA7XG59O1xuXG5jb25zdCB3cmFwQW5zaTE2bSA9IChmbiwgb2Zmc2V0KSA9PiAoLi4uYXJncykgPT4ge1xuXHRjb25zdCByZ2IgPSBmbiguLi5hcmdzKTtcblx0cmV0dXJuIGBcXHUwMDFCWyR7MzggKyBvZmZzZXR9OzI7JHtyZ2JbMF19OyR7cmdiWzFdfTske3JnYlsyXX1tYDtcbn07XG5cbmNvbnN0IGFuc2kyYW5zaSA9IG4gPT4gbjtcbmNvbnN0IHJnYjJyZ2IgPSAociwgZywgYikgPT4gW3IsIGcsIGJdO1xuXG5jb25zdCBzZXRMYXp5UHJvcGVydHkgPSAob2JqZWN0LCBwcm9wZXJ0eSwgZ2V0KSA9PiB7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5LCB7XG5cdFx0Z2V0OiAoKSA9PiB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IGdldCgpO1xuXG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSwge1xuXHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH0sXG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRjb25maWd1cmFibGU6IHRydWVcblx0fSk7XG59O1xuXG4vKiogQHR5cGUge3R5cGVvZiBpbXBvcnQoJ2NvbG9yLWNvbnZlcnQnKX0gKi9cbmxldCBjb2xvckNvbnZlcnQ7XG5jb25zdCBtYWtlRHluYW1pY1N0eWxlcyA9ICh3cmFwLCB0YXJnZXRTcGFjZSwgaWRlbnRpdHksIGlzQmFja2dyb3VuZCkgPT4ge1xuXHRpZiAoY29sb3JDb252ZXJ0ID09PSB1bmRlZmluZWQpIHtcblx0XHRjb2xvckNvbnZlcnQgPSByZXF1aXJlKCdjb2xvci1jb252ZXJ0Jyk7XG5cdH1cblxuXHRjb25zdCBvZmZzZXQgPSBpc0JhY2tncm91bmQgPyAxMCA6IDA7XG5cdGNvbnN0IHN0eWxlcyA9IHt9O1xuXG5cdGZvciAoY29uc3QgW3NvdXJjZVNwYWNlLCBzdWl0ZV0gb2YgT2JqZWN0LmVudHJpZXMoY29sb3JDb252ZXJ0KSkge1xuXHRcdGNvbnN0IG5hbWUgPSBzb3VyY2VTcGFjZSA9PT0gJ2Fuc2kxNicgPyAnYW5zaScgOiBzb3VyY2VTcGFjZTtcblx0XHRpZiAoc291cmNlU3BhY2UgPT09IHRhcmdldFNwYWNlKSB7XG5cdFx0XHRzdHlsZXNbbmFtZV0gPSB3cmFwKGlkZW50aXR5LCBvZmZzZXQpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHN1aXRlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0c3R5bGVzW25hbWVdID0gd3JhcChzdWl0ZVt0YXJnZXRTcGFjZV0sIG9mZnNldCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn07XG5cbmZ1bmN0aW9uIGFzc2VtYmxlU3R5bGVzKCkge1xuXHRjb25zdCBjb2RlcyA9IG5ldyBNYXAoKTtcblx0Y29uc3Qgc3R5bGVzID0ge1xuXHRcdG1vZGlmaWVyOiB7XG5cdFx0XHRyZXNldDogWzAsIDBdLFxuXHRcdFx0Ly8gMjEgaXNuJ3Qgd2lkZWx5IHN1cHBvcnRlZCBhbmQgMjIgZG9lcyB0aGUgc2FtZSB0aGluZ1xuXHRcdFx0Ym9sZDogWzEsIDIyXSxcblx0XHRcdGRpbTogWzIsIDIyXSxcblx0XHRcdGl0YWxpYzogWzMsIDIzXSxcblx0XHRcdHVuZGVybGluZTogWzQsIDI0XSxcblx0XHRcdGludmVyc2U6IFs3LCAyN10sXG5cdFx0XHRoaWRkZW46IFs4LCAyOF0sXG5cdFx0XHRzdHJpa2V0aHJvdWdoOiBbOSwgMjldXG5cdFx0fSxcblx0XHRjb2xvcjoge1xuXHRcdFx0YmxhY2s6IFszMCwgMzldLFxuXHRcdFx0cmVkOiBbMzEsIDM5XSxcblx0XHRcdGdyZWVuOiBbMzIsIDM5XSxcblx0XHRcdHllbGxvdzogWzMzLCAzOV0sXG5cdFx0XHRibHVlOiBbMzQsIDM5XSxcblx0XHRcdG1hZ2VudGE6IFszNSwgMzldLFxuXHRcdFx0Y3lhbjogWzM2LCAzOV0sXG5cdFx0XHR3aGl0ZTogWzM3LCAzOV0sXG5cblx0XHRcdC8vIEJyaWdodCBjb2xvclxuXHRcdFx0YmxhY2tCcmlnaHQ6IFs5MCwgMzldLFxuXHRcdFx0cmVkQnJpZ2h0OiBbOTEsIDM5XSxcblx0XHRcdGdyZWVuQnJpZ2h0OiBbOTIsIDM5XSxcblx0XHRcdHllbGxvd0JyaWdodDogWzkzLCAzOV0sXG5cdFx0XHRibHVlQnJpZ2h0OiBbOTQsIDM5XSxcblx0XHRcdG1hZ2VudGFCcmlnaHQ6IFs5NSwgMzldLFxuXHRcdFx0Y3lhbkJyaWdodDogWzk2LCAzOV0sXG5cdFx0XHR3aGl0ZUJyaWdodDogWzk3LCAzOV1cblx0XHR9LFxuXHRcdGJnQ29sb3I6IHtcblx0XHRcdGJnQmxhY2s6IFs0MCwgNDldLFxuXHRcdFx0YmdSZWQ6IFs0MSwgNDldLFxuXHRcdFx0YmdHcmVlbjogWzQyLCA0OV0sXG5cdFx0XHRiZ1llbGxvdzogWzQzLCA0OV0sXG5cdFx0XHRiZ0JsdWU6IFs0NCwgNDldLFxuXHRcdFx0YmdNYWdlbnRhOiBbNDUsIDQ5XSxcblx0XHRcdGJnQ3lhbjogWzQ2LCA0OV0sXG5cdFx0XHRiZ1doaXRlOiBbNDcsIDQ5XSxcblxuXHRcdFx0Ly8gQnJpZ2h0IGNvbG9yXG5cdFx0XHRiZ0JsYWNrQnJpZ2h0OiBbMTAwLCA0OV0sXG5cdFx0XHRiZ1JlZEJyaWdodDogWzEwMSwgNDldLFxuXHRcdFx0YmdHcmVlbkJyaWdodDogWzEwMiwgNDldLFxuXHRcdFx0YmdZZWxsb3dCcmlnaHQ6IFsxMDMsIDQ5XSxcblx0XHRcdGJnQmx1ZUJyaWdodDogWzEwNCwgNDldLFxuXHRcdFx0YmdNYWdlbnRhQnJpZ2h0OiBbMTA1LCA0OV0sXG5cdFx0XHRiZ0N5YW5CcmlnaHQ6IFsxMDYsIDQ5XSxcblx0XHRcdGJnV2hpdGVCcmlnaHQ6IFsxMDcsIDQ5XVxuXHRcdH1cblx0fTtcblxuXHQvLyBBbGlhcyBicmlnaHQgYmxhY2sgYXMgZ3JheSAoYW5kIGdyZXkpXG5cdHN0eWxlcy5jb2xvci5ncmF5ID0gc3R5bGVzLmNvbG9yLmJsYWNrQnJpZ2h0O1xuXHRzdHlsZXMuYmdDb2xvci5iZ0dyYXkgPSBzdHlsZXMuYmdDb2xvci5iZ0JsYWNrQnJpZ2h0O1xuXHRzdHlsZXMuY29sb3IuZ3JleSA9IHN0eWxlcy5jb2xvci5ibGFja0JyaWdodDtcblx0c3R5bGVzLmJnQ29sb3IuYmdHcmV5ID0gc3R5bGVzLmJnQ29sb3IuYmdCbGFja0JyaWdodDtcblxuXHRmb3IgKGNvbnN0IFtncm91cE5hbWUsIGdyb3VwXSBvZiBPYmplY3QuZW50cmllcyhzdHlsZXMpKSB7XG5cdFx0Zm9yIChjb25zdCBbc3R5bGVOYW1lLCBzdHlsZV0gb2YgT2JqZWN0LmVudHJpZXMoZ3JvdXApKSB7XG5cdFx0XHRzdHlsZXNbc3R5bGVOYW1lXSA9IHtcblx0XHRcdFx0b3BlbjogYFxcdTAwMUJbJHtzdHlsZVswXX1tYCxcblx0XHRcdFx0Y2xvc2U6IGBcXHUwMDFCWyR7c3R5bGVbMV19bWBcblx0XHRcdH07XG5cblx0XHRcdGdyb3VwW3N0eWxlTmFtZV0gPSBzdHlsZXNbc3R5bGVOYW1lXTtcblxuXHRcdFx0Y29kZXMuc2V0KHN0eWxlWzBdLCBzdHlsZVsxXSk7XG5cdFx0fVxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHN0eWxlcywgZ3JvdXBOYW1lLCB7XG5cdFx0XHR2YWx1ZTogZ3JvdXAsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZVxuXHRcdH0pO1xuXHR9XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHN0eWxlcywgJ2NvZGVzJywge1xuXHRcdHZhbHVlOiBjb2Rlcyxcblx0XHRlbnVtZXJhYmxlOiBmYWxzZVxuXHR9KTtcblxuXHRzdHlsZXMuY29sb3IuY2xvc2UgPSAnXFx1MDAxQlszOW0nO1xuXHRzdHlsZXMuYmdDb2xvci5jbG9zZSA9ICdcXHUwMDFCWzQ5bSc7XG5cblx0c2V0TGF6eVByb3BlcnR5KHN0eWxlcy5jb2xvciwgJ2Fuc2knLCAoKSA9PiBtYWtlRHluYW1pY1N0eWxlcyh3cmFwQW5zaTE2LCAnYW5zaTE2JywgYW5zaTJhbnNpLCBmYWxzZSkpO1xuXHRzZXRMYXp5UHJvcGVydHkoc3R5bGVzLmNvbG9yLCAnYW5zaTI1NicsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMjU2LCAnYW5zaTI1NicsIGFuc2kyYW5zaSwgZmFsc2UpKTtcblx0c2V0TGF6eVByb3BlcnR5KHN0eWxlcy5jb2xvciwgJ2Fuc2kxNm0nLCAoKSA9PiBtYWtlRHluYW1pY1N0eWxlcyh3cmFwQW5zaTE2bSwgJ3JnYicsIHJnYjJyZ2IsIGZhbHNlKSk7XG5cdHNldExhenlQcm9wZXJ0eShzdHlsZXMuYmdDb2xvciwgJ2Fuc2knLCAoKSA9PiBtYWtlRHluYW1pY1N0eWxlcyh3cmFwQW5zaTE2LCAnYW5zaTE2JywgYW5zaTJhbnNpLCB0cnVlKSk7XG5cdHNldExhenlQcm9wZXJ0eShzdHlsZXMuYmdDb2xvciwgJ2Fuc2kyNTYnLCAoKSA9PiBtYWtlRHluYW1pY1N0eWxlcyh3cmFwQW5zaTI1NiwgJ2Fuc2kyNTYnLCBhbnNpMmFuc2ksIHRydWUpKTtcblx0c2V0TGF6eVByb3BlcnR5KHN0eWxlcy5iZ0NvbG9yLCAnYW5zaTE2bScsICgpID0+IG1ha2VEeW5hbWljU3R5bGVzKHdyYXBBbnNpMTZtLCAncmdiJywgcmdiMnJnYiwgdHJ1ZSkpO1xuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbi8vIE1ha2UgdGhlIGV4cG9ydCBpbW11dGFibGVcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRnZXQ6IGFzc2VtYmxlU3R5bGVzXG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcHJvY2Vzcy5ocnRpbWUgfHwgaHJ0aW1lXG5cbi8vIHBvbHlmaWwgZm9yIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3dcbnZhciBwZXJmb3JtYW5jZSA9IGdsb2JhbC5wZXJmb3JtYW5jZSB8fCB7fVxudmFyIHBlcmZvcm1hbmNlTm93ID1cbiAgcGVyZm9ybWFuY2Uubm93ICAgICAgICB8fFxuICBwZXJmb3JtYW5jZS5tb3pOb3cgICAgIHx8XG4gIHBlcmZvcm1hbmNlLm1zTm93ICAgICAgfHxcbiAgcGVyZm9ybWFuY2Uub05vdyAgICAgICB8fFxuICBwZXJmb3JtYW5jZS53ZWJraXROb3cgIHx8XG4gIGZ1bmN0aW9uKCl7IHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpIH1cblxuLy8gZ2VuZXJhdGUgdGltZXN0YW1wIG9yIGRlbHRhXG4vLyBzZWUgaHR0cDovL25vZGVqcy5vcmcvYXBpL3Byb2Nlc3MuaHRtbCNwcm9jZXNzX3Byb2Nlc3NfaHJ0aW1lXG5mdW5jdGlvbiBocnRpbWUocHJldmlvdXNUaW1lc3RhbXApe1xuICB2YXIgY2xvY2t0aW1lID0gcGVyZm9ybWFuY2VOb3cuY2FsbChwZXJmb3JtYW5jZSkqMWUtM1xuICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoY2xvY2t0aW1lKVxuICB2YXIgbmFub3NlY29uZHMgPSBNYXRoLmZsb29yKChjbG9ja3RpbWUlMSkqMWU5KVxuICBpZiAocHJldmlvdXNUaW1lc3RhbXApIHtcbiAgICBzZWNvbmRzID0gc2Vjb25kcyAtIHByZXZpb3VzVGltZXN0YW1wWzBdXG4gICAgbmFub3NlY29uZHMgPSBuYW5vc2Vjb25kcyAtIHByZXZpb3VzVGltZXN0YW1wWzFdXG4gICAgaWYgKG5hbm9zZWNvbmRzPDApIHtcbiAgICAgIHNlY29uZHMtLVxuICAgICAgbmFub3NlY29uZHMgKz0gMWU5XG4gICAgfVxuICB9XG4gIHJldHVybiBbc2Vjb25kcyxuYW5vc2Vjb25kc11cbn0iLCIndXNlIHN0cmljdCc7XG5jb25zdCBhbnNpU3R5bGVzID0gcmVxdWlyZSgnYW5zaS1zdHlsZXMnKTtcbmNvbnN0IHtzdGRvdXQ6IHN0ZG91dENvbG9yLCBzdGRlcnI6IHN0ZGVyckNvbG9yfSA9IHJlcXVpcmUoJ3N1cHBvcnRzLWNvbG9yJyk7XG5jb25zdCB7XG5cdHN0cmluZ1JlcGxhY2VBbGwsXG5cdHN0cmluZ0VuY2FzZUNSTEZXaXRoRmlyc3RJbmRleFxufSA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCB7aXNBcnJheX0gPSBBcnJheTtcblxuLy8gYHN1cHBvcnRzQ29sb3IubGV2ZWxgIOKGkiBgYW5zaVN0eWxlcy5jb2xvcltuYW1lXWAgbWFwcGluZ1xuY29uc3QgbGV2ZWxNYXBwaW5nID0gW1xuXHQnYW5zaScsXG5cdCdhbnNpJyxcblx0J2Fuc2kyNTYnLFxuXHQnYW5zaTE2bSdcbl07XG5cbmNvbnN0IHN0eWxlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmNvbnN0IGFwcGx5T3B0aW9ucyA9IChvYmplY3QsIG9wdGlvbnMgPSB7fSkgPT4ge1xuXHRpZiAob3B0aW9ucy5sZXZlbCAmJiAhKE51bWJlci5pc0ludGVnZXIob3B0aW9ucy5sZXZlbCkgJiYgb3B0aW9ucy5sZXZlbCA+PSAwICYmIG9wdGlvbnMubGV2ZWwgPD0gMykpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgbGV2ZWxgIG9wdGlvbiBzaG91bGQgYmUgYW4gaW50ZWdlciBmcm9tIDAgdG8gMycpO1xuXHR9XG5cblx0Ly8gRGV0ZWN0IGxldmVsIGlmIG5vdCBzZXQgbWFudWFsbHlcblx0Y29uc3QgY29sb3JMZXZlbCA9IHN0ZG91dENvbG9yID8gc3Rkb3V0Q29sb3IubGV2ZWwgOiAwO1xuXHRvYmplY3QubGV2ZWwgPSBvcHRpb25zLmxldmVsID09PSB1bmRlZmluZWQgPyBjb2xvckxldmVsIDogb3B0aW9ucy5sZXZlbDtcbn07XG5cbmNsYXNzIENoYWxrQ2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0cnVjdG9yLXJldHVyblxuXHRcdHJldHVybiBjaGFsa0ZhY3Rvcnkob3B0aW9ucyk7XG5cdH1cbn1cblxuY29uc3QgY2hhbGtGYWN0b3J5ID0gb3B0aW9ucyA9PiB7XG5cdGNvbnN0IGNoYWxrID0ge307XG5cdGFwcGx5T3B0aW9ucyhjaGFsaywgb3B0aW9ucyk7XG5cblx0Y2hhbGsudGVtcGxhdGUgPSAoLi4uYXJndW1lbnRzXykgPT4gY2hhbGtUYWcoY2hhbGsudGVtcGxhdGUsIC4uLmFyZ3VtZW50c18pO1xuXG5cdE9iamVjdC5zZXRQcm90b3R5cGVPZihjaGFsaywgQ2hhbGsucHJvdG90eXBlKTtcblx0T2JqZWN0LnNldFByb3RvdHlwZU9mKGNoYWxrLnRlbXBsYXRlLCBjaGFsayk7XG5cblx0Y2hhbGsudGVtcGxhdGUuY29uc3RydWN0b3IgPSAoKSA9PiB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdgY2hhbGsuY29uc3RydWN0b3IoKWAgaXMgZGVwcmVjYXRlZC4gVXNlIGBuZXcgY2hhbGsuSW5zdGFuY2UoKWAgaW5zdGVhZC4nKTtcblx0fTtcblxuXHRjaGFsay50ZW1wbGF0ZS5JbnN0YW5jZSA9IENoYWxrQ2xhc3M7XG5cblx0cmV0dXJuIGNoYWxrLnRlbXBsYXRlO1xufTtcblxuZnVuY3Rpb24gQ2hhbGsob3B0aW9ucykge1xuXHRyZXR1cm4gY2hhbGtGYWN0b3J5KG9wdGlvbnMpO1xufVxuXG5mb3IgKGNvbnN0IFtzdHlsZU5hbWUsIHN0eWxlXSBvZiBPYmplY3QuZW50cmllcyhhbnNpU3R5bGVzKSkge1xuXHRzdHlsZXNbc3R5bGVOYW1lXSA9IHtcblx0XHRnZXQoKSB7XG5cdFx0XHRjb25zdCBidWlsZGVyID0gY3JlYXRlQnVpbGRlcih0aGlzLCBjcmVhdGVTdHlsZXIoc3R5bGUub3Blbiwgc3R5bGUuY2xvc2UsIHRoaXMuX3N0eWxlciksIHRoaXMuX2lzRW1wdHkpO1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHN0eWxlTmFtZSwge3ZhbHVlOiBidWlsZGVyfSk7XG5cdFx0XHRyZXR1cm4gYnVpbGRlcjtcblx0XHR9XG5cdH07XG59XG5cbnN0eWxlcy52aXNpYmxlID0ge1xuXHRnZXQoKSB7XG5cdFx0Y29uc3QgYnVpbGRlciA9IGNyZWF0ZUJ1aWxkZXIodGhpcywgdGhpcy5fc3R5bGVyLCB0cnVlKTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3Zpc2libGUnLCB7dmFsdWU6IGJ1aWxkZXJ9KTtcblx0XHRyZXR1cm4gYnVpbGRlcjtcblx0fVxufTtcblxuY29uc3QgdXNlZE1vZGVscyA9IFsncmdiJywgJ2hleCcsICdrZXl3b3JkJywgJ2hzbCcsICdoc3YnLCAnaHdiJywgJ2Fuc2knLCAnYW5zaTI1NiddO1xuXG5mb3IgKGNvbnN0IG1vZGVsIG9mIHVzZWRNb2RlbHMpIHtcblx0c3R5bGVzW21vZGVsXSA9IHtcblx0XHRnZXQoKSB7XG5cdFx0XHRjb25zdCB7bGV2ZWx9ID0gdGhpcztcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoLi4uYXJndW1lbnRzXykge1xuXHRcdFx0XHRjb25zdCBzdHlsZXIgPSBjcmVhdGVTdHlsZXIoYW5zaVN0eWxlcy5jb2xvcltsZXZlbE1hcHBpbmdbbGV2ZWxdXVttb2RlbF0oLi4uYXJndW1lbnRzXyksIGFuc2lTdHlsZXMuY29sb3IuY2xvc2UsIHRoaXMuX3N0eWxlcik7XG5cdFx0XHRcdHJldHVybiBjcmVhdGVCdWlsZGVyKHRoaXMsIHN0eWxlciwgdGhpcy5faXNFbXB0eSk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fTtcbn1cblxuZm9yIChjb25zdCBtb2RlbCBvZiB1c2VkTW9kZWxzKSB7XG5cdGNvbnN0IGJnTW9kZWwgPSAnYmcnICsgbW9kZWxbMF0udG9VcHBlckNhc2UoKSArIG1vZGVsLnNsaWNlKDEpO1xuXHRzdHlsZXNbYmdNb2RlbF0gPSB7XG5cdFx0Z2V0KCkge1xuXHRcdFx0Y29uc3Qge2xldmVsfSA9IHRoaXM7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3VtZW50c18pIHtcblx0XHRcdFx0Y29uc3Qgc3R5bGVyID0gY3JlYXRlU3R5bGVyKGFuc2lTdHlsZXMuYmdDb2xvcltsZXZlbE1hcHBpbmdbbGV2ZWxdXVttb2RlbF0oLi4uYXJndW1lbnRzXyksIGFuc2lTdHlsZXMuYmdDb2xvci5jbG9zZSwgdGhpcy5fc3R5bGVyKTtcblx0XHRcdFx0cmV0dXJuIGNyZWF0ZUJ1aWxkZXIodGhpcywgc3R5bGVyLCB0aGlzLl9pc0VtcHR5KTtcblx0XHRcdH07XG5cdFx0fVxuXHR9O1xufVxuXG5jb25zdCBwcm90byA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCgpID0+IHt9LCB7XG5cdC4uLnN0eWxlcyxcblx0bGV2ZWw6IHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiB0aGlzLl9nZW5lcmF0b3IubGV2ZWw7XG5cdFx0fSxcblx0XHRzZXQobGV2ZWwpIHtcblx0XHRcdHRoaXMuX2dlbmVyYXRvci5sZXZlbCA9IGxldmVsO1xuXHRcdH1cblx0fVxufSk7XG5cbmNvbnN0IGNyZWF0ZVN0eWxlciA9IChvcGVuLCBjbG9zZSwgcGFyZW50KSA9PiB7XG5cdGxldCBvcGVuQWxsO1xuXHRsZXQgY2xvc2VBbGw7XG5cdGlmIChwYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wZW5BbGwgPSBvcGVuO1xuXHRcdGNsb3NlQWxsID0gY2xvc2U7XG5cdH0gZWxzZSB7XG5cdFx0b3BlbkFsbCA9IHBhcmVudC5vcGVuQWxsICsgb3Blbjtcblx0XHRjbG9zZUFsbCA9IGNsb3NlICsgcGFyZW50LmNsb3NlQWxsO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRvcGVuLFxuXHRcdGNsb3NlLFxuXHRcdG9wZW5BbGwsXG5cdFx0Y2xvc2VBbGwsXG5cdFx0cGFyZW50XG5cdH07XG59O1xuXG5jb25zdCBjcmVhdGVCdWlsZGVyID0gKHNlbGYsIF9zdHlsZXIsIF9pc0VtcHR5KSA9PiB7XG5cdGNvbnN0IGJ1aWxkZXIgPSAoLi4uYXJndW1lbnRzXykgPT4ge1xuXHRcdGlmIChpc0FycmF5KGFyZ3VtZW50c19bMF0pICYmIGlzQXJyYXkoYXJndW1lbnRzX1swXS5yYXcpKSB7XG5cdFx0XHQvLyBDYWxsZWQgYXMgYSB0ZW1wbGF0ZSBsaXRlcmFsLCBmb3IgZXhhbXBsZTogY2hhbGsucmVkYDIgKyAzID0ge2JvbGQgJHsyKzN9fWBcblx0XHRcdHJldHVybiBhcHBseVN0eWxlKGJ1aWxkZXIsIGNoYWxrVGFnKGJ1aWxkZXIsIC4uLmFyZ3VtZW50c18pKTtcblx0XHR9XG5cblx0XHQvLyBTaW5nbGUgYXJndW1lbnQgaXMgaG90IHBhdGgsIGltcGxpY2l0IGNvZXJjaW9uIGlzIGZhc3RlciB0aGFuIGFueXRoaW5nXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uXG5cdFx0cmV0dXJuIGFwcGx5U3R5bGUoYnVpbGRlciwgKGFyZ3VtZW50c18ubGVuZ3RoID09PSAxKSA/ICgnJyArIGFyZ3VtZW50c19bMF0pIDogYXJndW1lbnRzXy5qb2luKCcgJykpO1xuXHR9O1xuXG5cdC8vIFdlIGFsdGVyIHRoZSBwcm90b3R5cGUgYmVjYXVzZSB3ZSBtdXN0IHJldHVybiBhIGZ1bmN0aW9uLCBidXQgdGhlcmUgaXNcblx0Ly8gbm8gd2F5IHRvIGNyZWF0ZSBhIGZ1bmN0aW9uIHdpdGggYSBkaWZmZXJlbnQgcHJvdG90eXBlXG5cdE9iamVjdC5zZXRQcm90b3R5cGVPZihidWlsZGVyLCBwcm90byk7XG5cblx0YnVpbGRlci5fZ2VuZXJhdG9yID0gc2VsZjtcblx0YnVpbGRlci5fc3R5bGVyID0gX3N0eWxlcjtcblx0YnVpbGRlci5faXNFbXB0eSA9IF9pc0VtcHR5O1xuXG5cdHJldHVybiBidWlsZGVyO1xufTtcblxuY29uc3QgYXBwbHlTdHlsZSA9IChzZWxmLCBzdHJpbmcpID0+IHtcblx0aWYgKHNlbGYubGV2ZWwgPD0gMCB8fCAhc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHNlbGYuX2lzRW1wdHkgPyAnJyA6IHN0cmluZztcblx0fVxuXG5cdGxldCBzdHlsZXIgPSBzZWxmLl9zdHlsZXI7XG5cblx0aWYgKHN0eWxlciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHN0cmluZztcblx0fVxuXG5cdGNvbnN0IHtvcGVuQWxsLCBjbG9zZUFsbH0gPSBzdHlsZXI7XG5cdGlmIChzdHJpbmcuaW5kZXhPZignXFx1MDAxQicpICE9PSAtMSkge1xuXHRcdHdoaWxlIChzdHlsZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly8gUmVwbGFjZSBhbnkgaW5zdGFuY2VzIGFscmVhZHkgcHJlc2VudCB3aXRoIGEgcmUtb3BlbmluZyBjb2RlXG5cdFx0XHQvLyBvdGhlcndpc2Ugb25seSB0aGUgcGFydCBvZiB0aGUgc3RyaW5nIHVudGlsIHNhaWQgY2xvc2luZyBjb2RlXG5cdFx0XHQvLyB3aWxsIGJlIGNvbG9yZWQsIGFuZCB0aGUgcmVzdCB3aWxsIHNpbXBseSBiZSAncGxhaW4nLlxuXHRcdFx0c3RyaW5nID0gc3RyaW5nUmVwbGFjZUFsbChzdHJpbmcsIHN0eWxlci5jbG9zZSwgc3R5bGVyLm9wZW4pO1xuXG5cdFx0XHRzdHlsZXIgPSBzdHlsZXIucGFyZW50O1xuXHRcdH1cblx0fVxuXG5cdC8vIFdlIGNhbiBtb3ZlIGJvdGggbmV4dCBhY3Rpb25zIG91dCBvZiBsb29wLCBiZWNhdXNlIHJlbWFpbmluZyBhY3Rpb25zIGluIGxvb3Agd29uJ3QgaGF2ZVxuXHQvLyBhbnkvdmlzaWJsZSBlZmZlY3Qgb24gcGFydHMgd2UgYWRkIGhlcmUuIENsb3NlIHRoZSBzdHlsaW5nIGJlZm9yZSBhIGxpbmVicmVhayBhbmQgcmVvcGVuXG5cdC8vIGFmdGVyIG5leHQgbGluZSB0byBmaXggYSBibGVlZCBpc3N1ZSBvbiBtYWNPUzogaHR0cHM6Ly9naXRodWIuY29tL2NoYWxrL2NoYWxrL3B1bGwvOTJcblx0Y29uc3QgbGZJbmRleCA9IHN0cmluZy5pbmRleE9mKCdcXG4nKTtcblx0aWYgKGxmSW5kZXggIT09IC0xKSB7XG5cdFx0c3RyaW5nID0gc3RyaW5nRW5jYXNlQ1JMRldpdGhGaXJzdEluZGV4KHN0cmluZywgY2xvc2VBbGwsIG9wZW5BbGwsIGxmSW5kZXgpO1xuXHR9XG5cblx0cmV0dXJuIG9wZW5BbGwgKyBzdHJpbmcgKyBjbG9zZUFsbDtcbn07XG5cbmxldCB0ZW1wbGF0ZTtcbmNvbnN0IGNoYWxrVGFnID0gKGNoYWxrLCAuLi5zdHJpbmdzKSA9PiB7XG5cdGNvbnN0IFtmaXJzdFN0cmluZ10gPSBzdHJpbmdzO1xuXG5cdGlmICghaXNBcnJheShmaXJzdFN0cmluZykgfHwgIWlzQXJyYXkoZmlyc3RTdHJpbmcucmF3KSkge1xuXHRcdC8vIElmIGNoYWxrKCkgd2FzIGNhbGxlZCBieSBpdHNlbGYgb3Igd2l0aCBhIHN0cmluZyxcblx0XHQvLyByZXR1cm4gdGhlIHN0cmluZyBpdHNlbGYgYXMgYSBzdHJpbmcuXG5cdFx0cmV0dXJuIHN0cmluZ3Muam9pbignICcpO1xuXHR9XG5cblx0Y29uc3QgYXJndW1lbnRzXyA9IHN0cmluZ3Muc2xpY2UoMSk7XG5cdGNvbnN0IHBhcnRzID0gW2ZpcnN0U3RyaW5nLnJhd1swXV07XG5cblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBmaXJzdFN0cmluZy5sZW5ndGg7IGkrKykge1xuXHRcdHBhcnRzLnB1c2goXG5cdFx0XHRTdHJpbmcoYXJndW1lbnRzX1tpIC0gMV0pLnJlcGxhY2UoL1t7fVxcXFxdL2csICdcXFxcJCYnKSxcblx0XHRcdFN0cmluZyhmaXJzdFN0cmluZy5yYXdbaV0pXG5cdFx0KTtcblx0fVxuXG5cdGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGVtcGxhdGUgPSByZXF1aXJlKCcuL3RlbXBsYXRlcycpO1xuXHR9XG5cblx0cmV0dXJuIHRlbXBsYXRlKGNoYWxrLCBwYXJ0cy5qb2luKCcnKSk7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhDaGFsay5wcm90b3R5cGUsIHN0eWxlcyk7XG5cbmNvbnN0IGNoYWxrID0gQ2hhbGsoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG5jaGFsay5zdXBwb3J0c0NvbG9yID0gc3Rkb3V0Q29sb3I7XG5jaGFsay5zdGRlcnIgPSBDaGFsayh7bGV2ZWw6IHN0ZGVyckNvbG9yID8gc3RkZXJyQ29sb3IubGV2ZWwgOiAwfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuY2hhbGsuc3RkZXJyLnN1cHBvcnRzQ29sb3IgPSBzdGRlcnJDb2xvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBjaGFsaztcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IFRFTVBMQVRFX1JFR0VYID0gLyg/OlxcXFwodSg/OlthLWZcXGRdezR9fFxce1thLWZcXGRdezEsNn1cXH0pfHhbYS1mXFxkXXsyfXwuKSl8KD86XFx7KH4pPyhcXHcrKD86XFwoW14pXSpcXCkpPyg/OlxcLlxcdysoPzpcXChbXildKlxcKSk/KSopKD86WyBcXHRdfCg/PVxccj9cXG4pKSl8KFxcfSl8KCg/Oi58W1xcclxcblxcZl0pKz8pL2dpO1xuY29uc3QgU1RZTEVfUkVHRVggPSAvKD86XnxcXC4pKFxcdyspKD86XFwoKFteKV0qKVxcKSk/L2c7XG5jb25zdCBTVFJJTkdfUkVHRVggPSAvXihbJ1wiXSkoKD86XFxcXC58KD8hXFwxKVteXFxcXF0pKilcXDEkLztcbmNvbnN0IEVTQ0FQRV9SRUdFWCA9IC9cXFxcKHUoPzpbYS1mXFxkXXs0fXx7W2EtZlxcZF17MSw2fX0pfHhbYS1mXFxkXXsyfXwuKXwoW15cXFxcXSkvZ2k7XG5cbmNvbnN0IEVTQ0FQRVMgPSBuZXcgTWFwKFtcblx0WyduJywgJ1xcbiddLFxuXHRbJ3InLCAnXFxyJ10sXG5cdFsndCcsICdcXHQnXSxcblx0WydiJywgJ1xcYiddLFxuXHRbJ2YnLCAnXFxmJ10sXG5cdFsndicsICdcXHYnXSxcblx0WycwJywgJ1xcMCddLFxuXHRbJ1xcXFwnLCAnXFxcXCddLFxuXHRbJ2UnLCAnXFx1MDAxQiddLFxuXHRbJ2EnLCAnXFx1MDAwNyddXG5dKTtcblxuZnVuY3Rpb24gdW5lc2NhcGUoYykge1xuXHRjb25zdCB1ID0gY1swXSA9PT0gJ3UnO1xuXHRjb25zdCBicmFja2V0ID0gY1sxXSA9PT0gJ3snO1xuXG5cdGlmICgodSAmJiAhYnJhY2tldCAmJiBjLmxlbmd0aCA9PT0gNSkgfHwgKGNbMF0gPT09ICd4JyAmJiBjLmxlbmd0aCA9PT0gMykpIHtcblx0XHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChjLnNsaWNlKDEpLCAxNikpO1xuXHR9XG5cblx0aWYgKHUgJiYgYnJhY2tldCkge1xuXHRcdHJldHVybiBTdHJpbmcuZnJvbUNvZGVQb2ludChwYXJzZUludChjLnNsaWNlKDIsIC0xKSwgMTYpKTtcblx0fVxuXG5cdHJldHVybiBFU0NBUEVTLmdldChjKSB8fCBjO1xufVxuXG5mdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyhuYW1lLCBhcmd1bWVudHNfKSB7XG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcblx0Y29uc3QgY2h1bmtzID0gYXJndW1lbnRzXy50cmltKCkuc3BsaXQoL1xccyosXFxzKi9nKTtcblx0bGV0IG1hdGNoZXM7XG5cblx0Zm9yIChjb25zdCBjaHVuayBvZiBjaHVua3MpIHtcblx0XHRjb25zdCBudW1iZXIgPSBOdW1iZXIoY2h1bmspO1xuXHRcdGlmICghTnVtYmVyLmlzTmFOKG51bWJlcikpIHtcblx0XHRcdHJlc3VsdHMucHVzaChudW1iZXIpO1xuXHRcdH0gZWxzZSBpZiAoKG1hdGNoZXMgPSBjaHVuay5tYXRjaChTVFJJTkdfUkVHRVgpKSkge1xuXHRcdFx0cmVzdWx0cy5wdXNoKG1hdGNoZXNbMl0ucmVwbGFjZShFU0NBUEVfUkVHRVgsIChtLCBlc2NhcGUsIGNoYXJhY3RlcikgPT4gZXNjYXBlID8gdW5lc2NhcGUoZXNjYXBlKSA6IGNoYXJhY3RlcikpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgQ2hhbGsgdGVtcGxhdGUgc3R5bGUgYXJndW1lbnQ6ICR7Y2h1bmt9IChpbiBzdHlsZSAnJHtuYW1lfScpYCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlU3R5bGUoc3R5bGUpIHtcblx0U1RZTEVfUkVHRVgubGFzdEluZGV4ID0gMDtcblxuXHRjb25zdCByZXN1bHRzID0gW107XG5cdGxldCBtYXRjaGVzO1xuXG5cdHdoaWxlICgobWF0Y2hlcyA9IFNUWUxFX1JFR0VYLmV4ZWMoc3R5bGUpKSAhPT0gbnVsbCkge1xuXHRcdGNvbnN0IG5hbWUgPSBtYXRjaGVzWzFdO1xuXG5cdFx0aWYgKG1hdGNoZXNbMl0pIHtcblx0XHRcdGNvbnN0IGFyZ3MgPSBwYXJzZUFyZ3VtZW50cyhuYW1lLCBtYXRjaGVzWzJdKTtcblx0XHRcdHJlc3VsdHMucHVzaChbbmFtZV0uY29uY2F0KGFyZ3MpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0cy5wdXNoKFtuYW1lXSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkU3R5bGUoY2hhbGssIHN0eWxlcykge1xuXHRjb25zdCBlbmFibGVkID0ge307XG5cblx0Zm9yIChjb25zdCBsYXllciBvZiBzdHlsZXMpIHtcblx0XHRmb3IgKGNvbnN0IHN0eWxlIG9mIGxheWVyLnN0eWxlcykge1xuXHRcdFx0ZW5hYmxlZFtzdHlsZVswXV0gPSBsYXllci5pbnZlcnNlID8gbnVsbCA6IHN0eWxlLnNsaWNlKDEpO1xuXHRcdH1cblx0fVxuXG5cdGxldCBjdXJyZW50ID0gY2hhbGs7XG5cdGZvciAoY29uc3QgW3N0eWxlTmFtZSwgc3R5bGVzXSBvZiBPYmplY3QuZW50cmllcyhlbmFibGVkKSkge1xuXHRcdGlmICghQXJyYXkuaXNBcnJheShzdHlsZXMpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoIShzdHlsZU5hbWUgaW4gY3VycmVudCkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5rbm93biBDaGFsayBzdHlsZTogJHtzdHlsZU5hbWV9YCk7XG5cdFx0fVxuXG5cdFx0Y3VycmVudCA9IHN0eWxlcy5sZW5ndGggPiAwID8gY3VycmVudFtzdHlsZU5hbWVdKC4uLnN0eWxlcykgOiBjdXJyZW50W3N0eWxlTmFtZV07XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSAoY2hhbGssIHRlbXBvcmFyeSkgPT4ge1xuXHRjb25zdCBzdHlsZXMgPSBbXTtcblx0Y29uc3QgY2h1bmtzID0gW107XG5cdGxldCBjaHVuayA9IFtdO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5cdHRlbXBvcmFyeS5yZXBsYWNlKFRFTVBMQVRFX1JFR0VYLCAobSwgZXNjYXBlQ2hhcmFjdGVyLCBpbnZlcnNlLCBzdHlsZSwgY2xvc2UsIGNoYXJhY3RlcikgPT4ge1xuXHRcdGlmIChlc2NhcGVDaGFyYWN0ZXIpIHtcblx0XHRcdGNodW5rLnB1c2godW5lc2NhcGUoZXNjYXBlQ2hhcmFjdGVyKSk7XG5cdFx0fSBlbHNlIGlmIChzdHlsZSkge1xuXHRcdFx0Y29uc3Qgc3RyaW5nID0gY2h1bmsuam9pbignJyk7XG5cdFx0XHRjaHVuayA9IFtdO1xuXHRcdFx0Y2h1bmtzLnB1c2goc3R5bGVzLmxlbmd0aCA9PT0gMCA/IHN0cmluZyA6IGJ1aWxkU3R5bGUoY2hhbGssIHN0eWxlcykoc3RyaW5nKSk7XG5cdFx0XHRzdHlsZXMucHVzaCh7aW52ZXJzZSwgc3R5bGVzOiBwYXJzZVN0eWxlKHN0eWxlKX0pO1xuXHRcdH0gZWxzZSBpZiAoY2xvc2UpIHtcblx0XHRcdGlmIChzdHlsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignRm91bmQgZXh0cmFuZW91cyB9IGluIENoYWxrIHRlbXBsYXRlIGxpdGVyYWwnKTtcblx0XHRcdH1cblxuXHRcdFx0Y2h1bmtzLnB1c2goYnVpbGRTdHlsZShjaGFsaywgc3R5bGVzKShjaHVuay5qb2luKCcnKSkpO1xuXHRcdFx0Y2h1bmsgPSBbXTtcblx0XHRcdHN0eWxlcy5wb3AoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2h1bmsucHVzaChjaGFyYWN0ZXIpO1xuXHRcdH1cblx0fSk7XG5cblx0Y2h1bmtzLnB1c2goY2h1bmsuam9pbignJykpO1xuXG5cdGlmIChzdHlsZXMubGVuZ3RoID4gMCkge1xuXHRcdGNvbnN0IGVyck1lc3NhZ2UgPSBgQ2hhbGsgdGVtcGxhdGUgbGl0ZXJhbCBpcyBtaXNzaW5nICR7c3R5bGVzLmxlbmd0aH0gY2xvc2luZyBicmFja2V0JHtzdHlsZXMubGVuZ3RoID09PSAxID8gJycgOiAncyd9IChcXGB9XFxgKWA7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGVyck1lc3NhZ2UpO1xuXHR9XG5cblx0cmV0dXJuIGNodW5rcy5qb2luKCcnKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHN0cmluZ1JlcGxhY2VBbGwgPSAoc3RyaW5nLCBzdWJzdHJpbmcsIHJlcGxhY2VyKSA9PiB7XG5cdGxldCBpbmRleCA9IHN0cmluZy5pbmRleE9mKHN1YnN0cmluZyk7XG5cdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRyZXR1cm4gc3RyaW5nO1xuXHR9XG5cblx0Y29uc3Qgc3Vic3RyaW5nTGVuZ3RoID0gc3Vic3RyaW5nLmxlbmd0aDtcblx0bGV0IGVuZEluZGV4ID0gMDtcblx0bGV0IHJldHVyblZhbHVlID0gJyc7XG5cdGRvIHtcblx0XHRyZXR1cm5WYWx1ZSArPSBzdHJpbmcuc3Vic3RyKGVuZEluZGV4LCBpbmRleCAtIGVuZEluZGV4KSArIHN1YnN0cmluZyArIHJlcGxhY2VyO1xuXHRcdGVuZEluZGV4ID0gaW5kZXggKyBzdWJzdHJpbmdMZW5ndGg7XG5cdFx0aW5kZXggPSBzdHJpbmcuaW5kZXhPZihzdWJzdHJpbmcsIGVuZEluZGV4KTtcblx0fSB3aGlsZSAoaW5kZXggIT09IC0xKTtcblxuXHRyZXR1cm5WYWx1ZSArPSBzdHJpbmcuc3Vic3RyKGVuZEluZGV4KTtcblx0cmV0dXJuIHJldHVyblZhbHVlO1xufTtcblxuY29uc3Qgc3RyaW5nRW5jYXNlQ1JMRldpdGhGaXJzdEluZGV4ID0gKHN0cmluZywgcHJlZml4LCBwb3N0Zml4LCBpbmRleCkgPT4ge1xuXHRsZXQgZW5kSW5kZXggPSAwO1xuXHRsZXQgcmV0dXJuVmFsdWUgPSAnJztcblx0ZG8ge1xuXHRcdGNvbnN0IGdvdENSID0gc3RyaW5nW2luZGV4IC0gMV0gPT09ICdcXHInO1xuXHRcdHJldHVyblZhbHVlICs9IHN0cmluZy5zdWJzdHIoZW5kSW5kZXgsIChnb3RDUiA/IGluZGV4IC0gMSA6IGluZGV4KSAtIGVuZEluZGV4KSArIHByZWZpeCArIChnb3RDUiA/ICdcXHJcXG4nIDogJ1xcbicpICsgcG9zdGZpeDtcblx0XHRlbmRJbmRleCA9IGluZGV4ICsgMTtcblx0XHRpbmRleCA9IHN0cmluZy5pbmRleE9mKCdcXG4nLCBlbmRJbmRleCk7XG5cdH0gd2hpbGUgKGluZGV4ICE9PSAtMSk7XG5cblx0cmV0dXJuVmFsdWUgKz0gc3RyaW5nLnN1YnN0cihlbmRJbmRleCk7XG5cdHJldHVybiByZXR1cm5WYWx1ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRzdHJpbmdSZXBsYWNlQWxsLFxuXHRzdHJpbmdFbmNhc2VDUkxGV2l0aEZpcnN0SW5kZXhcbn07XG4iLCIvKiBNSVQgbGljZW5zZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG5jb25zdCBjc3NLZXl3b3JkcyA9IHJlcXVpcmUoJ2NvbG9yLW5hbWUnKTtcblxuLy8gTk9URTogY29udmVyc2lvbnMgc2hvdWxkIG9ubHkgcmV0dXJuIHByaW1pdGl2ZSB2YWx1ZXMgKGkuZS4gYXJyYXlzLCBvclxuLy8gICAgICAgdmFsdWVzIHRoYXQgZ2l2ZSBjb3JyZWN0IGB0eXBlb2ZgIHJlc3VsdHMpLlxuLy8gICAgICAgZG8gbm90IHVzZSBib3ggdmFsdWVzIHR5cGVzIChpLmUuIE51bWJlcigpLCBTdHJpbmcoKSwgZXRjLilcblxuY29uc3QgcmV2ZXJzZUtleXdvcmRzID0ge307XG5mb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhjc3NLZXl3b3JkcykpIHtcblx0cmV2ZXJzZUtleXdvcmRzW2Nzc0tleXdvcmRzW2tleV1dID0ga2V5O1xufVxuXG5jb25zdCBjb252ZXJ0ID0ge1xuXHRyZ2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAncmdiJ30sXG5cdGhzbDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc2wnfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzdid9LFxuXHRod2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHdiJ30sXG5cdGNteWs6IHtjaGFubmVsczogNCwgbGFiZWxzOiAnY215ayd9LFxuXHR4eXo6IHtjaGFubmVsczogMywgbGFiZWxzOiAneHl6J30sXG5cdGxhYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsYWInfSxcblx0bGNoOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xjaCd9LFxuXHRoZXg6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2hleCddfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsna2V5d29yZCddfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMTYnXX0sXG5cdGFuc2kyNTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kyNTYnXX0sXG5cdGhjZzoge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsnaCcsICdjJywgJ2cnXX0sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydyMTYnLCAnZzE2JywgJ2IxNiddfSxcblx0Z3JheToge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnZ3JheSddfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuXG4vLyBIaWRlIC5jaGFubmVscyBhbmQgLmxhYmVscyBwcm9wZXJ0aWVzXG5mb3IgKGNvbnN0IG1vZGVsIG9mIE9iamVjdC5rZXlzKGNvbnZlcnQpKSB7XG5cdGlmICghKCdjaGFubmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHR9XG5cblx0aWYgKCEoJ2xhYmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWwgbGFiZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHR9XG5cblx0aWYgKGNvbnZlcnRbbW9kZWxdLmxhYmVscy5sZW5ndGggIT09IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdjaGFubmVsIGFuZCBsYWJlbCBjb3VudHMgbWlzbWF0Y2g6ICcgKyBtb2RlbCk7XG5cdH1cblxuXHRjb25zdCB7Y2hhbm5lbHMsIGxhYmVsc30gPSBjb252ZXJ0W21vZGVsXTtcblx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRkZWxldGUgY29udmVydFttb2RlbF0ubGFiZWxzO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBsYWJlbHN9KTtcbn1cblxuY29udmVydC5yZ2IuaHNsID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCByID0gcmdiWzBdIC8gMjU1O1xuXHRjb25zdCBnID0gcmdiWzFdIC8gMjU1O1xuXHRjb25zdCBiID0gcmdiWzJdIC8gMjU1O1xuXHRjb25zdCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0Y29uc3QgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdGNvbnN0IGRlbHRhID0gbWF4IC0gbWluO1xuXHRsZXQgaDtcblx0bGV0IHM7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRjb25zdCBsID0gKG1pbiArIG1heCkgLyAyO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2UgaWYgKGwgPD0gMC41KSB7XG5cdFx0cyA9IGRlbHRhIC8gKG1heCArIG1pbik7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pO1xuXHR9XG5cblx0cmV0dXJuIFtoLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmhzdiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0bGV0IHJkaWY7XG5cdGxldCBnZGlmO1xuXHRsZXQgYmRpZjtcblx0bGV0IGg7XG5cdGxldCBzO1xuXG5cdGNvbnN0IHIgPSByZ2JbMF0gLyAyNTU7XG5cdGNvbnN0IGcgPSByZ2JbMV0gLyAyNTU7XG5cdGNvbnN0IGIgPSByZ2JbMl0gLyAyNTU7XG5cdGNvbnN0IHYgPSBNYXRoLm1heChyLCBnLCBiKTtcblx0Y29uc3QgZGlmZiA9IHYgLSBNYXRoLm1pbihyLCBnLCBiKTtcblx0Y29uc3QgZGlmZmMgPSBmdW5jdGlvbiAoYykge1xuXHRcdHJldHVybiAodiAtIGMpIC8gNiAvIGRpZmYgKyAxIC8gMjtcblx0fTtcblxuXHRpZiAoZGlmZiA9PT0gMCkge1xuXHRcdGggPSAwO1xuXHRcdHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkaWZmIC8gdjtcblx0XHRyZGlmID0gZGlmZmMocik7XG5cdFx0Z2RpZiA9IGRpZmZjKGcpO1xuXHRcdGJkaWYgPSBkaWZmYyhiKTtcblxuXHRcdGlmIChyID09PSB2KSB7XG5cdFx0XHRoID0gYmRpZiAtIGdkaWY7XG5cdFx0fSBlbHNlIGlmIChnID09PSB2KSB7XG5cdFx0XHRoID0gKDEgLyAzKSArIHJkaWYgLSBiZGlmO1xuXHRcdH0gZWxzZSBpZiAoYiA9PT0gdikge1xuXHRcdFx0aCA9ICgyIC8gMykgKyBnZGlmIC0gcmRpZjtcblx0XHR9XG5cblx0XHRpZiAoaCA8IDApIHtcblx0XHRcdGggKz0gMTtcblx0XHR9IGVsc2UgaWYgKGggPiAxKSB7XG5cdFx0XHRoIC09IDE7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIFtcblx0XHRoICogMzYwLFxuXHRcdHMgKiAxMDAsXG5cdFx0diAqIDEwMFxuXHRdO1xufTtcblxuY29udmVydC5yZ2IuaHdiID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCByID0gcmdiWzBdO1xuXHRjb25zdCBnID0gcmdiWzFdO1xuXHRsZXQgYiA9IHJnYlsyXTtcblx0Y29uc3QgaCA9IGNvbnZlcnQucmdiLmhzbChyZ2IpWzBdO1xuXHRjb25zdCB3ID0gMSAvIDI1NSAqIE1hdGgubWluKHIsIE1hdGgubWluKGcsIGIpKTtcblxuXHRiID0gMSAtIDEgLyAyNTUgKiBNYXRoLm1heChyLCBNYXRoLm1heChnLCBiKSk7XG5cblx0cmV0dXJuIFtoLCB3ICogMTAwLCBiICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmNteWsgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHIgPSByZ2JbMF0gLyAyNTU7XG5cdGNvbnN0IGcgPSByZ2JbMV0gLyAyNTU7XG5cdGNvbnN0IGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Y29uc3QgayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuXHRjb25zdCBjID0gKDEgLSByIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdGNvbnN0IG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0Y29uc3QgeSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXG5cdHJldHVybiBbYyAqIDEwMCwgbSAqIDEwMCwgeSAqIDEwMCwgayAqIDEwMF07XG59O1xuXG5mdW5jdGlvbiBjb21wYXJhdGl2ZURpc3RhbmNlKHgsIHkpIHtcblx0Lypcblx0XHRTZWUgaHR0cHM6Ly9lbi5tLndpa2lwZWRpYS5vcmcvd2lraS9FdWNsaWRlYW5fZGlzdGFuY2UjU3F1YXJlZF9FdWNsaWRlYW5fZGlzdGFuY2Vcblx0Ki9cblx0cmV0dXJuIChcblx0XHQoKHhbMF0gLSB5WzBdKSAqKiAyKSArXG5cdFx0KCh4WzFdIC0geVsxXSkgKiogMikgK1xuXHRcdCgoeFsyXSAtIHlbMl0pICoqIDIpXG5cdCk7XG59XG5cbmNvbnZlcnQucmdiLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHJldmVyc2VkID0gcmV2ZXJzZUtleXdvcmRzW3JnYl07XG5cdGlmIChyZXZlcnNlZCkge1xuXHRcdHJldHVybiByZXZlcnNlZDtcblx0fVxuXG5cdGxldCBjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gSW5maW5pdHk7XG5cdGxldCBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG5cblx0Zm9yIChjb25zdCBrZXl3b3JkIG9mIE9iamVjdC5rZXlzKGNzc0tleXdvcmRzKSkge1xuXHRcdGNvbnN0IHZhbHVlID0gY3NzS2V5d29yZHNba2V5d29yZF07XG5cblx0XHQvLyBDb21wdXRlIGNvbXBhcmF0aXZlIGRpc3RhbmNlXG5cdFx0Y29uc3QgZGlzdGFuY2UgPSBjb21wYXJhdGl2ZURpc3RhbmNlKHJnYiwgdmFsdWUpO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgaXRzIGxlc3MsIGlmIHNvIHNldCBhcyBjbG9zZXN0XG5cdFx0aWYgKGRpc3RhbmNlIDwgY3VycmVudENsb3Nlc3REaXN0YW5jZSkge1xuXHRcdFx0Y3VycmVudENsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0Y3VycmVudENsb3Nlc3RLZXl3b3JkID0ga2V5d29yZDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudENsb3Nlc3RLZXl3b3JkO1xufTtcblxuY29udmVydC5rZXl3b3JkLnJnYiA9IGZ1bmN0aW9uIChrZXl3b3JkKSB7XG5cdHJldHVybiBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcbn07XG5cbmNvbnZlcnQucmdiLnh5eiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0bGV0IHIgPSByZ2JbMF0gLyAyNTU7XG5cdGxldCBnID0gcmdiWzFdIC8gMjU1O1xuXHRsZXQgYiA9IHJnYlsyXSAvIDI1NTtcblxuXHQvLyBBc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDQwNDUgPyAoKChyICsgMC4wNTUpIC8gMS4wNTUpICoqIDIuNCkgOiAociAvIDEyLjkyKTtcblx0ZyA9IGcgPiAwLjA0MDQ1ID8gKCgoZyArIDAuMDU1KSAvIDEuMDU1KSAqKiAyLjQpIDogKGcgLyAxMi45Mik7XG5cdGIgPSBiID4gMC4wNDA0NSA/ICgoKGIgKyAwLjA1NSkgLyAxLjA1NSkgKiogMi40KSA6IChiIC8gMTIuOTIpO1xuXG5cdGNvbnN0IHggPSAociAqIDAuNDEyNCkgKyAoZyAqIDAuMzU3NikgKyAoYiAqIDAuMTgwNSk7XG5cdGNvbnN0IHkgPSAociAqIDAuMjEyNikgKyAoZyAqIDAuNzE1MikgKyAoYiAqIDAuMDcyMik7XG5cdGNvbnN0IHogPSAociAqIDAuMDE5MykgKyAoZyAqIDAuMTE5MikgKyAoYiAqIDAuOTUwNSk7XG5cblx0cmV0dXJuIFt4ICogMTAwLCB5ICogMTAwLCB6ICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmxhYiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0Y29uc3QgeHl6ID0gY29udmVydC5yZ2IueHl6KHJnYik7XG5cdGxldCB4ID0geHl6WzBdO1xuXHRsZXQgeSA9IHh5elsxXTtcblx0bGV0IHogPSB4eXpbMl07XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/ICh4ICoqICgxIC8gMykpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gKHkgKiogKDEgLyAzKSkgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyAoeiAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRjb25zdCBsID0gKDExNiAqIHkpIC0gMTY7XG5cdGNvbnN0IGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRjb25zdCBiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5oc2wucmdiID0gZnVuY3Rpb24gKGhzbCkge1xuXHRjb25zdCBoID0gaHNsWzBdIC8gMzYwO1xuXHRjb25zdCBzID0gaHNsWzFdIC8gMTAwO1xuXHRjb25zdCBsID0gaHNsWzJdIC8gMTAwO1xuXHRsZXQgdDI7XG5cdGxldCB0Mztcblx0bGV0IHZhbDtcblxuXHRpZiAocyA9PT0gMCkge1xuXHRcdHZhbCA9IGwgKiAyNTU7XG5cdFx0cmV0dXJuIFt2YWwsIHZhbCwgdmFsXTtcblx0fVxuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0dDIgPSBsICogKDEgKyBzKTtcblx0fSBlbHNlIHtcblx0XHR0MiA9IGwgKyBzIC0gbCAqIHM7XG5cdH1cblxuXHRjb25zdCB0MSA9IDIgKiBsIC0gdDI7XG5cblx0Y29uc3QgcmdiID0gWzAsIDAsIDBdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHQzID0gaCArIDEgLyAzICogLShpIC0gMSk7XG5cdFx0aWYgKHQzIDwgMCkge1xuXHRcdFx0dDMrKztcblx0XHR9XG5cblx0XHRpZiAodDMgPiAxKSB7XG5cdFx0XHR0My0tO1xuXHRcdH1cblxuXHRcdGlmICg2ICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0Mztcblx0XHR9IGVsc2UgaWYgKDIgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQyO1xuXHRcdH0gZWxzZSBpZiAoMyAqIHQzIDwgMikge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWwgPSB0MTtcblx0XHR9XG5cblx0XHRyZ2JbaV0gPSB2YWwgKiAyNTU7XG5cdH1cblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY29udmVydC5oc2wuaHN2ID0gZnVuY3Rpb24gKGhzbCkge1xuXHRjb25zdCBoID0gaHNsWzBdO1xuXHRsZXQgcyA9IGhzbFsxXSAvIDEwMDtcblx0bGV0IGwgPSBoc2xbMl0gLyAxMDA7XG5cdGxldCBzbWluID0gcztcblx0Y29uc3QgbG1pbiA9IE1hdGgubWF4KGwsIDAuMDEpO1xuXG5cdGwgKj0gMjtcblx0cyAqPSAobCA8PSAxKSA/IGwgOiAyIC0gbDtcblx0c21pbiAqPSBsbWluIDw9IDEgPyBsbWluIDogMiAtIGxtaW47XG5cdGNvbnN0IHYgPSAobCArIHMpIC8gMjtcblx0Y29uc3Qgc3YgPSBsID09PSAwID8gKDIgKiBzbWluKSAvIChsbWluICsgc21pbikgOiAoMiAqIHMpIC8gKGwgKyBzKTtcblxuXHRyZXR1cm4gW2gsIHN2ICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LnJnYiA9IGZ1bmN0aW9uIChoc3YpIHtcblx0Y29uc3QgaCA9IGhzdlswXSAvIDYwO1xuXHRjb25zdCBzID0gaHN2WzFdIC8gMTAwO1xuXHRsZXQgdiA9IGhzdlsyXSAvIDEwMDtcblx0Y29uc3QgaGkgPSBNYXRoLmZsb29yKGgpICUgNjtcblxuXHRjb25zdCBmID0gaCAtIE1hdGguZmxvb3IoaCk7XG5cdGNvbnN0IHAgPSAyNTUgKiB2ICogKDEgLSBzKTtcblx0Y29uc3QgcSA9IDI1NSAqIHYgKiAoMSAtIChzICogZikpO1xuXHRjb25zdCB0ID0gMjU1ICogdiAqICgxIC0gKHMgKiAoMSAtIGYpKSk7XG5cdHYgKj0gMjU1O1xuXG5cdHN3aXRjaCAoaGkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gW3YsIHQsIHBdO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBbcSwgdiwgcF07XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFtwLCB2LCB0XTtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gW3AsIHEsIHZdO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiBbdCwgcCwgdl07XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIFt2LCBwLCBxXTtcblx0fVxufTtcblxuY29udmVydC5oc3YuaHNsID0gZnVuY3Rpb24gKGhzdikge1xuXHRjb25zdCBoID0gaHN2WzBdO1xuXHRjb25zdCBzID0gaHN2WzFdIC8gMTAwO1xuXHRjb25zdCB2ID0gaHN2WzJdIC8gMTAwO1xuXHRjb25zdCB2bWluID0gTWF0aC5tYXgodiwgMC4wMSk7XG5cdGxldCBzbDtcblx0bGV0IGw7XG5cblx0bCA9ICgyIC0gcykgKiB2O1xuXHRjb25zdCBsbWluID0gKDIgLSBzKSAqIHZtaW47XG5cdHNsID0gcyAqIHZtaW47XG5cdHNsIC89IChsbWluIDw9IDEpID8gbG1pbiA6IDIgLSBsbWluO1xuXHRzbCA9IHNsIHx8IDA7XG5cdGwgLz0gMjtcblxuXHRyZXR1cm4gW2gsIHNsICogMTAwLCBsICogMTAwXTtcbn07XG5cbi8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1jb2xvci8jaHdiLXRvLXJnYlxuY29udmVydC5od2IucmdiID0gZnVuY3Rpb24gKGh3Yikge1xuXHRjb25zdCBoID0gaHdiWzBdIC8gMzYwO1xuXHRsZXQgd2ggPSBod2JbMV0gLyAxMDA7XG5cdGxldCBibCA9IGh3YlsyXSAvIDEwMDtcblx0Y29uc3QgcmF0aW8gPSB3aCArIGJsO1xuXHRsZXQgZjtcblxuXHQvLyBXaCArIGJsIGNhbnQgYmUgPiAxXG5cdGlmIChyYXRpbyA+IDEpIHtcblx0XHR3aCAvPSByYXRpbztcblx0XHRibCAvPSByYXRpbztcblx0fVxuXG5cdGNvbnN0IGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcblx0Y29uc3QgdiA9IDEgLSBibDtcblx0ZiA9IDYgKiBoIC0gaTtcblxuXHRpZiAoKGkgJiAweDAxKSAhPT0gMCkge1xuXHRcdGYgPSAxIC0gZjtcblx0fVxuXG5cdGNvbnN0IG4gPSB3aCArIGYgKiAodiAtIHdoKTsgLy8gTGluZWFyIGludGVycG9sYXRpb25cblxuXHRsZXQgcjtcblx0bGV0IGc7XG5cdGxldCBiO1xuXHQvKiBlc2xpbnQtZGlzYWJsZSBtYXgtc3RhdGVtZW50cy1wZXItbGluZSxuby1tdWx0aS1zcGFjZXMgKi9cblx0c3dpdGNoIChpKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRjYXNlIDY6XG5cdFx0Y2FzZSAwOiByID0gdjsgIGcgPSBuOyAgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDE6IHIgPSBuOyAgZyA9IHY7ICBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMjogciA9IHdoOyBnID0gdjsgIGIgPSBuOyBicmVhaztcblx0XHRjYXNlIDM6IHIgPSB3aDsgZyA9IG47ICBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA0OiByID0gbjsgIGcgPSB3aDsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNTogciA9IHY7ICBnID0gd2g7IGIgPSBuOyBicmVhaztcblx0fVxuXHQvKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzLXBlci1saW5lLG5vLW11bHRpLXNwYWNlcyAqL1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmNteWsucmdiID0gZnVuY3Rpb24gKGNteWspIHtcblx0Y29uc3QgYyA9IGNteWtbMF0gLyAxMDA7XG5cdGNvbnN0IG0gPSBjbXlrWzFdIC8gMTAwO1xuXHRjb25zdCB5ID0gY215a1syXSAvIDEwMDtcblx0Y29uc3QgayA9IGNteWtbM10gLyAxMDA7XG5cblx0Y29uc3QgciA9IDEgLSBNYXRoLm1pbigxLCBjICogKDEgLSBrKSArIGspO1xuXHRjb25zdCBnID0gMSAtIE1hdGgubWluKDEsIG0gKiAoMSAtIGspICsgayk7XG5cdGNvbnN0IGIgPSAxIC0gTWF0aC5taW4oMSwgeSAqICgxIC0gaykgKyBrKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoucmdiID0gZnVuY3Rpb24gKHh5eikge1xuXHRjb25zdCB4ID0geHl6WzBdIC8gMTAwO1xuXHRjb25zdCB5ID0geHl6WzFdIC8gMTAwO1xuXHRjb25zdCB6ID0geHl6WzJdIC8gMTAwO1xuXHRsZXQgcjtcblx0bGV0IGc7XG5cdGxldCBiO1xuXG5cdHIgPSAoeCAqIDMuMjQwNikgKyAoeSAqIC0xLjUzNzIpICsgKHogKiAtMC40OTg2KTtcblx0ZyA9ICh4ICogLTAuOTY4OSkgKyAoeSAqIDEuODc1OCkgKyAoeiAqIDAuMDQxNSk7XG5cdGIgPSAoeCAqIDAuMDU1NykgKyAoeSAqIC0wLjIwNDApICsgKHogKiAxLjA1NzApO1xuXG5cdC8vIEFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogKHIgKiogKDEuMCAvIDIuNCkpKSAtIDAuMDU1KVxuXHRcdDogciAqIDEyLjkyO1xuXG5cdGcgPSBnID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogKGcgKiogKDEuMCAvIDIuNCkpKSAtIDAuMDU1KVxuXHRcdDogZyAqIDEyLjkyO1xuXG5cdGIgPSBiID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogKGIgKiogKDEuMCAvIDIuNCkpKSAtIDAuMDU1KVxuXHRcdDogYiAqIDEyLjkyO1xuXG5cdHIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCByKSwgMSk7XG5cdGcgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBnKSwgMSk7XG5cdGIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBiKSwgMSk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LmxhYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0bGV0IHggPSB4eXpbMF07XG5cdGxldCB5ID0geHl6WzFdO1xuXHRsZXQgeiA9IHh5elsyXTtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gKHggKiogKDEgLyAzKSkgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyAoeSAqKiAoMSAvIDMpKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/ICh6ICoqICgxIC8gMykpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGNvbnN0IGwgPSAoMTE2ICogeSkgLSAxNjtcblx0Y29uc3QgYSA9IDUwMCAqICh4IC0geSk7XG5cdGNvbnN0IGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmxhYi54eXogPSBmdW5jdGlvbiAobGFiKSB7XG5cdGNvbnN0IGwgPSBsYWJbMF07XG5cdGNvbnN0IGEgPSBsYWJbMV07XG5cdGNvbnN0IGIgPSBsYWJbMl07XG5cdGxldCB4O1xuXHRsZXQgeTtcblx0bGV0IHo7XG5cblx0eSA9IChsICsgMTYpIC8gMTE2O1xuXHR4ID0gYSAvIDUwMCArIHk7XG5cdHogPSB5IC0gYiAvIDIwMDtcblxuXHRjb25zdCB5MiA9IHkgKiogMztcblx0Y29uc3QgeDIgPSB4ICoqIDM7XG5cdGNvbnN0IHoyID0geiAqKiAzO1xuXHR5ID0geTIgPiAwLjAwODg1NiA/IHkyIDogKHkgLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eCA9IHgyID4gMC4wMDg4NTYgPyB4MiA6ICh4IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHogPSB6MiA+IDAuMDA4ODU2ID8gejIgOiAoeiAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXG5cdHggKj0gOTUuMDQ3O1xuXHR5ICo9IDEwMDtcblx0eiAqPSAxMDguODgzO1xuXG5cdHJldHVybiBbeCwgeSwgel07XG59O1xuXG5jb252ZXJ0LmxhYi5sY2ggPSBmdW5jdGlvbiAobGFiKSB7XG5cdGNvbnN0IGwgPSBsYWJbMF07XG5cdGNvbnN0IGEgPSBsYWJbMV07XG5cdGNvbnN0IGIgPSBsYWJbMl07XG5cdGxldCBoO1xuXG5cdGNvbnN0IGhyID0gTWF0aC5hdGFuMihiLCBhKTtcblx0aCA9IGhyICogMzYwIC8gMiAvIE1hdGguUEk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRjb25zdCBjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXG5cdHJldHVybiBbbCwgYywgaF07XG59O1xuXG5jb252ZXJ0LmxjaC5sYWIgPSBmdW5jdGlvbiAobGNoKSB7XG5cdGNvbnN0IGwgPSBsY2hbMF07XG5cdGNvbnN0IGMgPSBsY2hbMV07XG5cdGNvbnN0IGggPSBsY2hbMl07XG5cblx0Y29uc3QgaHIgPSBoIC8gMzYwICogMiAqIE1hdGguUEk7XG5cdGNvbnN0IGEgPSBjICogTWF0aC5jb3MoaHIpO1xuXHRjb25zdCBiID0gYyAqIE1hdGguc2luKGhyKTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MsIHNhdHVyYXRpb24gPSBudWxsKSB7XG5cdGNvbnN0IFtyLCBnLCBiXSA9IGFyZ3M7XG5cdGxldCB2YWx1ZSA9IHNhdHVyYXRpb24gPT09IG51bGwgPyBjb252ZXJ0LnJnYi5oc3YoYXJncylbMl0gOiBzYXR1cmF0aW9uOyAvLyBIc3YgLT4gYW5zaTE2IG9wdGltaXphdGlvblxuXG5cdHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAvIDUwKTtcblxuXHRpZiAodmFsdWUgPT09IDApIHtcblx0XHRyZXR1cm4gMzA7XG5cdH1cblxuXHRsZXQgYW5zaSA9IDMwXG5cdFx0KyAoKE1hdGgucm91bmQoYiAvIDI1NSkgPDwgMilcblx0XHR8IChNYXRoLnJvdW5kKGcgLyAyNTUpIDw8IDEpXG5cdFx0fCBNYXRoLnJvdW5kKHIgLyAyNTUpKTtcblxuXHRpZiAodmFsdWUgPT09IDIpIHtcblx0XHRhbnNpICs9IDYwO1xuXHR9XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0Lmhzdi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBPcHRpbWl6YXRpb24gaGVyZTsgd2UgYWxyZWFkeSBrbm93IHRoZSB2YWx1ZSBhbmQgZG9uJ3QgbmVlZCB0byBnZXRcblx0Ly8gaXQgY29udmVydGVkIGZvciB1cy5cblx0cmV0dXJuIGNvbnZlcnQucmdiLmFuc2kxNihjb252ZXJ0Lmhzdi5yZ2IoYXJncyksIGFyZ3NbMl0pO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTI1NiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdGNvbnN0IHIgPSBhcmdzWzBdO1xuXHRjb25zdCBnID0gYXJnc1sxXTtcblx0Y29uc3QgYiA9IGFyZ3NbMl07XG5cblx0Ly8gV2UgdXNlIHRoZSBleHRlbmRlZCBncmV5c2NhbGUgcGFsZXR0ZSBoZXJlLCB3aXRoIHRoZSBleGNlcHRpb24gb2Zcblx0Ly8gYmxhY2sgYW5kIHdoaXRlLiBub3JtYWwgcGFsZXR0ZSBvbmx5IGhhcyA0IGdyZXlzY2FsZSBzaGFkZXMuXG5cdGlmIChyID09PSBnICYmIGcgPT09IGIpIHtcblx0XHRpZiAociA8IDgpIHtcblx0XHRcdHJldHVybiAxNjtcblx0XHR9XG5cblx0XHRpZiAociA+IDI0OCkge1xuXHRcdFx0cmV0dXJuIDIzMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKHIgLSA4KSAvIDI0NykgKiAyNCkgKyAyMzI7XG5cdH1cblxuXHRjb25zdCBhbnNpID0gMTZcblx0XHQrICgzNiAqIE1hdGgucm91bmQociAvIDI1NSAqIDUpKVxuXHRcdCsgKDYgKiBNYXRoLnJvdW5kKGcgLyAyNTUgKiA1KSlcblx0XHQrIE1hdGgucm91bmQoYiAvIDI1NSAqIDUpO1xuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5hbnNpMTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0bGV0IGNvbG9yID0gYXJncyAlIDEwO1xuXG5cdC8vIEhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGNvbG9yID09PSAwIHx8IGNvbG9yID09PSA3KSB7XG5cdFx0aWYgKGFyZ3MgPiA1MCkge1xuXHRcdFx0Y29sb3IgKz0gMy41O1xuXHRcdH1cblxuXHRcdGNvbG9yID0gY29sb3IgLyAxMC41ICogMjU1O1xuXG5cdFx0cmV0dXJuIFtjb2xvciwgY29sb3IsIGNvbG9yXTtcblx0fVxuXG5cdGNvbnN0IG11bHQgPSAofn4oYXJncyA+IDUwKSArIDEpICogMC41O1xuXHRjb25zdCByID0gKChjb2xvciAmIDEpICogbXVsdCkgKiAyNTU7XG5cdGNvbnN0IGcgPSAoKChjb2xvciA+PiAxKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cdGNvbnN0IGIgPSAoKChjb2xvciA+PiAyKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQuYW5zaTI1Ni5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBIYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChhcmdzID49IDIzMikge1xuXHRcdGNvbnN0IGMgPSAoYXJncyAtIDIzMikgKiAxMCArIDg7XG5cdFx0cmV0dXJuIFtjLCBjLCBjXTtcblx0fVxuXG5cdGFyZ3MgLT0gMTY7XG5cblx0bGV0IHJlbTtcblx0Y29uc3QgciA9IE1hdGguZmxvb3IoYXJncyAvIDM2KSAvIDUgKiAyNTU7XG5cdGNvbnN0IGcgPSBNYXRoLmZsb29yKChyZW0gPSBhcmdzICUgMzYpIC8gNikgLyA1ICogMjU1O1xuXHRjb25zdCBiID0gKHJlbSAlIDYpIC8gNSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGV4ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Y29uc3QgaW50ZWdlciA9ICgoTWF0aC5yb3VuZChhcmdzWzBdKSAmIDB4RkYpIDw8IDE2KVxuXHRcdCsgKChNYXRoLnJvdW5kKGFyZ3NbMV0pICYgMHhGRikgPDwgOClcblx0XHQrIChNYXRoLnJvdW5kKGFyZ3NbMl0pICYgMHhGRik7XG5cblx0Y29uc3Qgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQuaGV4LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdGNvbnN0IG1hdGNoID0gYXJncy50b1N0cmluZygxNikubWF0Y2goL1thLWYwLTldezZ9fFthLWYwLTldezN9L2kpO1xuXHRpZiAoIW1hdGNoKSB7XG5cdFx0cmV0dXJuIFswLCAwLCAwXTtcblx0fVxuXG5cdGxldCBjb2xvclN0cmluZyA9IG1hdGNoWzBdO1xuXG5cdGlmIChtYXRjaFswXS5sZW5ndGggPT09IDMpIHtcblx0XHRjb2xvclN0cmluZyA9IGNvbG9yU3RyaW5nLnNwbGl0KCcnKS5tYXAoY2hhciA9PiB7XG5cdFx0XHRyZXR1cm4gY2hhciArIGNoYXI7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHRjb25zdCBpbnRlZ2VyID0gcGFyc2VJbnQoY29sb3JTdHJpbmcsIDE2KTtcblx0Y29uc3QgciA9IChpbnRlZ2VyID4+IDE2KSAmIDB4RkY7XG5cdGNvbnN0IGcgPSAoaW50ZWdlciA+PiA4KSAmIDB4RkY7XG5cdGNvbnN0IGIgPSBpbnRlZ2VyICYgMHhGRjtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGNnID0gZnVuY3Rpb24gKHJnYikge1xuXHRjb25zdCByID0gcmdiWzBdIC8gMjU1O1xuXHRjb25zdCBnID0gcmdiWzFdIC8gMjU1O1xuXHRjb25zdCBiID0gcmdiWzJdIC8gMjU1O1xuXHRjb25zdCBtYXggPSBNYXRoLm1heChNYXRoLm1heChyLCBnKSwgYik7XG5cdGNvbnN0IG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcblx0Y29uc3QgY2hyb21hID0gKG1heCAtIG1pbik7XG5cdGxldCBncmF5c2NhbGU7XG5cdGxldCBodWU7XG5cblx0aWYgKGNocm9tYSA8IDEpIHtcblx0XHRncmF5c2NhbGUgPSBtaW4gLyAoMSAtIGNocm9tYSk7XG5cdH0gZWxzZSB7XG5cdFx0Z3JheXNjYWxlID0gMDtcblx0fVxuXG5cdGlmIChjaHJvbWEgPD0gMCkge1xuXHRcdGh1ZSA9IDA7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSByKSB7XG5cdFx0aHVlID0gKChnIC0gYikgLyBjaHJvbWEpICUgNjtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IGcpIHtcblx0XHRodWUgPSAyICsgKGIgLSByKSAvIGNocm9tYTtcblx0fSBlbHNlIHtcblx0XHRodWUgPSA0ICsgKHIgLSBnKSAvIGNocm9tYTtcblx0fVxuXG5cdGh1ZSAvPSA2O1xuXHRodWUgJT0gMTtcblxuXHRyZXR1cm4gW2h1ZSAqIDM2MCwgY2hyb21hICogMTAwLCBncmF5c2NhbGUgKiAxMDBdO1xufTtcblxuY29udmVydC5oc2wuaGNnID0gZnVuY3Rpb24gKGhzbCkge1xuXHRjb25zdCBzID0gaHNsWzFdIC8gMTAwO1xuXHRjb25zdCBsID0gaHNsWzJdIC8gMTAwO1xuXG5cdGNvbnN0IGMgPSBsIDwgMC41ID8gKDIuMCAqIHMgKiBsKSA6ICgyLjAgKiBzICogKDEuMCAtIGwpKTtcblxuXHRsZXQgZiA9IDA7XG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9IChsIC0gMC41ICogYykgLyAoMS4wIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzbFswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5oY2cgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdGNvbnN0IHMgPSBoc3ZbMV0gLyAxMDA7XG5cdGNvbnN0IHYgPSBoc3ZbMl0gLyAxMDA7XG5cblx0Y29uc3QgYyA9IHMgKiB2O1xuXHRsZXQgZiA9IDA7XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzdlswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5yZ2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdGNvbnN0IGggPSBoY2dbMF0gLyAzNjA7XG5cdGNvbnN0IGMgPSBoY2dbMV0gLyAxMDA7XG5cdGNvbnN0IGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0aWYgKGMgPT09IDAuMCkge1xuXHRcdHJldHVybiBbZyAqIDI1NSwgZyAqIDI1NSwgZyAqIDI1NV07XG5cdH1cblxuXHRjb25zdCBwdXJlID0gWzAsIDAsIDBdO1xuXHRjb25zdCBoaSA9IChoICUgMSkgKiA2O1xuXHRjb25zdCB2ID0gaGkgJSAxO1xuXHRjb25zdCB3ID0gMSAtIHY7XG5cdGxldCBtZyA9IDA7XG5cblx0LyogZXNsaW50LWRpc2FibGUgbWF4LXN0YXRlbWVudHMtcGVyLWxpbmUgKi9cblx0c3dpdGNoIChNYXRoLmZsb29yKGhpKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gdjsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHB1cmVbMF0gPSB3OyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gdzsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHB1cmVbMF0gPSB2OyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSB3O1xuXHR9XG5cdC8qIGVzbGludC1lbmFibGUgbWF4LXN0YXRlbWVudHMtcGVyLWxpbmUgKi9cblxuXHRtZyA9ICgxLjAgLSBjKSAqIGc7XG5cblx0cmV0dXJuIFtcblx0XHQoYyAqIHB1cmVbMF0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzFdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsyXSArIG1nKSAqIDI1NVxuXHRdO1xufTtcblxuY29udmVydC5oY2cuaHN2ID0gZnVuY3Rpb24gKGhjZykge1xuXHRjb25zdCBjID0gaGNnWzFdIC8gMTAwO1xuXHRjb25zdCBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGNvbnN0IHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0bGV0IGYgPSAwO1xuXG5cdGlmICh2ID4gMC4wKSB7XG5cdFx0ZiA9IGMgLyB2O1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIGYgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHNsID0gZnVuY3Rpb24gKGhjZykge1xuXHRjb25zdCBjID0gaGNnWzFdIC8gMTAwO1xuXHRjb25zdCBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGNvbnN0IGwgPSBnICogKDEuMCAtIGMpICsgMC41ICogYztcblx0bGV0IHMgPSAwO1xuXG5cdGlmIChsID4gMC4wICYmIGwgPCAwLjUpIHtcblx0XHRzID0gYyAvICgyICogbCk7XG5cdH0gZWxzZVxuXHRpZiAobCA+PSAwLjUgJiYgbCA8IDEuMCkge1xuXHRcdHMgPSBjIC8gKDIgKiAoMSAtIGwpKTtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmh3YiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0Y29uc3QgYyA9IGhjZ1sxXSAvIDEwMDtcblx0Y29uc3QgZyA9IGhjZ1syXSAvIDEwMDtcblx0Y29uc3QgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRyZXR1cm4gW2hjZ1swXSwgKHYgLSBjKSAqIDEwMCwgKDEgLSB2KSAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmh3Yi5oY2cgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdGNvbnN0IHcgPSBod2JbMV0gLyAxMDA7XG5cdGNvbnN0IGIgPSBod2JbMl0gLyAxMDA7XG5cdGNvbnN0IHYgPSAxIC0gYjtcblx0Y29uc3QgYyA9IHYgLSB3O1xuXHRsZXQgZyA9IDA7XG5cblx0aWYgKGMgPCAxKSB7XG5cdFx0ZyA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtod2JbMF0sIGMgKiAxMDAsIGcgKiAxMDBdO1xufTtcblxuY29udmVydC5hcHBsZS5yZ2IgPSBmdW5jdGlvbiAoYXBwbGUpIHtcblx0cmV0dXJuIFsoYXBwbGVbMF0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsxXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzJdIC8gNjU1MzUpICogMjU1XTtcbn07XG5cbmNvbnZlcnQucmdiLmFwcGxlID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gWyhyZ2JbMF0gLyAyNTUpICogNjU1MzUsIChyZ2JbMV0gLyAyNTUpICogNjU1MzUsIChyZ2JbMl0gLyAyNTUpICogNjU1MzVdO1xufTtcblxuY29udmVydC5ncmF5LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHJldHVybiBbYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmdyYXkuaHNsID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFswLCAwLCBhcmdzWzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oc3YgPSBjb252ZXJ0LmdyYXkuaHNsO1xuXG5jb252ZXJ0LmdyYXkuaHdiID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAxMDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmNteWsgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDAsIDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmxhYiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbZ3JheVswXSwgMCwgMF07XG59O1xuXG5jb252ZXJ0LmdyYXkuaGV4ID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0Y29uc3QgdmFsID0gTWF0aC5yb3VuZChncmF5WzBdIC8gMTAwICogMjU1KSAmIDB4RkY7XG5cdGNvbnN0IGludGVnZXIgPSAodmFsIDw8IDE2KSArICh2YWwgPDwgOCkgKyB2YWw7XG5cblx0Y29uc3Qgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQucmdiLmdyYXkgPSBmdW5jdGlvbiAocmdiKSB7XG5cdGNvbnN0IHZhbCA9IChyZ2JbMF0gKyByZ2JbMV0gKyByZ2JbMl0pIC8gMztcblx0cmV0dXJuIFt2YWwgLyAyNTUgKiAxMDBdO1xufTtcbiIsImNvbnN0IGNvbnZlcnNpb25zID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xuY29uc3Qgcm91dGUgPSByZXF1aXJlKCcuL3JvdXRlJyk7XG5cbmNvbnN0IGNvbnZlcnQgPSB7fTtcblxuY29uc3QgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiB3cmFwUmF3KGZuKSB7XG5cdGNvbnN0IHdyYXBwZWRGbiA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0Y29uc3QgYXJnMCA9IGFyZ3NbMF07XG5cdFx0aWYgKGFyZzAgPT09IHVuZGVmaW5lZCB8fCBhcmcwID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJnMDtcblx0XHR9XG5cblx0XHRpZiAoYXJnMC5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gYXJnMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm4oYXJncyk7XG5cdH07XG5cblx0Ly8gUHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5mdW5jdGlvbiB3cmFwUm91bmRlZChmbikge1xuXHRjb25zdCB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdGNvbnN0IGFyZzAgPSBhcmdzWzBdO1xuXG5cdFx0aWYgKGFyZzAgPT09IHVuZGVmaW5lZCB8fCBhcmcwID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJnMDtcblx0XHR9XG5cblx0XHRpZiAoYXJnMC5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gYXJnMDtcblx0XHR9XG5cblx0XHRjb25zdCByZXN1bHQgPSBmbihhcmdzKTtcblxuXHRcdC8vIFdlJ3JlIGFzc3VtaW5nIHRoZSByZXN1bHQgaXMgYW4gYXJyYXkgaGVyZS5cblx0XHQvLyBzZWUgbm90aWNlIGluIGNvbnZlcnNpb25zLmpzOyBkb24ndCB1c2UgYm94IHR5cGVzXG5cdFx0Ly8gaW4gY29udmVyc2lvbiBmdW5jdGlvbnMuXG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IgKGxldCBsZW4gPSByZXN1bHQubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdFtpXSA9IE1hdGgucm91bmQocmVzdWx0W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8vIFByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxubW9kZWxzLmZvckVhY2goZnJvbU1vZGVsID0+IHtcblx0Y29udmVydFtmcm9tTW9kZWxdID0ge307XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmNoYW5uZWxzfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0ubGFiZWxzfSk7XG5cblx0Y29uc3Qgcm91dGVzID0gcm91dGUoZnJvbU1vZGVsKTtcblx0Y29uc3Qgcm91dGVNb2RlbHMgPSBPYmplY3Qua2V5cyhyb3V0ZXMpO1xuXG5cdHJvdXRlTW9kZWxzLmZvckVhY2godG9Nb2RlbCA9PiB7XG5cdFx0Y29uc3QgZm4gPSByb3V0ZXNbdG9Nb2RlbF07XG5cblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0gPSB3cmFwUm91bmRlZChmbik7XG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdLnJhdyA9IHdyYXBSYXcoZm4pO1xuXHR9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnQ7XG4iLCJjb25zdCBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcblxuLypcblx0VGhpcyBmdW5jdGlvbiByb3V0ZXMgYSBtb2RlbCB0byBhbGwgb3RoZXIgbW9kZWxzLlxuXG5cdGFsbCBmdW5jdGlvbnMgdGhhdCBhcmUgcm91dGVkIGhhdmUgYSBwcm9wZXJ0eSBgLmNvbnZlcnNpb25gIGF0dGFjaGVkXG5cdHRvIHRoZSByZXR1cm5lZCBzeW50aGV0aWMgZnVuY3Rpb24uIFRoaXMgcHJvcGVydHkgaXMgYW4gYXJyYXlcblx0b2Ygc3RyaW5ncywgZWFjaCB3aXRoIHRoZSBzdGVwcyBpbiBiZXR3ZWVuIHRoZSAnZnJvbScgYW5kICd0bydcblx0Y29sb3IgbW9kZWxzIChpbmNsdXNpdmUpLlxuXG5cdGNvbnZlcnNpb25zIHRoYXQgYXJlIG5vdCBwb3NzaWJsZSBzaW1wbHkgYXJlIG5vdCBpbmNsdWRlZC5cbiovXG5cbmZ1bmN0aW9uIGJ1aWxkR3JhcGgoKSB7XG5cdGNvbnN0IGdyYXBoID0ge307XG5cdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy12cy1mb3ItaW4td2l0aC1jbG9zdXJlLzNcblx0Y29uc3QgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5cdGZvciAobGV0IGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHRjb25zdCBncmFwaCA9IGJ1aWxkR3JhcGgoKTtcblx0Y29uc3QgcXVldWUgPSBbZnJvbU1vZGVsXTsgLy8gVW5zaGlmdCAtPiBxdWV1ZSAtPiBwb3BcblxuXHRncmFwaFtmcm9tTW9kZWxdLmRpc3RhbmNlID0gMDtcblxuXHR3aGlsZSAocXVldWUubGVuZ3RoKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdGNvbnN0IGFkamFjZW50cyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zW2N1cnJlbnRdKTtcblxuXHRcdGZvciAobGV0IGxlbiA9IGFkamFjZW50cy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGNvbnN0IGFkamFjZW50ID0gYWRqYWNlbnRzW2ldO1xuXHRcdFx0Y29uc3Qgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0Y29uc3QgcGF0aCA9IFtncmFwaFt0b01vZGVsXS5wYXJlbnQsIHRvTW9kZWxdO1xuXHRsZXQgZm4gPSBjb252ZXJzaW9uc1tncmFwaFt0b01vZGVsXS5wYXJlbnRdW3RvTW9kZWxdO1xuXG5cdGxldCBjdXIgPSBncmFwaFt0b01vZGVsXS5wYXJlbnQ7XG5cdHdoaWxlIChncmFwaFtjdXJdLnBhcmVudCkge1xuXHRcdHBhdGgudW5zaGlmdChncmFwaFtjdXJdLnBhcmVudCk7XG5cdFx0Zm4gPSBsaW5rKGNvbnZlcnNpb25zW2dyYXBoW2N1cl0ucGFyZW50XVtjdXJdLCBmbik7XG5cdFx0Y3VyID0gZ3JhcGhbY3VyXS5wYXJlbnQ7XG5cdH1cblxuXHRmbi5jb252ZXJzaW9uID0gcGF0aDtcblx0cmV0dXJuIGZuO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmcm9tTW9kZWwpIHtcblx0Y29uc3QgZ3JhcGggPSBkZXJpdmVCRlMoZnJvbU1vZGVsKTtcblx0Y29uc3QgY29udmVyc2lvbiA9IHt9O1xuXG5cdGNvbnN0IG1vZGVscyA9IE9iamVjdC5rZXlzKGdyYXBoKTtcblx0Zm9yIChsZXQgbGVuID0gbW9kZWxzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdGNvbnN0IHRvTW9kZWwgPSBtb2RlbHNbaV07XG5cdFx0Y29uc3Qgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG5cdFx0aWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHQvLyBObyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVyc2lvbjtcbn07XG5cbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59O1xyXG4iLCIvKipcbiAqIExvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IE9wZW5KUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vb3BlbmpzZi5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvdCBmdW5jdGlvbnMgYnkgbnVtYmVyIG9mIGNhbGxzIHdpdGhpbiBhIHNwYW4gb2YgbWlsbGlzZWNvbmRzLiAqL1xudmFyIEhPVF9DT1VOVCA9IDgwMCxcbiAgICBIT1RfU1BBTiA9IDE2O1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBTeW1ib2wgPSByb290LlN5bWJvbCxcbiAgICBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5LFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkLFxuICAgIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpLFxuICAgIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGUsXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgICBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZSxcbiAgICBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVOb3cgPSBEYXRlLm5vdztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXNzaWduVmFsdWVgIGV4Y2VwdCB0aGF0IGl0IGRvZXNuJ3QgYXNzaWduXG4gKiBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmICFlcShvYmplY3Rba2V5XSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlcyBvdmVyIGBvYmplY3RgXG4gKiBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1lcmdlYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gc3JjSW5kZXggVGhlIGluZGV4IG9mIGBzb3VyY2VgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgbWVyZ2VkIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIHZhbHVlcyBhbmQgdGhlaXIgbWVyZ2VkXG4gKiAgY291bnRlcnBhcnRzLlxuICovXG5mdW5jdGlvbiBiYXNlTWVyZ2Uob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4LCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAob2JqZWN0ID09PSBzb3VyY2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgYmFzZUZvcihzb3VyY2UsIGZ1bmN0aW9uKHNyY1ZhbHVlLCBrZXkpIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIGlmIChpc09iamVjdChzcmNWYWx1ZSkpIHtcbiAgICAgIGJhc2VNZXJnZURlZXAob2JqZWN0LCBzb3VyY2UsIGtleSwgc3JjSW5kZXgsIGJhc2VNZXJnZSwgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgICAgPyBjdXN0b21pemVyKHNhZmVHZXQob2JqZWN0LCBrZXkpLCBzcmNWYWx1ZSwgKGtleSArICcnKSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBzcmNWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH0sIGtleXNJbik7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlTWVyZ2VgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgbWVyZ2VzIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIG1lcmdlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gbWVyZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gc3JjSW5kZXggVGhlIGluZGV4IG9mIGBzb3VyY2VgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbWVyZ2VGdW5jIFRoZSBmdW5jdGlvbiB0byBtZXJnZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBhc3NpZ25lZCB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIHNvdXJjZSB2YWx1ZXMgYW5kIHRoZWlyIG1lcmdlZFxuICogIGNvdW50ZXJwYXJ0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZU1lcmdlRGVlcChvYmplY3QsIHNvdXJjZSwga2V5LCBzcmNJbmRleCwgbWVyZ2VGdW5jLCBjdXN0b21pemVyLCBzdGFjaykge1xuICB2YXIgb2JqVmFsdWUgPSBzYWZlR2V0KG9iamVjdCwga2V5KSxcbiAgICAgIHNyY1ZhbHVlID0gc2FmZUdldChzb3VyY2UsIGtleSksXG4gICAgICBzdGFja2VkID0gc3RhY2suZ2V0KHNyY1ZhbHVlKTtcblxuICBpZiAoc3RhY2tlZCkge1xuICAgIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIHN0YWNrZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgPyBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwgKGtleSArICcnKSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKVxuICAgIDogdW5kZWZpbmVkO1xuXG4gIHZhciBpc0NvbW1vbiA9IG5ld1ZhbHVlID09PSB1bmRlZmluZWQ7XG5cbiAgaWYgKGlzQ29tbW9uKSB7XG4gICAgdmFyIGlzQXJyID0gaXNBcnJheShzcmNWYWx1ZSksXG4gICAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiBpc0J1ZmZlcihzcmNWYWx1ZSksXG4gICAgICAgIGlzVHlwZWQgPSAhaXNBcnIgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkoc3JjVmFsdWUpO1xuXG4gICAgbmV3VmFsdWUgPSBzcmNWYWx1ZTtcbiAgICBpZiAoaXNBcnIgfHwgaXNCdWZmIHx8IGlzVHlwZWQpIHtcbiAgICAgIGlmIChpc0FycmF5KG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IG9ialZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNBcnJheUxpa2VPYmplY3Qob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gY29weUFycmF5KG9ialZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQnVmZikge1xuICAgICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgICAgICBuZXdWYWx1ZSA9IGNsb25lQnVmZmVyKHNyY1ZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzVHlwZWQpIHtcbiAgICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICAgICAgbmV3VmFsdWUgPSBjbG9uZVR5cGVkQXJyYXkoc3JjVmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qoc3JjVmFsdWUpIHx8IGlzQXJndW1lbnRzKHNyY1ZhbHVlKSkge1xuICAgICAgbmV3VmFsdWUgPSBvYmpWYWx1ZTtcbiAgICAgIGlmIChpc0FyZ3VtZW50cyhvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSB0b1BsYWluT2JqZWN0KG9ialZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFpc09iamVjdChvYmpWYWx1ZSkgfHwgaXNGdW5jdGlvbihvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBpbml0Q2xvbmVPYmplY3Qoc3JjVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChpc0NvbW1vbikge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IG1lcmdlIG9iamVjdHMgYW5kIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHN0YWNrLnNldChzcmNWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIG1lcmdlRnVuYyhuZXdWYWx1ZSwgc3JjVmFsdWUsIHNyY0luZGV4LCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgc3RhY2tbJ2RlbGV0ZSddKHNyY1ZhbHVlKTtcbiAgfVxuICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHJldHVybiBzZXRUb1N0cmluZyhvdmVyUmVzdChmdW5jLCBzdGFydCwgaWRlbnRpdHkpLCBmdW5jICsgJycpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBzZXRUb1N0cmluZ2Agd2l0aG91dCBzdXBwb3J0IGZvciBob3QgbG9vcCBzaG9ydGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBiYXNlU2V0VG9TdHJpbmcgPSAhZGVmaW5lUHJvcGVydHkgPyBpZGVudGl0eSA6IGZ1bmN0aW9uKGZ1bmMsIHN0cmluZykge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuYywgJ3RvU3RyaW5nJywge1xuICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICdlbnVtZXJhYmxlJzogZmFsc2UsXG4gICAgJ3ZhbHVlJzogY29uc3RhbnQoc3RyaW5nKSxcbiAgICAnd3JpdGFibGUnOiB0cnVlXG4gIH0pO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICB2YXIgaXNOZXcgPSAhb2JqZWN0O1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3VmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5hc3NpZ25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhc3NpZ25lciBUaGUgZnVuY3Rpb24gdG8gYXNzaWduIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFzc2lnbmVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVBc3NpZ25lcihhc3NpZ25lcikge1xuICByZXR1cm4gYmFzZVJlc3QoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICBjdXN0b21pemVyID0gbGVuZ3RoID4gMSA/IHNvdXJjZXNbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQsXG4gICAgICAgIGd1YXJkID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBjdXN0b21pemVyID0gKGFzc2lnbmVyLmxlbmd0aCA+IDMgJiYgdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJylcbiAgICAgID8gKGxlbmd0aC0tLCBjdXN0b21pemVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoc291cmNlc1swXSwgc291cmNlc1sxXSwgZ3VhcmQpKSB7XG4gICAgICBjdXN0b21pemVyID0gbGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IGN1c3RvbWl6ZXI7XG4gICAgICBsZW5ndGggPSAxO1xuICAgIH1cbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBhc3NpZ25lcihvYmplY3QsIHNvdXJjZSwgaW5kZXgsIGN1c3RvbWl6ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgbWV0aG9kcyBsaWtlIGBfLmZvckluYCBhbmQgYF8uZm9yT3duYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBgXy5kZWZhdWx0c0RlZXBgIHRvIGN1c3RvbWl6ZSBpdHMgYF8ubWVyZ2VgIHVzZSB0byBtZXJnZSBzb3VyY2VcbiAqIG9iamVjdHMgaW50byBkZXN0aW5hdGlvbiBvYmplY3RzIHRoYXQgYXJlIHBhc3NlZCB0aHJ1LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IG9ialZhbHVlIFRoZSBkZXN0aW5hdGlvbiB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHNvdXJjZSB2YWx1ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gbWVyZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBwYXJlbnQgb2JqZWN0IG9mIGBvYmpWYWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBwYXJlbnQgb2JqZWN0IG9mIGBzcmNWYWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIHNvdXJjZSB2YWx1ZXMgYW5kIHRoZWlyIG1lcmdlZFxuICogIGNvdW50ZXJwYXJ0cy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGN1c3RvbURlZmF1bHRzTWVyZ2Uob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjaykge1xuICBpZiAoaXNPYmplY3Qob2JqVmFsdWUpICYmIGlzT2JqZWN0KHNyY1ZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IG1lcmdlIG9iamVjdHMgYW5kIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHN0YWNrLnNldChzcmNWYWx1ZSwgb2JqVmFsdWUpO1xuICAgIGJhc2VNZXJnZShvYmpWYWx1ZSwgc3JjVmFsdWUsIHVuZGVmaW5lZCwgY3VzdG9tRGVmYXVsdHNNZXJnZSwgc3RhY2spO1xuICAgIHN0YWNrWydkZWxldGUnXShzcmNWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIG9ialZhbHVlO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNQcm90b3R5cGUob2JqZWN0KSlcbiAgICA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpXG4gICAgOiB7fTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcblxuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZSA9PSAnbnVtYmVyJyB8fFxuICAgICAgKHR5cGUgIT0gJ3N5bWJvbCcgJiYgcmVJc1VpbnQudGVzdCh2YWx1ZSkpKSAmJlxuICAgICAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIHZhbHVlIGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBpbmRleCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIGluZGV4IG9yIGtleSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgb2JqZWN0IGFyZ3VtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmF0ZWVDYWxsKHZhbHVlLCBpbmRleCwgb2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcidcbiAgICAgICAgPyAoaXNBcnJheUxpa2Uob2JqZWN0KSAmJiBpc0luZGV4KGluZGV4LCBvYmplY3QubGVuZ3RoKSlcbiAgICAgICAgOiAodHlwZSA9PSAnc3RyaW5nJyAmJiBpbmRleCBpbiBvYmplY3QpXG4gICAgICApIHtcbiAgICByZXR1cm4gZXEob2JqZWN0W2luZGV4XSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZVxuICogW2BPYmplY3Qua2V5c2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZXhjZXB0IHRoYXQgaXQgaW5jbHVkZXMgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gbmF0aXZlS2V5c0luKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChvYmplY3QgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VSZXN0YCB3aGljaCB0cmFuc2Zvcm1zIHRoZSByZXN0IGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSByZXN0IGFycmF5IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyUmVzdChmdW5jLCBzdGFydCwgdHJhbnNmb3JtKSB7XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHN0YXJ0LCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBpbmRleCA9IC0xO1xuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IHRyYW5zZm9ybShhcnJheSk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAsIHVubGVzcyBga2V5YCBpcyBcIl9fcHJvdG9fX1wiIG9yIFwiY29uc3RydWN0b3JcIi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHNhZmVHZXQob2JqZWN0LCBrZXkpIHtcbiAgaWYgKGtleSA9PT0gJ2NvbnN0cnVjdG9yJyAmJiB0eXBlb2Ygb2JqZWN0W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGB0b1N0cmluZ2AgbWV0aG9kIG9mIGBmdW5jYCB0byByZXR1cm4gYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgc2V0VG9TdHJpbmcgPSBzaG9ydE91dChiYXNlU2V0VG9TdHJpbmcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0J2xsIHNob3J0IG91dCBhbmQgaW52b2tlIGBpZGVudGl0eWAgaW5zdGVhZFxuICogb2YgYGZ1bmNgIHdoZW4gaXQncyBjYWxsZWQgYEhPVF9DT1VOVGAgb3IgbW9yZSB0aW1lcyBpbiBgSE9UX1NQQU5gXG4gKiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHJlc3RyaWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc2hvcnRhYmxlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBzaG9ydE91dChmdW5jKSB7XG4gIHZhciBjb3VudCA9IDAsXG4gICAgICBsYXN0Q2FsbGVkID0gMDtcblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YW1wID0gbmF0aXZlTm93KCksXG4gICAgICAgIHJlbWFpbmluZyA9IEhPVF9TUEFOIC0gKHN0YW1wIC0gbGFzdENhbGxlZCk7XG5cbiAgICBsYXN0Q2FsbGVkID0gc3RhbXA7XG4gICAgaWYgKHJlbWFpbmluZyA+IDApIHtcbiAgICAgIGlmICgrK2NvdW50ID49IEhPVF9DT1VOVCkge1xuICAgICAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBiYXNlR2V0VGFnKHZhbHVlKSAhPSBvYmplY3RUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiZcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHBsYWluIG9iamVjdCBmbGF0dGVuaW5nIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN0cmluZ1xuICoga2V5ZWQgcHJvcGVydGllcyBvZiBgdmFsdWVgIHRvIG93biBwcm9wZXJ0aWVzIG9mIHRoZSBwbGFpbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgcGxhaW4gb2JqZWN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmFzc2lnbih7ICdhJzogMSB9LCBuZXcgRm9vKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYic6IDIgfVxuICpcbiAqIF8uYXNzaWduKHsgJ2EnOiAxIH0sIF8udG9QbGFpbk9iamVjdChuZXcgRm9vKSk7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyLCAnYyc6IDMgfVxuICovXG5mdW5jdGlvbiB0b1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHZhbHVlLCBrZXlzSW4odmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmRlZmF1bHRzYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBhc3NpZ25zXG4gKiBkZWZhdWx0IHByb3BlcnRpZXMuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIG11dGF0ZXMgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjEwLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBbc291cmNlc10gVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBzZWUgXy5kZWZhdWx0c1xuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmF1bHRzRGVlcCh7ICdhJzogeyAnYic6IDIgfSB9LCB7ICdhJzogeyAnYic6IDEsICdjJzogMyB9IH0pO1xuICogLy8gPT4geyAnYSc6IHsgJ2InOiAyLCAnYyc6IDMgfSB9XG4gKi9cbnZhciBkZWZhdWx0c0RlZXAgPSBiYXNlUmVzdChmdW5jdGlvbihhcmdzKSB7XG4gIGFyZ3MucHVzaCh1bmRlZmluZWQsIGN1c3RvbURlZmF1bHRzTWVyZ2UpO1xuICByZXR1cm4gYXBwbHkobWVyZ2VXaXRoLCB1bmRlZmluZWQsIGFyZ3MpO1xufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8ubWVyZ2VgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGN1c3RvbWl6ZXJgIHdoaWNoXG4gKiBpcyBpbnZva2VkIHRvIHByb2R1Y2UgdGhlIG1lcmdlZCB2YWx1ZXMgb2YgdGhlIGRlc3RpbmF0aW9uIGFuZCBzb3VyY2VcbiAqIHByb3BlcnRpZXMuIElmIGBjdXN0b21pemVyYCByZXR1cm5zIGB1bmRlZmluZWRgLCBtZXJnaW5nIGlzIGhhbmRsZWQgYnkgdGhlXG4gKiBtZXRob2QgaW5zdGVhZC4gVGhlIGBjdXN0b21pemVyYCBpcyBpbnZva2VkIHdpdGggc2l4IGFyZ3VtZW50czpcbiAqIChvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKS5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gc291cmNlcyBUaGUgc291cmNlIG9iamVjdHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgYXNzaWduZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUpIHtcbiAqICAgaWYgKF8uaXNBcnJheShvYmpWYWx1ZSkpIHtcbiAqICAgICByZXR1cm4gb2JqVmFsdWUuY29uY2F0KHNyY1ZhbHVlKTtcbiAqICAgfVxuICogfVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogWzFdLCAnYic6IFsyXSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IFszXSwgJ2InOiBbNF0gfTtcbiAqXG4gKiBfLm1lcmdlV2l0aChvYmplY3QsIG90aGVyLCBjdXN0b21pemVyKTtcbiAqIC8vID0+IHsgJ2EnOiBbMSwgM10sICdiJzogWzIsIDRdIH1cbiAqL1xudmFyIG1lcmdlV2l0aCA9IGNyZWF0ZUFzc2lnbmVyKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCwgY3VzdG9taXplcikge1xuICBiYXNlTWVyZ2Uob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4LCBjdXN0b21pemVyKTtcbn0pO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmV0dXJuIGZyb20gdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNvbnN0YW50IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IF8udGltZXMoMiwgXy5jb25zdGFudCh7ICdhJzogMSB9KSk7XG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0cyk7XG4gKiAvLyA9PiBbeyAnYSc6IDEgfSwgeyAnYSc6IDEgfV1cbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzWzBdID09PSBvYmplY3RzWzFdKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gY29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzRGVlcDtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c3Rkb3V0OiBmYWxzZSxcblx0c3RkZXJyOiBmYWxzZVxufTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCB7IExvZywgTGFiZWwsIFJlY3Vyc2l2ZVBhcnRpYWwsIENoYWxrU3R5bGVzIH0gZnJvbSAnLic7XG5cbnR5cGUgTGFiZWxNYXAgPSBNYXA8c3RyaW5nLCBMYWJlbD47XG5cbmV4cG9ydCB0eXBlIENvbnNvbGVNZXRob2QgPSBcImVycm9yXCJ8XCJ3YXJuXCJ8XCJpbmZvXCJ8XCJsb2dcInxcImRlYnVnXCJ8XCJ0cmFjZVwifFwiZ3JvdXBcInxcImdyb3VwQ29sbGFwc2VkXCJ8XCJncm91cEVuZFwifFwidGFibGVcInxcImRpclwifFwiZGlyeG1sXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hlZCB7XG4gIGNmZzogRGVmYXVsdHM7XG4gIGNhY2hlOiBMb2dbXTtcbiAgbGFiZWxzOiBMYWJlbE1hcDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0cyB7XG4gIGxvZ19sZXZlbDogbnVtYmVyO1xuICBsb2dfY2FjaGVfc2l6ZTogbnVtYmVyO1xuICB1c2VfZW1vamk6IGJvb2xlYW47XG4gIGJhc2Vfc3R5bGU6IHN0cmluZztcbiAgbG9nX2xldmVsczogTG9nTGV2ZWxzO1xuICBjdXN0b21fbGV2ZWxzOiBQYXJ0aWFsPExvZ0xldmVscz47XG4gIGZpbHRlcnM6IEZpbHRlcnM7XG59O1xuXG5leHBvcnQgdHlwZSBMb2dMZXZlbHMgPSB7XG4gIFttZXRob2Q6IHN0cmluZ106IExvZ0xldmVsRGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2dMZXZlbERlZmluaXRpb24ge1xuICBsZXZlbDogbnVtYmVyO1xuICBsZXZlbE5hbWU/OiBzdHJpbmc7XG4gIG1ldGhvZDogQ29uc29sZU1ldGhvZDtcbiAgc3R5bGU6IHN0cmluZztcbiAgdGVybWluYWw6IENoYWxrU3R5bGVzW107XG4gIGVtb2ppOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVycyB7XG4gIGhpZGVBbGw6IGJvb2xlYW47XG4gIG5hbWVzcGFjZTogRmlsdGVyT3B0aW9ucztcbiAgbGFiZWw6IEZpbHRlck9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyT3B0aW9ucyB7XG4gIGhpZGVBbGw6IGJvb2xlYW47XG4gIGV4Y2x1ZGU6IHN0cmluZ1tdO1xuICBpbmNsdWRlOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uIGV4dGVuZHMgUmVjdXJzaXZlUGFydGlhbDxEZWZhdWx0cz4ge307IiwiaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IHsgTG9nTGV2ZWxEZWZpbml0aW9uLCBDb25maWd1cmF0aW9uLCBDb25zb2xlTWV0aG9kLCBEZWZhdWx0cyB9IGZyb20gXCIuXCI7XG5cbi8qKlxuICogRmluZ2VycHJpbnQgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4geW91IGV4ZWN1dGVcbiAqIGEgbG9nIG1ldGhvZCBzdWNoIGFzIGluZm8oKS5cbiAqL1xuZXhwb3J0IHR5cGUgTG9nRnVuY3Rpb24gPSAoLi4uYXJnczogYW55W10pID0+IFRlcm1pbmF0ZWRMb2c7XG5cbi8qKlxuICogRmluZ2VycHJpbnQgb2YgdGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4geW91IGV4ZWN1dGVcbiAqIGEgY3VzdG9tIGxvZyBtZXRob2QgZGVmaW5lZCBpbiB0aGUgY29uZmlndXJhdGlvbi5cbiAqL1xuZXhwb3J0IHR5cGUgQ3VzdG9tTG9nRnVuY3Rpb24gPSAobGV2ZWxOYW1lOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSA9PiBUZXJtaW5hdGVkTG9nO1xuXG4vKipcbiAqIFRoZSBrZXlzIG9mIHRoZSBkZWZhdWx0IHRlcm1pbmF0aW5nIGxvZyBtZXRob2RzIGluY2x1ZGVkIHdpdGggQWR6ZS5cbiAqL1xuZXhwb3J0IHR5cGUgVGVybWluYXRpbmdNZXRob2RLZXlzID0gXCJhdHRlbnRpb25cInxcImVycm9yXCJ8XCJ3YXJuXCJ8XCJmYWlsXCJ8XCJzdWNjZXNzXCJ8XCJpbmZvXCJ8XCJsb2dcInxcImRlYnVnXCJ8XCJ2ZXJib3NlXCI7XG5cbi8qKlxuICogVGhlIGNvbmZpZ3VyYXRpb24gaW50ZXJmYWNlIGZvciB0aGUgZGVmYXVsdCBBZHplIHRlcm1pbmF0aW5nIGxvZyBtZXRob2RzLlxuICovXG5leHBvcnQgdHlwZSBUZXJtaW5hdGluZ01ldGhvZHMgPSB7XG4gIFttZXRob2QgaW4gVGVybWluYXRpbmdNZXRob2RLZXlzXTogTG9nRnVuY3Rpb247XG59O1xuXG4vKipcbiAqIEJvb2xlYW4gZmxhZ3MgdGhhdCByZXByZXNlbnQgdmFyaW91cyBzdGF0ZXMgb2YgaG93IHRoZSBsb2dcbiAqIHNob3VsZCBiZSBwcmludGVkLlxuICovXG5pbnRlcmZhY2UgTG9nRmxhZ3Mge1xuICB0cmFjZWFibGU6IGJvb2xlYW47XG4gIGFzc2VydGlvbj86IGJvb2xlYW47XG4gIGV4cHJlc3Npb24/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIFZhbHVlcyBvZiB0aGUgbG9nIGluc3RhbmNlIHRoYXQgZGV0ZXJtaW5lIGhvdyBpdCBzaG91bGRcbiAqIGJlIHByaW50ZWQuXG4gKi9cbmludGVyZmFjZSBMb2dWYWx1ZXMge1xuICBjZmc6IENvbmZpZ3VyYXRpb247XG4gIHJlbmRlcj86IExvZ1JlbmRlcjtcbiAgbGV2ZWw/OiBudW1iZXI7XG4gIGFyZ3M/OiBhbnlbXTtcbiAgbmFtZXNwYWNlVmFsPzogc3RyaW5nO1xuICBsYWJlbFZhbD86IExhYmVsO1xuICB0aW1lTm93VmFsPzogc3RyaW5nO1xuICBtZXRhPzogYW55O1xuICBtb2RpZmllclF1ZXVlOiBGdW5jdGlvbltdO1xuICBwcmludGVyKGxvZzogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgdXNlX2Vtb2ppOiBib29sZWFuLCBhcmdzOiBhbnlbXSk6IExvZ1JlbmRlcjtcbn1cblxuLyoqXG4gKiBBbGwgb2YgdGhlIHVzZXIgYWNjZXNzaWJsZSBtZXRob2RzIHRoYXQgY2FuIGJlIGNoYWluZWQgdG9cbiAqIGNyZWF0ZSBhIGN1c3RvbWl6ZWQgbG9nLlxuICovXG5pbnRlcmZhY2UgTG9nTWV0aG9kcyB7XG4gIGN1c3RvbTogQ3VzdG9tTG9nRnVuY3Rpb247XG4gIHNlYWwodGhpczogTG9nKTogKCkgPT4gTG9nO1xuICBcbiAgLy8gTW9kaWZpZXIgRnVuY3Rpb25zXG4gIGNvdW50KCk6IExvZztcbiAgY291bnRSZXNldCgpOiBMb2c7XG4gIGRpcigpOiBMb2c7XG4gIGRpcnhtbCgpOiBMb2c7XG4gIHRhYmxlKCk6IExvZztcbiAgYXNzZXJ0KGFzc2VydGlvbjogYm9vbGVhbik6IExvZztcbiAgdGVzdChleHByZXNzaW9uOiBib29sZWFuKTogTG9nO1xuICBncm91cCgpOiBMb2c7XG4gIGdyb3VwQ29sbGFwc2VkKCk6IExvZztcbiAgZ3JvdXBFbmQoKTogTG9nO1xuICBsYWJlbChuYW1lOiBzdHJpbmcpOiBMb2c7XG4gIG5zKG5zOiBzdHJpbmcpOiBMb2c7XG4gIG5hbWVzcGFjZShuczogc3RyaW5nKTogTG9nO1xuICB0cmFjZSgpOiBMb2c7XG4gIHRpbWUoKTogTG9nO1xuICB0aW1lTm93KCk6IExvZztcbiAgdGltZUVuZCgpOiBMb2c7XG59XG5cbi8qKlxuICogVGhlIGZpbmFsIEFkemUgbG9nIG9iamVjdCBwcm90b3R5cGUgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIExvZyBleHRlbmRzIExvZ0ZsYWdzLCBMb2dWYWx1ZXMsIExvZ01ldGhvZHMsIFRlcm1pbmF0aW5nTWV0aG9kcyB7fTtcblxuZXhwb3J0IGludGVyZmFjZSBGaW5hbExvZyBleHRlbmRzIExvZyB7XG4gIGxldmVsOiBudW1iZXI7XG4gIGFyZ3M6IGFueVtdO1xufVxuXG4vKipcbiAqIFRoZSByZW5kZXIgdmFsdWUgZm9yIGEgTG9nLlxuICovXG50eXBlIEFyZ3VtZW50cyA9IGFueVtdO1xuZXhwb3J0IHR5cGUgTG9nUmVuZGVyID0gW0NvbnNvbGVNZXRob2QsIEFyZ3VtZW50c107XG5cbi8qKlxuICogVGhlIGZpbmFsIHZhbHVlIG9mIGEgbG9nIGFmdGVyIGl0IGhhcyBiZWVuIHRlcm1pbmF0ZWQuIFRoaXMgaXMgdXNlZnVsIGZvciBcbiAqIGdsZWFuaW5nIHRoZSBmaW5hbCByZW5kZXIgaW5mb3JtYXRpb24gYW5kIGdldHRpbmcgdGhlIExvZyBpbnN0YW5jZSBmb3IgXG4gKiB1bml0IHRlc3RpbmcgcHVycG9zZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGVybWluYXRlZExvZyB7XG4gIGxvZzogTG9nfEZpbmFsTG9nO1xuICByZW5kZXI6IExvZ1JlbmRlcnxudWxsO1xufTsiLCJleHBvcnQgeyBBZHplLCBMb2dGYWN0b3J5IH0gZnJvbSAnLi9BZHplJztcbmV4cG9ydCB7XG4gIExvZywgRmluYWxMb2csIExvZ0Z1bmN0aW9uLCBDdXN0b21Mb2dGdW5jdGlvbixcbiAgVGVybWluYXRpbmdNZXRob2RzLCBUZXJtaW5hdGluZ01ldGhvZEtleXMsXG4gIExvZ1JlbmRlciwgVGVybWluYXRlZExvZyxcbn0gZnJvbSAnLi9Mb2cnO1xuZXhwb3J0IHsgQnVuZGxlLCBCdW5kbGVkTG9nLCBCdW5kbGVyIH0gZnJvbSAnLi9CdW5kbGUnO1xuZXhwb3J0IHtcbiAgU2hlZCwgU2hlZENvbmZpZywgU2hlZFVzZXJDb25maWcsIExpc3RlbmVyQ2FsbGJhY2ssXG4gIExpc3RlbmVyQnVja2V0cywgTGlzdGVuZXJCdWNrZXQsIExpc3RlbmVyTG9jYXRpb25zLCBMYWJlbE1hcCxcbn0gZnJvbSAnLi9TaGVkJztcbmV4cG9ydCB7XG4gIERlZmF1bHRzLCBMb2dMZXZlbHMsIExvZ0xldmVsRGVmaW5pdGlvbixcbiAgRmlsdGVycywgQ29uZmlndXJhdGlvbiwgQ29uc29sZU1ldGhvZCxcbn0gZnJvbSAnLi9Db25maWd1cmF0aW9uJztcbmV4cG9ydCB7IExhYmVsIH0gZnJvbSAnLi9MYWJlbCc7XG5leHBvcnQgeyBDaGFsa1N0eWxlcyB9IGZyb20gJy4vU3R5bGVzJztcbmV4cG9ydCB7IEhyVGltZSB9IGZyb20gJy4vSHJUaW1lJztcbmV4cG9ydCB7IFJlY3Vyc2l2ZVBhcnRpYWwgfSBmcm9tICcuL1V0aWxpdHknOyIsImltcG9ydCB7IGlzQ2hyb21lLCBpc0ZpcmVmb3gsIGlzU2FmYXJpIH0gZnJvbSAnLi4vZ2xvYmFsJztcbmltcG9ydCB7IERlZmF1bHRzIH0gZnJvbSBcIi4uL19jb250cmFjdHNcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRzOiBEZWZhdWx0cyA9IHtcbiAgbG9nX2xldmVsOiA4LFxuICBsb2dfY2FjaGVfc2l6ZTogMzAwLFxuICB1c2VfZW1vamk6IGZhbHNlLFxuICBiYXNlX3N0eWxlOiAnZm9udC1zaXplOiAxMHB4OyBmb250LXdlaWdodDogYm9sZDsgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDsgYm9yZGVyLXdpZHRoOiAxcHg7IGJvcmRlci1zdHlsZTogc29saWQ7JyxcbiAgY3VzdG9tX2xldmVsczoge30sXG4gIGxvZ19sZXZlbHM6IHtcbiAgICB2ZXJib3NlOiB7XG4gICAgICBsZXZlbDogOCxcbiAgICAgIHN0eWxlOiAncGFkZGluZy1yaWdodDogMjZweDsgYm9yZGVyLWNvbG9yOiAxcHggc29saWQgI2Q5ZGNlMDsgY29sb3I6ICM5OTk5OTk7IGJvcmRlci1jb2xvcjogI2NiYzljOTsnLFxuICAgICAgdGVybWluYWw6IFsnaXRhbGljJywgJ3doaXRlJ10sXG4gICAgICBtZXRob2Q6ICdkZWJ1ZycsXG4gICAgICBlbW9qaTogJ/CfkqQnXG4gICAgfSxcbiAgICBkZWJ1Zzoge1xuICAgICAgbGV2ZWw6IDcsXG4gICAgICBzdHlsZTogJ3BhZGRpbmctcmlnaHQ6IDM4cHg7IGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkOWRjZTA7IGNvbG9yOiAjNDY1NDY0OyBib3JkZXItY29sb3I6ICM5OTk5OTk7JyxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnQmxhY2snLCAnd2hpdGUnXSxcbiAgICAgIG1ldGhvZDogJ2RlYnVnJyxcbiAgICAgIGVtb2ppOiAn8J+QnidcbiAgICB9LFxuICAgIGxvZzoge1xuICAgICAgbGV2ZWw6IDYsXG4gICAgICBzdHlsZTogYHBhZGRpbmctcmlnaHQ6IDUwcHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2Q5ZGNlMCk7IGNvbG9yOiAjMzMzNDM1OyBib3JkZXItY29sb3I6ICNiZmMxYzU7YCxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnR3JheScsICd3aGl0ZSddLFxuICAgICAgbWV0aG9kOiAnbG9nJyxcbiAgICAgIGVtb2ppOiAn8J+TkydcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IHtcbiAgICAgIGxldmVsOiA1LFxuICAgICAgc3R5bGU6ICdwYWRkaW5nLXJpZ2h0OiAyNnB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsICNjZWVkYzkpOyBjb2xvcjogIzRlNTk0ZDsgYm9yZGVyLWNvbG9yOiAjYjdkMWIzOycsXG4gICAgICB0ZXJtaW5hbDogWydiZ0dyZWVuJywgJ2dyYXknXSxcbiAgICAgIG1ldGhvZDogJ2luZm8nLFxuICAgICAgZW1vamk6ICfwn46JJ1xuICAgIH0sXG4gICAgZmFpbDoge1xuICAgICAgbGV2ZWw6IDQsXG4gICAgICBzdHlsZTogYHBhZGRpbmctcmlnaHQ6ICR7IGlzQ2hyb21lID8gJzQyJyA6ICc0NCcgfXB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsICNmZmQxZDEpOyBjb2xvcjogI2E0MDAwZjsgYm9yZGVyLWNvbG9yOiAjZTNiYmJiO2AsXG4gICAgICB0ZXJtaW5hbDogWydiZ1JlZCcsICd3aGl0ZSddLFxuICAgICAgbWV0aG9kOiAnaW5mbycsXG4gICAgICBlbW9qaTogJ+KdjCdcbiAgICB9LFxuICAgIGluZm86IHtcbiAgICAgIGxldmVsOiAzLFxuICAgICAgc3R5bGU6IGBwYWRkaW5nLXJpZ2h0OiAkeyBpc1NhZmFyaSA/ICc0OScgOiAnNDQnIH1weDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjYjJkN2ZmKTsgY29sb3I6ICM0NjU0NjQ7IGJvcmRlci1jb2xvcjogIzk2YjVkNztgLFxuICAgICAgdGVybWluYWw6IFsnYmdCbHVlJywgJ3doaXRlJ10sXG4gICAgICBtZXRob2Q6ICdpbmZvJyxcbiAgICAgIGVtb2ppOiAn8J+TrCdcbiAgICB9LFxuICAgIHdhcm46IHtcbiAgICAgIGxldmVsOiAyLFxuICAgICAgc3R5bGU6IGBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsICNmZmYwYTgpOyBjb2xvcjogIzcxNTEwMDsgYm9yZGVyLWNvbG9yOiAjZTNkNjk2OyBwYWRkaW5nLXJpZ2h0OiAkeyBpc0Nocm9tZSA/ICczNCcgOiAnNDQnIH1weDsgYCxcbiAgICAgIHRlcm1pbmFsOiBbJ2JnWWVsbG93JywgJ2dyYXknXSxcbiAgICAgIG1ldGhvZDogJ3dhcm4nLFxuICAgICAgZW1vamk6ICfwn5SUJ1xuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIGxldmVsOiAxLFxuICAgICAgc3R5bGU6IGBwYWRkaW5nLXJpZ2h0OiAkeyBpc0Nocm9tZSA/ICcyOScgOiAnMjcnIH1weDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjZmZkMWQxKTsgY29sb3I6ICNhNDAwMGY7IGJvcmRlci1jb2xvcjogI2UzYmJiYjtgLFxuICAgICAgdGVybWluYWw6IFsnYmdSZWQnLCAnd2hpdGUnXSxcbiAgICAgIG1ldGhvZDogJ2Vycm9yJyxcbiAgICAgIGVtb2ppOiAn8J+UpSdcbiAgICB9LFxuICAgIGF0dGVudGlvbjoge1xuICAgICAgbGV2ZWw6IDAsXG4gICAgICBzdHlsZTogJ3BhZGRpbmctcmlnaHQ6IDE1cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgI2UyYmFmZik7IGNvbG9yOiAjNDgzYzUxOyBib3JkZXItY29sb3I6ICNjMTlmZDk7JyxcbiAgICAgIHRlcm1pbmFsOiBbJ3doaXRlJywnYm9sZCcsJ2JnTWFnZW50YSddLFxuICAgICAgbWV0aG9kOiAnaW5mbycsXG4gICAgICBlbW9qaTogJ/CfjIgnLFxuICAgIH0sXG4gIH0sXG4gIGZpbHRlcnM6IHtcbiAgICBoaWRlQWxsOiBmYWxzZSxcbiAgICBuYW1lc3BhY2U6IHtcbiAgICAgIGhpZGVBbGw6IGZhbHNlLFxuICAgICAgZXhjbHVkZTogW10sXG4gICAgICBpbmNsdWRlOiBbXSxcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICBoaWRlQWxsOiBmYWxzZSxcbiAgICAgIGV4Y2x1ZGU6IFtdLFxuICAgICAgaW5jbHVkZTogW10sXG4gICAgfVxuICB9LFxufTtcblxuIiwiZXhwb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuL2RlZmF1bHRzJztcbmV4cG9ydCB7IHNoZWRfZGVmYXVsdHMgfSBmcm9tICcuL3NoZWRfZGVmYXVsdHMnO1xuXG4iLCJpbXBvcnQgeyBTaGVkQ29uZmlnIH0gZnJvbSAnLi4vX2NvbnRyYWN0cyc7XG5cbmV4cG9ydCBjb25zdCBzaGVkX2RlZmF1bHRzOiBTaGVkQ29uZmlnID0ge1xuICBjYWNoZV9saW1pdDogMzAwLFxuICBnbG9iYWxfY2ZnOiBudWxsLFxuICBmaWx0ZXJzOiB7fSxcbn07IiwiY29uc3QgZGVmYXVsdHNEZWVwID0gcmVxdWlyZSgnbG9kYXNoLmRlZmF1bHRzZGVlcCcpO1xuXG5pbXBvcnQgeyBMb2csIENvbmZpZ3VyYXRpb24sIERlZmF1bHRzIH0gZnJvbSAnLi9fY29udHJhY3RzJztcbmltcG9ydCB7IGxvZ01ldGhvZCwgY3VzdG9tTWV0aG9kLCBzZWFsIH0gZnJvbSAnLi90ZXJtaW5hdG9ycyc7XG5pbXBvcnQge1xuICBjb3VudCwgY291bnRSZXNldCwgZGlyLCBkaXJ4bWwsIHRhYmxlLCBhc3NlcnQsXG4gIHRlc3QsICBncm91cCwgZ3JvdXBDb2xsYXBzZWQsIGdyb3VwRW5kLCBsYWJlbCxcbiAgbmFtZXNwYWNlLCBucywgdHJhY2UsIHRpbWUsIHRpbWVOb3csIHRpbWVFbmQsXG59IGZyb20gJy4vbW9kaWZpZXJzJztcbmltcG9ydCB7IHByaW50TG9nIH0gZnJvbSAnLi9wcmludGVycyc7XG5pbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJy4vX2RlZmF1bHRzJztcblxuLypcbiAqIEZ1dHVyZSBwbGFubmVkIGZlYXR1cmVzOlxuICogXG4gKiAxLiBVUkwgUGFyYW0gdG8gY29udHJvbCB0aGUgQWR6ZSBlbnZpcm9ubWVudCAocGFyYW0gbmFtZSBpcyBjb25maWd1cmFibGUpLlxuICogMi4gQW5hbHl0aWNzIGFuZCBSZXBvcnRpbmcgc3VwcG9ydC5cbiAqIDMuIFJlbW90ZSBzZXJ2ZXIgZm9yIHJlY2VpdmluZyBhbmQgYW5hbHl6aW5nIGxvZ3MuXG4gKiA0LiBBdHRhY2ggbWV0YSBkYXRhIHRvIGxvZ3MgKGZvciBsaXN0ZW5lcnMgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YpLlxuICogNS4gQWRkIGRlZmF1bHQgbWV0YSBkYXRhIHRvIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBsb2cuXG4gKiA2LiBQZXJzaXN0IGxvZ3MgaW4gbG9jYWxTdG9yYWdlIChjb25maWd1cmFibGUsIG9mZiBieSBkZWZhdWx0KS5cbiAqL1xuXG4vKipcbiAqIFRoZSBlbnRyeSBwb2ludCBmb3IgY3JlYXRpbmcgQWR6ZSBsb2dzLiBUaGlzIGZhY3RvcnkgZnVuY3Rpb24gY2FuIGJlIHVzZWQgZGlyZWN0bHkgb3IgY29uZmlndXJhdGlvblxuICogY2FuIGJlIHByb3ZpZGVkIGFuZCB0aGUgcmVzdWx0IGNhbiBiZSBhc3NpZ25lZCB0byBhIG5ldyB2YXJpYWJsZS4gVGhpcyBhbGxvd3MgZm9yIG11bHRpcGxlXG4gKiBsb2dnaW5nIGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25maWd1cmF0aW9ucy5cbiAqIFxuICogLS0tIERlZmF1bHQgbGV2ZWxzIC0tLVxuICogXG4gKiAwLiBhdHRlbnRpb25cbiAqIDEuIGVycm9yXG4gKiAyLiB3YXJuXG4gKiAzLiBpbmZvXG4gKiA0LiBmYWlsXG4gKiA1LiBzdWNjZXNzXG4gKiA2LiBsb2dcbiAqIDcuIGRlYnVnXG4gKiA4LiB2ZXJib3NlIFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWR6ZSh1c2VyX2NmZzogQ29uZmlndXJhdGlvbiA9IHt9KTpMb2cge1xuICBjb25zdCBjZmcgPSBkZWZhdWx0c0RlZXAodXNlcl9jZmcsIGRlZmF1bHRzKSBhcyBEZWZhdWx0cztcblxuICByZXR1cm4ge1xuICAgIGNmZyxcbiAgICB0cmFjZWFibGU6IGZhbHNlLFxuICAgIG1vZGlmaWVyUXVldWU6IFtdLFxuICAgIHByaW50ZXI6IHByaW50TG9nLFxuXG4gICAgYXR0ZW50aW9uOiAgbG9nTWV0aG9kKGNmZywgJ2F0dGVudGlvbicpLFxuICAgIGVycm9yOiAgICAgIGxvZ01ldGhvZChjZmcsICdlcnJvcicpLFxuICAgIHdhcm46ICAgICAgIGxvZ01ldGhvZChjZmcsICd3YXJuJyksXG4gICAgaW5mbzogICAgICAgbG9nTWV0aG9kKGNmZywgJ2luZm8nKSxcbiAgICBmYWlsOiAgICAgICBsb2dNZXRob2QoY2ZnLCAnZmFpbCcpLFxuICAgIHN1Y2Nlc3M6ICAgIGxvZ01ldGhvZChjZmcsICdzdWNjZXNzJyksXG4gICAgbG9nOiAgICAgICAgbG9nTWV0aG9kKGNmZywgJ2xvZycpLFxuICAgIGRlYnVnOiAgICAgIGxvZ01ldGhvZChjZmcsICdkZWJ1ZycpLFxuICAgIHZlcmJvc2U6ICAgIGxvZ01ldGhvZChjZmcsICd2ZXJib3NlJyksXG4gICAgY3VzdG9tOiAgICAgY3VzdG9tTWV0aG9kKGNmZyksXG5cbiAgICBzZWFsLCBjb3VudCwgY291bnRSZXNldCxcbiAgICBkaXIsIGRpcnhtbCwgdGFibGUsIGFzc2VydCwgdGVzdCwgZ3JvdXAsIGdyb3VwQ29sbGFwc2VkLFxuICAgIGdyb3VwRW5kLCBsYWJlbCwgbmFtZXNwYWNlLCBucywgdHJhY2UsIHRpbWUsIHRpbWVOb3csIHRpbWVFbmQsXG4gIH07XG59IiwiaW1wb3J0IHsgQnVuZGxlLCBCdW5kbGVyLCBCdW5kbGVkTG9nLCBMb2cgfSBmcm9tICcuL19jb250cmFjdHMnO1xuXG4vKipcbiAqIEJ1bmRsZXMgYWxsIGxvZ3MgdG9nZXRoZXIgYnkgd3JhcHBpbmcgYWxsIHN1YnNlcXVlbnQgbG9ncyBpbiBhIEJ1bmRsZSBjYWxsYmFja1xuICogdGhhdCBjdXJyaWVzIHRoZW0gaW50byBhbiBhcnJheS4gVGhpcyBidW5kbGUgYXJyYXkgY2FuIGJlIHVzZWQgdG8gcmVjYWxsIGFuZFxuICogZmlsdGVyIGxvZ3MuXG4gKiBcbiAqICoqRXhhbXBsZToqKlxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3QgYnVuZGxlZCA9IGJ1bmRsZShhZHplKCkpO1xuICogYnVuZGxlZC5sb2coXCJUaGlzIGlzIGEgbG9nLlwiKTtcbiAqIGJ1bmRsZWQubG9nKFwiVGhpcyBpcyBhbm90aGVyIGxvZy5cIik7XG4gKiBidW5kbGUuYWxsKCk7IC8vIC0+IHJlcHJpbnRzIGFsbCBcImJ1bmRsZWRcIiBsb2dzLlxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidW5kbGUobG9nOiBMb2cpOkJ1bmRsZXIge1xuICBjb25zdCBidW5kbGVfYXJyID0gW10gYXMgQnVuZGxlO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGxldCBidW5kbGVkX2xvZzogQnVuZGxlZExvZyA9IHtcbiAgICAgIC4uLmxvZyxcbiAgICAgIGdldCBidW5kbGUoKSB7XG4gICAgICAgIHJldHVybiBidW5kbGVfYXJyO1xuICAgICAgfVxuICAgIH07XG4gICAgYnVuZGxlX2Fyci5wdXNoKGJ1bmRsZWRfbG9nKTtcbiAgICByZXR1cm4gYnVuZGxlZF9sb2c7XG4gIH07XG59OyIsImltcG9ydCB7XG4gIExvZywgTG9nRnVuY3Rpb24sXG4gIEN1c3RvbUxvZ0Z1bmN0aW9uLFxuICBEZWZhdWx0cywgTG9nTGV2ZWxEZWZpbml0aW9uLCBUZXJtaW5hdGVkTG9nLFxufSBmcm9tICcuLi9fY29udHJhY3RzJztcbmltcG9ydCB7IGVudiwgaXNCcm93c2VyIH0gZnJvbSAnLi4vZ2xvYmFsJztcblxuLyoqXG4gKiBEZXRlcm1pbmUgdGhlIGZhdGUgb2Ygd2hldGhlciB0aGlzIGxvZyB3aWxsIHRlcm1pbmF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFsbG93ZWQoY2ZnOiBEZWZhdWx0cywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24pOmJvb2xlYW4ge1xuICByZXR1cm4gbGV2ZWxBY3RpdmUoZGVmLCBjZmcubG9nX2xldmVsKSAmJiBub3RUZXN0RW52KCk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGxvZyBsZXZlbCBpcyBoaWdoIGVub3VnaCBmb3IgdGhlIGxvZyB0byB0ZXJtaW5hdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZXZlbEFjdGl2ZShkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgbGV2ZWw6IG51bWJlcik6Ym9vbGVhbiB7XG4gIHJldHVybiBkZWYubGV2ZWwgPD0gbGV2ZWw7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW55IGFzc2VydGlvbnMgb3IgZXhwcmVzc2lvbnMgcGFzcyBmb3IgdGhpcyBsb2cgdG8gdGVybWluYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZhbFBhc3Nlcyhsb2c6IExvZyk6Ym9vbGVhbiB7XG4gIGlmIChsb2cuYXNzZXJ0aW9uICE9PSB1bmRlZmluZWQgJiYgbG9nLmV4cHJlc3Npb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUud2FybihcIllvdSBoYXZlIGRlY2xhcmVkIGJvdGggYW4gYXNzZXJ0aW9uIGFuZCB0ZXN0IG9uIHRoZSBzYW1lIGxvZy4gUGxlYXNlIG9ubHkgZGVjbGFyZSBvbmUgb3IgbmVmYXJpb3VzIHJlc3VsdHMgbWF5IG9jY3VyLlwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAobG9nLmFzc2VydGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGxvZy5hc3NlcnRpb24gPT09IGZhbHNlO1xuICB9XG4gIGlmIChsb2cuZXhwcmVzc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGxvZy5leHByZXNzaW9uID09PSB0cnVlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFZlcmlmeSB0aGF0IHRoaXMgbG9nIGlzIG5vdCBpbiBhIHRlc3QgZW52aXJvbm1lbnQgYW5kIHByZXZlbnRcbiAqIHRlcm1pbmF0aW9uIGlmIGl0IGlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm90VGVzdEVudigpOmJvb2xlYW4ge1xuICBpZiAoaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGVudj8uQURaRV9FTlYgIT09ICd0ZXN0Jztcbn0iLCJleHBvcnQge1xuICBhbGxvd2VkLFxuICBsZXZlbEFjdGl2ZSxcbiAgZXZhbFBhc3NlcyxcbiAgbm90VGVzdEVudixcbn0gZnJvbSAnLi9jb25kaXRpb25zJzsiLCJpbXBvcnQgeyBMb2csIExvZ1JlbmRlciB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuXG4vLyBDT05WRVJUIEFQSSBUTyBFWFBPUlQgRklMVEVSIEZVTkNTXG5cbi8qKlxuICogUmUtcmVuZGVyIHRoZSBidW5kbGUgb2YgbG9ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckFsbChidW5kbGU6IExvZ1tdID0gW10pOnZvaWQge1xuICBsb29wQnVuZGxlKGJ1bmRsZSwgKGxvZykgPT4gdHJ1ZSk7XG59XG5cbi8qKlxuICogRmlsdGVyIHRoZSBidW5kbGUgb2YgbG9ncyBieSB0aGUgbmFtZXNwYWNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyTmFtZXNwYWNlKGJ1bmRsZTogTG9nW10gPSBbXSwgbnM6IHN0cmluZyk6dm9pZCB7XG4gIGxvb3BCdW5kbGUoYnVuZGxlLCAobG9nKSA9PiBsb2cubmFtZXNwYWNlVmFsID09PSBucyk7XG59XG5cbi8qKlxuICogRmlsdGVyIGFuZCByZW5kZXIgdGhlIGJ1bmRsZSBvZiBsb2dzIGJ5IHRoZSBsYWJlbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckxhYmVsKGJ1bmRsZTogTG9nW10gPSBbXSwgbGJsOiBzdHJpbmcpOnZvaWQge1xuICBsb29wQnVuZGxlKGJ1bmRsZSwgKGxvZykgPT4gbG9nLmxhYmVsVmFsPy5uYW1lID09PSBsYmwpO1xufVxuXG4vKipcbiAqIEZpbHRlciB0aGUgYnVuZGxlIG9mIGxvZ3MgYnkgdGhlaXIgbG9nIGxldmVsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyTGV2ZWxSYW5nZShidW5kbGU6IExvZ1tdID0gW10sIGxvdzogbnVtYmVyLCBoaWdoOiBudW1iZXIpOnZvaWQge1xuICBsb29wQnVuZGxlKGJ1bmRsZSwgKGxvZywgcm5kcikgPT4ge1xuICAgIGNvbnN0IGxldmVsID0gKGxvZy5sZXZlbCA/PyBJbmZpbml0eSk7XG4gICAgcmV0dXJuIGxldmVsID49IGxvdyAmJiBsZXZlbCA8PSBoaWdoO1xuICB9KTtcbn1cblxuLyoqXG4gKiBMb29wcyBvdmVyIGEgYnVuZGxlIG9mIGxvZ3MgYW5kIGV4ZWN1dGVzIHRoZSBjYWxsYmFjayBmb3IgZWFjaCBsb2cgdGhhdCBcbiAqIGhhcyBhIHJlbmRlciB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbG9vcEJ1bmRsZShidW5kbGU6IExvZ1tdLCBjYjogKGxvZzogTG9nLCBybmRyOiBMb2dSZW5kZXIpID0+IGJvb2xlYW4pOnZvaWQge1xuICBidW5kbGUuZm9yRWFjaChsb2cgPT4ge1xuICAgIGlmIChsb2cucmVuZGVyKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBjYihsb2csIGxvZy5yZW5kZXIpO1xuICAgICAgaWYgKHJlc3VsdCkgcmVuZGVyKGxvZy5yZW5kZXIpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogUmVuZGVyIGEgbG9nIGJhc2VkIG9uIGEgcmVuZGVyIG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihbIG1ldGhvZCwgYXJncyBdOiBMb2dSZW5kZXIpOnZvaWQge1xuICBjb25zb2xlW21ldGhvZF0oLi4uYXJncyk7XG59IiwiZXhwb3J0IHtcbiAgZmlsdGVyQWxsLFxuICBmaWx0ZXJMYWJlbCxcbiAgZmlsdGVyTmFtZXNwYWNlLFxuICBmaWx0ZXJMZXZlbFJhbmdlLFxuICByZW5kZXIsXG59IGZyb20gJy4vZmlsdGVycyc7IiwiaW1wb3J0IHsgU2hlZCB9IGZyb20gJy4vc2hlZCc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgJHNoZWQ/OiBTaGVkO1xuICAgIEFEWkVfRU5WPzogc3RyaW5nO1xuICB9XG4gIG5hbWVzcGFjZSBOb2RlSlMge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsIHtcbiAgICAgICRzaGVkPzogU2hlZDtcbiAgICAgIEFEWkVfRU5WPzogc3RyaW5nO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZW52OiBXaW5kb3d8Tm9kZUpTLkdsb2JhbCA9IGdsb2JhbCA/IGdsb2JhbCA6IHdpbmRvdztcbmV4cG9ydCBjb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0IGNvbnN0IGVudklzV2luZG93ID0gKGVudjogV2luZG93fE5vZGVKUy5HbG9iYWwpOiBlbnYgaXMgV2luZG93ID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZDtcbn07XG5cbmxldCBpc0Nocm9tZVZhciA9IGZhbHNlO1xubGV0IGlzRmlyZWZveFZhciA9IGZhbHNlO1xubGV0IGlzU2FmYXJpVmFyID0gZmFsc2U7XG5cbmlmIChlbnZJc1dpbmRvdyhlbnYpKSB7XG4gIGlzQ2hyb21lVmFyID0gZW52Py5uYXZpZ2F0b3I/LnVzZXJBZ2VudC5pbmRleE9mKFwiQ2hyb21lXCIpID4gLTE7XG4gIGlzRmlyZWZveFZhciA9IGVudj8ubmF2aWdhdG9yPy51c2VyQWdlbnQuaW5kZXhPZihcIkZpcmVmb3hcIikgPiAtMTtcbiAgaXNTYWZhcmlWYXIgPSBlbnY/Lm5hdmlnYXRvcj8udXNlckFnZW50LmluZGV4T2YoXCJTYWZhcmlcIikgPiAtMSAmJiAhaXNDaHJvbWVWYXI7XG59XG5cbmV4cG9ydCBjb25zdCBpc0Nocm9tZSA9IGlzQ2hyb21lVmFyO1xuZXhwb3J0IGNvbnN0IGlzRmlyZWZveCA9IGlzRmlyZWZveFZhcjtcbmV4cG9ydCBjb25zdCBpc1NhZmFyaSA9IGlzU2FmYXJpVmFyOyIsImltcG9ydCB7IExvZywgTG9nRnVuY3Rpb24gfSBmcm9tICcuL19jb250cmFjdHMnO1xuaW1wb3J0IHsgYWR6ZSB9IGZyb20gJy4vYWR6ZSc7XG5pbXBvcnQgeyBidW5kbGUgfSBmcm9tICcuL2J1bmRsZSc7XG5pbXBvcnQgeyBzaGVkRXhpc3RzLCBjcmVhdGVTaGVkLCB0ZWFyZG93blNoZWQgfSBmcm9tICcuL3NoZWQnO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuL19kZWZhdWx0cyc7XG5pbXBvcnQgeyBmaWx0ZXJBbGwsIGZpbHRlckxhYmVsLCBmaWx0ZXJMZXZlbFJhbmdlLCBmaWx0ZXJOYW1lc3BhY2UsIHJlbmRlciB9IGZyb20gJy4vZmlsdGVycyc7XG5cbmV4cG9ydCB7XG4gIGFkemUsXG4gIHNoZWRFeGlzdHMsXG4gIGNyZWF0ZVNoZWQsXG4gIHRlYXJkb3duU2hlZCxcbiAgZGVmYXVsdHMsXG4gIExvZyxcbiAgTG9nRnVuY3Rpb24sXG4gIGJ1bmRsZSxcbiAgZmlsdGVyQWxsLFxuICBmaWx0ZXJMYWJlbCxcbiAgZmlsdGVyTGV2ZWxSYW5nZSxcbiAgZmlsdGVyTmFtZXNwYWNlLFxuICByZW5kZXIsXG59OyIsImV4cG9ydCB7IGdldExhYmVsLCBhZGRMYWJlbCB9IGZyb20gJy4vbGFiZWwnOyIsImltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuLi9nbG9iYWwnO1xuaW1wb3J0IHsgc2hlZEV4aXN0cyB9IGZyb20gJy4uL3NoZWQnO1xuXG4vKipcbiAqIEF0dGVtcHRzIHRvIGdldCBhIGxhYmVsIGJ5IHRoZSBnaXZlbiBuYW1lIGZyb20gdGhlIHNoZWQgaWYgaXQgZXhpc3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFiZWwobmFtZTogc3RyaW5nKTpMYWJlbHx1bmRlZmluZWQge1xuICBjb25zdCBzaGVkID0gZW52LiRzaGVkO1xuICBpZiAoc2hlZEV4aXN0cyhzaGVkKSkge1xuICAgIHJldHVybiBzaGVkLmdldExhYmVsKG5hbWUpO1xuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gYWRkIGEgbGFiZWwgdG8gdGhlIGdsb2JhbCBzdG9yZSBpZiBpdCBleGlzdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRMYWJlbChsYWJlbDogTGFiZWwpOkxhYmVsIHtcbiAgY29uc3Qgc2hlZCA9IGVudi4kc2hlZDtcbiAgaWYgKHNoZWRFeGlzdHMoc2hlZCkpIHtcbiAgICBzaGVkLmFkZExhYmVsKGxhYmVsKTtcbiAgfVxuICByZXR1cm4gbGFiZWw7XG59IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBtb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuXG4vKipcbiAqIEFkZHMgdG8gdGhlIGxvZyBjb3VudCBmb3IgbG9nIGluc3RhbmNlcyB0aGF0IHNoYXJlIHRoaXMgbG9nJ3MgbGFiZWwuXG4gKiBcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnNvbGUvY291bnQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3VudCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGFiZWxWYWwpIHtcbiAgICAgIHRoaXMubGFiZWxWYWwuY291bnQgPSB0aGlzLmxhYmVsVmFsLmNvdW50ID8/IDA7XG4gICAgICB0aGlzLmxhYmVsVmFsLmNvdW50ICs9IDE7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXNldHMgdGhlIGNvdW50IGZvciB0aGUgbG9nIGluc3RhbmNlcyB0aGF0IHNoYXJlIHRoaXMgbG9nJ3MgbGFiZWwuXG4gKiBcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnNvbGUvY291bnRSZXNldClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvdW50UmVzZXQodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIGlmICh0aGlzLmxhYmVsVmFsKSB7XG4gICAgICB0aGlzLmxhYmVsVmFsLmNvdW50ID0gMDtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFVuc2V0cyB0aGUgY291bnQgZm9yIHRoZSBsb2cgaW5zdGFuY2VzIHRoYXQgc2hhcmUgdGhpcyBsb2cncyBsYWJlbC5cbiAqIFxuICogVGhpcyBpcyBhIG5vbi1zdGFuZGFyZCBtZXRob2QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3VudENsZWFyKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICBpZiAodGhpcy5sYWJlbFZhbCkge1xuICAgICAgdGhpcy5sYWJlbFZhbC5jb3VudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0pO1xufSIsImltcG9ydCB7IExvZyB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgbW9kaWZpZXIgfSBmcm9tICcuL21vZGlmaWVyJztcbmltcG9ydCB7IHByaW50RGlyLCBwcmludERpcnhtbCwgcHJpbnRUYWJsZSB9IGZyb20gJy4uL3ByaW50ZXJzJztcblxuLyoqXG4gKiBJbnN0cnVjdHMgdGhpcyBsb2cgdG8gcHJpbnQgaW4gdGhlIGRpciBmb3JtYXQuIFR5cGljYWxseSB0aGlzIGlzIHVzZWZ1bFxuICogZm9yIHJlbmRlcmluZyBkZWVwbHkgbmVzdGVkIG9iamVjdHMgaW4gdGhlIGNvbnNvbGUuXG4gKiBcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnNvbGUvZGlyKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlyKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLnByaW50ZXIgPSBwcmludERpcjtcbiAgfSk7XG59XG5cbi8qKlxuICogSW5zdHJ1Y3RzIHRoaXMgbG9nIHRvIHByaW50IGluIHRoZSBkaXJ4bWwgZm9ybWF0LiBUeXBpY2FsbHkgdGhpcyBpcyB1c2VmdWxcbiAqIGZvciByZW5kZXJpbmcgSFRNTC9ET00gb3IgWE1MIEVsZW1lbnRzIGluIHRoZSBjb25zb2xlLlxuICogXG4gKiBNRE4gQVBJIERvY3MgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Db25zb2xlL2RpcnhtbClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpcnhtbCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnREaXJ4bWw7XG4gIH0pO1xufVxuXG4vKipcbiAqIEluc3RydWN0cyB0aGlzIGxvZyB0byBwcmludCBpdHMgYXJndW1lbnQgaW4gYSB0YWJsZSBmb3JtYXQuXG4gKiBcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnNvbGUvdGFibGUpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWJsZSh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnRUYWJsZTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBtb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuaW1wb3J0IHsgcHJpbnRHcm91cCwgcHJpbnRHcm91cENvbGxhcHNlZCwgcHJpbnRHcm91cEVuZCB9IGZyb20gJy4uL3ByaW50ZXJzJztcblxuLyoqXG4gKiBTdGFydHMgYSBsb2cgZ3JvdXAuXG4gKiBcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnNvbGUvZ3JvdXApXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBncm91cCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnRHcm91cDtcbiAgfSk7XG59XG5cbi8qKlxuICogU3RhcnRzIGEgbG9nIGdyb3VwIHRoYXQgaXMgY29sbGFwc2VkIGJ5IGRlZmF1bHQuXG4gKiBcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnNvbGUvZ3JvdXBDb2xsYXBzZWQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBncm91cENvbGxhcHNlZCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5wcmludGVyID0gcHJpbnRHcm91cENvbGxhcHNlZDtcbiAgfSk7XG59XG5cbi8qKlxuICogRW5kcyB0aGUgbW9zdCByZWNlbnRseSBvcGVuZWQgbG9nIGdyb3VwLlxuICogXG4gKiBNRE4gQVBJIERvY3MgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Db25zb2xlL2dyb3VwRW5kKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBFbmQodGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIHRoaXMucHJpbnRlciA9IHByaW50R3JvdXBFbmQ7XG4gIH0pO1xufSIsImltcG9ydCB7IExvZyB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgZ2V0TGFiZWwsIGFkZExhYmVsIH0gZnJvbSAnLi4vbGFiZWwnO1xuaW1wb3J0IHsgcHJlcGVuZE1vZGlmaWVyLCBtb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuaW1wb3J0IHsgcHJpbnRUcmFjZSB9IGZyb20gJy4uL3ByaW50ZXJzJztcblxuLyoqXG4gKiBBZGRzIGEgbGFiZWwgdG8gdGhlIGxvZy4gTGFiZWwncyBjYW4gYmUgdXNlZCBmb3IgbG9nIGlkZW50aWZpY2F0aW9uXG4gKiBhbmQgZ3JvdXBpbmcuIExhYmVsJ3MgYWxzbyBsaW5rIGxvZyBpbnN0YW5jZXMgdG9nZXRoZXIuXG4gKiBcbiAqIFRoaXMgaXMgYSBub24tc3RhbmRhcmQgQVBJLCBidXQgaXQgcmVwbGFjZXMgdGhlIG5lZWQgdG8gcHJvdmlkZVxuICogYSBsYWJlbCB0byBgY291bnQoKWAgb3IgYHRpbWUoKWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbCh0aGlzOiBMb2csIG5hbWU6IHN0cmluZyk6TG9nIHtcbiAgcmV0dXJuIHByZXBlbmRNb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgdGhpcy5sYWJlbFZhbCA9IGFkZExhYmVsKGdldExhYmVsKG5hbWUpID8/IHsgbmFtZSB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogQWRkcyBhIG5hbWVzcGFjZSB0byB0aGUgbG9nLiBOYW1lc3BhY2UncyBhcmUgcHJpbWFyaWx5IHVzZWZ1bFxuICogZm9yIGdyb3VwaW5nIGxvZ3MgdG9nZXRoZXIuXG4gKiBcbiAqIFRoaXMgaXMgYSBub24tc3RhbmRhcmQgQVBJLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmFtZXNwYWNlKHRoaXM6IExvZywgbnM6IHN0cmluZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLm5hbWVzcGFjZVZhbCA9IG5zO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBbiBhbGlhcyBmb3IgYG5hbWVzcGFjZSgpYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5zKHRoaXM6IExvZywgbnM6IHN0cmluZyk6TG9nIHtcbiAgcmV0dXJuIHRoaXMubmFtZXNwYWNlKG5zKTtcbn1cblxuLyoqXG4gKiBQcmludHMgYSBzdGFja3RyYWNlIGFsb25nIHdpdGggdGhlIGxvZy5cbiAqIFxuICogTUROIEFQSSBEb2NzIFtoZXJlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ29uc29sZS90cmFjZSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYWNlKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLnByaW50ZXIgPSBwcmludFRyYWNlO1xuICB9KVxufVxuXG4vKipcbiAqIEFkZHMgY3VzdG9tIG1ldGEgZGF0YSB0byB0aGUgbG9nIGluc3RhbmNlLiBUaGlzIGlzIHVzZWZ1bFxuICogZm9yIHNjcmFwaW5nIGV4dHJhIGRhdGEgZnJvbSBhIGxvZyBmcm9tIGEgbG9nIGxpc3RlbmVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWV0YSh0aGlzOiBMb2csIGRhdGE6IGFueSk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLm1ldGEgPSBkYXRhO1xuICB9KTtcbn0iLCJleHBvcnQgeyB0aW1lLCB0aW1lTm93LCB0aW1lRW5kIH0gZnJvbSAnLi90aW1pbmcnO1xuZXhwb3J0IHsgY291bnQsIGNvdW50UmVzZXQgfSBmcm9tICcuL2NvdW50aW5nJztcbmV4cG9ydCB7IGRpciwgZGlyeG1sLCB0YWJsZSB9IGZyb20gJy4vZm9ybWF0dGluZyc7XG5leHBvcnQgeyBncm91cCwgZ3JvdXBDb2xsYXBzZWQsIGdyb3VwRW5kIH0gZnJvbSAnLi9ncm91cGluZyc7XG5leHBvcnQgeyBsYWJlbCwgbmFtZXNwYWNlLCBucywgdHJhY2UgfSBmcm9tICcuL2lkZW50aWZ5aW5nJztcbmV4cG9ydCB7IG1vZGlmaWVyLCBwcmVwZW5kTW9kaWZpZXIgfSBmcm9tICcuL21vZGlmaWVyJztcbmV4cG9ydCB7IGFzc2VydCwgdGVzdCB9IGZyb20gJy4vdGVzdGluZyc7XG5cbiIsImltcG9ydCB7IExvZyB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuXG4vKipcbiAqIFF1ZXVlcyBhIG1vZGlmaWVyIG1ldGhvZCBmb3IgZXhlY3V0aW9uIHdoZW4gdGhlIGxvZyBpcyB0ZXJtaW5hdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbW9kaWZpZXIobG9nOiBMb2csIGZ1bmM6IEZ1bmN0aW9uKTpMb2cge1xuICBsb2cubW9kaWZpZXJRdWV1ZSA9IGxvZy5tb2RpZmllclF1ZXVlLmNvbmNhdChbZnVuY10pO1xuICByZXR1cm4gbG9nO1xufVxuXG4vKipcbiAqIFF1ZXVlcyBhIG1vZGlmaWVyIG1ldGhvZCBmb3IgZXhlY3V0aW9uIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHF1ZXVlIHdoZW4gdGhlIGxvZyBpcyB0ZXJtaW5hdGVkLlxuICogVGhpcyBpcyB1c2VkIHRvIGVuc3VyZSB0aGF0IGxhYmVscyBhcmUgYXBwbGllZCBiZWZvcmUgbW9kaWZpZXJzIHRoYXQgdXNlIGxhYmVscyBhcmUgZXhlY3V0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVwZW5kTW9kaWZpZXIobG9nOiBMb2csIGZ1bmM6IEZ1bmN0aW9uKTpMb2cge1xuICBsb2cubW9kaWZpZXJRdWV1ZSA9IFtmdW5jXS5jb25jYXQobG9nLm1vZGlmaWVyUXVldWUpO1xuICByZXR1cm4gbG9nO1xufSIsImltcG9ydCB7IExvZyB9IGZyb20gJy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgbW9kaWZpZXIgfSBmcm9tICcuL21vZGlmaWVyJztcblxuLyoqXG4gKiBQcmludHMgYSBsb2cgd2FybmluZyB0aGF0IHRoZSBhc3NlcnRpb24gZmFpbGVkIGlmIHRoZSBhc3NlcnRpb24gaXMgZmFsc2UuXG4gKiBcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL2NvbnNvbGUvYXNzZXJ0KVxuICovIFxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydCh0aGlzOiBMb2csIGFzc2VydGlvbjogYm9vbGVhbik6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLmFzc2VydGlvbiA9IGFzc2VydGlvbjtcbiAgfSk7XG59XG5cbi8qKlxuICogQWxsb3dzIHRoZSBsb2cgdG8gcHJpbnQgaWYgdGhlIGV4cHJlc3Npb24gaXMgdHJ1ZS5cbiAqIFxuICogVGhpcyBpcyBhIG5vbi1zdGFuZGFyZCBtZXRob2QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0KHRoaXM6IExvZywgZXhwcmVzc2lvbjogYm9vbGVhbik6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICB9KTtcbn0iLCJjb25zdCBocnRpbWUgPSByZXF1aXJlKCdicm93c2VyLXByb2Nlc3MtaHJ0aW1lJyk7XG5cbmltcG9ydCB7IExvZywgSHJUaW1lIH0gZnJvbSAnLi4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBtb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXInO1xuXG4vKipcbiAqIFN0YXJ0cyBhIHRpbWVyIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGxvZydzICpsYWJlbCouIFRoaXMgd2lsbCBkbyBub3RoaW5nIGlmXG4gKiB0aGlzIGxvZyBoYXMgbm8gbGFiZWwuXG4gKiBcbiAqIE1ETiBBUEkgRG9jcyBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NvbnNvbGUvdGltZSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aW1lKHRoaXM6IExvZyk6TG9nIHtcbiAgcmV0dXJuIG1vZGlmaWVyKHRoaXMsICgpID0+IHtcbiAgICBpZiAodGhpcy5sYWJlbFZhbCkge1xuICAgICAgdGhpcy5sYWJlbFZhbC50aW1lU3RhcnQgPSBocnRpbWUoKTtcbiAgICB9XG4gIH0pXG59XG5cbi8qKlxuICogTW9kaWZpZXMgdGhlIGxvZyByZW5kZXIgdG8gc2hvdyB0aGUgY3VycmVudCBoaWdoLXJlc29sdXRpb24gcmVhbCB0aW1lLlxuICogXG4gKiBUaGlzIGlzIGEgbm9uLXN0YW5kYXJkIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVOb3codGhpczogTG9nKTpMb2cge1xuICByZXR1cm4gbW9kaWZpZXIodGhpcywgKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVfbm93ID0gZm9ybWF0VGltZShocnRpbWUoKSk7XG4gICAgdGhpcy5sYWJlbFZhbCA/IHRoaXMubGFiZWxWYWwudGltZU5vdyA9IHRpbWVfbm93IDogdGhpcy50aW1lTm93VmFsID0gdGltZV9ub3c7XG4gIH0pXG59XG5cbi8qKlxuICogU3RvcHMgYSB0aW1lciB0aGF0IHdhcyBwcmV2aW91c2x5IHN0YXJ0ZWQgYnkgY2FsbGluZyB0aW1lKCkgb24gYSAqbGFiZWxlZCogbG9nLiBDYWxjdWxhdGVzIHRoZSBcbiAqIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgc3RhcnQgdGltZSBhbmQgd2hlbiB0aGlzIG1ldGhvZCB3YXMgY2FsbGVkLiBUaGlzIHRoZW5cbiAqIG1vZGlmaWVzIHRoZSBsb2cgcmVuZGVyIHRvIHNob3cgdGhlIHRpbWUgZGlmZmVyZW5jZS4gVGhpcyB3aWxsIGRvIG5vdGhpbmcgaWYgdGhlICpsYWJlbCogZG9lc1xuICogbm90IGV4aXN0LlxuICogXG4gKiBNRE4gQVBJIERvY3MgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Db25zb2xlL3RpbWVFbmQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGltZUVuZCh0aGlzOiBMb2cpOkxvZyB7XG4gIHJldHVybiBtb2RpZmllcih0aGlzLCAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGFiZWxWYWwpIHtcbiAgICAgIHRoaXMubGFiZWxWYWwudGltZUVsbGFwc2VkID0gZm9ybWF0VGltZShocnRpbWUodGhpcy5sYWJlbFZhbC50aW1lU3RhcnQpKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKlxuICAhIGNvbnNvbGUudGltZUxvZygpIGlzIHB1cnBvc2VmdWxseSBvbWl0dGVkIGZyb20gdGhpcyBBUEkuXG5cbiAgdGltZUxvZygpIGlzIGEgdXNlbGVzcyBtZXRob2Qgd2l0aGluIHRoZSBBZHplIEFQSS4gVGhlIHNhbWUgZWZmZWN0IGNhbiBiZSBcbiAgYWNjb21wbGlzaGVkIGJ5IGNyZWF0ZWQgYSBuZXcgbG9nIHdpdGggdGhlIHNhbWUgbGFiZWwuXG4qL1xuXG4vKipcbiAqIFRha2VzIGFuIEhyVGltZSB0dXBsZSBhbmQgY29udmVydHMgaXQgaW50byBhIGh1bWFuLXJlYWRhYmxlIGZvcm1hdHRlZFxuICogc3RyaW5nIGluIHRoZSBmb3JtYXQgb2YgYHtzZWN9cyB7bXN9bXNgLlxuICovXG5mdW5jdGlvbiBmb3JtYXRUaW1lKFsgc2VjLCBuYW5vIF06IEhyVGltZSk6c3RyaW5nIHtcbiAgcmV0dXJuIGAke3NlY31zICR7bmFubyAvIDEwMDAwMDB9bXNgO1xufVxuIiwiZXhwb3J0IHsgcHJpbnRMb2csIHByaW50R3JvdXAsIHByaW50R3JvdXBDb2xsYXBzZWQsIGZMZWFkZXIsIGZNZXRhIH0gZnJvbSAnLi9wcmludGVycyc7IiwiaW1wb3J0IHsgTG9nLCBMb2dMZXZlbERlZmluaXRpb24sIExvZ1JlbmRlciB9IGZyb20gJy4uLy4uL19jb250cmFjdHMnO1xuaW1wb3J0IHsgYXBwbHlSZW5kZXIsIHRvQ29uc29sZSB9IGZyb20gJy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xuaW1wb3J0IHsgaW5pdGlhbENhcHMgfSBmcm9tICcuLi8uLi91dGlsJztcblxuLy8gLS0tLS0tLSBQUklOVCBNRVRIT0RTIC0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludExvZyhsb2c6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIGNvbnN0IFsgbWV0aG9kLCBsZWFkZXIsIHN0eWxlLCBtZXRhIF0gPSBbIGRlZi5tZXRob2QsIGZMZWFkZXIoZGVmLCB1c2VfZW1vamksIGFyZ3MpLCAobG9nLmNmZy5iYXNlX3N0eWxlICsgZGVmLnN0eWxlKSwgZk1ldGEobG9nLCB1c2VfZW1vamkpIF07XG4gIGNvbnN0IHJlbmRlcl9hcmdzID0gbWV0YSA9PT0gJycgPyBbIGxlYWRlciwgc3R5bGUsIC4uLmFyZ3MgXSA6IFsgbGVhZGVyLCBzdHlsZSwgbWV0YSwgLi4uYXJncyBdO1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKGxvZywgbWV0aG9kLCByZW5kZXJfYXJncyApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50R3JvdXAobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICBjb25zdCBwYXJ0aWFsX2FyZ3MgPSBbIGZMZWFkZXIoZGVmLCB1c2VfZW1vamksIGFyZ3MpLCAobG9nLmNmZy5iYXNlX3N0eWxlICsgZGVmLnN0eWxlKSBdO1xuICBjb25zdCByZW5kZXJfYXJncyA9IHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gWyAuLi5wYXJ0aWFsX2FyZ3MsIGFyZ3NbMF0gXSA6IHBhcnRpYWxfYXJncztcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcihsb2csICdncm91cCcsIHJlbmRlcl9hcmdzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwQ29sbGFwc2VkKGxvZzogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgdXNlX2Vtb2ppOiBib29sZWFuLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgY29uc3QgcGFydGlhbF9hcmdzID0gWyBmTGVhZGVyKGRlZiwgdXNlX2Vtb2ppLCBhcmdzKSwgKGxvZy5jZmcuYmFzZV9zdHlsZSArIGRlZi5zdHlsZSkgXTtcbiAgY29uc3QgcmVuZGVyX2FyZ3MgPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIiA/IFsgLi4ucGFydGlhbF9hcmdzLCBhcmdzWzBdIF0gOiBwYXJ0aWFsX2FyZ3M7XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIobG9nLCAnZ3JvdXBDb2xsYXBzZWQnLCByZW5kZXJfYXJncykpO1xufVxuXG4vLyAtLS0tLS0tIFBSSU5UIEZPUk1BVFRFUlMgLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGZMZWFkZXIoZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOnN0cmluZyB7XG4gIHJldHVybiBgICVjJHtmRW1vamkoZGVmLCB1c2VfZW1vamkpfSAke2ZOYW1lKGRlZi5sZXZlbE5hbWUpfSgke2FyZ3MubGVuZ3RofSlgO1xufVxuXG5mdW5jdGlvbiBmRW1vamkoZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbik6c3RyaW5nIHtcbiAgcmV0dXJuIGVudi4kc2hlZD8ub3ZlcnJpZGVzPy51c2VfZW1vamkgfHwgdXNlX2Vtb2ppID8gYCAke2RlZi5lbW9qaX1gIDogJyc7XG59XG5cbmZ1bmN0aW9uIGZOYW1lKG5hbWU6IHN0cmluZ3x1bmRlZmluZWQpOnN0cmluZyB7XG4gIHJldHVybiBpbml0aWFsQ2FwcyhuYW1lID8/ICcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZNZXRhKGxvZzogTG9nLCB1c2VfZW1vamk6IGJvb2xlYW4pOnN0cmluZyB7XG4gIHJldHVybiBgJHtmTmFtZXNwYWNlKGxvZyl9JHtmTGFiZWwobG9nKX0ke2ZUaW1lKGxvZywgdXNlX2Vtb2ppKX0ke2ZDb3VudChsb2cpfSR7ZlRlc3QobG9nLCB1c2VfZW1vamkpfWA7XG59XG5cbmZ1bmN0aW9uIGZUaW1lKGxvZzogTG9nLCB1c2VfZW1vamk6IGJvb2xlYW4pOnN0cmluZyB7XG4gIGNvbnN0IGxhYmVsX3R4dCA9IGAke2xvZy5sYWJlbFZhbD8udGltZU5vdyA/PyBsb2cubGFiZWxWYWw/LnRpbWVFbGxhcHNlZCA/PyAnJ31gO1xuICByZXR1cm4gbGFiZWxfdHh0ICE9PSAnJyA/IGAgKCR7ZW52LiRzaGVkPy5vdmVycmlkZXM/LnVzZV9lbW9qaSB8fCB1c2VfZW1vamkgPyAn4o+xJyA6ICcnfSR7bGFiZWxfdHh0fSkgYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmQ291bnQobG9nOiBMb2cpOnN0cmluZyB7XG4gIGNvbnN0IGNvdW50ID0gbG9nLmxhYmVsVmFsPy5jb3VudDtcbiAgcmV0dXJuIGNvdW50ICE9PSB1bmRlZmluZWQgPyBgKENvdW50OiAke2NvdW50fSlgIDogJyc7XG59XG5cbmZ1bmN0aW9uIGZOYW1lc3BhY2UobG9nOiBMb2cpOnN0cmluZyB7XG4gIHJldHVybiBsb2cubmFtZXNwYWNlVmFsID8gYCMke2xvZy5uYW1lc3BhY2VWYWx9IGAgOiAnJztcbn1cblxuZnVuY3Rpb24gZkxhYmVsKGxvZzogTG9nKTpzdHJpbmcge1xuICByZXR1cm4gbG9nLmxhYmVsVmFsID8gYFske2xvZy5sYWJlbFZhbC5uYW1lfV0gYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmVGVzdChsb2c6IExvZywgdXNlX2Vtb2ppOiBib29sZWFuKTpzdHJpbmcge1xuICByZXR1cm4gbG9nLmFzc2VydGlvbiA9PT0gZmFsc2UgPyBgJHt1c2VfZW1vamkgPyAn4p2MICcgOiAnJ31Bc3NlcnRpb24gZmFpbGVkOmAgOiAnJztcbn0iLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICcuLi9nbG9iYWwnO1xuaW1wb3J0IHtcbiAgcHJpbnRMb2cgYXMgcHJpbnRMb2dCcm93c2VyLFxuICBwcmludEdyb3VwIGFzIHByaW50R3JvdXBCcm93c2VyLFxuICBwcmludEdyb3VwQ29sbGFwc2VkIGFzIHByaW50R3JvdXBDb2xsYXBzZWRCcm93c2VyLFxufSBmcm9tICcuL2Jyb3dzZXInO1xuaW1wb3J0IHtcbiAgcHJpbnRMb2cgYXMgcHJpbnRMb2dOb2RlLFxuICBwcmludEdyb3VwIGFzIHByaW50R3JvdXBOb2RlLFxuICBwcmludEdyb3VwQ29sbGFwc2VkIGFzIHByaW50R3JvdXBDb2xsYXBzZWROb2RlLFxufSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHtcbiAgcHJpbnQsXG4gIHByaW50R3JvdXBFbmQsXG4gIHByaW50VGFibGUsXG4gIHByaW50RGlyLFxuICBwcmludERpcnhtbCxcbiAgcHJpbnRUcmFjZSxcbn0gZnJvbSAnLi9zaGFyZWQnO1xuXG5jb25zdCBwcmludExvZyA9IGlzQnJvd3NlciA/IHByaW50TG9nQnJvd3NlciA6IHByaW50TG9nTm9kZTtcbmNvbnN0IHByaW50R3JvdXAgPSBpc0Jyb3dzZXIgPyBwcmludEdyb3VwQnJvd3NlciA6IHByaW50R3JvdXBOb2RlO1xuY29uc3QgcHJpbnRHcm91cENvbGxhcHNlZCA9IGlzQnJvd3NlciA/IHByaW50R3JvdXBDb2xsYXBzZWRCcm93c2VyIDogcHJpbnRHcm91cENvbGxhcHNlZE5vZGU7XG5cbmV4cG9ydCB7XG4gIHByaW50LFxuICBwcmludExvZyxcbiAgcHJpbnRHcm91cCxcbiAgcHJpbnRHcm91cENvbGxhcHNlZCxcbiAgcHJpbnRHcm91cEVuZCxcbiAgcHJpbnRUYWJsZSxcbiAgcHJpbnREaXIsXG4gIHByaW50RGlyeG1sLFxuICBwcmludFRyYWNlLFxufTsiLCJleHBvcnQgeyBwcmludExvZywgcHJpbnRHcm91cCwgcHJpbnRHcm91cENvbGxhcHNlZCwgZkxlYWRlciwgZk1ldGEgfSBmcm9tICcuL3ByaW50ZXJzJzsiLCJpbXBvcnQgKiBhcyBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeyBMb2csIExvZ0xldmVsRGVmaW5pdGlvbiwgTG9nUmVuZGVyIH0gZnJvbSAnLi4vLi4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyB0b0NvbnNvbGUsIGFwcGx5UmVuZGVyIH0gZnJvbSAnLi4vc2hhcmVkJztcbmltcG9ydCB7IGVudiB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XG5pbXBvcnQgeyBpbml0aWFsQ2FwcyB9IGZyb20gJy4uLy4uL3V0aWwnO1xuXG4vLyAtLS0tLS0tIFBSSU5UIE1FVEhPRFMgLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50TG9nKGxvZzogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgdXNlX2Vtb2ppOiBib29sZWFuLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgY29uc3QgWyBtZXRob2QsIGxlYWRlciwgc3R5bGUsIG1ldGEgXSA9IFsgZGVmLm1ldGhvZCwgZkxlYWRlcihkZWYsIHVzZV9lbW9qaSwgYXJncyksIGRlZi50ZXJtaW5hbCwgZk1ldGEobG9nLCB1c2VfZW1vamkpIF07XG4gIGNvbnN0IHJlbmRlcl9hcmdzID0gbWV0YSA9PT0gJycgPyBbIGxlYWRlciwgLi4uYXJncyBdIDogWyBsZWFkZXIsIHN0eWxlLCBtZXRhLCAuLi5hcmdzIF07XG4gIHJldHVybiB0b0NvbnNvbGUoYXBwbHlSZW5kZXIobG9nLCBtZXRob2QsIHJlbmRlcl9hcmdzICkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRHcm91cChsb2c6IExvZywgZGVmOiBMb2dMZXZlbERlZmluaXRpb24sIHVzZV9lbW9qaTogYm9vbGVhbiwgYXJnczogYW55W10pOkxvZ1JlbmRlciB7XG4gIGNvbnN0IHJlbmRlcl9hcmdzID0gc2V0dXBQcmludEdyb3VwKGRlZiwgdXNlX2Vtb2ppLCBhcmdzKTtcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcihsb2csICdncm91cCcsIHJlbmRlcl9hcmdzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEdyb3VwQ29sbGFwc2VkKGxvZzogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgdXNlX2Vtb2ppOiBib29sZWFuLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgY29uc3QgcmVuZGVyX2FyZ3MgPSBzZXR1cFByaW50R3JvdXAoZGVmLCB1c2VfZW1vamksIGFyZ3MpO1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKGxvZywgJ2dyb3VwQ29sbGFwc2VkJywgcmVuZGVyX2FyZ3MpKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBQcmludEdyb3VwKGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTphbnlbXSB7XG4gIGNvbnN0IHBhcnRpYWxfYXJncyA9IFsgZkxlYWRlcihkZWYsIHVzZV9lbW9qaSwgYXJncykgXTtcbiAgcmV0dXJuIHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gWyAuLi5wYXJ0aWFsX2FyZ3MsIGFyZ3NbMF0gXSA6IHBhcnRpYWxfYXJncztcbn1cblxuLy8gLS0tLS0tLSBQUklOVCBGT1JNQVRURVJTIC0tLS0tLS0tIC8vXG5cbmV4cG9ydCBmdW5jdGlvbiBmTGVhZGVyKGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpzdHJpbmcge1xuICBjb25zdCBlbW9qaSA9IHVzZV9lbW9qaSA/IGZFbW9qaShkZWYuZW1vamkpIDogJyc7XG4gIGNvbnN0IHBhZGRpbmcgPSB1c2VfZW1vamkgPyAoMTQgKyBlbW9qaS5sZW5ndGgpIDogMTQ7XG4gIGNvbnN0IHBhZGRlZF9sZWFkZXIgPSBhZGRQYWRkaW5nKGAke2Vtb2ppfSAke2ZOYW1lKGRlZi5sZXZlbE5hbWUpfSgke2FyZ3MubGVuZ3RofSlgLCBwYWRkaW5nKTtcbiAgXG4gIHJldHVybiBkZWYudGVybWluYWwucmVkdWNlKChhY2MsIHN0eWxlKSA9PiB7XG4gICAgcmV0dXJuIGNoYWxrW3N0eWxlXShhY2MpO1xuICB9LCBwYWRkZWRfbGVhZGVyKTtcbn1cblxuLyoqXG4gKiBBZGQgc3BhY2VzIHRvIHRoZSBlbmQgb2YgYSBsb2cgdGl0bGUgdG8gbWFrZSB0aGVtIGFsbCBhbGlnbi5cbiAqL1xuZnVuY3Rpb24gYWRkUGFkZGluZyhzdHI6IHN0cmluZywgbGVuOiBudW1iZXIpOnN0cmluZyB7XG4gIGNvbnN0IGRpZmYgPSBsZW4gLSBzdHIubGVuZ3RoO1xuICBsZXQgcGFkZGVkID0gc3RyO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBkaWZmOyBpICs9IDEpIHtcbiAgICBwYWRkZWQgKz0gJyAnO1xuICB9XG4gIHJldHVybiBwYWRkZWQ7XG59XG5cbmZ1bmN0aW9uIGZFbW9qaShlbW9qaTogc3RyaW5nKTpzdHJpbmcge1xuICByZXR1cm4gYCAke2Vtb2ppfWA7XG59XG5cbmZ1bmN0aW9uIGZOYW1lKG5hbWU6IHN0cmluZ3x1bmRlZmluZWQpOnN0cmluZyB7XG4gIHJldHVybiBpbml0aWFsQ2FwcyhuYW1lID8/ICcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZNZXRhKGxvZzogTG9nLCB1c2VfZW1vamk6IGJvb2xlYW4pOnN0cmluZyB7XG4gIHJldHVybiBgJHtmTmFtZXNwYWNlKGxvZyl9JHtmTGFiZWwobG9nKX0ke2ZUaW1lKGxvZywgdXNlX2Vtb2ppKX0ke2ZDb3VudChsb2cpfSR7ZlRlc3QobG9nLCB1c2VfZW1vamkpfWA7XG59XG5cbmZ1bmN0aW9uIGZUaW1lKGxvZzogTG9nLCB1c2VfZW1vamk6IGJvb2xlYW4pOnN0cmluZyB7XG4gIGNvbnN0IGxhYmVsX3R4dCA9IGAke2xvZy50aW1lTm93VmFsID8/IGxvZy5sYWJlbFZhbD8udGltZUVsbGFwc2VkID8/ICcnfWA7XG4gIHJldHVybiBsYWJlbF90eHQgIT09ICcnID8gYCgke2Vudi4kc2hlZD8ub3ZlcnJpZGVzPy51c2VfZW1vamkgfHwgdXNlX2Vtb2ppID8gJ+KPsScgOiAnJ30ke2xhYmVsX3R4dH0pIGAgOiAnJztcbn1cblxuZnVuY3Rpb24gZkNvdW50KGxvZzogTG9nKTpzdHJpbmcge1xuICBjb25zdCBjb3VudCA9IGxvZy5sYWJlbFZhbD8uY291bnQ7XG4gIHJldHVybiBjb3VudCAhPT0gdW5kZWZpbmVkID8gYChDb3VudDogJHtjb3VudH0pYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBmTmFtZXNwYWNlKGxvZzogTG9nKTpzdHJpbmcge1xuICByZXR1cm4gbG9nLm5hbWVzcGFjZVZhbCA/IGAjJHtsb2cubmFtZXNwYWNlVmFsfSBgIDogJyc7XG59XG5cbmZ1bmN0aW9uIGZMYWJlbChsb2c6IExvZyk6c3RyaW5nIHtcbiAgcmV0dXJuIGxvZy5sYWJlbFZhbCA/IGBbJHtsb2cubGFiZWxWYWwubmFtZX1dIGAgOiAnJztcbn1cblxuZnVuY3Rpb24gZlRlc3QobG9nOiBMb2csIHVzZV9lbW9qaTogYm9vbGVhbik6c3RyaW5nIHtcbiAgcmV0dXJuIGxvZy5hc3NlcnRpb24gPT09IGZhbHNlID8gYCR7dXNlX2Vtb2ppID8gJ+KdjCAnIDogJyd9QXNzZXJ0aW9uIGZhaWxlZDpgIDogJyc7XG59IiwiaW1wb3J0IHsgTG9nLCBMb2dSZW5kZXIsIERlZmF1bHRzLCBDb25zb2xlTWV0aG9kLCBMb2dMZXZlbERlZmluaXRpb24gfSBmcm9tIFwiLi4vX2NvbnRyYWN0c1wiO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vZ2xvYmFsJztcblxuLy8gLS0tLS0tLSBQUklOVCBFTlRSWSAtLS0tLS0tLSAvL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnQobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgY29uc3QgdXNlX2Vtb2ppID0gZW52LiRzaGVkPy5vdmVycmlkZXM/LnVzZV9lbW9qaSA9PT0gdHJ1ZSB8fCBsb2cuY2ZnLnVzZV9lbW9qaSA9PT0gdHJ1ZTtcbiAgcmV0dXJuIGxvZy5wcmludGVyKGxvZywgZGVmLCB1c2VfZW1vamksIGFyZ3MpO1xufVxuXG4vLyAtLS0tLS0tIFBSSU5UIE1FVEhPRFMgLS0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50R3JvdXBFbmQobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKGxvZywgJ2dyb3VwRW5kJywgW10pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50VGFibGUobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKGxvZywgJ3RhYmxlJywgYXJncyksIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50RGlyKGxvZzogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgdXNlX2Vtb2ppOiBib29sZWFuLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcihsb2csICdkaXInLCBhcmdzKSwgZmFsc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnREaXJ4bWwobG9nOiBMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uLCB1c2VfZW1vamk6IGJvb2xlYW4sIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICByZXR1cm4gdG9Db25zb2xlKGFwcGx5UmVuZGVyKGxvZywgJ2RpcnhtbCcsIGFyZ3MpLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludFRyYWNlKGxvZzogTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbiwgdXNlX2Vtb2ppOiBib29sZWFuLCBhcmdzOiBhbnlbXSk6TG9nUmVuZGVyIHtcbiAgcmV0dXJuIHRvQ29uc29sZShhcHBseVJlbmRlcihsb2csICd0cmFjZScsIGFyZ3MpKTtcbn1cblxuLy8gLS0tLS0tIFByaW50IHRvIHRoZSBjb25zb2xlIC0tLS0tLS0gLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UmVuZGVyKGxvZzogTG9nLCBtZXRob2Q6IENvbnNvbGVNZXRob2QsIGFyZ3M6IGFueVtdKTpMb2dSZW5kZXIge1xuICBsb2cucmVuZGVyID0gW21ldGhvZCwgYXJnc107XG4gIHJldHVybiBsb2cucmVuZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Db25zb2xlKHJlbmRlcjogTG9nUmVuZGVyLCBzcHJlYWQ6IGJvb2xlYW4gPSB0cnVlKTpMb2dSZW5kZXIge1xuICBjb25zdCBbbWV0aG9kLCBhcmdzXSA9IHJlbmRlcjtcbiAgaWYgKGVudi5BRFpFX0VOViAhPT0gJ2RldicpIHtcbiAgICBpZiAoc3ByZWFkKSB7XG4gICAgICBjb25zb2xlW21ldGhvZF0oLi4uYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGVbbWV0aG9kXShhcmdzKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlbmRlcjtcbn0iLCJpbXBvcnQgZGVmYXVsdHNEZWVwIGZyb20gJ2xvZGFzaC5kZWZhdWx0c2RlZXAnO1xuaW1wb3J0IHtcbiAgU2hlZENvbmZpZywgRGVmYXVsdHMsIExhYmVsLFxuICBTaGVkVXNlckNvbmZpZywgRmluYWxMb2csIEJ1bmRsZSxcbiAgTG9nTGV2ZWxEZWZpbml0aW9uLCBMaXN0ZW5lckxvY2F0aW9ucyxcbiAgTGlzdGVuZXJCdWNrZXQsIExpc3RlbmVyQ2FsbGJhY2ssIExhYmVsTWFwLCBMaXN0ZW5lckJ1Y2tldHNcbn0gZnJvbSAnLi9fY29udHJhY3RzJztcbmltcG9ydCB7IGRlZmF1bHRzLCBzaGVkX2RlZmF1bHRzIH0gZnJvbSAnLi9fZGVmYXVsdHMnO1xuXG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuL2dsb2JhbCc7XG5cbnR5cGUgR2xvYmFsRmlsdGVycyA9IFwibGFiZWxcInxcIm5hbWVzcGFjZVwifFwibGV2ZWxcIjtcblxuLyoqXG4gKiBBIHR5cGVndWFyZCB0aGF0IGluZGljYXRlcyB0aGF0IGEgZ2xvYmFsIHNoZWQgc3RvcmUgZXhpc3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hlZEV4aXN0cyhzdG9yZTogU2hlZHx1bmRlZmluZWQpOnN0b3JlIGlzIFNoZWQge1xuICByZXR1cm4gc3RvcmUgIT09IHVuZGVmaW5lZDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBzaGVkIGluc3RhbmNlIGluIHlvdXIgZW52aXJvbm1lbnQncyBnbG9iYWwgY29udGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoZWQoY29uZmlnOiBTaGVkVXNlckNvbmZpZyk6dm9pZCB7XG4gIGVudi4kc2hlZCA9IG5ldyBTaGVkKGNvbmZpZyk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgc2hlZCBmcm9tIHRoZSBlbnZpcm9ubWVudCdzIGdsb2JhbCBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVhcmRvd25TaGVkKCk6dm9pZCB7XG4gIGRlbGV0ZSBlbnYuJHNoZWQ7XG59XG5cbi8qKlxuICogQSBnbG9iYWwgc3RvcmUgZm9yIGNhY2hpbmcsIGxpc3RlbmluZywgYW5kIHJlY2FsbGluZyBBZHplIGxvZ3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBTaGVkIHtcblxuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyYXRpb24gZm9yIFNoZWQuIFNoZWQgaXMgY29uc3RydWN0ZWQgd2l0aCBhIHNldCBvZiBcbiAgICogZGVmYXVsdHMgdGhhdCBjYW4gb3ZlcnJpZGVuIGJ5IHRoZSBjb25maWd1cmF0aW9uIHN1cHBsaWVkIGJ5IHRoZSB1c2VyLlxuICAgKi9cbiAgcHJpdmF0ZSBjZmc6IFNoZWRDb25maWc7XG5cbiAgLyoqXG4gICAqIENhY2hlIG9mIGZpbmFsaXplZCBsb2dzICh0ZXJtaW5hdGVkIGFuZCBoYXZlIG1ldGEgZGF0YSBhcHBsaWVkIHRvIHRoZW0pLiBUaGlzXG4gICAqIGlzIG1haW5seSB1c2VkIGZvciByZWNhbGxpbmcgbG9ncyBhbmQgZmlsdGVyaW5nIHRoZW0uXG4gICAqL1xuICBwcml2YXRlIGNhY2hlOiBGaW5hbExvZ1tdID0gW107XG5cbiAgLyoqXG4gICAqIENhY2hlIG9mIGxhYmVsIGluc3RhbmNlcy4gVXNlZnVsIGZvciBnbG9iYWxseSBsaW5raW5nIGxhYmVsbGVkIGxvZ3MuXG4gICAqL1xuICBwcml2YXRlIGxhYmVsczogTGFiZWxNYXAgPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIENvdW50ZXIgZm9yIGdlbmVyYXRpbmcgSUQncyBmb3IgbGlzdGVuZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBpZF9jb3VudGVyOiBudW1iZXIgPSAtMTtcblxuICAvKipcbiAgICogQ2FjaGUgb2YgbG9nIGxpc3RlbmVycy4gVGhlc2UgYXJlIGZpcmUgd2hlbiBzcGVjaWZpZWQgbG9nIGxldmVsc1xuICAgKiBhcmUgcHJpbnRlZC5cbiAgICovXG4gIHByaXZhdGUgbGlzdGVuZXJzOiBMaXN0ZW5lckJ1Y2tldHMgPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBTaGVkVXNlckNvbmZpZykge1xuICAgIHRoaXMuY2ZnID0gZGVmYXVsdHNEZWVwKGNvbmZpZywgc2hlZF9kZWZhdWx0cyk7XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcXG4gICAqIEdFVC9TRVQgTUVUSE9EU1xuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIFN0b3JlIGEgbG9nIGluIHRoZSBzaGVkIGZvciBsYXRlciByZWNhbGwuXG4gICAqL1xuICBwdWJsaWMgc3RvcmUobG9nOiBGaW5hbExvZyk6dm9pZCB7XG4gICAgaWYgKHRoaXMuY2FjaGUubGVuZ3RoIDwgdGhpcy5jZmcuY2FjaGVfbGltaXQpIHtcbiAgICAgIHRoaXMuY2FjaGUgPSB0aGlzLmNhY2hlLmNvbmNhdChbbG9nXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGxpbWl0IGZvciB0aGUgbWF4aW11bSBudW1iZXIgb2YgbG9ncyB0aGF0IFNoZWQgd2lsbCBjYWNoZS5cbiAgICovXG4gIHB1YmxpYyBzZXQgY2FjaGVMaW1pdChsaW1pdDogbnVtYmVyKSB7XG4gICAgdGhpcy5jZmcuY2FjaGVfbGltaXQgPSBsaW1pdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBsaW1pdCBmb3IgdGhlIG1heGltdW0gbnVtYmVyIG9mIGxvZ3MgdGhhdCBTaGVkIHdpbGwgY2FjaGUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNhY2hlTGltaXQoKTpudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNmZy5jYWNoZV9saW1pdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBvZiB0aGUgY2FjaGVkIGxvZ3Mgb2YgdGhlIHByb3ZpZGVkIGxldmVscyBhcyBhIGJ1bmRsZS5cbiAgICogVGhpcyBpcyB1c2VmdWwgZm9yIHJlY2FsbGluZyBsb2dzIGFuZCBhcHBseWluZyBmaWx0ZXJzLlxuICAgKi9cbiAgcHVibGljIGdldEJ1bmRsZShsZXZlbHM6IG51bWJlcltdKTpCdW5kbGUge1xuICAgIHJldHVybiB0aGlzLmNhY2hlLnJlZHVjZSgoYWNjLCBsb2cpID0+IHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KGxldmVscy5pbmNsdWRlcyhsb2cubGV2ZWwpID8gWyBsb2cgXSA6IFtdKTtcbiAgICB9LCBbXSBhcyBCdW5kbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgc2hlZCBpbnN0YW5jZSBoYXMgZ2xvYmFsIEFkemUgY29uZmlnIG92ZXJyaWRlcyBzZXQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGhhc092ZXJyaWRlcygpOmJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNmZy5nbG9iYWxfY2ZnICE9PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGdsb2JhbCBBZHplIGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGVzLlxuICAgKi9cbiAgcHVibGljIGdldCBvdmVycmlkZXMoKTpEZWZhdWx0c3xudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jZmcuZ2xvYmFsX2NmZztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGhpZGVBbGwgZmlsdGVyIHByb3BlcnR5LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgaGlkZUFsbCgpOmJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNmZz8uZmlsdGVycy5oaWRlQWxsID8/IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGdsb2JhbCBBZHplIGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGVzLlxuICAgKi9cbiAgcHVibGljIHNldCBjb25maWcoY2ZnOiBEZWZhdWx0c3xudWxsKSB7XG4gICAgY29uc3QgZGVmYXVsdGVkID0gY2ZnID8gZGVmYXVsdHNEZWVwKGNmZywgZGVmYXVsdHMpIDogY2ZnO1xuICAgIHRoaXMuY2ZnLmdsb2JhbF9jZmcgPSBkZWZhdWx0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgbGFiZWwgZnJvbSB0aGUgU2hlZCBieSBuYW1lLlxuICAgKi9cbiAgcHVibGljIGdldExhYmVsKG5hbWU6IHN0cmluZyk6TGFiZWx8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHMuZ2V0KG5hbWUpO1xuICB9XG4gIFxuICAvKipcbiAgICogQWRkcyBhIGxhYmVsIHRvIHRoZSBTaGVkIHRvIGJlIHRyYWNrZWQgZ2xvYmFsbHkuXG4gICAqL1xuICBwdWJsaWMgYWRkTGFiZWwobGFiZWw6IExhYmVsKTp2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzTGFiZWwobGFiZWwubmFtZSkpIHtcbiAgICAgIHRoaXMubGFiZWxzLnNldChsYWJlbC5uYW1lLCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB3aGV0aGVyIGEgbGFiZWwgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBleGlzdHMgaW4gdGhlIFNoZWQgbGFiZWwgY2FjaGUuXG4gICAqL1xuICBwdWJsaWMgaGFzTGFiZWwobmFtZTogc3RyaW5nKTpib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHMuaGFzKG5hbWUpO1xuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICAgKiBMSVNURU5FUiBNRVRIT0RTXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogQWRkIGEgbGlzdGVuZXIgY2FsbGJhY2sgdGhhdCBmaXJlcyBhbnkgdGltZSBhIGxvZyBvZiBvbmUgb2YgdGhlIHByb3ZpZGVkIGxldmVscyBpcyBnZW5lcmF0ZWQuXG4gICAqL1xuICBwdWJsaWMgYWRkTGlzdGVuZXIobGV2ZWxzOiBudW1iZXJbXSwgY2I6IExpc3RlbmVyQ2FsbGJhY2spOkxpc3RlbmVyTG9jYXRpb25zIHtcbiAgICByZXR1cm4gbGV2ZWxzLm1hcCgobHZsOiBudW1iZXIpID0+IHtcblxuICAgICAgLy8gR2V0IHRoZSBtYXAgZm9yIHRoZSBsaXN0ZW5lcnMgb2YgdGhlIGdpdmVuIGxvZyBsZXZlbC5cbiAgICAgIGNvbnN0IGxldmVsX21hcCA9IHRoaXMubGlzdGVuZXJCdWNrZXQobHZsKTtcbiAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IElEIGZvciB0aGUgbGlzdGVuZXIuXG4gICAgICBjb25zdCBpZCA9IHRoaXMuYXNzaWduSWQoKTtcblxuICAgICAgLy8gQXNzaWduIGFuIElEIHRvIHRoZSBsaXN0ZW5lciBmb3IgbGF0ZXIgdGVhcmRvd24uXG4gICAgICBsZXZlbF9tYXAuc2V0KGlkLCBjYik7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zZXQobHZsLCBsZXZlbF9tYXApO1xuXG4gICAgICAvLyBSZXR1cm4gdGhlIGxpc3RlbmVyIGxvY2F0aW9uIHR1cGxlXG4gICAgICByZXR1cm4gW2x2bCwgaWRdO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBsb2cgbGlzdGVuZXJzIGF0IHRoZSBnaXZlbiBidWNrZXQgbG9jYXRpb25zLlxuICAgKi8gXG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lcihsb2NhdGlvbnM6IExpc3RlbmVyTG9jYXRpb25zKTp2b2lkIHtcbiAgICBsb2NhdGlvbnMuZm9yRWFjaCgoW2x2bF9pZCwgaWRdKSA9PiB7XG4gICAgICBjb25zdCBsZXZlbCA9IHRoaXMubGlzdGVuZXJzLmdldChsdmxfaWQpO1xuICAgICAgbGV2ZWw/LmRlbGV0ZShpZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZSBhbnkgbG9nIGxpc3RlbmVycyBmb3IgdGhlIHByb3ZpZGVkIGxvZy5cbiAgICovXG4gIHB1YmxpYyBmaXJlTGlzdGVuZXJzKGxvZzogRmluYWxMb2csIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9uKTp2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVycy5nZXQobG9nLmxldmVsKT8uZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICBsaXN0ZW5lcih7IC4uLmxvZywgLi4uZGVmIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXFxuICAgKiBHTE9CQUwgRklMVEVSIE1FVEhPRFNcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoaXMgbG9nIGluc3RhbmNlIHNob3VsZCBiZSBcbiAgICogYWxsb3dlZCB0byBwcmludC5cbiAgICovXG4gIHB1YmxpYyBsb2dHbG9iYWxseUFsbG93ZWQobG9nOiBGaW5hbExvZyk6Ym9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmhpZGVBbGxcbiAgICAgICYmIHRoaXMubG9nQWxsb3dlZExvZ2ljKCdsYWJlbCcsIGxvZz8ubGFiZWxWYWw/Lm5hbWUpXG4gICAgICAmJiB0aGlzLmxvZ0FsbG93ZWRMb2dpYygnbGV2ZWwnLCBsb2cubGV2ZWwpXG4gICAgICAmJiB0aGlzLmxvZ0FsbG93ZWRMb2dpYygnbmFtZXNwYWNlJywgbG9nLm5hbWVzcGFjZVZhbCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiBwcm92aWRlZCB2YWx1ZSBwYXNzZXMgdXNlciBjb25maWd1cmVkXG4gICAqIGdsb2JhbCBmaWx0ZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBsb2dBbGxvd2VkTG9naWMoY2F0ZWdvcnk6IEdsb2JhbEZpbHRlcnMsIHZhbHVlOiBzdHJpbmd8bnVtYmVyfHVuZGVmaW5lZCk6Ym9vbGVhbiB7XG4gICAgLy8gSWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCB3ZSBjYW5ub3QgZGV0ZXJtaW5lIGlmIGl0IHNob3VsZCBoaWRlIHRoZSBsb2dcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmZpbHRlcklzU2V0KCdpbmNsdWRlJywgY2F0ZWdvcnkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0luY2x1ZGVkKGNhdGVnb3J5LCB2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZpbHRlcklzU2V0KCdleGNsdWRlJywgY2F0ZWdvcnkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc05vdEV4Y2x1ZGVkKGNhdGVnb3J5LCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhcyB0aGUgdXNlciBoYXMgZGVmaW5lZCBydWxlcyBmb3IgYSBzcGVjaWZpYyBmaWx0ZXI/XG4gICAqL1xuICBwcml2YXRlIGZpbHRlcklzU2V0KHR5cGU6IFwiaW5jbHVkZVwifFwiZXhjbHVkZVwiLCBmaWx0ZXI6IEdsb2JhbEZpbHRlcnMpOmJvb2xlYW4ge1xuICAgIGNvbnN0IGluY2x1ZGVfcHJvcCA9IHRoaXMuY2ZnPy5maWx0ZXJzPy5bZmlsdGVyXT8uaW5jbHVkZSA/PyBbXTtcbiAgICByZXR1cm4gaW5jbHVkZV9wcm9wLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogSXMgdGhlIGxvZyBpbiB0aGUgaW5jbHVkZWQgZmlsdGVyP1xuICAgKi9cbiAgcHJpdmF0ZSBpc0luY2x1ZGVkKGZpbHRlcjogR2xvYmFsRmlsdGVycywgdmFsdWU6IHN0cmluZ3xudW1iZXIpOmJvb2xlYW4ge1xuICAgIGNvbnN0IGZpbHRlcl92YWxzID0gdGhpcy5jZmc/LmZpbHRlcnM/LltmaWx0ZXJdPy5pbmNsdWRlID8/IDxhbnk+W107XG4gICAgcmV0dXJuIGZpbHRlcl92YWxzLmxlbmd0aCA+IDAgJiYgZmlsdGVyX3ZhbHMuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIElzIHRoZSBsb2cgbm90IGluIHRoZSBleGNsdWRlZCBmaWx0ZXI/XG4gICAqL1xuICBwcml2YXRlIGlzTm90RXhjbHVkZWQoZmlsdGVyOiBHbG9iYWxGaWx0ZXJzLCB2YWx1ZTogc3RyaW5nfG51bWJlcik6Ym9vbGVhbiB7XG4gICAgY29uc3QgZmlsdGVyX3ZhbHMgPSB0aGlzLmNmZz8uZmlsdGVycz8uW2ZpbHRlcl0/LmV4Y2x1ZGUgPz8gPGFueT5bXTtcbiAgICByZXR1cm4gZmlsdGVyX3ZhbHMubGVuZ3RoID4gMCAmJiBmaWx0ZXJfdmFscy5pbmRleE9mKHZhbHVlKSA9PT0gLTE7XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcXG4gICAqIEhFTFBFUiBNRVRIT0RTXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogR3VhcmFudGVlIHRoYXQgYSBsaXN0ZW5lciBidWNrZXQgZXhpc3RzIGZvciB0aGUgZ2l2ZW4gbG9nIGxldmVsIGFuZCByZXR1cm4gdGhlIGJ1Y2tldC5cbiAgICovXG4gIHByaXZhdGUgbGlzdGVuZXJCdWNrZXQobHZsOiBudW1iZXIpOkxpc3RlbmVyQnVja2V0IHtcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhsdmwpKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zZXQobHZsLCBuZXcgTWFwKCkpO1xuICAgIH1cbiAgICAvLyBPdmVycmlkZSBUUyBiZWNhdXNlIHRoZSBMaXN0ZW5lckJ1Y2tldCBpcyBndWFyYW50ZWVkIGJ5IHRoZSBjb25kaXRpb24gYWJvdmUuXG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXJzLmdldChsdmwpIGFzIExpc3RlbmVyQnVja2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlbWVudCB0aGUgSUQgY291bnRlciBhbmQgcmV0dXJuIHRoZSBuZXcgdmFsdWUuXG4gICAqL1xuICBwcml2YXRlIGFzc2lnbklkKCk6bnVtYmVyIHtcbiAgICByZXR1cm4gKHRoaXMuaWRfY291bnRlciArPSAxKTtcbiAgfVxuXG59XG4iLCJleHBvcnQgeyBsb2dNZXRob2QsIGN1c3RvbU1ldGhvZCwgc2VhbCB9IGZyb20gJy4vdGVybWluYXRvcnMnOyIsImltcG9ydCB7XG4gIExvZywgRmluYWxMb2csIExvZ0Z1bmN0aW9uLFxuICBDdXN0b21Mb2dGdW5jdGlvbixcbiAgRGVmYXVsdHMsIExvZ0xldmVsRGVmaW5pdGlvbiwgVGVybWluYXRlZExvZyxcbn0gZnJvbSAnLi4vX2NvbnRyYWN0cyc7XG5pbXBvcnQgeyBwcmludCB9IGZyb20gJy4uL3ByaW50ZXJzJztcbmltcG9ydCB7IGFsbG93ZWQsIGV2YWxQYXNzZXMgfSBmcm9tICcuLi9jb25kaXRpb25zJztcbmltcG9ydCB7IG11dGF0ZVByb3BzIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBzaGVkRXhpc3RzIH0gZnJvbSAnLi4vc2hlZCc7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuLi9nbG9iYWwnO1xuXG4vKipcbiAqIFNlYWxzIHRoZSBjb25maWd1cmF0aW9uIG9mIGEgbG9nIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdFxuICogY29uc3RydWN0cyBhIG5ldyBsb2cgd2l0aCB0aGUgc2FtZSBjb25maWd1cmF0aW9uLlxuICogXG4gKiAqKkV4YW1wbGU6KipcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IHNlYWxlZCA9IGFkemUoeyB1c2VfZW1vamk6IHRydWUgfSkubnMoJ3NlYWxlZCcpLmxhYmVsKCdzZWFsZWQtbGFiZWwnKS5zZWFsKCk7XG4gKiBzZWFsZWQoKS5zdWNjZXNzKCdTdWNjZXNzIScpOyAvLyAtPiBwcmludHMgXCIjc2VhbGVkIFtzZWFsZWQtbGFiZWxdIFN1Y2Nlc3MhXCJcbiAqIHNlYWxlZCgpLmxvZygnQW5vdGhlciBsb2cuJyk7IC8vIC0+IHByaW50cyBcIiNzZWFsZWQgW3NlYWxlZC1sYWJlbF0gQW5vdGhlciBsb2cuXCJcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VhbCh0aGlzOiBMb2cpOigpID0+IExvZyB7XG4gIC8vIFJ1biB0aGUgbW9kaWZpZXIgcXVldWUgdG8gYXBwbHkgdGhlaXIgcmVzdWx0c1xuICBydW5Nb2RpZmllclF1ZXVlKHRoaXMubW9kaWZpZXJRdWV1ZSk7XG4gIC8vIENsZWFyIHRoZSBxdWV1ZSBhcyB0byBub3QgcmVwZWF0IHRoZSBhY3Rpb25zIHdoZW4gdGhlIHN1YnNlcXVlbnQgbG9ncyBhcmUgdGVybWluYXRlZC5cbiAgdGhpcy5tb2RpZmllclF1ZXVlID0gW107XG4gIHJldHVybiAoKSA9PiAoeyAuLi50aGlzIH0pO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHRlcm1pbmF0aW5nIGxvZyBtZXRob2QgdGhlIHNwZWNpZmllZCBsb2cgbGV2ZWwgbmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvZ01ldGhvZChjZmc6IERlZmF1bHRzLCBsZXZlbE5hbWU6IHN0cmluZyk6TG9nRnVuY3Rpb24ge1xuICByZXR1cm4gZnVuY3Rpb24odGhpczogTG9nLCAuLi5hcmdzOiBhbnlbXSk6VGVybWluYXRlZExvZyB7XG4gICAgcmV0dXJuIGV4ZWN1dGlvblBpcGVsaW5lKHRoaXMsIGNmZywgZ2V0RGVmaW5pdGlvbihjZmcsICdsb2dfbGV2ZWxzJywgbGV2ZWxOYW1lKSwgYXJncyk7XG4gIH07XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgdGVybWluYXRpbmcgbG9nIG1ldGhvZCB0aGF0IGVuYWJsZXMgdGhlIHVzZXIgdG8gc3BlY2lmeSBhIGN1c3RvbVxuICogbG9nIGxldmVsIGJ5IGtleSBhcyB0aGUgZm9ybWF0IGZvciB0aGUgbG9nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tTWV0aG9kKGNmZzogRGVmYXVsdHMpOkN1c3RvbUxvZ0Z1bmN0aW9uIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoaXM6IExvZywgbGV2ZWxOYW1lOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTpUZXJtaW5hdGVkTG9nIHtcbiAgICByZXR1cm4gZXhlY3V0aW9uUGlwZWxpbmUodGhpcywgY2ZnLCBnZXREZWZpbml0aW9uKGNmZywgJ2N1c3RvbV9sZXZlbHMnLCBsZXZlbE5hbWUpLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgbG9nIGxldmVsIGRlZmluaXRpb24gZnJvbSB0aGUgbG9nIGNvbmZpZ3VyYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGdldERlZmluaXRpb24oY2ZnOiBEZWZhdWx0cywgdHlwZTogXCJsb2dfbGV2ZWxzXCJ8XCJjdXN0b21fbGV2ZWxzXCIsIGxldmVsTmFtZTogc3RyaW5nKTpMb2dMZXZlbERlZmluaXRpb258dW5kZWZpbmVkIHtcbiAgY29uc3Qgc2hlZCA9IGVudi4kc2hlZDtcbiAgbGV0IGRlZmluaXRpb24gPSB1bmRlZmluZWQ7XG5cbiAgaWYgKHNoZWRFeGlzdHMoc2hlZCkgJiYgc2hlZC5oYXNPdmVycmlkZXMpIHtcbiAgICBkZWZpbml0aW9uID0gc2hlZC5vdmVycmlkZXM/Llt0eXBlXT8uW2xldmVsTmFtZV07XG4gIH0gZWxzZSB7XG4gICAgZGVmaW5pdGlvbiA9IGNmZ1t0eXBlXVtsZXZlbE5hbWVdO1xuICB9XG4gIFxuICByZXR1cm4gZGVmaW5pdGlvbiA/IHsgLi4uZGVmaW5pdGlvbiwgbGV2ZWxOYW1lIH0gOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogVGhlIHByaW1hcnkgZXhlY3V0aW9uIHBpcGVsaW5lIGZvciB0ZXJtaW5hdGluZyBsb2cgbWV0aG9kcy5cbiAqL1xuZnVuY3Rpb24gZXhlY3V0aW9uUGlwZWxpbmUobG9nOiBMb2csIGNmZzogRGVmYXVsdHMsIGRlZjogTG9nTGV2ZWxEZWZpbml0aW9ufHVuZGVmaW5lZCwgYXJnczogYW55W10pOlRlcm1pbmF0ZWRMb2cge1xuXG4gIGlmIChkZWYgJiYgYWxsb3dlZChjZmcsIGRlZikpIHtcbiAgICAvLyBBcHBseSBtb2RpZmllcnMgaW4gdGhlIHByb3BlciBvcmRlci5cbiAgICBydW5Nb2RpZmllclF1ZXVlKGxvZy5tb2RpZmllclF1ZXVlKTtcblxuICAgIC8vIENoZWNrIHRoZSB0ZXN0IG1vZGlmaWVycy5cbiAgICBpZiAoZXZhbFBhc3Nlcyhsb2cpKSB7XG5cbiAgICAgIC8vIFNhdmUgdGVybWluYXRvciBwcm9wcyBmb3IgcmVjYWxsIHB1cnBvc2VzXG4gICAgICBjb25zdCBmaW5hbF9sb2cgPSBtdXRhdGVQcm9wczxGaW5hbExvZz4obG9nLCBbIFsnYXJncycsIGFyZ3NdLCBbJ2xldmVsJywgZGVmLmxldmVsXSBdKTtcblxuICAgICAgLy8gUmVuZGVyIHRoZSBsb2dcbiAgICAgIGNvbnN0IHJlbmRlciA9IHByaW50KGZpbmFsX2xvZywgZGVmLCBhcmdzKTtcbiAgICBcbiAgICAgIC8vIEZpcmUgbG9nIGV2ZW50c1xuICAgICAgc3RvcmUoZmluYWxfbG9nKTtcbiAgICAgIGZpcmVMaXN0ZW5lcnMoZmluYWxfbG9nLCBkZWYpO1xuXG4gICAgICAvLyBSZXR1cm4gdGhlIHRlcm1pbmF0ZWQgbG9nIG9iamVjdCBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuICAgICAgcmV0dXJuIHsgbG9nOiBmaW5hbF9sb2csIHJlbmRlciB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgdGVybWluYXRlZCBsb2cgb2JqZWN0IGZvciB0ZXN0aW5nIHB1cnBvc2VzXG4gIHJldHVybiB7IGxvZywgcmVuZGVyOiBudWxsIH07XG59XG5cbi8qKlxuICogRXhlY3V0ZXMgYWxsIG9mIHRoZSBsb2cgbW9kaWZpZXIgZnVuY3Rpb25zIHdpdGhpbiB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIHJ1bk1vZGlmaWVyUXVldWUocXVldWU6IEZ1bmN0aW9uW10pOnZvaWQge1xuICBxdWV1ZS5mb3JFYWNoKGZ1bmMgPT4gZnVuYygpKTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG4gKiBMb2cgRXZlbnRzXG5cXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyoqXG4gKiBTdG9yZXMgdGhpcyBsb2cgaW4gdGhlIFNoZWQgaWYgdGhlIFNoZWQgZXhpc3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RvcmUobG9nOiBGaW5hbExvZyk6dm9pZCB7XG4gIGNvbnN0IHNoZWQgPSBlbnYuJHNoZWQ7XG4gIGlmIChzaGVkRXhpc3RzKHNoZWQpKSB7XG4gICAgc2hlZC5zdG9yZShsb2cpO1xuICB9XG59XG5cbi8qKlxuICogRmlyZXMgbGlzdGVuZXJzIGZvciB0aGlzIGxvZyBpbnN0YW5jZSBpZiBhIFNoZWQgZXhpc3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlyZUxpc3RlbmVycyhsb2c6IEZpbmFsTG9nLCBkZWY6IExvZ0xldmVsRGVmaW5pdGlvbik6dm9pZCB7XG4gIGNvbnN0IHNoZWQgPSBlbnYuJHNoZWQ7XG4gIGlmIChzaGVkRXhpc3RzKHNoZWQpKSB7XG4gICAgc2hlZC5maXJlTGlzdGVuZXJzKGxvZywgZGVmKTtcbiAgfVxufSIsImV4cG9ydCB7IGluaXRpYWxDYXBzLCBtdXRhdGVQcm9wcyB9IGZyb20gJy4vdXRpbCc7IiwiLyoqXG4gKiBDYXBpdGFsaXplcyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIHRoZSBwcm92aWRlZCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsQ2FwcyhzdHI6IHN0cmluZyk6c3RyaW5nIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIHByb3BlcnR5IG11dGF0aW9ucyB0byB0aGUgcHJvdmlkZWQgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbXV0YXRlUHJvcHM8Tz4ob2JqOiBhbnksIG11dGF0aW9uczogQXJyYXk8W3N0cmluZywgYW55XT4pOk8ge1xuICBtdXRhdGlvbnMuZm9yRWFjaCgoW3Byb3AsIHZhbF0pID0+IG9ialtwcm9wXSA9IHZhbCk7XG4gIHJldHVybiBvYmo7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
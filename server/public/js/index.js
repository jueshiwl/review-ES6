/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// import 'babel-polyfill'

	// import './class/lesson1.js'
	// import './class/lesson2.js'
	// import './class/lesson3.js'
	// import './class/lesson4.js'
	// import './class/lesson5.js'
	// import './class/lesson6.js'
	// import './class/lesson7.js'
	// import './class/lesson8.js'
	// import './class/lesson9.js'
	// import './class/lesson10.js'
	// import './class/lesson11.js'
	// import './class/lesson12.js'
	// import './class/lesson13.js'
	// import './class/lesson14.js'
	// import './class/lesson15.js'

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	    var desc = {};
	    Object['ke' + 'ys'](descriptor).forEach(function (key) {
	        desc[key] = descriptor[key];
	    });
	    desc.enumerable = !!desc.enumerable;
	    desc.configurable = !!desc.configurable;

	    if ('value' in desc || desc.initializer) {
	        desc.writable = true;
	    }

	    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	        return decorator(target, property, desc) || desc;
	    }, desc);

	    if (context && desc.initializer !== void 0) {
	        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	        desc.initializer = undefined;
	    }

	    if (desc.initializer === void 0) {
	        Object['define' + 'Property'](target, property, desc);
	        desc = null;
	    }

	    return desc;
	}

	// decorator类的修饰符

	{
	    var _desc, _value, _class;

	    var readonly = function readonly(target, name, desc) {
	        desc.writable = false;
	        return desc;
	    };

	    var Test = (_class = function () {
	        function Test() {
	            _classCallCheck(this, Test);
	        }

	        _createClass(Test, [{
	            key: 'time',
	            value: function time() {
	                return '2017-03-11';
	            }
	        }]);

	        return Test;
	    }(), (_applyDecoratedDescriptor(_class.prototype, 'time', [readonly], Object.getOwnPropertyDescriptor(_class.prototype, 'time'), _class.prototype)), _class);


	    var test = new Test();
	    console.log(test.time());
	}

/***/ })
/******/ ]);
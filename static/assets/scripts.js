/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_scripts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/scripts.js */ \"./src/js/scripts.js\");\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/style.scss?");

/***/ }),

/***/ "./src/js/modules/helpers.js":
/*!***********************************!*\
  !*** ./src/js/modules/helpers.js ***!
  \***********************************/
/*! exports provided: addClass, removeClass, toggleClass, siblings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClass\", function() { return addClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeClass\", function() { return removeClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleClass\", function() { return toggleClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"siblings\", function() { return siblings; });\nfunction addClass(el, className) {\r\n    if (el.classList) {\r\n        el.classList.add(className);\r\n    } else {\r\n        el.className += ' ' + className;\r\n    }\r\n}\r\n\r\nfunction removeClass(el, className) {\r\n    if (el.classList) {\r\n        el.classList.remove(className);\r\n    } else {\r\n        el.className = el.className.replace(new RegExp('(^|\\\\b)' + className.split(' ').join('|') + '(\\\\b|$)', 'gi'), ' ');\r\n    }\r\n}\r\n\r\nfunction toggleClass(el, className) {\r\n    if (el.classList) {\r\n        el.classList.toggle(className);\r\n    } else {\r\n        var classes = el.className.split(' ');\r\n        var existingIndex = classes.indexOf(className);\r\n        if (existingIndex >= 0) {\r\n            classes.splice(existingIndex, 1);\r\n        } else {\r\n            classes.push(className);\r\n        }\r\n        el.className = classes.join(' ');\r\n    }\r\n}\r\n\r\nfunction siblings(el) {\r\n    Array.prototype.filter.call(el.parentNode.children, function(child){\r\n        return child !== el;\r\n    });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/modules/helpers.js?");

/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/helpers.js */ \"./src/js/modules/helpers.js\");\n\r\n\r\n\r\n// removeClassFromAll = function(toggleAttr, targetAttr, className) {\r\n//     var togglesArray = Array.from(document.querySelectorAll('[' + toggleAttr + ']'));\r\n//     var targetsArray = Array.from(document.querySelectorAll('[' + targetAttr + ']'));\r\n//     window.onclick = function(event) {\r\n//         if (!togglesArray.includes(event.target)) {\r\n//             targetsArray.forEach(function(item) {removeClass(item, className)});\r\n//         }\r\n//     }\r\n// }\r\n\r\n// toggleClassInGroup = function(toggleAttr, targetAttr, className) {\r\n//     var togglesArray = Array.from(document.querySelectorAll('[' + toggleAttr + ']'));\r\n//     var targetsArray = Array.from(document.querySelectorAll('[' + targetAttr + ']'));\r\n//     togglesArray.forEach(function(item) {\r\n//         item.addEventListener(\r\n//             'click',\r\n//             function(event) {\r\n//                 var target = document.querySelectorAll(this.getAttribute(toggleAttr))[0];\r\n//                 var otherTargets = targetsArray.filter(function(item) {\r\n//                     return item != target;\r\n//                 })\r\n//                 otherTargets.forEach(function(item) {removeClass(item, className)});\r\n//                 toggleClass(target, className);\r\n//                 event.preventDefault();\r\n//             },\r\n//             false\r\n//         );\r\n//     });\r\n// }\r\n\r\nvar toggleTarget = function(toggleAttr, className) {\r\n    var togglesArray = Array.from(document.querySelectorAll('[' + toggleAttr + ']')); \r\n    togglesArray.forEach(function(item) {\r\n        item.addEventListener(\r\n            'click',\r\n            function(event) {\r\n                var target = document.querySelectorAll(this.getAttribute(toggleAttr))[0];\r\n                Object(_modules_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleClass\"])(target, className);\r\n                event.preventDefault();\r\n            },\r\n            false\r\n        );\r\n    });\r\n\r\n}\r\n\r\ntoggleTarget('data-toggle-menu', 'show');\r\ntoggleTarget('data-toggle-form', 'show');\r\n\n\n//# sourceURL=webpack:///./src/js/scripts.js?");

/***/ })

/******/ });
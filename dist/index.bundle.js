/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://front-enter/./src/css/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n\n\n\nconst article1 = document.querySelector(\"#article-1\");\nconst article2 = document.querySelector(\"#article-2\");\nconst article3 = document.querySelector(\"#article-3\");\n\narticle1.addEventListener(\"click\", () => {\n  window.location.href = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.setRedirectLink)(\"content\", 1538646651342, \"content\");\n});\n\narticle2.addEventListener(\"click\", () => {\n  window.location.href = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.setRedirectLink)(\"content\", 1539507849063, \"content\");\n});\n\narticle3.addEventListener(\"click\", () => {\n  window.location.href = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.setRedirectLink)(\"content\", 1539674167504, \"content\");\n});\n\n\n//# sourceURL=webpack://front-enter/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   alertMessage: function() { return /* binding */ alertMessage; },\n/* harmony export */   setRedirectLink: function() { return /* binding */ setRedirectLink; },\n/* harmony export */   stopPropagationHandler: function() { return /* binding */ stopPropagationHandler; }\n/* harmony export */ });\nfunction setRedirectLink(address, id, idname) {\n  if (id !== null) {\n    const contentUrl = `${window.location.origin}/${address}.html`;\n    const contentId = id;\n    // const contentParams = new URLSearchParams({\n    //   ${idname}: JSON.stringify(contentId),\n    // });\n    const contentParams = new URLSearchParams();\n    if (idname !== null) {\n      contentParams.append(idname, JSON.stringify(contentId));\n    }\n    return `${contentUrl}?${contentParams.toString()}`;\n  } else {\n    const contentUrl = `${window.location.origin}/${address}.html`;\n    return `${contentUrl}`;\n  }\n}\n\nconst stopPropagationHandler = (event) => {\n  event.stopPropagation();\n};\n\n// alert\nconst alertCard = document.querySelector(\".alert\");\nconst alertCardTitle = document.querySelector(\".alert-title\");\nconst alertCardContent = document.querySelector(\".alert-content\");\n\nfunction alertMessage(errorCode, message) {\n  if (errorCode.includes(\"auth\")) {\n    errorCode = \"Error\";\n    switch (errorCode) {\n      case \"auth/invalid-email\":\n        message = \"電子郵件格式錯誤\";\n        break;\n      case \"auth/email-already-exists\":\n        message = \"信箱已被註冊\";\n        break;\n      case \"auth/email-already-in-use\":\n        message = \"信箱已被註冊\";\n        break;\n      case \"auth/invalid-password\":\n        message = \"密碼最少需要六個字符\";\n        break;\n      case \"auth/weak-password\":\n        message = \"密碼最少需要六個字符\";\n        break;\n      case \"auth/invalid-credential\":\n        message = \"密碼錯誤\";\n        break;\n      default:\n        message = message ? message : \"請檢查輸入格式\";\n        break;\n    }\n  }\n\n  alertCardTitle.innerHTML = errorCode;\n  alertCardContent.innerHTML = message;\n  alertCard.style.display = \"block\";\n  setTimeout(function () {\n    alertCard.style.display = \"none\";\n  }, 10000);\n}\n\n\n\n\n//# sourceURL=webpack://front-enter/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Roboto:ital,wght@0,400;0,700;1,500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --black: #000;\\n  --white: #fff;\\n  --grey: #333;\\n  --light-grey: #f1eded;\\n  --light-grey-2: #d8d6d6;\\n  --light-purple: #f801f8;\\n  --dark-purple: #af00af;\\n  --light-purple-2: #ff9dff; }\\n\\n* {\\n  margin: 0;\\n  padding: 0; }\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit; }\\n\\nhtml {\\n  box-sizing: border-box;\\n  font-size: 62.5%; }\\n\\nbody {\\n  background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-weight: 400;\\n  line-height: 1.6;\\n  font-size: 1.6rem; }\\n\\n.container {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100vh;\\n  align-items: center;\\n  position: relative; }\\n  .container .header {\\n    flex: 1;\\n    top: 0;\\n    left: 0;\\n    position: fixed;\\n    background-color: var(--white);\\n    padding: 1rem;\\n    max-height: 15rem;\\n    z-index: 5;\\n    box-shadow: rgba(240, 46, 170, 0.4) 0 5px, rgba(240, 46, 170, 0.3) 0 10px, rgba(240, 46, 170, 0.2) 0 15px, rgba(240, 46, 170, 0.1) 0 20px, rgba(240, 46, 170, 0.05) 0 25px;\\n    display: flex;\\n    justify-content: center;\\n    width: 100%; }\\n    .container .header .logo-img {\\n      margin-right: 5rem;\\n      width: 10rem;\\n      height: 10rem;\\n      border: 3px solid var(--light-purple);\\n      background-color: var(--light-purple);\\n      padding: 0.25rem;\\n      border-radius: 50%; }\\n    .container .header .nav__items {\\n      display: flex; }\\n      .container .header .nav__items--item {\\n        margin-top: 2.5rem;\\n        list-style: none; }\\n        .container .header .nav__items--item:not(:last-child) {\\n          margin-right: 3rem; }\\n        .container .header .nav__items--item a {\\n          text-decoration: none;\\n          color: var(--light-purple);\\n          font-weight: 600; }\\n      .container .header .nav__items .item-counter {\\n        padding: 0.3rem 0.7rem;\\n        border: 0.25rem solid var(--light-purple);\\n        color: var(--light-purple);\\n        font-weight: 600;\\n        border-radius: 50%; }\\n  .container .main {\\n    display: flex;\\n    justify-content: center;\\n    width: 100%;\\n    flex: 2;\\n    flex-wrap: wrap;\\n    justify-content: space-evenly;\\n    background-color: var(--white);\\n    padding-top: 3rem;\\n    margin-top: 19rem;\\n    max-width: 120rem;\\n    border-radius: 1rem;\\n    box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px; }\\n    .container .main__food {\\n      width: 30.1rem;\\n      margin-bottom: 5rem; }\\n      .container .main__food--img {\\n        width: 100%;\\n        transform: translateY(0.7rem); }\\n      .container .main__food--desc {\\n        width: 100%;\\n        display: flex;\\n        flex-direction: column; }\\n        .container .main__food--desc .card {\\n          display: flex;\\n          justify-content: space-around;\\n          padding: 2rem 0;\\n          background-color: var(--light-grey); }\\n          .container .main__food--desc .card .likes .icon {\\n            cursor: pointer;\\n            width: 2.4rem;\\n            height: 2.4rem;\\n            background-color: var(--light-purple);\\n            clip-path: path(\\\"M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z\\\");\\n            position: relative;\\n            transform: scale(1.2);\\n            transition: all 0.2s; }\\n            .container .main__food--desc .card .likes .icon:hover {\\n              transform: translateY(-3px);\\n              transform: scale(1.4); }\\n              .container .main__food--desc .card .likes .icon:hover:active, .container .main__food--desc .card .likes .icon:hover:focus {\\n                outline: none;\\n                transform: translateY(-1px);\\n                background-color: var(--light-purple-2); }\\n      .container .main__food--btn {\\n        font-family: inherit;\\n        font-size: inherit;\\n        font-weight: 600;\\n        width: 100%;\\n        padding: 1rem;\\n        border: none;\\n        background-color: var(--light-grey-2);\\n        cursor: pointer;\\n        transition: all 0.2s; }\\n        .container .main__food--btn:hover {\\n          background-color: var(--dark-purple);\\n          color: var(--white);\\n          transform: translateY(2px); }\\n  .container .footer {\\n    margin-top: 5rem;\\n    background-color: var(--dark-purple);\\n    box-shadow: rgba(241, 237, 237, 0.4) 0 -2px 4px, rgba(241, 237, 237, 0.3) 0 -7px 13px -3px, rgba(241, 237, 237, 0.2) 0 -3px 0 inset;\\n    color: var(--white);\\n    flex: 0.5;\\n    width: 100%;\\n    max-height: 8rem; }\\n    .container .footer .copy-right {\\n      margin: 3rem 2rem; }\\n\\n.show {\\n  display: flex !important; }\\n\\n.hide {\\n  display: none !important; }\\n\\n.popup-window {\\n  max-width: 80rem;\\n  margin: 2rem auto;\\n  min-height: calc(100vh - 4rem);\\n  display: none;\\n  justify-content: center;\\n  background-color: var(--white);\\n  border-radius: 1rem;\\n  box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px; }\\n  .popup-window .wrapper {\\n    margin: auto auto;\\n    width: 60%;\\n    height: 100%; }\\n    .popup-window .wrapper .pop-header {\\n      margin-top: 3rem;\\n      display: flex; }\\n      .popup-window .wrapper .pop-header .img-cont {\\n        width: 100%;\\n        margin-right: 5rem; }\\n        .popup-window .wrapper .pop-header .img-cont .pop-img {\\n          width: 100%; }\\n      .popup-window .wrapper .pop-header .icon-close > i {\\n        font-size: 5rem;\\n        font-weight: 900;\\n        color: var(--light-purple); }\\n    .popup-window .wrapper .comment {\\n      text-align: center;\\n      margin-top: 3rem; }\\n      .popup-window .wrapper .comment .comment-counter {\\n        padding: 0.05rem 0.8rem;\\n        border: 0.25rem solid var(--light-purple);\\n        color: var(--light-purple);\\n        font-weight: 600;\\n        border-radius: 50%;\\n        font-size: 1.6rem;\\n        margin-left: 2rem; }\\n    .popup-window .wrapper h2 {\\n      text-align: center; }\\n    .popup-window .wrapper .pop-main .food-name {\\n      text-align: center;\\n      margin: 2.5rem 0; }\\n    .popup-window .wrapper .pop-main .about {\\n      display: flex;\\n      justify-content: space-between; }\\n    .popup-window .wrapper .pop-main .comment-group {\\n      display: flex;\\n      flex-direction: column;\\n      margin: 2rem 0;\\n      padding: 2rem;\\n      border-radius: 0.5rem;\\n      max-height: 20rem;\\n      overflow-y: auto;\\n      box-shadow: rgba(0, 0, 0, 0.25) 0 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0 0 0 1px inset; }\\n      .popup-window .wrapper .pop-main .comment-group .commrap {\\n        margin: 0.2rem;\\n        display: flex; }\\n        .popup-window .wrapper .pop-main .comment-group .commrap .date,\\n        .popup-window .wrapper .pop-main .comment-group .commrap .user,\\n        .popup-window .wrapper .pop-main .comment-group .commrap .comm {\\n          padding: 0 0.5rem; }\\n    .popup-window .wrapper form {\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: center;\\n      margin: 3rem 0;\\n      width: 100%; }\\n      .popup-window .wrapper form input {\\n        width: 50%;\\n        margin-bottom: 2rem; }\\n      .popup-window .wrapper form input,\\n      .popup-window .wrapper form textarea {\\n        font-family: inherit;\\n        font-size: 1.4rem;\\n        font-weight: 600;\\n        padding: 1rem 2rem;\\n        border: none;\\n        box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 2px 6px 2px; }\\n        .popup-window .wrapper form input::placeholder,\\n        .popup-window .wrapper form textarea::placeholder {\\n          font-family: inherit;\\n          font-size: inherit;\\n          font-weight: 600; }\\n        .popup-window .wrapper form input:focus,\\n        .popup-window .wrapper form textarea:focus {\\n          outline: none; }\\n      .popup-window .wrapper form .btnComment {\\n        margin: 2rem 0 5rem 0;\\n        font-family: inherit;\\n        font-weight: 900;\\n        font-size: inherit;\\n        padding: 1rem 10rem;\\n        color: var(--light-purple);\\n        border: 2px solid var(--dark);\\n        border-radius: 0.5rem;\\n        cursor: pointer;\\n        box-shadow: rgba(0, 0, 0, 0.4) 0 2px 4px, rgba(0, 0, 0, 0.3) 0 7px 13px -3px, rgba(0, 0, 0, 0.2) 0 -3px 0 inset;\\n        transition: all 0.2s; }\\n        .popup-window .wrapper form .btnComment:hover {\\n          border: 3px solid var(--light-purple);\\n          background-color: var(--light-purple);\\n          color: var(--white); }\\n        .popup-window .wrapper form .btnComment:active {\\n          transform: translateY(2px); }\\n      .popup-window .wrapper form .comment-group {\\n        display: flex;\\n        flex-direction: column;\\n        margin: 2rem 0;\\n        padding: 2rem;\\n        border-radius: 0.5rem;\\n        max-height: 20rem;\\n        overflow-y: auto;\\n        box-shadow: rgba(0, 0, 0, 0.25) 0 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0 0 0 1px inset; }\\n        .popup-window .wrapper form .comment-group .commrap {\\n          margin: 0.2rem;\\n          display: flex; }\\n          .popup-window .wrapper form .comment-group .commrap .date,\\n          .popup-window .wrapper form .comment-group .commrap .user,\\n          .popup-window .wrapper form .comment-group .commrap .comm {\\n            padding: 0 0.5rem; }\\n    .popup-window .wrapper input {\\n      width: 50%;\\n      margin-bottom: 2rem; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-setup/./src/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-setup/./src/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _modules_paint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/paint */ \"./src/modules/paint.js\");\n/* eslint-disable import/extensions */\n\n\n\n(0,_modules_paint__WEBPACK_IMPORTED_MODULE_1__.displayLogo)();\n(0,_modules_paint__WEBPACK_IMPORTED_MODULE_1__.displayFood)();\n\n\n//# sourceURL=webpack://webpack-setup/./src/index.js?");

/***/ }),

/***/ "./src/modules/config.js":
/*!*******************************!*\
  !*** ./src/modules/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"baseURL\": () => (/* binding */ baseURL),\n/* harmony export */   \"comments\": () => (/* binding */ comments),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"likeOB\": () => (/* binding */ likeOB),\n/* harmony export */   \"postComments\": () => (/* binding */ postComments),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes)\n/* harmony export */ });\n// ////////////// Api request\nconst appID = 'NFxX76uVcS9wzX0LJoyT';\nconst baseURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';\nconst involvementURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/`;\n\n// ////////////// Create objects\nconst likeOB = { item_id: '' };\nconst comments = { item_id: '', username: '', comment: '' };\n\n// ////////////// Get all data from baseURL\nconst getData = async () => {\n  const response = await fetch(baseURL);\n  return response.json().then((res) => res.categories);\n};\n\n// ////////////// Get all data from involvementURL\nconst getLikes = async () => {\n  const response = await fetch(`${involvementURL}likes`);\n  return response.json();\n};\n\n// ////////////// Get Comments\nconst getComments = async (id) => {\n  const response = await fetch(`${involvementURL}comments?item_id=${id}`);\n  if (response.status === 200) return response.json();\n\n  return [\n    {\n      comment: 'No Comment here please Add',\n      creation_date: '',\n      username: '',\n    },\n  ];\n};\n\n// /////////////////// Post Likes\nconst postLikes = async (data = {}) => {\n  const response = await fetch(`${involvementURL}likes`, {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(data),\n  });\n  return response.status();\n};\n\n// /////////////////// Post Comments\nconst postComments = async (data = {}) => {\n  const response = await fetch(`${involvementURL}comments`, {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(data),\n  });\n  return response;\n};\n\n\n\n\n//# sourceURL=webpack://webpack-setup/./src/modules/config.js?");

/***/ }),

/***/ "./src/modules/controller.js":
/*!***********************************!*\
  !*** ./src/modules/controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"like\": () => (/* binding */ like),\n/* harmony export */   \"numberOfLikes\": () => (/* binding */ numberOfLikes)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/modules/config.js\");\n/* eslint-disable import/extensions */\n\n\nconst numberOfLikes = async (id) => {\n  const likes = await (0,_config__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\n  const like = likes.find((e) => e.item_id === id);\n  return like ? like.likes : 0;\n};\n\nconst like = (icon, id, numLikes) => {\n  icon.addEventListener('click', async () => {\n    numLikes.textContent = Number(numLikes.textContent) + 1;\n    _config__WEBPACK_IMPORTED_MODULE_0__.likeOB.item_id = id;\n    await (0,_config__WEBPACK_IMPORTED_MODULE_0__.postLikes)(_config__WEBPACK_IMPORTED_MODULE_0__.likeOB);\n  });\n};\n\n\n\n\n//# sourceURL=webpack://webpack-setup/./src/modules/controller.js?");

/***/ }),

/***/ "./src/modules/paint.js":
/*!******************************!*\
  !*** ./src/modules/paint.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCount\": () => (/* binding */ displayCount),\n/* harmony export */   \"displayFood\": () => (/* binding */ displayFood),\n/* harmony export */   \"displayLogo\": () => (/* binding */ displayLogo)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/modules/config.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ \"./src/modules/controller.js\");\n/* harmony import */ var _picture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./picture */ \"./src/modules/picture.js\");\n/* eslint-disable import/extensions */\n\n\n\n\nconst logo = 'https://static.photocrowd.com/upl/DF/cms.kqBA86TWO9ELumnHrQTg-v2b.jpeg';\nconst logoContainer = document.querySelector('.logo');\nconst mainContainer = document.querySelector('.main');\nconst itemCounter = document.querySelector('.item-counter');\n\n// /////////////////// Create dom elements\nconst createElement = (\n  element = '',\n  className = [],\n  text = '',\n  src = '',\n  alt = '',\n) => {\n  const newElement = document.createElement(element);\n  newElement.classList.add(...className);\n  newElement.textContent = text;\n  newElement.src = src;\n  newElement.alt = alt;\n  return newElement;\n};\n\n// /////////////////// Display Logo\nconst displayLogo = () => {\n  const logoImg = createElement('img', ['logo-img'], '', logo, 'LOGO');\n  logoContainer.appendChild(logoImg);\n};\n\n// /////////////////// Display number of favorite food\nconst displayCount = (count) => {\n  itemCounter.textContent = count;\n};\n\nconst displayFood = async () => {\n  let count = 0;\n  const data = await (0,_config__WEBPACK_IMPORTED_MODULE_0__.getData)();\n  data.forEach(async (e) => {\n    const noLikes = await (0,_controller__WEBPACK_IMPORTED_MODULE_1__.numberOfLikes)(e.idCategory);\n    const foodCont = createElement('div', ['main__food']);\n    const foodImg = createElement(\n      'img',\n      ['main__food--img'],\n      '',\n      e.strCategoryThumb,\n      'Favorite Food',\n    );\n    const foodDesc = createElement('div', ['main__food--desc']);\n    const desc = createElement('div', ['desc']);\n    const descCard = createElement('div', ['card']);\n    const descPara = createElement('p', [], e.strCategory);\n    const likes = createElement('div', ['likes']);\n    const icon = createElement('div', ['icon']);\n    const likesPara = createElement('p');\n    const numLikes = createElement('span', ['num-likes'], noLikes);\n    const spanLikes = createElement('span', [], ' likes');\n    const commButton = createElement('button', ['main__food--btn'], 'Comments');\n\n    desc.appendChild(descPara);\n    likesPara.append(numLikes, spanLikes);\n    likes.append(icon, likesPara);\n    descCard.append(desc, likes);\n    foodDesc.append(descCard, commButton);\n    foodCont.append(foodImg, foodDesc);\n    mainContainer.appendChild(foodCont);\n    count += 1;\n\n    (0,_picture__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(commButton, e);\n\n    displayCount(count);\n    (0,_controller__WEBPACK_IMPORTED_MODULE_1__.like)(icon, e.idCategory, numLikes);\n  });\n};\n\n\n\n\n//# sourceURL=webpack://webpack-setup/./src/modules/paint.js?");

/***/ }),

/***/ "./src/modules/picture.js":
/*!********************************!*\
  !*** ./src/modules/picture.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayPopup)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/modules/config.js\");\n\n\nconst container = document.querySelector('.container');\nconst popWindow = document.querySelector('.popup-window');\nconst imgCont = document.querySelector('.img-cont');\nconst main = document.querySelector('.pop-main');\nconst close = document.querySelector('.icon-close');\nconst form = document.getElementById('form');\n// /////////////////// Create dom elements\n\nconst createElement = (name = '', className = [], text = '', src = '', alt = '') => {\n  const elements = document.createElement(name);\n  elements.classList.add(...className);\n  elements.textContent = text;\n  elements.src = src;\n  elements.alt = alt;\n  return elements;\n};\n\nconst closePopup = (btn) => {\n  btn.addEventListener('click', () => {\n    container.classList.remove('hide');\n    popWindow.classList.add('hide');\n  });\n};\n\nconst addComment = (e, foodname, aboutCont, comment, commentGroup, numComments) => {\n  form.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const name = form.elements.name.value;\n    const textComment = form.elements.textarea.value;\n    _config_js__WEBPACK_IMPORTED_MODULE_0__.comments.username = name;\n    _config_js__WEBPACK_IMPORTED_MODULE_0__.comments.comment = textComment;\n    _config_js__WEBPACK_IMPORTED_MODULE_0__.comments.item_id = e.idCategory;\n    (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.postComments)(_config_js__WEBPACK_IMPORTED_MODULE_0__.comments);\n    const today = new Date();\n    const dateFormat = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;\n    const date = createElement('p', ['date'], dateFormat);\n    const user = createElement('p', ['user'], `${name}:`);\n    const comm = createElement('p', ['comm'], textComment);\n    const commrap = createElement('div', ['commrap']);\n\n    commrap.append(date, user, comm);\n    commentGroup.appendChild(commrap);\n    numComments.textContent = Number(numComments.textContent) + 1;\n    main.append(foodname, aboutCont, comment, commentGroup);\n    form.elements.name.value = '';\n    form.elements.textarea.value = '';\n  });\n};\n\nconst displayPopup = async (btn, e) => {\n  btn.addEventListener('click', async () => {\n    container.classList.add('hide');\n    popWindow.classList.remove('hide');\n    popWindow.classList.add('show');\n    main.innerHTML = '';\n    imgCont.innerHTML = '';\n    const img = createElement('img', ['pop-img'], '', e.strCategoryThumb, 'Picture');\n    const data = await (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(e.idCategory);\n    const commentGroup = createElement('div', ['comment-group']);\n    const foodname = createElement('h2', ['food-name'], e.strCategory);\n    const comment = createElement('h2', ['comment'], 'Comments ');\n    const aboutCont = createElement('div', ['about']);\n    const desc1 = createElement('div', ['desc1']);\n    const desc2 = createElement('div', ['desc2']);\n    const p1 = createElement('p', '', `Food: ${e.strCategory}`);\n    const p2 = createElement('p', '', 'Origin: America');\n    const p3 = createElement('p', '', 'Calories: 200kcal');\n    const p4 = createElement('p', '', 'Toppings: Chocolate syrup');\n    const numComments = createElement('span', ['comment-counter'], data.length);\n\n    imgCont.appendChild(img);\n    desc1.append(p1, p2);\n    desc2.append(p3, p4);\n    aboutCont.append(desc1, desc2);\n    comment.append(numComments);\n    closePopup(close);\n    data.forEach((ele) => {\n      const commrap = createElement('div', ['commrap']);\n      const date = createElement('p', ['date'], ele.creation_date);\n      const user = createElement('p', ['user'], `${ele.username}:`);\n      const comm = createElement('p', ['comm'], ele.comment);\n      commrap.append(date, user, comm);\n      commentGroup.append(commrap);\n    });\n    main.append(foodname, aboutCont, comment, commentGroup);\n    addComment(e, foodname, aboutCont, comment, commentGroup, numComments);\n  });\n};\n\n\n\n\n//# sourceURL=webpack://webpack-setup/./src/modules/picture.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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
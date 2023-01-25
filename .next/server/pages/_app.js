/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/nightContext.js":
/*!*********************************!*\
  !*** ./context/nightContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NightContext\": () => (/* binding */ NightContext),\n/* harmony export */   \"NightProvider\": () => (/* binding */ NightProvider),\n/* harmony export */   \"useNight\": () => (/* binding */ useNight)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst NightContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useNight = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NightContext);\nconst NightProvider = ({ children  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { push  } = next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter;\n    const [styles, setTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: \"1\",\n            night: true\n        }\n    ]);\n    const switchColor = (lastState)=>{\n        if (lastState) {\n            styles[0].night = false;\n        } else if (!lastState) {\n            styles[0].night = true;\n        }\n    //    router.reload()\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NightContext.Provider, {\n        value: {\n            styles,\n            switchColor\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/leo/project/nextjs/portafolio/context/nightContext.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L25pZ2h0Q29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE0RDtBQUNyQjtBQUdoQyxNQUFNSSw2QkFBZUosb0RBQWFBLEdBQUU7QUFFcEMsTUFBTUssV0FBVyxJQUFNSixpREFBVUEsQ0FBQ0csY0FBYTtBQUkvQyxNQUFNRSxnQkFBZ0IsQ0FBQyxFQUFDQyxTQUFRLEVBQUMsR0FBSztJQUN6QyxNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFDTSxLQUFJLEVBQUMsR0FBRU4sa0RBQVNBO0lBRXZCLE1BQU0sQ0FBQ08sUUFBUUMsUUFBUyxHQUFFVCwrQ0FBUUEsQ0FBQztRQUMvQjtZQUFFVSxJQUFJO1lBQUtDLE9BQU8sSUFBSTtRQUFBO0tBQ3pCO0lBSUQsTUFBTUMsY0FBYyxDQUFDQyxZQUFjO1FBRy9CLElBQUlBLFdBQVk7WUFDWkwsTUFBTSxDQUFDLEVBQUUsQ0FBQ0csS0FBSyxHQUFHLEtBQUs7UUFDM0IsT0FBTyxJQUFJLENBQUNFLFdBQVc7WUFDbkJMLE1BQU0sQ0FBQyxFQUFFLENBQUNHLEtBQUssR0FBRyxJQUFJO1FBQzFCLENBQUM7SUFFTCxxQkFBcUI7SUFDckI7SUFFQSxxQkFDSSw4REFBQ1QsYUFBYVksUUFBUTtRQUFDQyxPQUFPO1lBQUNQO1lBQVFJO1FBQVc7a0JBQzdDUDs7Ozs7O0FBR2IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRhZm9saW8vLi9jb250ZXh0L25pZ2h0Q29udGV4dC5qcz9iZTMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuXG5leHBvcnQgY29uc3QgTmlnaHRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmV4cG9ydCBjb25zdCB1c2VOaWdodCA9ICgpID0+IHVzZUNvbnRleHQoTmlnaHRDb250ZXh0KVxuXG5cblxuZXhwb3J0IGNvbnN0IE5pZ2h0UHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3Qge3B1c2h9PSB1c2VSb3V0ZXIgXG4gICAgXG4gICAgY29uc3QgW3N0eWxlcywgc2V0VGFzayBdPSB1c2VTdGF0ZShbXG4gICAgICAgIHsgaWQ6IFwiMVwiLCBuaWdodDogdHJ1ZX1cbiAgICBdKVxuXG5cblxuICAgIGNvbnN0IHN3aXRjaENvbG9yID0gKGxhc3RTdGF0ZSkgPT4ge1xuICAgIFxuXG4gICAgICAgIGlmIChsYXN0U3RhdGUgKSB7IFxuICAgICAgICAgICAgc3R5bGVzWzBdLm5pZ2h0ID0gZmFsc2UgXG4gICAgICAgIH0gZWxzZSBpZiAoIWxhc3RTdGF0ZSkgeyBcbiAgICAgICAgICAgIHN0eWxlc1swXS5uaWdodCA9IHRydWUgIFxuICAgICAgICB9XG5cbiAgICAvLyAgICByb3V0ZXIucmVsb2FkKClcbiAgICB9XG4gXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE5pZ2h0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3N0eWxlcywgc3dpdGNoQ29sb3J9fT4gXG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvTmlnaHRDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTmlnaHRDb250ZXh0IiwidXNlTmlnaHQiLCJOaWdodFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJwdXNoIiwic3R5bGVzIiwic2V0VGFzayIsImlkIiwibmlnaHQiLCJzd2l0Y2hDb2xvciIsImxhc3RTdGF0ZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/nightContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootswatch_dist_cosmo_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootswatch/dist/cosmo/bootstrap.min.css */ \"./node_modules/bootswatch/dist/cosmo/bootstrap.min.css\");\n/* harmony import */ var bootswatch_dist_cosmo_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootswatch_dist_cosmo_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.css */ \"./global.css\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_nightContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/nightContext */ \"./context/nightContext.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_4__);\n// import 'bootswatch/dist/cyborg/bootstrap.min.css'\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(// <NightProvider> \n    //   <Component {...pageProps} />\n    // </NightProvider>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/leo/project/nextjs/portafolio/pages/_app.js\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/leo/project/nextjs/portafolio/pages/_app.js\",\n        lineNumber: 15,\n        columnNumber: 7\n    }, this));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxvREFBb0Q7QUFDcEQ7QUFBZ0Q7QUFDMUI7QUFFa0M7QUFDYjtBQUU1QixTQUFTRSxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDcEQsT0FDRSxtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLG1CQUFtQjtrQkFFbkIsOERBQUNILHNEQUFhQTtrQkFDWiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGFmb2xpby8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGltcG9ydCAnYm9vdHN3YXRjaC9kaXN0L2N5Ym9yZy9ib290c3RyYXAubWluLmNzcydcbmltcG9ydCAnYm9vdHN3YXRjaC9kaXN0L2Nvc21vL2Jvb3RzdHJhcC5taW4uY3NzJ1xuaW1wb3J0ICcuLi9nbG9iYWwuY3NzJ1xuXG5pbXBvcnQgeyBOaWdodFByb3ZpZGVyICB9IGZyb20gJy4uL2NvbnRleHQvbmlnaHRDb250ZXh0J1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ25leHQtdGhlbWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gPE5pZ2h0UHJvdmlkZXI+IFxuICAgICAgLy8gICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAvLyA8L05pZ2h0UHJvdmlkZXI+XG5cbiAgICAgIDxUaGVtZVByb3ZpZGVyID4gXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApXG4gIH0iXSwibmFtZXMiOlsiTmlnaHRQcm92aWRlciIsIlRoZW1lUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./global.css":
/*!********************!*\
  !*** ./global.css ***!
  \********************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/bootswatch/dist/cosmo/bootstrap.min.css":
/*!**************************************************************!*\
  !*** ./node_modules/bootswatch/dist/cosmo/bootstrap.min.css ***!
  \**************************************************************/
/***/ (() => {



/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
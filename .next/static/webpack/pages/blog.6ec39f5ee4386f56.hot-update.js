"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n\n\n\nconst PostCard = (param)=>/*#__PURE__*/ {\n    let { post  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-md-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: post.imageURL,\n                        className: \"card-img-top\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/leo/project/nextjs/portafolio/pages/blog.js\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/leo/project/nextjs/portafolio/pages/blog.js\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-body\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"/home/leo/project/nextjs/portafolio/pages/blog.js\",\n                            lineNumber: 15,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: post.content\n                        }, void 0, false, {\n                            fileName: \"/home/leo/project/nextjs/portafolio/pages/blog.js\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/leo/project/nextjs/portafolio/pages/blog.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/leo/project/nextjs/portafolio/pages/blog.js\",\n            lineNumber: 9,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/leo/project/nextjs/portafolio/pages/blog.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostCard;\nconst Blog = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        footer: false,\n        dark: true,\n        title: \"My blog \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _profile__WEBPACK_IMPORTED_MODULE_2__.posts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostCard, {\n                    post: post,\n                    children: \" \"\n                }, index, false, {\n                    fileName: \"/home/leo/project/nextjs/portafolio/pages/blog.js\",\n                    lineNumber: 28,\n                    columnNumber: 21\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/home/leo/project/nextjs/portafolio/pages/blog.js\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/leo/project/nextjs/portafolio/pages/blog.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n_c1 = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c, _c1;\n$RefreshReg$(_c, \"PostCard\");\n$RefreshReg$(_c1, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBeUM7QUFFUDtBQUlsQyxNQUFNRSxXQUFXLHVCQUNiO1FBRGMsRUFBQ0MsS0FBSSxFQUFDO1dBQ3BCLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1AsNEVBQUNDO3dCQUFJQyxLQUFLSixLQUFLSyxRQUFRO3dCQUFFSCxXQUFVO3dCQUFlSSxLQUFJOzs7Ozs7Ozs7Ozs4QkFHOUQsOERBQUNMO29CQUFJQyxXQUFVOztzQ0FDUCw4REFBQ0s7c0NBQUlQLEtBQUtRLEtBQUs7Ozs7OztzQ0FDZiw4REFBQ0M7c0NBQUdULEtBQUtVLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzNCO0tBWkhYO0FBZ0JOLE1BQU1ZLE9BQU8sa0JBQ1QsOERBQUNkLDBEQUFNQTtRQUFDZSxRQUFRLEtBQUs7UUFBRUMsSUFBSTtRQUFDTCxPQUFNO2tCQUM5Qiw0RUFBQ1A7WUFBSUMsV0FBVTtzQkFFUEosK0NBQVMsQ0FBRSxDQUFDRSxNQUFNZSxzQkFDZCw4REFBQ2hCO29CQUFTQyxNQUFNQTs4QkFBa0I7bUJBQVBlOzs7Ozs7Ozs7Ozs7Ozs7TUFMekNKO0FBV04sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcz9jYmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmltcG9ydCB7IHBvc3RzIH0gZnJvbSAnLi4vcHJvZmlsZSdcblxuXG5cbmNvbnN0IFBvc3RDYXJkID0gKHtwb3N0fSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5pbWFnZVVSTH0gY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QuY29udGVudH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4pXG5cblxuY29uc3QgQmxvZyA9ICgpID0+ICAoXG4gICAgPExheW91dCBmb290ZXI9e2ZhbHNlfSBkYXJrIHRpdGxlPVwiTXkgYmxvZyBcIj4gXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcG9zdHMubWFwKCAocG9zdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RDYXJkIHBvc3Q9e3Bvc3R9IGtleT17aW5kZXh9PiA8L1Bvc3RDYXJkPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICAgIClcbmV4cG9ydCBkZWZhdWx0IEJsb2ciXSwibmFtZXMiOlsiTGF5b3V0IiwicG9zdHMiLCJQb3N0Q2FyZCIsInBvc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZVVSTCIsImFsdCIsImgyIiwidGl0bGUiLCJwIiwiY29udGVudCIsIkJsb2ciLCJmb290ZXIiLCJkYXJrIiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog.js\n"));

/***/ })

});
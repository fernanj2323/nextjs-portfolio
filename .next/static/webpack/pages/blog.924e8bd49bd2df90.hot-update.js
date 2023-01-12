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

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Layout = (param)=>{\n    let { children , title , footer =true , dark =false  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            console.log(url);\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        router.events.on(\"routeChangeStart\", handleRouteChange);\n        router.events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().done());\n        return ()=>{\n            router.events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    return(// className={dark ? 'bg-dark' : ''}\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({\n            \"bg-dark\": dark,\n            \"bg-light\": !dark\n        }),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/leo/project/nextjs/portafolio/components/Layout.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container py-4\",\n                children: [\n                    title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(\"text-center\", {\n                            \"text-light\": dark\n                        }),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/home/leo/project/nextjs/portafolio/components/Layout.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"/home/leo/project/nextjs/portafolio/components/Layout.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            footer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-dark text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"\\xa9 Fernando P. Portfolio\"\n                        }, void 0, false, {\n                            fileName: \"/home/leo/project/nextjs/portafolio/components/Layout.js\",\n                            lineNumber: 48,\n                            columnNumber: 29\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"2017 - \",\n                                new Date().getFullYear()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/leo/project/nextjs/portafolio/components/Layout.js\",\n                            lineNumber: 52,\n                            columnNumber: 29\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"All rights Reserverd.\"\n                        }, void 0, false, {\n                            fileName: \"/home/leo/project/nextjs/portafolio/components/Layout.js\",\n                            lineNumber: 55,\n                            columnNumber: 29\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/leo/project/nextjs/portafolio/components/Layout.js\",\n                    lineNumber: 46,\n                    columnNumber: 25\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/leo/project/nextjs/portafolio/components/Layout.js\",\n                lineNumber: 45,\n                columnNumber: 21\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/leo/project/nextjs/portafolio/components/Layout.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined));\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDSTtBQUNNO0FBQ047QUFDRTtBQUVuQyxNQUFNSyxTQUFTLFNBQXVEO1FBQXRELEVBQUVDLFNBQVEsRUFBRUMsTUFBSyxFQUFFQyxRQUFTLElBQUksR0FBRUMsTUFBTyxLQUFLLEdBQUc7O0lBRTdELE1BQU1DLFNBQVNSLHNEQUFTQTtJQUV4QkQsZ0RBQVNBLENBQUMsSUFBSztRQUVYLE1BQU1VLG9CQUFvQkMsQ0FBQUEsTUFBTztZQUM3QkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaVCxzREFBZTtRQUNuQjtRQUNETyxPQUFPTSxNQUFNLENBQUNDLEVBQUUsQ0FBQyxvQkFBb0JOO1FBRXJDRCxPQUFPTSxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUIsSUFBTWQscURBQWM7UUFFNUQsT0FBTSxJQUFNO1lBQ1BPLE9BQU9NLE1BQU0sQ0FBQ0csR0FBRyxDQUFDLG9CQUFxQlI7UUFDNUM7SUFDSCxHQUFHLEVBQUU7SUFFTCxPQUNJLG9DQUFvQztrQkFDcEMsOERBQUNTO1FBQUtDLFdBQVdqQixpREFBVUEsQ0FBQztZQUFDLFdBQVdLO1lBQU0sWUFBWSxDQUFDQTtRQUFLOzswQkFFNUQsOERBQUNULCtDQUFNQTs7Ozs7MEJBQ1AsOERBQUNzQjtnQkFBS0QsV0FBVTs7b0JBR2hCZCx1QkFDSSw4REFBQ2dCO3dCQUFHRixXQUFXakIsaURBQVVBLENBQUMsZUFBZTs0QkFBQyxjQUFjSzt3QkFBSTtrQ0FDbkRGOzs7Ozs7b0JBSVJEOzs7Ozs7O1lBSURFLHdCQUNJLDhEQUFDQTtnQkFBT2EsV0FBVTswQkFDZCw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUVYLDhEQUFDRztzQ0FBRzs7Ozs7O3NDQUlKLDhEQUFDQzs7Z0NBQUU7Z0NBQ1MsSUFBSUMsT0FBT0MsV0FBVzs7Ozs7OztzQ0FFbEMsOERBQUNGO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMzQjtHQXpERXBCOztRQUVhSCxrREFBU0E7OztLQUZ0Qkc7QUEyRE4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgZm9vdGVyID0gdHJ1ZSwgZGFyayA9IGZhbHNlICB9KSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+e1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gdXJsID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybClcbiAgICAgICAgICAgIG5Qcm9ncmVzcy5zdGFydCgpXG4gICAgICAgIH1cbiAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXG5cbiAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gblByb2dyZXNzLmRvbmUoKSlcblxuICAgICAgIHJldHVybigpID0+IHtcbiAgICAgICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JyAsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuICAgICAgIH1cbiAgICB9LCBbXSlcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIC8vIGNsYXNzTmFtZT17ZGFyayA/ICdiZy1kYXJrJyA6ICcnfVxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeydiZy1kYXJrJzogZGFyaywgJ2JnLWxpZ2h0JzogIWRhcmsgfSl9PlxuICAgICBcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS00XCI+IFxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSAmJiAoXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGV4dC1jZW50ZXInLCB7J3RleHQtbGlnaHQnOiBkYXJrfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9tYWluPlxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9vdGVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1kYXJrICB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC00XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJmNvcHk7IEZlcm5hbmRvIFAuIFBvcnRmb2xpbyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMDE3IC0ge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbCByaWdodHMgUmVzZXJ2ZXJkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICApXG4gICAgfVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiblByb2dyZXNzIiwiY2xhc3NOYW1lcyIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJmb290ZXIiLCJkYXJrIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJldmVudHMiLCJvbiIsImRvbmUiLCJvZmYiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJoNCIsInAiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});
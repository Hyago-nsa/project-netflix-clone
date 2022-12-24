"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Row.tsx":
/*!****************************!*\
  !*** ./components/Row.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"./node_modules/@heroicons/react/24/solid/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Thumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Thumbnail */ \"./components/Thumbnail.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Row = (param)=>{\n    let { title , movies  } = param;\n    _s();\n    const rowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isMoved, setIsMoved] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = (direction)=>{\n        setIsMoved(true);\n        if (rowRef.current) {\n            const { scrollLeft , clientWidth  } = rowRef.current;\n            const scrollTo = direction === \"left\" ? scrollLeft - clientWidth : scrollLeft + clientWidth;\n            rowRef.current.scrollTo({\n                left: scrollTo,\n                behavior: \"smooth\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-40 space-y-0.5 md:space-y-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl\",\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\Codes\\\\React\\\\project-netflix-clone\\\\components\\\\Row.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"group relative md:-ml-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronLeftIcon, {\n                        className: \"absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition\\n          hover:scale-125 group-hover:opacity-100 \".concat(!isMoved && \"hidden\"),\n                        onClick: ()=>handleClick(\"left\")\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Codes\\\\React\\\\project-netflix-clone\\\\components\\\\Row.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: rowRef,\n                        className: \"flex scrollbar-hide overflow-y-hidden items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2\",\n                        children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Thumbnail__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                movie: movie\n                            }, movie.id, false, {\n                                fileName: \"D:\\\\Codes\\\\React\\\\project-netflix-clone\\\\components\\\\Row.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Codes\\\\React\\\\project-netflix-clone\\\\components\\\\Row.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronRightIcon, {\n                        className: \"absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100\",\n                        onClick: ()=>handleClick(\"right\")\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Codes\\\\React\\\\project-netflix-clone\\\\components\\\\Row.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Codes\\\\React\\\\project-netflix-clone\\\\components\\\\Row.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Codes\\\\React\\\\project-netflix-clone\\\\components\\\\Row.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Row, \"aLewmdgUqLDWjkPJ2FT0W2IM1qg=\");\n_c = Row;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Row);\nvar _c;\n$RefreshReg$(_c, \"Row\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jvdy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUE4RTtBQUM5QjtBQUVaO0FBT3BDLE1BQU1NLE1BQU0sU0FBOEI7UUFBN0IsRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQVM7O0lBQ25DLE1BQU1DLFNBQVNOLDZDQUFNQSxDQUFpQixJQUFJO0lBQzFDLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTVDLE1BQU1RLGNBQWMsQ0FBQ0MsWUFBc0I7UUFDekNGLFdBQVcsSUFBSTtRQUVmLElBQUlGLE9BQU9LLE9BQU8sRUFBRTtZQUNsQixNQUFNLEVBQUVDLFdBQVUsRUFBRUMsWUFBVyxFQUFFLEdBQUdQLE9BQU9LLE9BQU87WUFFbEQsTUFBTUcsV0FDSkosY0FBYyxTQUNWRSxhQUFhQyxjQUNiRCxhQUFhQyxXQUFXO1lBRTlCUCxPQUFPSyxPQUFPLENBQUNHLFFBQVEsQ0FBQztnQkFBRUMsTUFBTUQ7Z0JBQVVFLFVBQVU7WUFBUztRQUMvRCxDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUNDRCxXQUFVOzBCQUdUZDs7Ozs7OzBCQUVILDhEQUFDYTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNyQixzRUFBZUE7d0JBQ2RxQixXQUFXLDZJQUNvRCxPQUFyQixDQUFDWCxXQUFXO3dCQUN0RGEsU0FBUyxJQUFNWCxZQUFZOzs7Ozs7a0NBRzdCLDhEQUFDUTt3QkFDQ0ksS0FBS2Y7d0JBQ0xZLFdBQVU7a0NBRVRiLE9BQU9pQixHQUFHLENBQUMsQ0FBQ0Msc0JBQ1gsOERBQUNyQixrREFBU0E7Z0NBQWdCcUIsT0FBT0E7K0JBQWpCQSxNQUFNQyxFQUFFOzs7Ozs7Ozs7O2tDQUk1Qiw4REFBQzFCLHVFQUFnQkE7d0JBQ2ZvQixXQUFVO3dCQUVWRSxTQUFTLElBQU1YLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQztHQW5ETU47S0FBQUE7QUFxRE4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb3cudHN4P2E4Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hldnJvbkxlZnRJY29uLCBDaGV2cm9uUmlnaHRJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvc29saWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW92aWUgfSBmcm9tIFwiLi4vdHlwaW5nc1wiO1xyXG5pbXBvcnQgVGh1bWJuYWlsIGZyb20gXCIuL1RodW1ibmFpbFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIG1vdmllczogTW92aWVbXTtcclxufVxyXG5cclxuY29uc3QgUm93ID0gKHsgdGl0bGUsIG1vdmllcyB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvd1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW2lzTW92ZWQsIHNldElzTW92ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChkaXJlY3Rpb246IHN0cmluZykgPT4ge1xyXG4gICAgc2V0SXNNb3ZlZCh0cnVlKTtcclxuXHJcbiAgICBpZiAocm93UmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgeyBzY3JvbGxMZWZ0LCBjbGllbnRXaWR0aCB9ID0gcm93UmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgICBjb25zdCBzY3JvbGxUbyA9XHJcbiAgICAgICAgZGlyZWN0aW9uID09PSBcImxlZnRcIlxyXG4gICAgICAgICAgPyBzY3JvbGxMZWZ0IC0gY2xpZW50V2lkdGhcclxuICAgICAgICAgIDogc2Nyb2xsTGVmdCArIGNsaWVudFdpZHRoO1xyXG5cclxuICAgICAgcm93UmVmLmN1cnJlbnQuc2Nyb2xsVG8oeyBsZWZ0OiBzY3JvbGxUbywgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00MCBzcGFjZS15LTAuNSBtZDpzcGFjZS15LTJcIj5cclxuICAgICAgPGgyXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy01NiBjdXJzb3ItcG9pbnRlciB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1bI2U1ZTVlNV0gdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDBcclxuICAgICAgIGhvdmVyOnRleHQtd2hpdGUgbWQ6dGV4dC0yeGxcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICA8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIG1kOi1tbC0yIFwiPlxyXG4gICAgICAgIDxDaGV2cm9uTGVmdEljb25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIHRvcC0wIGJvdHRvbS0wIGxlZnQtMiB6LTQwIG0tYXV0byBoLTkgdy05IGN1cnNvci1wb2ludGVyIG9wYWNpdHktMCB0cmFuc2l0aW9uXHJcbiAgICAgICAgICBob3ZlcjpzY2FsZS0xMjUgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgJHshaXNNb3ZlZCAmJiBcImhpZGRlblwifWB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcImxlZnRcIil9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcmVmPXtyb3dSZWZ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHNjcm9sbGJhci1oaWRlICBvdmVyZmxvdy15LWhpZGRlbiBpdGVtcy1jZW50ZXIgc3BhY2UteC0wLjUgb3ZlcmZsb3cteC1zY3JvbGwgbWQ6c3BhY2UteC0yLjUgbWQ6cC0yXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bW92aWVzLm1hcCgobW92aWUpID0+IChcclxuICAgICAgICAgICAgPFRodW1ibmFpbCBrZXk9e21vdmllLmlkfSBtb3ZpZT17bW92aWV9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPENoZXZyb25SaWdodEljb25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGJvdHRvbS0wIHJpZ2h0LTIgei00MCBtLWF1dG8gaC05IHctOSBjdXJzb3ItcG9pbnRlciBvcGFjaXR5LTAgdHJhbnNpdGlvblxyXG4gICAgICAgICAgaG92ZXI6c2NhbGUtMTI1IGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwicmlnaHRcIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm93O1xyXG4iXSwibmFtZXMiOlsiQ2hldnJvbkxlZnRJY29uIiwiQ2hldnJvblJpZ2h0SWNvbiIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJUaHVtYm5haWwiLCJSb3ciLCJ0aXRsZSIsIm1vdmllcyIsInJvd1JlZiIsImlzTW92ZWQiLCJzZXRJc01vdmVkIiwiaGFuZGxlQ2xpY2siLCJkaXJlY3Rpb24iLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsImNsaWVudFdpZHRoIiwic2Nyb2xsVG8iLCJsZWZ0IiwiYmVoYXZpb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm9uQ2xpY2siLCJyZWYiLCJtYXAiLCJtb3ZpZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Row.tsx\n"));

/***/ })

});
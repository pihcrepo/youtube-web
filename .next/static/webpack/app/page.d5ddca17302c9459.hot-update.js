"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/container/index.tsx":
/*!****************************************!*\
  !*** ./components/container/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Container; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SuggestionBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuggestionBar */ \"(app-pages-browser)/./components/container/SuggestionBar.tsx\");\n\n\n\nfunction Container() {\n    function render() {\n        let arr = [];\n        for(let i = 0; i < 10; i++){\n            return arr.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-2xl ligh bg-black w-[99%]\",\n                children: \"abccc\"\n            }, i, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 1\n            }, this));\n        }\n        return arr;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" w-full overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SuggestionBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full overflow-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h12 bg-black\"\n                }, void 0, false, {\n                    fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = Container;\nvar _c;\n$RefreshReg$(_c, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29udGFpbmVyL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFFa0I7QUFFN0IsU0FBU0U7SUFFdEIsU0FBU0M7UUFDUCxJQUFJQyxNQUEyQixFQUFFO1FBQ2pDLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJLElBQUlBLElBQUs7WUFDM0IsT0FDRUQsSUFBSUUsSUFBSSxlQUNoQiw4REFBQ0M7Z0JBQVlDLFdBQVU7MEJBQWlDO2VBQTlDSDs7Ozs7UUFJTjtRQUNBLE9BQU9EO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNQLHNEQUFhQTs7Ozs7MEJBQ2QsOERBQUNNO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkI7S0F4QndCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbnRhaW5lci9pbmRleC50c3g/ODg2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU3VnZ2VzdGlvbkJhciBmcm9tICcuL1N1Z2dlc3Rpb25CYXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIoKSB7XG5cbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGxldCBhcnI6IFJlYWN0LkpTWC5FbGVtZW50W10gPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgcmV0dXJuKFxuICAgICAgICBhcnIucHVzaChcbjxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBsaWdoIGJnLWJsYWNrIHctWzk5JV1cIj5hYmNjYzwvZGl2PlxuICAgICAgICApXG5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFyclxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8U3VnZ2VzdGlvbkJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgb3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgxMiBiZy1ibGFja1wiPjwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN1Z2dlc3Rpb25CYXIiLCJDb250YWluZXIiLCJyZW5kZXIiLCJhcnIiLCJpIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/container/index.tsx\n"));

/***/ })

});
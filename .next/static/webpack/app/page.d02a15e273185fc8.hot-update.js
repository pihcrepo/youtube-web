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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Container; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SuggestionBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuggestionBar */ \"(app-pages-browser)/./components/container/SuggestionBar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction Container(param) {\n    let { showMoreLeftMenu } = param;\n    function render() {\n        for(let i = 0; i < 10; i++){\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-2xl ligh bg-black w-[99%]\",\n                children: \"abccc\"\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 1\n            }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" w-full overflow-auto bg-blue-500\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SuggestionBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[calc(100vh-112)] overflow-auto\",\n                children: [\n                    \"test abc\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-2xl ligh bg-black w-[99%]\",\n                        children: \"abccc\"\n                    }, void 0, false, {\n                        fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    render()\n                ]\n            }, void 0, true, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = Container;\nvar _c;\n$RefreshReg$(_c, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29udGFpbmVyL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMEI7QUFFa0I7QUFLN0IsU0FBU0UsVUFBVSxLQUEyQjtRQUEzQixFQUFFQyxnQkFBZ0IsRUFBUyxHQUEzQjtJQUNoQyxTQUFTQztRQUNQLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJLElBQUlBLElBQUs7WUFDM0IscUJBQ04sOERBQUNDO2dCQUFJQyxXQUFVOzBCQUFpQzs7Ozs7O1FBRTVDO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0Q7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNOLHNEQUFhQTs7Ozs7MEJBQ2QsOERBQUNLO2dCQUFJQyxXQUFVOztvQkFBb0M7a0NBRWpELDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBaUM7Ozs7OztvQkFDL0NIOzs7Ozs7Ozs7Ozs7O0FBSVQ7S0FsQndCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbnRhaW5lci9pbmRleC50c3g/ODg2NSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTdWdnZXN0aW9uQmFyIGZyb20gJy4vU3VnZ2VzdGlvbkJhcic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNob3dNb3JlTGVmdE1lbnU6IGJvb2xlYW47XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFpbmVyKHsgc2hvd01vcmVMZWZ0TWVudSB9OiBQcm9wcykge1xuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICByZXR1cm4oXG48ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGxpZ2ggYmctYmxhY2sgdy1bOTklXVwiPmFiY2NjPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIG92ZXJmbG93LWF1dG8gYmctYmx1ZS01MDBcIj5cbiAgICAgIDxTdWdnZXN0aW9uQmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtW2NhbGMoMTAwdmgtMTEyKV0gb3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICB0ZXN0IGFiY1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGxpZ2ggYmctYmxhY2sgdy1bOTklXVwiPmFiY2NjPC9kaXY+XG4gICAgICAgIHtyZW5kZXIoKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3VnZ2VzdGlvbkJhciIsIkNvbnRhaW5lciIsInNob3dNb3JlTGVmdE1lbnUiLCJyZW5kZXIiLCJpIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/container/index.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Container; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SuggestionBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuggestionBar */ \"(app-pages-browser)/./components/container/SuggestionBar.tsx\");\n/* harmony import */ var _img_dataimage_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/img/dataimage.jpg */ \"(app-pages-browser)/./img/dataimage.jpg\");\n/* harmony import */ var _img_datalogo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/img/datalogo.jpg */ \"(app-pages-browser)/./img/datalogo.jpg\");\n\n\n\n\n\nfunction Container() {\n    const data = [\n        {\n            id: 1,\n            image: _img_dataimage_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            title: \"travel around the world\",\n            channelName: \"Travel\",\n            channelLogo: _img_datalogo_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            views: \"782K\",\n            createdAt: \"1 month ago\",\n            time: \"2:27\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden w-full h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SuggestionBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-auto h-full pt-6\",\n                children: data.map((e)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/5 h- bg-black\"\n                    }, e.id, false, {\n                        fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 12\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_c = Container;\nvar _c;\n$RefreshReg$(_c, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29udGFpbmVyL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUVrQjtBQUVEO0FBQ0Y7QUFFMUIsU0FBU0k7SUFFdEIsTUFBTUMsT0FBTztRQUNYO1lBQ0VDLElBQUk7WUFDSkMsT0FBT0wsMERBQVNBO1lBQ2hCTSxPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsYUFBYVAseURBQVFBO1lBQ3JCUSxPQUFPO1lBQ1BDLFdBQVc7WUFDWEMsTUFBTTtRQUNSO0tBQ0Q7SUFFRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNkLHNEQUFhQTs7Ozs7MEJBQ2QsOERBQUNhO2dCQUFJQyxXQUFVOzBCQUdYVixLQUFLVyxHQUFHLENBQUNDLENBQUFBLGtCQUNSLDhEQUFDSDt3QkFBSUMsV0FBVTt1QkFDWEUsRUFBRVgsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVVuQjtLQWpDd0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29udGFpbmVyL2luZGV4LnRzeD84ODY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTdWdnZXN0aW9uQmFyIGZyb20gJy4vU3VnZ2VzdGlvbkJhcic7XG5cbmltcG9ydCBkYXRhaW1hZ2UgZnJvbSAnQC9pbWcvZGF0YWltYWdlLmpwZydcbmltcG9ydCBkYXRhbG9nbyBmcm9tICdAL2ltZy9kYXRhbG9nby5qcGcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhaW5lcigpIHtcblxuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgaW1hZ2U6IGRhdGFpbWFnZSxcbiAgICAgIHRpdGxlOiAndHJhdmVsIGFyb3VuZCB0aGUgd29ybGQnLFxuICAgICAgY2hhbm5lbE5hbWU6ICdUcmF2ZWwnLFxuICAgICAgY2hhbm5lbExvZ286IGRhdGFsb2dvLFxuICAgICAgdmlld3M6ICc3ODJLJyxcbiAgICAgIGNyZWF0ZWRBdDogJzEgbW9udGggYWdvJyxcbiAgICAgIHRpbWU6ICcyOjI3JyxcbiAgICB9XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHctZnVsbCBoLWZ1bGxcIj5cbiAgICAgIDxTdWdnZXN0aW9uQmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG8gaC1mdWxsIHB0LTZcIj5cblxuICAgICAgICB7XG4gICAgICAgICAgZGF0YS5tYXAoZSA9PiBcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNSBoLSBiZy1ibGFja1wiXG4gICAgICAgICAga2V5PXtlLmlkfSBcbiAgICAgICAgICAgPlxuXG4gICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN1Z2dlc3Rpb25CYXIiLCJkYXRhaW1hZ2UiLCJkYXRhbG9nbyIsIkNvbnRhaW5lciIsImRhdGEiLCJpZCIsImltYWdlIiwidGl0bGUiLCJjaGFubmVsTmFtZSIsImNoYW5uZWxMb2dvIiwidmlld3MiLCJjcmVhdGVkQXQiLCJ0aW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/container/index.tsx\n"));

/***/ })

});
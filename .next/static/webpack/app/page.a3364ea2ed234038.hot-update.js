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

/***/ "(app-pages-browser)/./components/container/SuggestionBar.tsx":
/*!************************************************!*\
  !*** ./components/container/SuggestionBar.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SuggestionBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction SuggestionBar() {\n    _s();\n    const suggestionList = [\n        {\n            name: \"All\"\n        },\n        {\n            name: \"Music\"\n        },\n        {\n            name: \"Rain\"\n        },\n        {\n            name: \"Vocabulary\"\n        },\n        {\n            name: \"Podcasts\"\n        },\n        {\n            name: \"Gaming\"\n        },\n        {\n            name: \"Game shows\"\n        },\n        {\n            name: \"Funny\"\n        },\n        {\n            name: \"Funny\"\n        },\n        {\n            name: \"Funny\"\n        },\n        {\n            name: \"Funny\"\n        },\n        {\n            name: \"Funny\"\n        }\n    ];\n    // const scrollRef = useRef(null);\n    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleScrollLeft = ()=>{\n        var _scrollRef_current;\n        (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollBy({\n            left: -200,\n            behavior: \"smooth\"\n        });\n    };\n    const handleScrollRight = ()=>{\n        var _scrollRef_current;\n        (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollBy({\n            top: 0,\n            left: 200,\n            behavior: \"smooth\"\n        });\n    };\n    const cssContainer = \"\";\n    const cssBtn = \"\";\n    const cssSuggestList = \"flex gap-6 h-full w-5/6 items-center overflow-hidden border-black\";\n    const cssSuggestItem = \"flex justify-center items-center p-2\\n    cursor-pointer transition-all \\n    hover:bg-gray-500 hover:rounded-md\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-around w-full h-14 bg-black  overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Btn, {\n                onClick: handleScrollLeft,\n                content: \"<\"\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Btn, {\n                onClick: handleScrollRight,\n                content: \">\"\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cssSuggestList,\n                ref: scrollRef,\n                children: suggestionList.map((e)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: cssSuggestItem,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm whitespace-nowrap\",\n                            children: e.name\n                        }, void 0, false, {\n                            fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(SuggestionBar, \"rUl6RJdP9XfufN21BrtKqIOri0o=\");\n_c = SuggestionBar;\nfunction Btn(param) {\n    let { onClick, content } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"bg-transparent border-none cursor-pointer text-2xl\",\n        onClick: onClick,\n        children: content\n    }, void 0, false, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n        lineNumber: 92,\n        columnNumber: 10\n    }, this);\n}\n_c1 = Btn;\nvar _c, _c1;\n$RefreshReg$(_c, \"SuggestionBar\");\n$RefreshReg$(_c1, \"Btn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29udGFpbmVyL1N1Z2dlc3Rpb25CYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzQztBQUN2QixTQUFTRTs7SUFDdEIsTUFBTUMsaUJBQWlCO1FBQ3JCO1lBQ0VDLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtLQUNEO0lBRUQsa0NBQWtDO0lBQ2xDLE1BQU1DLFlBQVlKLDZDQUFNQSxDQUF3QjtJQUVoRCxNQUFNSyxtQkFBbUI7WUFDdkJEO1NBQUFBLHFCQUFBQSxVQUFVRSxPQUFPLGNBQWpCRix5Q0FBQUEsbUJBQW1CRyxRQUFRLENBQUM7WUFDMUJDLE1BQU0sQ0FBQztZQUNQQyxVQUFVO1FBQ1o7SUFDRjtJQUVBLE1BQU1DLG9CQUFvQjtZQUN4Qk47U0FBQUEscUJBQUFBLFVBQVVFLE9BQU8sY0FBakJGLHlDQUFBQSxtQkFBbUJHLFFBQVEsQ0FBQztZQUMxQkksS0FBSztZQUNMSCxNQUFNO1lBQ05DLFVBQVU7UUFDWjtJQUNGO0lBRUEsTUFBTUcsZUFBZ0I7SUFDdEIsTUFBTUMsU0FBUztJQUNmLE1BQU1DLGlCQUNKO0lBQ0YsTUFBTUMsaUJBQWtCO0lBSXhCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFJYiw4REFBQ0M7Z0JBQUlDLFNBQVNkO2dCQUFtQmUsU0FBUzs7Ozs7OzBCQUMxQyw4REFBQ0Y7Z0JBQUlDLFNBQVNUO2dCQUFvQlUsU0FBUzs7Ozs7OzBCQUMzQyw4REFBQ0o7Z0JBQUlDLFdBQVdIO2dCQUFnQk8sS0FBS2pCOzBCQUNsQ0YsZUFBZW9CLEdBQUcsQ0FBQyxDQUFDQyxrQkFDbkIsOERBQUNQO3dCQUFJQyxXQUFXRjtrQ0FDZCw0RUFBQ1M7NEJBQUtQLFdBQVU7c0NBQTZCTSxFQUFFcEIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8vRDtHQW5Gd0JGO0tBQUFBO0FBeUZ4QixTQUFTaUIsSUFBSSxLQUE0QjtRQUE1QixFQUFDQyxPQUFPLEVBQUVDLE9BQU8sRUFBVyxHQUE1QjtJQUNYLHFCQUFPLDhEQUFDSztRQUFPUixXQUFVO1FBR3pCRSxTQUFTQTtrQkFDSEM7Ozs7OztBQUVSO01BUFNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29udGFpbmVyL1N1Z2dlc3Rpb25CYXIudHN4PzA5ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Z2dlc3Rpb25CYXIoKSB7XG4gIGNvbnN0IHN1Z2dlc3Rpb25MaXN0ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdBbGwnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ011c2ljJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdSYWluJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdWb2NhYnVsYXJ5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdQb2RjYXN0cycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnR2FtaW5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdHYW1lIHNob3dzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdGdW5ueScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRnVubnknLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Z1bm55JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdGdW5ueScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRnVubnknLFxuICAgIH0sXG4gIF07XG5cbiAgLy8gY29uc3Qgc2Nyb2xsUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGxMZWZ0ID0gKCkgPT4ge1xuICAgIHNjcm9sbFJlZi5jdXJyZW50Py5zY3JvbGxCeSh7XG4gICAgICBsZWZ0OiAtMjAwLCAvLyBBZGp1c3QgdGhpcyB2YWx1ZSB0byBjb250cm9sIHRoZSBzbGlkZSBkaXN0YW5jZVxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbFJpZ2h0ID0gKCkgPT4ge1xuICAgIHNjcm9sbFJlZi5jdXJyZW50Py5zY3JvbGxCeSh7XG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAyMDAsIC8vIEFkanVzdCB0aGlzIHZhbHVlIHRvIGNvbnRyb2wgdGhlIHNsaWRlIGRpc3RhbmNlXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY3NzQ29udGFpbmVyID0gYGA7XG4gIGNvbnN0IGNzc0J0biA9ICcnO1xuICBjb25zdCBjc3NTdWdnZXN0TGlzdCA9XG4gICAgJ2ZsZXggZ2FwLTYgaC1mdWxsIHctNS82IGl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWJsYWNrJztcbiAgY29uc3QgY3NzU3VnZ2VzdEl0ZW0gPSBgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0yXG4gICAgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgXG4gICAgaG92ZXI6YmctZ3JheS01MDAgaG92ZXI6cm91bmRlZC1tZGA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWFyb3VuZFxuICAgIHctZnVsbCBoLTE0IGJnLWJsYWNrIFxuICAgICBvdmVyZmxvdy1oaWRkZW4nPlxuXG4gICAgICA8QnRuIG9uQ2xpY2s9e2hhbmRsZVNjcm9sbExlZnQgfSBjb250ZW50PXsnPCd9IC8+XG4gICAgICA8QnRuIG9uQ2xpY2s9e2hhbmRsZVNjcm9sbFJpZ2h0IH0gY29udGVudD17Jz4nfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc1N1Z2dlc3RMaXN0fSByZWY9e3Njcm9sbFJlZn0+XG4gICAgICAgIHtzdWdnZXN0aW9uTGlzdC5tYXAoKGUpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzU3VnZ2VzdEl0ZW19PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB3aGl0ZXNwYWNlLW5vd3JhcFwiPntlLm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbnR5cGUgQnRuUHJvcHMgPSB7XG4gIG9uQ2xpY2s6ICgpID0+IHZvaWQsXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuZnVuY3Rpb24gQnRuKHtvbkNsaWNrLCBjb250ZW50fTogQnRuUHJvcHMpIHtcbiAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPSdiZy10cmFuc3BhcmVudCBib3JkZXItbm9uZSBjdXJzb3ItcG9pbnRlciB0ZXh0LTJ4bCdcblxuICBcbiAgb25DbGljaz17b25DbGlja30+XG4gICAgICAge2NvbnRlbnR9XG4gICAgICA8L2J1dHRvbj5cbn1cblxuZnVuY3Rpb24gU3VnZ2VzdGlvbkl0ZW0oe25hbWV9KVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiU3VnZ2VzdGlvbkJhciIsInN1Z2dlc3Rpb25MaXN0IiwibmFtZSIsInNjcm9sbFJlZiIsImhhbmRsZVNjcm9sbExlZnQiLCJjdXJyZW50Iiwic2Nyb2xsQnkiLCJsZWZ0IiwiYmVoYXZpb3IiLCJoYW5kbGVTY3JvbGxSaWdodCIsInRvcCIsImNzc0NvbnRhaW5lciIsImNzc0J0biIsImNzc1N1Z2dlc3RMaXN0IiwiY3NzU3VnZ2VzdEl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJCdG4iLCJvbkNsaWNrIiwiY29udGVudCIsInJlZiIsIm1hcCIsImUiLCJzcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/container/SuggestionBar.tsx\n"));

/***/ })

});
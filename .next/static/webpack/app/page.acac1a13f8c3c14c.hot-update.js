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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SuggestionBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction SuggestionBar() {\n    _s();\n    const suggestionList = [\n        {\n            name: \"All\"\n        },\n        {\n            name: \"Music\"\n        },\n        {\n            name: \"Rain\"\n        },\n        {\n            name: \"Vocabulary\"\n        },\n        {\n            name: \"Podcasts\"\n        },\n        {\n            name: \"Gaming\"\n        },\n        {\n            name: \"Game shows\"\n        },\n        {\n            name: \"Funny\"\n        },\n        {\n            name: \"Funny\"\n        },\n        {\n            name: \"Funny\"\n        },\n        {\n            name: \"Funny\"\n        },\n        {\n            name: \"Funny\"\n        }\n    ];\n    // const scrollRef = useRef(null);\n    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleScrollLeft = ()=>{\n        var _scrollRef_current;\n        (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollBy({\n            left: -200,\n            behavior: \"smooth\"\n        });\n    };\n    const handleScrollRight = ()=>{\n        var _scrollRef_current;\n        (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollBy({\n            top: 0,\n            left: 200,\n            behavior: \"smooth\"\n        });\n    };\n    const cssContainer = \"\";\n    const cssBtn = \"\";\n    const cssSuggestList = \"flex gap-6 h-full w-5/6 items-center overflow-hidden border-black\";\n    const cssSuggestItem = \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-around w-full h-14 bg-black  overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Btn, {\n                onClick: handleScrollLeft,\n                content: \"<\"\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Btn, {\n                onClick: handleScrollRight,\n                content: \">\"\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cssSuggestList,\n                ref: scrollRef,\n                children: suggestionList.map((e)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SuggestionItem, {\n                        name: \"a\"\n                    }, void 0, false, {\n                        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(SuggestionBar, \"rUl6RJdP9XfufN21BrtKqIOri0o=\");\n_c = SuggestionBar;\nfunction Btn(param) {\n    let { onClick, content } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"bg-transparent border-none cursor-pointer text-2xl\",\n        onClick: onClick,\n        children: content\n    }, void 0, false, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n        lineNumber: 88,\n        columnNumber: 10\n    }, this);\n}\n_c1 = Btn;\nfunction SuggestionItem(param) {\n    let { name } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center p-2 cursor-pointer transition-all  hover:bg-gray-500 hover:rounded-md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"text-sm whitespace-nowrap\",\n            children: name\n        }, void 0, false, {\n            fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n            lineNumber: 101,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n        lineNumber: 97,\n        columnNumber: 9\n    }, this);\n}\n_c2 = SuggestionItem;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"SuggestionBar\");\n$RefreshReg$(_c1, \"Btn\");\n$RefreshReg$(_c2, \"SuggestionItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29udGFpbmVyL1N1Z2dlc3Rpb25CYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzQztBQUN2QixTQUFTRTs7SUFDdEIsTUFBTUMsaUJBQWlCO1FBQ3JCO1lBQ0VDLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtLQUNEO0lBRUQsa0NBQWtDO0lBQ2xDLE1BQU1DLFlBQVlKLDZDQUFNQSxDQUF3QjtJQUVoRCxNQUFNSyxtQkFBbUI7WUFDdkJEO1NBQUFBLHFCQUFBQSxVQUFVRSxPQUFPLGNBQWpCRix5Q0FBQUEsbUJBQW1CRyxRQUFRLENBQUM7WUFDMUJDLE1BQU0sQ0FBQztZQUNQQyxVQUFVO1FBQ1o7SUFDRjtJQUVBLE1BQU1DLG9CQUFvQjtZQUN4Qk47U0FBQUEscUJBQUFBLFVBQVVFLE9BQU8sY0FBakJGLHlDQUFBQSxtQkFBbUJHLFFBQVEsQ0FBQztZQUMxQkksS0FBSztZQUNMSCxNQUFNO1lBQ05DLFVBQVU7UUFDWjtJQUNGO0lBRUEsTUFBTUcsZUFBZ0I7SUFDdEIsTUFBTUMsU0FBUztJQUNmLE1BQU1DLGlCQUNKO0lBQ0YsTUFBTUMsaUJBQWtCO0lBRXhCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFJYiw4REFBQ0M7Z0JBQUlDLFNBQVNkO2dCQUFtQmUsU0FBUzs7Ozs7OzBCQUMxQyw4REFBQ0Y7Z0JBQUlDLFNBQVNUO2dCQUFvQlUsU0FBUzs7Ozs7OzBCQUMzQyw4REFBQ0o7Z0JBQUlDLFdBQVdIO2dCQUFnQk8sS0FBS2pCOzBCQUNsQ0YsZUFBZW9CLEdBQUcsQ0FBQyxDQUFDQyxrQkFDbkIsOERBQUNDO3dCQUFlckIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEM7R0EvRXdCRjtLQUFBQTtBQXFGeEIsU0FBU2lCLElBQUksS0FBNEI7UUFBNUIsRUFBQ0MsT0FBTyxFQUFFQyxPQUFPLEVBQVcsR0FBNUI7SUFDWCxxQkFBTyw4REFBQ0s7UUFBT1IsV0FBVTtRQUd6QkUsU0FBU0E7a0JBQ0hDOzs7Ozs7QUFFUjtNQVBTRjtBQVNULFNBQVNNLGVBQWUsS0FBcUI7UUFBckIsRUFBQ3JCLElBQUksRUFBZ0IsR0FBckI7SUFDdEIscUJBQU0sOERBQUNhO1FBQUlDLFdBQVU7a0JBSVgsNEVBQUNTO1lBQUtULFdBQVU7c0JBQTZCZDs7Ozs7Ozs7Ozs7QUFFekQ7TUFQU3FCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29udGFpbmVyL1N1Z2dlc3Rpb25CYXIudHN4PzA5ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Z2dlc3Rpb25CYXIoKSB7XG4gIGNvbnN0IHN1Z2dlc3Rpb25MaXN0ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdBbGwnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ011c2ljJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdSYWluJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdWb2NhYnVsYXJ5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdQb2RjYXN0cycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnR2FtaW5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdHYW1lIHNob3dzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdGdW5ueScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRnVubnknLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Z1bm55JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdGdW5ueScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRnVubnknLFxuICAgIH0sXG4gIF07XG5cbiAgLy8gY29uc3Qgc2Nyb2xsUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGxMZWZ0ID0gKCkgPT4ge1xuICAgIHNjcm9sbFJlZi5jdXJyZW50Py5zY3JvbGxCeSh7XG4gICAgICBsZWZ0OiAtMjAwLCAvLyBBZGp1c3QgdGhpcyB2YWx1ZSB0byBjb250cm9sIHRoZSBzbGlkZSBkaXN0YW5jZVxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbFJpZ2h0ID0gKCkgPT4ge1xuICAgIHNjcm9sbFJlZi5jdXJyZW50Py5zY3JvbGxCeSh7XG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAyMDAsIC8vIEFkanVzdCB0aGlzIHZhbHVlIHRvIGNvbnRyb2wgdGhlIHNsaWRlIGRpc3RhbmNlXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY3NzQ29udGFpbmVyID0gYGA7XG4gIGNvbnN0IGNzc0J0biA9ICcnO1xuICBjb25zdCBjc3NTdWdnZXN0TGlzdCA9XG4gICAgJ2ZsZXggZ2FwLTYgaC1mdWxsIHctNS82IGl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWJsYWNrJztcbiAgY29uc3QgY3NzU3VnZ2VzdEl0ZW0gPSBgYDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYXJvdW5kXG4gICAgdy1mdWxsIGgtMTQgYmctYmxhY2sgXG4gICAgIG92ZXJmbG93LWhpZGRlbic+XG5cbiAgICAgIDxCdG4gb25DbGljaz17aGFuZGxlU2Nyb2xsTGVmdCB9IGNvbnRlbnQ9eyc8J30gLz5cbiAgICAgIDxCdG4gb25DbGljaz17aGFuZGxlU2Nyb2xsUmlnaHQgfSBjb250ZW50PXsnPid9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzU3VnZ2VzdExpc3R9IHJlZj17c2Nyb2xsUmVmfT5cbiAgICAgICAge3N1Z2dlc3Rpb25MaXN0Lm1hcCgoZSkgPT4gKFxuICAgICAgICAgIDxTdWdnZXN0aW9uSXRlbSBuYW1lPXsnYSd9Lz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xufVxuXG50eXBlIEJ0blByb3BzID0ge1xuICBvbkNsaWNrOiAoKSA9PiB2b2lkLFxuICBjb250ZW50OiBzdHJpbmdcbn1cbmZ1bmN0aW9uIEJ0bih7b25DbGljaywgY29udGVudH06IEJ0blByb3BzKSB7XG4gIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT0nYmctdHJhbnNwYXJlbnQgYm9yZGVyLW5vbmUgY3Vyc29yLXBvaW50ZXIgdGV4dC0yeGwnXG5cbiAgXG4gIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgIHtjb250ZW50fVxuICAgICAgPC9idXR0b24+XG59XG5cbmZ1bmN0aW9uIFN1Z2dlc3Rpb25JdGVtKHtuYW1lfTp7bmFtZTogc3RyaW5nfSl7XG4gIHJldHVybjxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwLTJcbiAgICBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbCBcbiAgICBob3ZlcjpiZy1ncmF5LTUwMCBob3Zlcjpyb3VuZGVkLW1kJz5cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB3aGl0ZXNwYWNlLW5vd3JhcFwiPntuYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIlN1Z2dlc3Rpb25CYXIiLCJzdWdnZXN0aW9uTGlzdCIsIm5hbWUiLCJzY3JvbGxSZWYiLCJoYW5kbGVTY3JvbGxMZWZ0IiwiY3VycmVudCIsInNjcm9sbEJ5IiwibGVmdCIsImJlaGF2aW9yIiwiaGFuZGxlU2Nyb2xsUmlnaHQiLCJ0b3AiLCJjc3NDb250YWluZXIiLCJjc3NCdG4iLCJjc3NTdWdnZXN0TGlzdCIsImNzc1N1Z2dlc3RJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiQnRuIiwib25DbGljayIsImNvbnRlbnQiLCJyZWYiLCJtYXAiLCJlIiwiU3VnZ2VzdGlvbkl0ZW0iLCJidXR0b24iLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/container/SuggestionBar.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SuggestionBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction SuggestionBar() {\n    _s();\n    const suggestionList = [\n        {\n            name: \"All\"\n        },\n        {\n            name: \"Music\"\n        },\n        {\n            name: \"Rain\"\n        },\n        {\n            name: \"Vocabulary\"\n        },\n        {\n            name: \"Podcasts\"\n        },\n        {\n            name: \"Gaming\"\n        },\n        {\n            name: \"Game shows\"\n        },\n        {\n            name: \"Funny\"\n        },\n        {\n            name: \"Funny\"\n        },\n        {\n            name: \"Funny\"\n        },\n        {\n            name: \"Funny\"\n        },\n        {\n            name: \"Funny\"\n        }\n    ];\n    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleScrollLeft = ()=>{\n        var _scrollRef_current;\n        (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollBy({\n            left: -200,\n            behavior: \"smooth\"\n        });\n    };\n    const handleScrollRight = ()=>{\n        var _scrollRef_current;\n        (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollBy({\n            left: 200,\n            behavior: \"smooth\"\n        });\n    };\n    const cssSuggestList = \"flex gap-6 h-full w-5/6 items-center overflow-hidden border-black\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-around overflow-hidden w-full h-14 bg-black \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Btn, {\n                onClick: handleScrollLeft,\n                content: \"<\"\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cssSuggestList,\n                ref: scrollRef,\n                children: suggestionList.map((e)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SuggestionItem, {\n                        name: e.name\n                    }, void 0, false, {\n                        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Btn, {\n                onClick: handleScrollRight,\n                content: \">\"\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(SuggestionBar, \"rUl6RJdP9XfufN21BrtKqIOri0o=\");\n_c = SuggestionBar;\nfunction Btn(param) {\n    let { onClick, content } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"bg-transparent border-none cursor-pointer text-2xl\",\n        onClick: onClick,\n        children: content\n    }, void 0, false, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Btn;\nfunction SuggestionItem(param) {\n    let { name } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center p-2 cursor-pointer transition-all  hover:bg-gray-500 hover:rounded-md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"text-sm whitespace-nowrap\",\n            children: name\n        }, void 0, false, {\n            fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n            lineNumber: 96,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_c2 = SuggestionItem;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"SuggestionBar\");\n$RefreshReg$(_c1, \"Btn\");\n$RefreshReg$(_c2, \"SuggestionItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29udGFpbmVyL1N1Z2dlc3Rpb25CYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzQztBQUN2QixTQUFTRTs7SUFDdEIsTUFBTUMsaUJBQWlCO1FBQ3JCO1lBQ0VDLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtRQUNBO1lBQ0VBLE1BQU07UUFDUjtLQUNEO0lBRUQsTUFBTUMsWUFBWUosNkNBQU1BLENBQXdCO0lBRWhELE1BQU1LLG1CQUFtQjtZQUN2QkQ7U0FBQUEscUJBQUFBLFVBQVVFLE9BQU8sY0FBakJGLHlDQUFBQSxtQkFBbUJHLFFBQVEsQ0FBQztZQUMxQkMsTUFBTSxDQUFDO1lBQ1BDLFVBQVU7UUFDWjtJQUNGO0lBRUEsTUFBTUMsb0JBQW9CO1lBQ3hCTjtTQUFBQSxxQkFBQUEsVUFBVUUsT0FBTyxjQUFqQkYseUNBQUFBLG1CQUFtQkcsUUFBUSxDQUFDO1lBQzFCQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtJQUNGO0lBRUEsTUFBTUUsaUJBQ0o7SUFFRixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFJQyxTQUFTVjtnQkFBa0JXLFNBQVM7Ozs7OzswQkFDekMsOERBQUNKO2dCQUFJQyxXQUFXRjtnQkFBZ0JNLEtBQUtiOzBCQUNsQ0YsZUFBZWdCLEdBQUcsQ0FBQyxDQUFDQyxrQkFDbkIsOERBQUNDO3dCQUFlakIsTUFBTWdCLEVBQUVoQixJQUFJOzs7Ozs7Ozs7OzswQkFHaEMsOERBQUNXO2dCQUFJQyxTQUFTTDtnQkFBbUJNLFNBQVM7Ozs7Ozs7Ozs7OztBQUdoRDtHQXRFd0JmO0tBQUFBO0FBNEV4QixTQUFTYSxJQUFJLEtBQThCO1FBQTlCLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFZLEdBQTlCO0lBQ1gscUJBQ0UsOERBQUNLO1FBQ0NSLFdBQVU7UUFDVkUsU0FBU0E7a0JBRVJDOzs7Ozs7QUFHUDtNQVRTRjtBQVdULFNBQVNNLGVBQWUsS0FBMEI7UUFBMUIsRUFBRWpCLElBQUksRUFBb0IsR0FBMUI7SUFDdEIscUJBQ0UsOERBQUNTO1FBQ0NDLFdBQVU7a0JBSVYsNEVBQUNTO1lBQUtULFdBQVU7c0JBQTZCVjs7Ozs7Ozs7Ozs7QUFHbkQ7TUFWU2lCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29udGFpbmVyL1N1Z2dlc3Rpb25CYXIudHN4PzA5ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Z2dlc3Rpb25CYXIoKSB7XG4gIGNvbnN0IHN1Z2dlc3Rpb25MaXN0ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdBbGwnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ011c2ljJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdSYWluJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdWb2NhYnVsYXJ5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdQb2RjYXN0cycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnR2FtaW5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdHYW1lIHNob3dzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdGdW5ueScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRnVubnknLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Z1bm55JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdGdW5ueScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRnVubnknLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3Qgc2Nyb2xsUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsTGVmdCA9ICgpID0+IHtcbiAgICBzY3JvbGxSZWYuY3VycmVudD8uc2Nyb2xsQnkoe1xuICAgICAgbGVmdDogLTIwMCwgXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsUmlnaHQgPSAoKSA9PiB7XG4gICAgc2Nyb2xsUmVmLmN1cnJlbnQ/LnNjcm9sbEJ5KHtcbiAgICAgIGxlZnQ6IDIwMCwgLy8gQWRqdXN0IHRoaXMgdmFsdWUgdG8gY29udHJvbCB0aGUgc2xpZGUgZGlzdGFuY2VcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjc3NTdWdnZXN0TGlzdCA9XG4gICAgJ2ZsZXggZ2FwLTYgaC1mdWxsIHctNS82IGl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWJsYWNrJztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWFyb3VuZCBvdmVyZmxvdy1oaWRkZW4gdy1mdWxsIGgtMTQgYmctYmxhY2sgXCI+XG4gICAgICA8QnRuIG9uQ2xpY2s9e2hhbmRsZVNjcm9sbExlZnR9IGNvbnRlbnQ9eyc8J30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NTdWdnZXN0TGlzdH0gcmVmPXtzY3JvbGxSZWZ9PlxuICAgICAgICB7c3VnZ2VzdGlvbkxpc3QubWFwKChlKSA9PiAoXG4gICAgICAgICAgPFN1Z2dlc3Rpb25JdGVtIG5hbWU9e2UubmFtZX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCdG4gb25DbGljaz17aGFuZGxlU2Nyb2xsUmlnaHR9IGNvbnRlbnQ9eyc+J30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxudHlwZSBCdG5Qcm9wcyA9IHtcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgY29udGVudDogc3RyaW5nO1xufTtcbmZ1bmN0aW9uIEJ0bih7IG9uQ2xpY2ssIGNvbnRlbnQgfTogQnRuUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBib3JkZXItbm9uZSBjdXJzb3ItcG9pbnRlciB0ZXh0LTJ4bFwiXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIHtjb250ZW50fVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBTdWdnZXN0aW9uSXRlbSh7IG5hbWUgfTogeyBuYW1lOiBzdHJpbmcgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHAtMlxuICAgIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYWxsIFxuICAgIGhvdmVyOmJnLWdyYXktNTAwIGhvdmVyOnJvdW5kZWQtbWRcIlxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gd2hpdGVzcGFjZS1ub3dyYXBcIj57bmFtZX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJTdWdnZXN0aW9uQmFyIiwic3VnZ2VzdGlvbkxpc3QiLCJuYW1lIiwic2Nyb2xsUmVmIiwiaGFuZGxlU2Nyb2xsTGVmdCIsImN1cnJlbnQiLCJzY3JvbGxCeSIsImxlZnQiLCJiZWhhdmlvciIsImhhbmRsZVNjcm9sbFJpZ2h0IiwiY3NzU3VnZ2VzdExpc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJCdG4iLCJvbkNsaWNrIiwiY29udGVudCIsInJlZiIsIm1hcCIsImUiLCJTdWdnZXN0aW9uSXRlbSIsImJ1dHRvbiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/container/SuggestionBar.tsx\n"));

/***/ })

});
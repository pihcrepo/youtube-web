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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SuggestionBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction SuggestionBar() {\n    _s();\n    const suggestionList = [\n        {\n            id: 1,\n            name: \"All\"\n        },\n        {\n            id: 2,\n            name: \"Music\"\n        },\n        {\n            id: 3,\n            name: \"Rain\"\n        },\n        {\n            id: 4,\n            name: \"Vocabulary\"\n        },\n        {\n            id: 5,\n            name: \"Podcasts\"\n        },\n        {\n            id: 6,\n            name: \"Gaming\"\n        },\n        {\n            id: 7,\n            name: \"Game shows\"\n        },\n        {\n            id: 8,\n            name: \"Funny\"\n        }\n    ];\n    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleScrollLeft = ()=>{\n        var _scrollRef_current;\n        (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollBy({\n            left: -200,\n            behavior: \"smooth\"\n        });\n    };\n    const handleScrollRight = ()=>{\n        var _scrollRef_current;\n        (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollBy({\n            left: 200,\n            behavior: \"smooth\"\n        });\n    };\n    const cssSuggestList = \"flex gap-6 h-full w-5/6 items-center overflow-hidden border-black\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-around overflow-hidden w-full h-14 border-b\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Btn, {\n                onClick: handleScrollLeft,\n                content: \"<\"\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cssSuggestList,\n                ref: scrollRef,\n                children: suggestionList.map((e)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SuggestionItem, {\n                        name: e.name\n                    }, void 0, false, {\n                        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Btn, {\n                onClick: handleScrollRight,\n                content: \">\"\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(SuggestionBar, \"rUl6RJdP9XfufN21BrtKqIOri0o=\");\n_c = SuggestionBar;\nfunction Btn(param) {\n    let { onClick, content } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"bg-transparent border-none cursor-pointer text-2xl\",\n        onClick: onClick,\n        children: content\n    }, void 0, false, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Btn;\nfunction SuggestionItem(param) {\n    let { name } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center p-2 cursor-pointer transition-all  hover:bg-gray-500 hover:rounded-md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"text-sm whitespace-nowrap\",\n            children: name\n        }, void 0, false, {\n            fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n            lineNumber: 95,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, this);\n}\n_c2 = SuggestionItem;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"SuggestionBar\");\n$RefreshReg$(_c1, \"Btn\");\n$RefreshReg$(_c2, \"SuggestionItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29udGFpbmVyL1N1Z2dlc3Rpb25CYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzQztBQUN2QixTQUFTRTs7SUFDdEIsTUFBTUMsaUJBQWlCO1FBQ3JCO1lBQ0VDLElBQUk7WUFDSkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsSUFBSTtZQUNKQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxJQUFJO1lBQ0pDLE1BQU07UUFDUjtRQUNBO1lBQ0VELElBQUk7WUFDSkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsSUFBSTtZQUNKQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxJQUFJO1lBQ0pDLE1BQU07UUFDUjtRQUNBO1lBQ0VELElBQUk7WUFDSkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsSUFBSTtZQUNKQyxNQUFNO1FBQ1I7S0FDRDtJQUVELE1BQU1DLFlBQVlMLDZDQUFNQSxDQUF3QjtJQUVoRCxNQUFNTSxtQkFBbUI7WUFDdkJEO1NBQUFBLHFCQUFBQSxVQUFVRSxPQUFPLGNBQWpCRix5Q0FBQUEsbUJBQW1CRyxRQUFRLENBQUM7WUFDMUJDLE1BQU0sQ0FBQztZQUNQQyxVQUFVO1FBQ1o7SUFDRjtJQUVBLE1BQU1DLG9CQUFvQjtZQUN4Qk47U0FBQUEscUJBQUFBLFVBQVVFLE9BQU8sY0FBakJGLHlDQUFBQSxtQkFBbUJHLFFBQVEsQ0FBQztZQUMxQkMsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7SUFDRjtJQUVBLE1BQU1FLGlCQUNKO0lBRUYscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBSUMsU0FBU1Y7Z0JBQWtCVyxTQUFTOzs7Ozs7MEJBQ3pDLDhEQUFDSjtnQkFBSUMsV0FBV0Y7Z0JBQWdCTSxLQUFLYjswQkFDbENILGVBQWVpQixHQUFHLENBQUMsQ0FBQ0Msa0JBQ25CLDhEQUFDQzt3QkFBZWpCLE1BQU1nQixFQUFFaEIsSUFBSTs7Ozs7Ozs7Ozs7MEJBR2hDLDhEQUFDVztnQkFBSUMsU0FBU0w7Z0JBQW1CTSxTQUFTOzs7Ozs7Ozs7Ozs7QUFHaEQ7R0FsRXdCaEI7S0FBQUE7QUF3RXhCLFNBQVNjLElBQUksS0FBOEI7UUFBOUIsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQVksR0FBOUI7SUFDWCxxQkFDRSw4REFBQ0s7UUFDQ1IsV0FBVTtRQUNWRSxTQUFTQTtrQkFFUkM7Ozs7OztBQUdQO01BVFNGO0FBY1QsU0FBU00sZUFBZSxLQUFjO1FBQWQsRUFBRWpCLElBQUksRUFBUSxHQUFkO0lBQ3RCLHFCQUNFLDhEQUFDUztRQUNDQyxXQUFVO2tCQUlWLDRFQUFDUztZQUFLVCxXQUFVO3NCQUE2QlY7Ozs7Ozs7Ozs7O0FBR25EO01BVlNpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbnRhaW5lci9TdWdnZXN0aW9uQmFyLnRzeD8wOWRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWdnZXN0aW9uQmFyKCkge1xuICBjb25zdCBzdWdnZXN0aW9uTGlzdCA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6ICdBbGwnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBuYW1lOiAnTXVzaWMnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBuYW1lOiAnUmFpbicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIG5hbWU6ICdWb2NhYnVsYXJ5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA1LFxuICAgICAgbmFtZTogJ1BvZGNhc3RzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA2LFxuICAgICAgbmFtZTogJ0dhbWluZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNyxcbiAgICAgIG5hbWU6ICdHYW1lIHNob3dzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA4LFxuICAgICAgbmFtZTogJ0Z1bm55JyxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IHNjcm9sbFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbExlZnQgPSAoKSA9PiB7XG4gICAgc2Nyb2xsUmVmLmN1cnJlbnQ/LnNjcm9sbEJ5KHtcbiAgICAgIGxlZnQ6IC0yMDAsIFxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbFJpZ2h0ID0gKCkgPT4ge1xuICAgIHNjcm9sbFJlZi5jdXJyZW50Py5zY3JvbGxCeSh7XG4gICAgICBsZWZ0OiAyMDAsIFxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNzc1N1Z2dlc3RMaXN0ID1cbiAgICAnZmxleCBnYXAtNiBoLWZ1bGwgdy01LzYgaXRlbXMtY2VudGVyIG92ZXJmbG93LWhpZGRlbiBib3JkZXItYmxhY2snO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYXJvdW5kIG92ZXJmbG93LWhpZGRlbiB3LWZ1bGwgaC0xNCBib3JkZXItYlwiPlxuICAgICAgPEJ0biBvbkNsaWNrPXtoYW5kbGVTY3JvbGxMZWZ0fSBjb250ZW50PXsnPCd9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzU3VnZ2VzdExpc3R9IHJlZj17c2Nyb2xsUmVmfT5cbiAgICAgICAge3N1Z2dlc3Rpb25MaXN0Lm1hcCgoZSkgPT4gKFxuICAgICAgICAgIDxTdWdnZXN0aW9uSXRlbSBuYW1lPXtlLm5hbWV9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8QnRuIG9uQ2xpY2s9e2hhbmRsZVNjcm9sbFJpZ2h0fSBjb250ZW50PXsnPid9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbnR5cGUgQnRuUHJvcHMgPSB7XG4gIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn07XG5mdW5jdGlvbiBCdG4oeyBvbkNsaWNrLCBjb250ZW50IH06IEJ0blByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgYm9yZGVyLW5vbmUgY3Vyc29yLXBvaW50ZXIgdGV4dC0yeGxcIlxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICB7Y29udGVudH1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxudHlwZSBTdWdnZXN0aW9uSXRlbVByb3BzID0ge1xuXG59XG5mdW5jdGlvbiBTdWdnZXN0aW9uSXRlbSh7IG5hbWUgfTogeyAgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHAtMlxuICAgIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYWxsIFxuICAgIGhvdmVyOmJnLWdyYXktNTAwIGhvdmVyOnJvdW5kZWQtbWRcIlxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gd2hpdGVzcGFjZS1ub3dyYXBcIj57bmFtZX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJTdWdnZXN0aW9uQmFyIiwic3VnZ2VzdGlvbkxpc3QiLCJpZCIsIm5hbWUiLCJzY3JvbGxSZWYiLCJoYW5kbGVTY3JvbGxMZWZ0IiwiY3VycmVudCIsInNjcm9sbEJ5IiwibGVmdCIsImJlaGF2aW9yIiwiaGFuZGxlU2Nyb2xsUmlnaHQiLCJjc3NTdWdnZXN0TGlzdCIsImRpdiIsImNsYXNzTmFtZSIsIkJ0biIsIm9uQ2xpY2siLCJjb250ZW50IiwicmVmIiwibWFwIiwiZSIsIlN1Z2dlc3Rpb25JdGVtIiwiYnV0dG9uIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/container/SuggestionBar.tsx\n"));

/***/ })

});
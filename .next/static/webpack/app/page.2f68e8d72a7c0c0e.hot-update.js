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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SuggestionBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction SuggestionBar() {\n    _s();\n    const suggestionList = [\n        {\n            id: 1,\n            name: \"All\"\n        },\n        {\n            id: 1,\n            name: \"Music\"\n        },\n        {\n            name: \"Rain\"\n        },\n        {\n            name: \"Vocabulary\"\n        },\n        {\n            name: \"Podcasts\"\n        },\n        {\n            name: \"Gaming\"\n        },\n        {\n            name: \"Game shows\"\n        },\n        {\n            name: \"Funny\"\n        }\n    ];\n    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleScrollLeft = ()=>{\n        var _scrollRef_current;\n        (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollBy({\n            left: -200,\n            behavior: \"smooth\"\n        });\n    };\n    const handleScrollRight = ()=>{\n        var _scrollRef_current;\n        (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollBy({\n            left: 200,\n            behavior: \"smooth\"\n        });\n    };\n    const cssSuggestList = \"flex gap-6 h-full w-5/6 items-center overflow-hidden border-black\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-around overflow-hidden w-full h-14 border-b\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Btn, {\n                onClick: handleScrollLeft,\n                content: \"<\"\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cssSuggestList,\n                ref: scrollRef,\n                children: suggestionList.map((e)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SuggestionItem, {\n                        name: e.name\n                    }, void 0, false, {\n                        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Btn, {\n                onClick: handleScrollRight,\n                content: \">\"\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(SuggestionBar, \"rUl6RJdP9XfufN21BrtKqIOri0o=\");\n_c = SuggestionBar;\nfunction Btn(param) {\n    let { onClick, content } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"bg-transparent border-none cursor-pointer text-2xl\",\n        onClick: onClick,\n        children: content\n    }, void 0, false, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Btn;\nfunction SuggestionItem(param) {\n    let { name } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center p-2 cursor-pointer transition-all  hover:bg-gray-500 hover:rounded-md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"text-sm whitespace-nowrap\",\n            children: name\n        }, void 0, false, {\n            fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n            lineNumber: 86,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_c2 = SuggestionItem;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"SuggestionBar\");\n$RefreshReg$(_c1, \"Btn\");\n$RefreshReg$(_c2, \"SuggestionItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29udGFpbmVyL1N1Z2dlc3Rpb25CYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzQztBQUN2QixTQUFTRTs7SUFDdEIsTUFBTUMsaUJBQWlCO1FBQ3JCO1lBQ0VDLElBQUk7WUFDSkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsSUFBSTtZQUNKQyxNQUFNO1FBQ1I7UUFDQTtZQUNFQSxNQUFNO1FBQ1I7UUFDQTtZQUNFQSxNQUFNO1FBQ1I7UUFDQTtZQUNFQSxNQUFNO1FBQ1I7UUFDQTtZQUNFQSxNQUFNO1FBQ1I7UUFDQTtZQUNFQSxNQUFNO1FBQ1I7UUFDQTtZQUNFQSxNQUFNO1FBQ1I7S0FDRDtJQUVELE1BQU1DLFlBQVlMLDZDQUFNQSxDQUF3QjtJQUVoRCxNQUFNTSxtQkFBbUI7WUFDdkJEO1NBQUFBLHFCQUFBQSxVQUFVRSxPQUFPLGNBQWpCRix5Q0FBQUEsbUJBQW1CRyxRQUFRLENBQUM7WUFDMUJDLE1BQU0sQ0FBQztZQUNQQyxVQUFVO1FBQ1o7SUFDRjtJQUVBLE1BQU1DLG9CQUFvQjtZQUN4Qk47U0FBQUEscUJBQUFBLFVBQVVFLE9BQU8sY0FBakJGLHlDQUFBQSxtQkFBbUJHLFFBQVEsQ0FBQztZQUMxQkMsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7SUFDRjtJQUVBLE1BQU1FLGlCQUNKO0lBRUYscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBSUMsU0FBU1Y7Z0JBQWtCVyxTQUFTOzs7Ozs7MEJBQ3pDLDhEQUFDSjtnQkFBSUMsV0FBV0Y7Z0JBQWdCTSxLQUFLYjswQkFDbENILGVBQWVpQixHQUFHLENBQUMsQ0FBQ0Msa0JBQ25CLDhEQUFDQzt3QkFBZWpCLE1BQU1nQixFQUFFaEIsSUFBSTs7Ozs7Ozs7Ozs7MEJBR2hDLDhEQUFDVztnQkFBSUMsU0FBU0w7Z0JBQW1CTSxTQUFTOzs7Ozs7Ozs7Ozs7QUFHaEQ7R0E1RHdCaEI7S0FBQUE7QUFrRXhCLFNBQVNjLElBQUksS0FBOEI7UUFBOUIsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQVksR0FBOUI7SUFDWCxxQkFDRSw4REFBQ0s7UUFDQ1IsV0FBVTtRQUNWRSxTQUFTQTtrQkFFUkM7Ozs7OztBQUdQO01BVFNGO0FBV1QsU0FBU00sZUFBZSxLQUEwQjtRQUExQixFQUFFakIsSUFBSSxFQUFvQixHQUExQjtJQUN0QixxQkFDRSw4REFBQ1M7UUFDQ0MsV0FBVTtrQkFJViw0RUFBQ1M7WUFBS1QsV0FBVTtzQkFBNkJWOzs7Ozs7Ozs7OztBQUduRDtNQVZTaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWluZXIvU3VnZ2VzdGlvbkJhci50c3g/MDlkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VnZ2VzdGlvbkJhcigpIHtcbiAgY29uc3Qgc3VnZ2VzdGlvbkxpc3QgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiAnQWxsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ011c2ljJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdSYWluJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdWb2NhYnVsYXJ5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdQb2RjYXN0cycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnR2FtaW5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdHYW1lIHNob3dzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdGdW5ueScsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGxMZWZ0ID0gKCkgPT4ge1xuICAgIHNjcm9sbFJlZi5jdXJyZW50Py5zY3JvbGxCeSh7XG4gICAgICBsZWZ0OiAtMjAwLCBcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGxSaWdodCA9ICgpID0+IHtcbiAgICBzY3JvbGxSZWYuY3VycmVudD8uc2Nyb2xsQnkoe1xuICAgICAgbGVmdDogMjAwLCBcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjc3NTdWdnZXN0TGlzdCA9XG4gICAgJ2ZsZXggZ2FwLTYgaC1mdWxsIHctNS82IGl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWJsYWNrJztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWFyb3VuZCBvdmVyZmxvdy1oaWRkZW4gdy1mdWxsIGgtMTQgYm9yZGVyLWJcIj5cbiAgICAgIDxCdG4gb25DbGljaz17aGFuZGxlU2Nyb2xsTGVmdH0gY29udGVudD17JzwnfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc1N1Z2dlc3RMaXN0fSByZWY9e3Njcm9sbFJlZn0+XG4gICAgICAgIHtzdWdnZXN0aW9uTGlzdC5tYXAoKGUpID0+IChcbiAgICAgICAgICA8U3VnZ2VzdGlvbkl0ZW0gbmFtZT17ZS5uYW1lfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPEJ0biBvbkNsaWNrPXtoYW5kbGVTY3JvbGxSaWdodH0gY29udGVudD17Jz4nfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG50eXBlIEJ0blByb3BzID0ge1xuICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICBjb250ZW50OiBzdHJpbmc7XG59O1xuZnVuY3Rpb24gQnRuKHsgb25DbGljaywgY29udGVudCB9OiBCdG5Qcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IGJvcmRlci1ub25lIGN1cnNvci1wb2ludGVyIHRleHQtMnhsXCJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAge2NvbnRlbnR9XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFN1Z2dlc3Rpb25JdGVtKHsgbmFtZSB9OiB7IG5hbWU6IHN0cmluZyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0yXG4gICAgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgXG4gICAgaG92ZXI6YmctZ3JheS01MDAgaG92ZXI6cm91bmRlZC1tZFwiXG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB3aGl0ZXNwYWNlLW5vd3JhcFwiPntuYW1lfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIlN1Z2dlc3Rpb25CYXIiLCJzdWdnZXN0aW9uTGlzdCIsImlkIiwibmFtZSIsInNjcm9sbFJlZiIsImhhbmRsZVNjcm9sbExlZnQiLCJjdXJyZW50Iiwic2Nyb2xsQnkiLCJsZWZ0IiwiYmVoYXZpb3IiLCJoYW5kbGVTY3JvbGxSaWdodCIsImNzc1N1Z2dlc3RMaXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiQnRuIiwib25DbGljayIsImNvbnRlbnQiLCJyZWYiLCJtYXAiLCJlIiwiU3VnZ2VzdGlvbkl0ZW0iLCJidXR0b24iLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/container/SuggestionBar.tsx\n"));

/***/ })

});
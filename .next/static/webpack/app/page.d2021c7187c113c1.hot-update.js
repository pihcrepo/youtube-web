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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SuggestionBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction SuggestionBar() {\n    _s();\n    const suggestionList = [\n        {\n            id: 1,\n            name: \"All\"\n        },\n        {\n            id: 2,\n            name: \"Music\"\n        },\n        {\n            id: 3,\n            name: \"Rain\"\n        },\n        {\n            id: 4,\n            name: \"Vocabulary\"\n        },\n        {\n            id: 5,\n            name: \"Podcasts\"\n        },\n        {\n            id: 6,\n            name: \"Gaming\"\n        },\n        {\n            id: 7,\n            name: \"Game shows\"\n        },\n        {\n            id: 8,\n            name: \"Funny\"\n        }\n    ];\n    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleScrollLeft = ()=>{\n        var _scrollRef_current;\n        (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollBy({\n            left: -200,\n            behavior: \"smooth\"\n        });\n    };\n    const handleScrollRight = ()=>{\n        var _scrollRef_current;\n        (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollBy({\n            left: 200,\n            behavior: \"smooth\"\n        });\n    };\n    const cssSuggestList = \"flex gap-6 h-full w-5/6 items-center overflow-hidden border-black\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-around overflow-hidden w-full h-14 border-b\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Btn, {\n                onClick: handleScrollLeft,\n                content: \"<\"\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cssSuggestList,\n                ref: scrollRef,\n                children: suggestionList.map((e)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SuggestionItem, {\n                        name: e.name\n                    }, e.id, false, {\n                        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Btn, {\n                onClick: handleScrollRight,\n                content: \">\"\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(SuggestionBar, \"rUl6RJdP9XfufN21BrtKqIOri0o=\");\n_c = SuggestionBar;\nfunction Btn(param) {\n    let { onClick, content } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"bg-transparent border-none cursor-pointer text-2xl\",\n        onClick: onClick,\n        children: content\n    }, void 0, false, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Btn;\nfunction SuggestionItem(param) {\n    let { name, key } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center p-2 cursor-pointer transition-all  hover:bg-gray-500 hover:rounded-md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"text-sm whitespace-nowrap\",\n            children: name\n        }, void 0, false, {\n            fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n            lineNumber: 97,\n            columnNumber: 7\n        }, this)\n    }, key, false, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/SuggestionBar.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_c2 = SuggestionItem;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"SuggestionBar\");\n$RefreshReg$(_c1, \"Btn\");\n$RefreshReg$(_c2, \"SuggestionItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29udGFpbmVyL1N1Z2dlc3Rpb25CYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzQztBQUN2QixTQUFTRTs7SUFDdEIsTUFBTUMsaUJBQWlCO1FBQ3JCO1lBQ0VDLElBQUk7WUFDSkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsSUFBSTtZQUNKQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxJQUFJO1lBQ0pDLE1BQU07UUFDUjtRQUNBO1lBQ0VELElBQUk7WUFDSkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsSUFBSTtZQUNKQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxJQUFJO1lBQ0pDLE1BQU07UUFDUjtRQUNBO1lBQ0VELElBQUk7WUFDSkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsSUFBSTtZQUNKQyxNQUFNO1FBQ1I7S0FDRDtJQUVELE1BQU1DLFlBQVlMLDZDQUFNQSxDQUF3QjtJQUVoRCxNQUFNTSxtQkFBbUI7WUFDdkJEO1NBQUFBLHFCQUFBQSxVQUFVRSxPQUFPLGNBQWpCRix5Q0FBQUEsbUJBQW1CRyxRQUFRLENBQUM7WUFDMUJDLE1BQU0sQ0FBQztZQUNQQyxVQUFVO1FBQ1o7SUFDRjtJQUVBLE1BQU1DLG9CQUFvQjtZQUN4Qk47U0FBQUEscUJBQUFBLFVBQVVFLE9BQU8sY0FBakJGLHlDQUFBQSxtQkFBbUJHLFFBQVEsQ0FBQztZQUMxQkMsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7SUFDRjtJQUVBLE1BQU1FLGlCQUNKO0lBRUYscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBSUMsU0FBU1Y7Z0JBQWtCVyxTQUFTOzs7Ozs7MEJBQ3pDLDhEQUFDSjtnQkFBSUMsV0FBV0Y7Z0JBQWdCTSxLQUFLYjswQkFDbENILGVBQWVpQixHQUFHLENBQUMsQ0FBQ0Msa0JBQ25CLDhEQUFDQzt3QkFBZWpCLE1BQU1nQixFQUFFaEIsSUFBSTt1QkFBT2dCLEVBQUVqQixFQUFFOzs7Ozs7Ozs7OzBCQUczQyw4REFBQ1k7Z0JBQUlDLFNBQVNMO2dCQUFtQk0sU0FBUzs7Ozs7Ozs7Ozs7O0FBR2hEO0dBbEV3QmhCO0tBQUFBO0FBd0V4QixTQUFTYyxJQUFJLEtBQThCO1FBQTlCLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFZLEdBQTlCO0lBQ1gscUJBQ0UsOERBQUNLO1FBQ0NSLFdBQVU7UUFDVkUsU0FBU0E7a0JBRVJDOzs7Ozs7QUFHUDtNQVRTRjtBQWVULFNBQVNNLGVBQWUsS0FBa0M7UUFBbEMsRUFBRWpCLElBQUksRUFBRW1CLEdBQUcsRUFBdUIsR0FBbEM7SUFDdEIscUJBQ0UsOERBQUNWO1FBQ0NDLFdBQVU7a0JBS1YsNEVBQUNVO1lBQUtWLFdBQVU7c0JBQTZCVjs7Ozs7O09BRnhDbUI7Ozs7O0FBS1g7TUFYU0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWluZXIvU3VnZ2VzdGlvbkJhci50c3g/MDlkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VnZ2VzdGlvbkJhcigpIHtcbiAgY29uc3Qgc3VnZ2VzdGlvbkxpc3QgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiAnQWxsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgbmFtZTogJ011c2ljJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgbmFtZTogJ1JhaW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDQsXG4gICAgICBuYW1lOiAnVm9jYWJ1bGFyeScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNSxcbiAgICAgIG5hbWU6ICdQb2RjYXN0cycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNixcbiAgICAgIG5hbWU6ICdHYW1pbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDcsXG4gICAgICBuYW1lOiAnR2FtZSBzaG93cycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogOCxcbiAgICAgIG5hbWU6ICdGdW5ueScsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGxMZWZ0ID0gKCkgPT4ge1xuICAgIHNjcm9sbFJlZi5jdXJyZW50Py5zY3JvbGxCeSh7XG4gICAgICBsZWZ0OiAtMjAwLFxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbFJpZ2h0ID0gKCkgPT4ge1xuICAgIHNjcm9sbFJlZi5jdXJyZW50Py5zY3JvbGxCeSh7XG4gICAgICBsZWZ0OiAyMDAsXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY3NzU3VnZ2VzdExpc3QgPVxuICAgICdmbGV4IGdhcC02IGgtZnVsbCB3LTUvNiBpdGVtcy1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlci1ibGFjayc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmQgb3ZlcmZsb3ctaGlkZGVuIHctZnVsbCBoLTE0IGJvcmRlci1iXCI+XG4gICAgICA8QnRuIG9uQ2xpY2s9e2hhbmRsZVNjcm9sbExlZnR9IGNvbnRlbnQ9eyc8J30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NTdWdnZXN0TGlzdH0gcmVmPXtzY3JvbGxSZWZ9PlxuICAgICAgICB7c3VnZ2VzdGlvbkxpc3QubWFwKChlKSA9PiAoXG4gICAgICAgICAgPFN1Z2dlc3Rpb25JdGVtIG5hbWU9e2UubmFtZX0ga2V5PXtlLmlkfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPEJ0biBvbkNsaWNrPXtoYW5kbGVTY3JvbGxSaWdodH0gY29udGVudD17Jz4nfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG50eXBlIEJ0blByb3BzID0ge1xuICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICBjb250ZW50OiBzdHJpbmc7XG59O1xuZnVuY3Rpb24gQnRuKHsgb25DbGljaywgY29udGVudCB9OiBCdG5Qcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IGJvcmRlci1ub25lIGN1cnNvci1wb2ludGVyIHRleHQtMnhsXCJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAge2NvbnRlbnR9XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbnR5cGUgU3VnZ2VzdGlvbkl0ZW1Qcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBrZXk6IG51bWJlcjtcbn07XG5mdW5jdGlvbiBTdWdnZXN0aW9uSXRlbSh7IG5hbWUsIGtleSB9OiBTdWdnZXN0aW9uSXRlbVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0yXG4gICAgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgXG4gICAgaG92ZXI6YmctZ3JheS01MDAgaG92ZXI6cm91bmRlZC1tZFwiXG4gICAgICBrZXk9e2tleX1cbiAgICA+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwXCI+e25hbWV9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiU3VnZ2VzdGlvbkJhciIsInN1Z2dlc3Rpb25MaXN0IiwiaWQiLCJuYW1lIiwic2Nyb2xsUmVmIiwiaGFuZGxlU2Nyb2xsTGVmdCIsImN1cnJlbnQiLCJzY3JvbGxCeSIsImxlZnQiLCJiZWhhdmlvciIsImhhbmRsZVNjcm9sbFJpZ2h0IiwiY3NzU3VnZ2VzdExpc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJCdG4iLCJvbkNsaWNrIiwiY29udGVudCIsInJlZiIsIm1hcCIsImUiLCJTdWdnZXN0aW9uSXRlbSIsImJ1dHRvbiIsImtleSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/container/SuggestionBar.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/container/index.tsx":
/*!****************************************!*\
  !*** ./components/container/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Container; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SuggestionBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuggestionBar */ \"(app-pages-browser)/./components/container/SuggestionBar.tsx\");\n/* harmony import */ var _img_dataimage_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/img/dataimage.jpg */ \"(app-pages-browser)/./img/dataimage.jpg\");\n/* harmony import */ var _img_datalogo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/img/datalogo.jpg */ \"(app-pages-browser)/./img/datalogo.jpg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Container() {\n    const data = [\n        {\n            id: 1,\n            image: _img_dataimage_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            title: \"let's travel around the world\",\n            channelName: \"Travel\",\n            channelLogo: _img_datalogo_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            views: \"782K\",\n            createdAt: \"1 month ago\",\n            time: \"2:27\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden w-full h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SuggestionBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-auto h-full pt-6\",\n                children: data.map((e)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[300px] h-[300px] border\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        src: e.image,\n                                        alt: \"\",\n                                        className: \"rounded-xl\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute right-0 bottom-0 px-1 mr-1 mb-1 rounded-md text-xs bg-black\",\n                                        children: e.time\n                                    }, void 0, false, {\n                                        fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mt-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        src: e.channelLogo,\n                                        alt: \"\",\n                                        className: \"w-9 h-9 rounded-[50%] self-center\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ml-3\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-light\",\n                                                children: e.title\n                                            }, void 0, false, {\n                                                fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-thin text-sm\",\n                                                children: e.channelName\n                                            }, void 0, false, {\n                                                fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"text-sm\",\n                                                        children: e.views\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                                                        lineNumber: 45,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"text-sm\",\n                                                        children: e.createdAt\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                                                        lineNumber: 46,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, e.id, true, {\n                        fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anhnt5/work/project/youtube/components/container/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_c = Container;\nvar _c;\n$RefreshReg$(_c, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29udGFpbmVyL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRWtCO0FBRUE7QUFDRjtBQUNYO0FBRWhCLFNBQVNLO0lBQ3RCLE1BQU1DLE9BQU87UUFDWDtZQUNFQyxJQUFJO1lBQ0pDLE9BQU9OLDBEQUFTQTtZQUNoQk8sT0FBTztZQUNQQyxhQUFhO1lBQ2JDLGFBQWFSLHlEQUFRQTtZQUNyQlMsT0FBTztZQUNQQyxXQUFXO1lBQ1hDLE1BQU07UUFDUjtLQUNEO0lBRUQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDZixzREFBYUE7Ozs7OzBCQUNkLDhEQUFDYztnQkFBSUMsV0FBVTswQkFDWlYsS0FBS1csR0FBRyxDQUFDLENBQUNDLGtCQUNULDhEQUFDSDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1osbURBQUtBO3dDQUFDZSxLQUFLRCxFQUFFVixLQUFLO3dDQUFFWSxLQUFJO3dDQUFHSixXQUFVOzs7Ozs7a0RBQ3RDLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFDWkUsRUFBRUosSUFBSTs7Ozs7Ozs7Ozs7OzBDQUdYLDhEQUFDQztnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNaLG1EQUFLQTt3Q0FDSmUsS0FBS0QsRUFBRVAsV0FBVzt3Q0FDbEJTLEtBQUk7d0NBQ0pKLFdBQVU7Ozs7OztrREFFWiw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDRDtnREFBSUMsV0FBVTswREFBY0UsRUFBRVQsS0FBSzs7Ozs7OzBEQUNwQyw4REFBQ007Z0RBQUlDLFdBQVU7MERBQXFCRSxFQUFFUixXQUFXOzs7Ozs7MERBQ2pELDhEQUFDSztnREFBSUMsV0FBVTs7a0VBQ2IsOERBQUNEO3dEQUFJQyxXQUFVO2tFQUFXRSxFQUFFTixLQUFLOzs7Ozs7a0VBQ2pDLDhEQUFDRzt3REFBSUMsV0FBVTtrRUFBV0UsRUFBRUwsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFsQklLLEVBQUVYLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQi9EO0tBOUN3QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWluZXIvaW5kZXgudHN4Pzg4NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFN1Z2dlc3Rpb25CYXIgZnJvbSAnLi9TdWdnZXN0aW9uQmFyJztcblxuaW1wb3J0IGRhdGFpbWFnZSBmcm9tICdAL2ltZy9kYXRhaW1hZ2UuanBnJztcbmltcG9ydCBkYXRhbG9nbyBmcm9tICdAL2ltZy9kYXRhbG9nby5qcGcnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIoKSB7XG4gIGNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBpbWFnZTogZGF0YWltYWdlLFxuICAgICAgdGl0bGU6IFwibGV0J3MgdHJhdmVsIGFyb3VuZCB0aGUgd29ybGRcIixcbiAgICAgIGNoYW5uZWxOYW1lOiAnVHJhdmVsJyxcbiAgICAgIGNoYW5uZWxMb2dvOiBkYXRhbG9nbyxcbiAgICAgIHZpZXdzOiAnNzgySycsXG4gICAgICBjcmVhdGVkQXQ6ICcxIG1vbnRoIGFnbycsXG4gICAgICB0aW1lOiAnMjoyNycsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHctZnVsbCBoLWZ1bGxcIj5cbiAgICAgIDxTdWdnZXN0aW9uQmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG8gaC1mdWxsIHB0LTZcIj5cbiAgICAgICAge2RhdGEubWFwKChlKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVszMDBweF0gaC1bMzAwcHhdIGJvcmRlclwiIGtleT17ZS5pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2UuaW1hZ2V9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInJvdW5kZWQteGxcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgYm90dG9tLTAgcHgtMSBtci0xIG1iLTEgcm91bmRlZC1tZCB0ZXh0LXhzIGJnLWJsYWNrXCI+XG4gICAgICAgICAgICAgICAge2UudGltZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC0zXCI+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17ZS5jaGFubmVsTG9nb31cbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOSBoLTkgcm91bmRlZC1bNTAlXSBzZWxmLWNlbnRlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1saWdodFwiPntlLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC10aGluIHRleHQtc21cIj57ZS5jaGFubmVsTmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPntlLnZpZXdzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+e2UuY3JlYXRlZEF0fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3VnZ2VzdGlvbkJhciIsImRhdGFpbWFnZSIsImRhdGFsb2dvIiwiSW1hZ2UiLCJDb250YWluZXIiLCJkYXRhIiwiaWQiLCJpbWFnZSIsInRpdGxlIiwiY2hhbm5lbE5hbWUiLCJjaGFubmVsTG9nbyIsInZpZXdzIiwiY3JlYXRlZEF0IiwidGltZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImUiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/container/index.tsx\n"));

/***/ })

});
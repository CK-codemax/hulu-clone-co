"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"3def76b7d3c5\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MmEyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjNkZWY3NmI3ZDNjNVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/DarkModeSwitch.jsx":
/*!*******************************************!*\
  !*** ./src/components/DarkModeSwitch.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DarkModeSwitch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_MoonIcon_SunIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MoonIcon,SunIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/SunIcon.js\");\n/* harmony import */ var _barrel_optimize_names_MoonIcon_SunIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=MoonIcon,SunIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/MoonIcon.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ \"(app-pages-browser)/./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction DarkModeSwitch() {\n    _s();\n    const { systemTheme, theme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>setMounted(true), []);\n    const currentTheme = theme === \"system\" ? systemTheme : theme;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: mounted && (currentTheme === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MoonIcon_SunIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: \"h-5 sm:h-7 cursor-pointer text-orange-400 hover:text-[#1ce783] -translate-x-6\",\n            onClick: ()=>setTheme(\"light\")\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\my-personal-builds\\\\hulu-clone-co\\\\src\\\\components\\\\DarkModeSwitch.jsx\",\n            lineNumber: 16,\n            columnNumber: 11\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MoonIcon_SunIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            className: \"h-5 sm:h-7 cursor-pointer text-black hover:text-[#1ce783]\",\n            onClick: ()=>setTheme(\"dark\")\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\my-personal-builds\\\\hulu-clone-co\\\\src\\\\components\\\\DarkModeSwitch.jsx\",\n            lineNumber: 21,\n            columnNumber: 11\n        }, this))\n    }, void 0, false);\n}\n_s(DarkModeSwitch, \"cOKLkRcZNbCdMKEM8Lp+dLN5ZYU=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme\n    ];\n});\n_c = DarkModeSwitch;\nvar _c;\n$RefreshReg$(_c, \"DarkModeSwitch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RhcmtNb2RlU3dpdGNoLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDOEQ7QUFDdkI7QUFDSztBQUM3QixTQUFTSzs7SUFDdEIsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdOLHFEQUFRQTtJQUNqRCxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDLElBQU1PLFdBQVcsT0FBTyxFQUFFO0lBRXBDLE1BQU1DLGVBQWVKLFVBQVUsV0FBV0QsY0FBY0M7SUFDeEQscUJBQ0U7a0JBQ0dFLFdBQ0VFLENBQUFBLGlCQUFpQix1QkFDaEIsOERBQUNYLHdHQUFPQTtZQUNOWSxXQUFVO1lBQ1ZDLFNBQVMsSUFBTUwsU0FBUzs7Ozs7aUNBRzFCLDhEQUFDUCx3R0FBUUE7WUFDUFcsV0FBVTtZQUNWQyxTQUFTLElBQU1MLFNBQVM7Ozs7O2dCQUU1Qjs7QUFHUjtHQXZCd0JIOztRQUNtQkgsaURBQVFBOzs7S0FEM0JHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RhcmtNb2RlU3dpdGNoLmpzeD83YzRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBTdW5JY29uLCBNb29uSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCI7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFya01vZGVTd2l0Y2goKSB7XHJcbiAgY29uc3QgeyBzeXN0ZW1UaGVtZSwgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHNldE1vdW50ZWQodHJ1ZSksIFtdKTtcclxuXHJcbiAgY29uc3QgY3VycmVudFRoZW1lID0gdGhlbWUgPT09IFwic3lzdGVtXCIgPyBzeXN0ZW1UaGVtZSA6IHRoZW1lO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bW91bnRlZCAmJlxyXG4gICAgICAgIChjdXJyZW50VGhlbWUgPT09IFwiZGFya1wiID8gKFxyXG4gICAgICAgICAgPFN1bkljb25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHNtOmgtNyBjdXJzb3ItcG9pbnRlciB0ZXh0LW9yYW5nZS00MDAgaG92ZXI6dGV4dC1bIzFjZTc4M10gLXRyYW5zbGF0ZS14LTZcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZShcImxpZ2h0XCIpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPE1vb25JY29uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSBzbTpoLTcgY3Vyc29yLXBvaW50ZXIgdGV4dC1ibGFjayBob3Zlcjp0ZXh0LVsjMWNlNzgzXVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKFwiZGFya1wiKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlN1bkljb24iLCJNb29uSWNvbiIsInVzZVRoZW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEYXJrTW9kZVN3aXRjaCIsInN5c3RlbVRoZW1lIiwidGhlbWUiLCJzZXRUaGVtZSIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwiY3VycmVudFRoZW1lIiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DarkModeSwitch.jsx\n"));

/***/ })

});
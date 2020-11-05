webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Cta/index.jsx":
/*!**************************************!*\
  !*** ./src/components/Cta/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Cta/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Cta/index.jsx\",\n    _this = undefined;\n\n\n\n\n\nvar Cta = function Cta(_ref) {\n  var type = _ref.type,\n      color = _ref.color,\n      label = _ref.label,\n      url = _ref.url;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"cta\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"icon\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Icon, {\n        type: type,\n        color: color\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 44\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 22\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: url,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"link\"],\n        href: url,\n        children: label\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 101\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 84\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Cta;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cta);\nCta.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Cta\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3RhL2luZGV4LmpzeD8xMjA1Il0sIm5hbWVzIjpbIkN0YSIsInR5cGUiLCJjb2xvciIsImxhYmVsIiwidXJsIiwiY3RhIiwiaWNvbiIsImxpbmsiLCJwcm9wVHlwZXMiLCJ0aXRsZSIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBTUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSxNQUNWQyxJQURVLFFBQ1ZBLElBRFU7QUFBQSxNQUVWQyxLQUZVLFFBRVZBLEtBRlU7QUFBQSxNQUdWQyxLQUhVLFFBR1ZBLEtBSFU7QUFBQSxNQUlWQyxHQUpVLFFBSVZBLEdBSlU7QUFBQSxzQkFNVjtBQUFHLGFBQVMsRUFBRUMscURBQWQ7QUFBQSw0QkFBbUI7QUFBSyxlQUFTLEVBQUVDLHNEQUFoQjtBQUFBLDZCQUFzQixxRUFBQyxJQUFEO0FBQU0sWUFBSSxFQUFFTCxJQUFaO0FBQWtCLGFBQUssRUFBRUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQW5CLGVBQWlGLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFRSxHQUFaO0FBQUEsNkJBQWlCO0FBQUcsaUJBQVMsRUFBRUcsc0RBQWQ7QUFBb0IsWUFBSSxFQUFFSCxHQUExQjtBQUFBLGtCQUFnQ0Q7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQU5VO0FBQUEsQ0FBWjs7S0FBTUgsRztBQVNTQSxrRUFBZjtBQUVBQSxHQUFHLENBQUNRLFNBQUosR0FBZ0I7QUFDZEMsT0FBSyxFQUFFQyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURWO0FBRWRDLE9BQUssRUFBRUgsaURBQVMsQ0FBQ0M7QUFGSCxDQUFoQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0N0YS9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHtcbiAgY3RhLFxuICBpY29uLFxuICBsaW5rLFxufSBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBDdGEgPSAoe1xuICB0eXBlLFxuICBjb2xvcixcbiAgbGFiZWwsXG4gIHVybCxcbn0pID0+IChcbiAgPHAgY2xhc3NOYW1lPXtjdGF9PjxkaXYgY2xhc3NOYW1lPXtpY29ufT48SWNvbiB0eXBlPXt0eXBlfSBjb2xvcj17Y29sb3J9IC8+PC9kaXY+PExpbmsgaHJlZj17dXJsfT48YSBjbGFzc05hbWU9e2xpbmt9IGhyZWY9e3VybH0+e2xhYmVsfTwvYT48L0xpbms+PC9wPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ3RhO1xuXG5DdGEucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Cta/index.jsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/components/Header/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Header/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Header/index.jsx\",\n    _this = undefined;\n\n\n\n\nvar Header = function Header(_ref) {\n  var title = _ref.title,\n      image = _ref.image;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: \"\".concat(_style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"header\"], \" \").concat(image && _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"featuredImage\"]),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"content\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"title\"],\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }, _this), image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"image\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: image,\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nHeader.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzeD8zM2M2Il0sIm5hbWVzIjpbIkhlYWRlciIsInRpdGxlIiwiaW1hZ2UiLCJoZWFkZXIiLCJmZWF0dXJlZEltYWdlIiwiY29udGVudCIsInRpdGxlU3R5bGUiLCJpbWFnZVN0eWxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFPQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLHNCQUNiO0FBQVEsYUFBUyxZQUFLQyx3REFBTCxjQUFlRCxLQUFLLElBQUlFLCtEQUF4QixDQUFqQjtBQUFBLDRCQUNFO0FBQVMsZUFBUyxFQUFFQyx5REFBcEI7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUVDLHVEQUFmO0FBQUEsa0JBQTRCTDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBSUdDLEtBQUssaUJBQ047QUFBUyxlQUFTLEVBQUVLLHVEQUFwQjtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFFTCxLQUFWO0FBQWlCLFdBQUcsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURhO0FBQUEsQ0FBZjs7S0FBTUYsTTtBQWFTQSxxRUFBZjtBQUVBQSxNQUFNLENBQUNRLFNBQVAsR0FBbUI7QUFDakJQLE9BQUssRUFBRVEsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFEUDtBQUVqQlQsT0FBSyxFQUFFTyxpREFBUyxDQUFDQztBQUZBLENBQW5CIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7XG4gIGhlYWRlcixcbiAgY29udGVudCxcbiAgdGl0bGUgYXMgdGl0bGVTdHlsZSxcbiAgaW1hZ2UgYXMgaW1hZ2VTdHlsZSwgZmVhdHVyZWRJbWFnZSxcbn0gZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcblxuY29uc3QgSGVhZGVyID0gKHsgdGl0bGUsIGltYWdlIH0pID0+IChcbiAgPGhlYWRlciBjbGFzc05hbWU9e2Ake2hlYWRlcn0gJHtpbWFnZSAmJiBmZWF0dXJlZEltYWdlfWB9PlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y29udGVudH0+XG4gICAgICA8aDEgY2xhc3NOYW1lPXt0aXRsZVN0eWxlfT57dGl0bGV9PC9oMT5cbiAgICA8L3NlY3Rpb24+XG4gICAge2ltYWdlICYmIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2ltYWdlU3R5bGV9PlxuICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9XCJcIiAvPlxuICAgIDwvc2VjdGlvbj5cbiAgICApfVxuICA8L2hlYWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/index.jsx\n");

/***/ })

})
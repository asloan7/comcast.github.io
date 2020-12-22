webpackHotUpdate_N_E("pages/projects",{

/***/ "./src/components/ProjectCard/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/ProjectCard/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_shared_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/colors */ \"./src/shared/colors.js\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/ProjectCard/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/ProjectCard/index.jsx\",\n    _this = undefined;\n\n\n\n\n\nvar ProjectCard = function ProjectCard(_ref) {\n  var _ref$color = _ref.color,\n      color = _ref$color === void 0 ? 'blue' : _ref$color,\n      title = _ref.title,\n      description = _ref.description,\n      url = _ref.url,\n      stars = _ref.stars,\n      _ref$forks = _ref.forks,\n      forks = _ref$forks === void 0 ? '' : _ref$forks,\n      created = _ref.created,\n      updated = _ref.updated;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"project\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"title\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: url,\n        className: Object(src_shared_colors__WEBPACK_IMPORTED_MODULE_2__[\"textColor\"])(color),\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 32\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"description\"],\n      children: description || 'An Open Source project from Comcast.'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"numbers\"], \" \").concat(Object(src_shared_colors__WEBPACK_IMPORTED_MODULE_2__[\"textColor\"])(color)),\n        children: [stars >= 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"number\"],\n          children: [stars, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            height: \"24\",\n            width: \"24\",\n            src: \"\".concat(\"\", \"/images/star.svg\"),\n            alt: \"stargazers\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 55\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 24\n        }, _this), forks >= 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"number\"],\n          children: [forks, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            height: \"24\",\n            width: \"24\",\n            src: \"\".concat(\"\", \"/images/fork.svg\"),\n            alt: \"forks\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 55\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 24\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }, _this), created && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"date\"],\n        children: [\"created on: \", created]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 19\n      }, _this), updated && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"date\"],\n        children: [\"updated on: \", updated]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 19\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nProjectCard.propTypes = {\n  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  forks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  stars: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  created: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  updated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQvaW5kZXguanN4PzY4M2YiXSwibmFtZXMiOlsiUHJvamVjdENhcmQiLCJjb2xvciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJzdGFycyIsImZvcmtzIiwiY3JlYXRlZCIsInVwZGF0ZWQiLCJwcm9qZWN0IiwidGl0bGVTdHlsZSIsInRleHRDb2xvciIsImRlc2NyaXB0aW9uU3R5bGUiLCJudW1iZXJzIiwibnVtYmVyIiwicHJvY2VzcyIsImRhdGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQVNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsd0JBQ2xCQyxLQURrQjtBQUFBLE1BQ2xCQSxLQURrQiwyQkFDVixNQURVO0FBQUEsTUFFbEJDLEtBRmtCLFFBRWxCQSxLQUZrQjtBQUFBLE1BR2xCQyxXQUhrQixRQUdsQkEsV0FIa0I7QUFBQSxNQUlsQkMsR0FKa0IsUUFJbEJBLEdBSmtCO0FBQUEsTUFLbEJDLEtBTGtCLFFBS2xCQSxLQUxrQjtBQUFBLHdCQU1sQkMsS0FOa0I7QUFBQSxNQU1sQkEsS0FOa0IsMkJBTVYsRUFOVTtBQUFBLE1BT2xCQyxPQVBrQixRQU9sQkEsT0FQa0I7QUFBQSxNQVFsQkMsT0FSa0IsUUFRbEJBLE9BUmtCO0FBQUEsc0JBVWxCO0FBQVMsYUFBUyxFQUFFQyx5REFBcEI7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBRUMsdURBQWY7QUFBQSw2QkFBMkI7QUFBRyxZQUFJLEVBQUVOLEdBQVQ7QUFBYyxpQkFBUyxFQUFFTyxtRUFBUyxDQUFDVixLQUFELENBQWxDO0FBQUEsa0JBQTRDQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUcsZUFBUyxFQUFFVSw2REFBZDtBQUFBLGdCQUFpQ1QsV0FBVyxJQUFJO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxZQUFLVSx5REFBTCxjQUFnQkYsbUVBQVMsQ0FBQ1YsS0FBRCxDQUF6QixDQUFkO0FBQUEsbUJBQ0dJLEtBQUssSUFBSSxDQUFULGlCQUFjO0FBQUssbUJBQVMsRUFBRVMsd0RBQWhCO0FBQUEscUJBQXlCVCxLQUF6QixlQUErQjtBQUFLLGtCQUFNLEVBQUMsSUFBWjtBQUFpQixpQkFBSyxFQUFDLElBQXZCO0FBQTRCLGVBQUcsWUFBS1UsRUFBTCxxQkFBL0I7QUFBZ0YsZUFBRyxFQUFDO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEakIsRUFFR1QsS0FBSyxJQUFJLENBQVQsaUJBQWM7QUFBSyxtQkFBUyxFQUFFUSx3REFBaEI7QUFBQSxxQkFBeUJSLEtBQXpCLGVBQStCO0FBQUssa0JBQU0sRUFBQyxJQUFaO0FBQWlCLGlCQUFLLEVBQUMsSUFBdkI7QUFBNEIsZUFBRyxZQUFLUyxFQUFMLHFCQUEvQjtBQUFnRixlQUFHLEVBQUM7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUtHUixPQUFPLGlCQUFJO0FBQUcsaUJBQVMsRUFBRVMsc0RBQWQ7QUFBQSxtQ0FBaUNULE9BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxkLEVBTUdDLE9BQU8saUJBQUk7QUFBRyxpQkFBUyxFQUFFUSxzREFBZDtBQUFBLG1DQUFpQ1IsT0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBVmtCO0FBQUEsQ0FBcEI7O0tBQU1SLFc7QUF3QlNBLDBFQUFmO0FBRUFBLFdBQVcsQ0FBQ2lCLFNBQVosR0FBd0I7QUFDdEJoQixPQUFLLEVBQUVpQixpREFBUyxDQUFDQyxNQURLO0FBRXRCakIsT0FBSyxFQUFFZ0IsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFGRjtBQUd0QmpCLGFBQVcsRUFBRWUsaURBQVMsQ0FBQ0MsTUFIRDtBQUl0QmYsS0FBRyxFQUFFYyxpREFBUyxDQUFDQyxNQUpPO0FBS3RCYixPQUFLLEVBQUVZLGlEQUFTLENBQUNKLE1BTEs7QUFNdEJULE9BQUssRUFBRWEsaURBQVMsQ0FBQ0osTUFOSztBQU90QlAsU0FBTyxFQUFFVyxpREFBUyxDQUFDQyxNQVBHO0FBUXRCWCxTQUFPLEVBQUVVLGlEQUFTLENBQUNDO0FBUkcsQ0FBeEIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdGV4dENvbG9yIH0gZnJvbSAnc3JjL3NoYXJlZC9jb2xvcnMnO1xuaW1wb3J0IHtcbiAgcHJvamVjdCxcbiAgbnVtYmVycyxcbiAgbnVtYmVyLFxuICB0aXRsZSBhcyB0aXRsZVN0eWxlLFxuICBkZXNjcmlwdGlvbiBhcyBkZXNjcmlwdGlvblN0eWxlLFxuICBkYXRlLFxufSBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBQcm9qZWN0Q2FyZCA9ICh7XG4gIGNvbG9yID0gJ2JsdWUnLFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIHVybCxcbiAgc3RhcnMsXG4gIGZvcmtzID0gJycsXG4gIGNyZWF0ZWQsXG4gIHVwZGF0ZWQsXG59KSA9PiAoXG4gIDxhcnRpY2xlIGNsYXNzTmFtZT17cHJvamVjdH0+XG4gICAgPGg0IGNsYXNzTmFtZT17dGl0bGVTdHlsZX0+PGEgaHJlZj17dXJsfSBjbGFzc05hbWU9e3RleHRDb2xvcihjb2xvcil9Pnt0aXRsZX08L2E+PC9oND5cbiAgICA8cCBjbGFzc05hbWU9e2Rlc2NyaXB0aW9uU3R5bGV9PntkZXNjcmlwdGlvbiB8fCAnQW4gT3BlbiBTb3VyY2UgcHJvamVjdCBmcm9tIENvbWNhc3QuJ308L3A+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtudW1iZXJzfSAke3RleHRDb2xvcihjb2xvcil9YH0+XG4gICAgICAgIHtzdGFycyA+PSAwICYmIDxkaXYgY2xhc3NOYW1lPXtudW1iZXJ9PntzdGFyc308aW1nIGhlaWdodD1cIjI0XCIgd2lkdGg9XCIyNFwiIHNyYz17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9pbWFnZXMvc3Rhci5zdmdgfSBhbHQ9XCJzdGFyZ2F6ZXJzXCIgLz48L2Rpdj59XG4gICAgICAgIHtmb3JrcyA+PSAwICYmIDxkaXYgY2xhc3NOYW1lPXtudW1iZXJ9Pntmb3Jrc308aW1nIGhlaWdodD1cIjI0XCIgd2lkdGg9XCIyNFwiIHNyYz17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9pbWFnZXMvZm9yay5zdmdgfSBhbHQ9XCJmb3Jrc1wiIC8+PC9kaXY+fVxuICAgICAgPC9kaXY+XG4gICAgICB7Y3JlYXRlZCAmJiA8cCBjbGFzc05hbWU9e2RhdGV9PmNyZWF0ZWQgb246IHtjcmVhdGVkfTwvcD59XG4gICAgICB7dXBkYXRlZCAmJiA8cCBjbGFzc05hbWU9e2RhdGV9PnVwZGF0ZWQgb246IHt1cGRhdGVkfTwvcD59XG4gICAgPC9kaXY+XG4gIDwvYXJ0aWNsZT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDYXJkO1xuXG5Qcm9qZWN0Q2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmb3JrczogUHJvcFR5cGVzLm51bWJlcixcbiAgc3RhcnM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNyZWF0ZWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVwZGF0ZWQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProjectCard/index.jsx\n");

/***/ })

})
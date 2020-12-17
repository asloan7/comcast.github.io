webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/components/ArticleItem/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/ArticleItem/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/ArticleItem/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/ArticleItem/index.jsx\",\n    _this = undefined;\n\n/* eslint-disable no-bitwise */\n\n\n\n\nvar ArticleItem = function ArticleItem(_ref) {\n  var title = _ref.title,\n      author = _ref.author,\n      description = _ref.description,\n      date = _ref.date,\n      image = _ref.image,\n      url = _ref.url,\n      defaultImage = _ref.defaultImage;\n\n  var hashCode = function hashCode(s) {\n    return s.split('').reduce(function (a, b) {\n      var newA = (a << 5) - a + b.charCodeAt(0);\n      return newA & newA;\n    }, 0);\n  }; //TODO move to shared functions\n\n\n  var intToRGB = function intToRGB(i) {\n    var c = (i & 0x00FFFFFF).toString(16).toUpperCase();\n    return '00000'.substring(0, 6 - c.length) + c;\n  };\n\n  var backgroundImage = !image && \"linear-gradient(0deg, #\".concat(intToRGB(hashCode(title)), \"ee 0%, #\").concat(intToRGB(hashCode(title)), \"aa 100%), url(\\\"\").concat(\"\").concat(defaultImage || '/images/blog/featured.jpg', \"\\\")\");\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"article\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleImage\"],\n      style: {\n        backgroundImage: backgroundImage\n      },\n      children: image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        src: \"\".concat(\"\").concat(image),\n        alt: \"\",\n        layout: \"fill\",\n        objectfit: \"cover\",\n        objectposition: \"center\",\n        loading: \"lazy\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 19\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleMessage\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleTitle\"],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleLink\"],\n          href: url,\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 38\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleDate\"],\n        children: date\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), author && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleAuthor\"],\n        children: [\"by \", author]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 20\n      }, _this), description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleDescription\"],\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 25\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this)]\n  }, \"articles\".concat(title), true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ArticleItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleItem);\nArticleItem.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  defaultImage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"ArticleItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZUl0ZW0vaW5kZXguanN4PzY4MTEiXSwibmFtZXMiOlsiQXJ0aWNsZUl0ZW0iLCJ0aXRsZSIsImF1dGhvciIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsImltYWdlIiwidXJsIiwiZGVmYXVsdEltYWdlIiwiaGFzaENvZGUiLCJzIiwic3BsaXQiLCJyZWR1Y2UiLCJhIiwiYiIsIm5ld0EiLCJjaGFyQ29kZUF0IiwiaW50VG9SR0IiLCJpIiwiYyIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwcm9jZXNzIiwiYXJ0aWNsZSIsImFydGljbGVJbWFnZSIsImFydGljbGVNZXNzYWdlIiwiYXJ0aWNsZVRpdGxlIiwiYXJ0aWNsZUxpbmsiLCJhcnRpY2xlRGF0ZSIsImFydGljbGVBdXRob3IiLCJhcnRpY2xlRGVzY3JpcHRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQVdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BUWQ7QUFBQSxNQVBKQyxLQU9JLFFBUEpBLEtBT0k7QUFBQSxNQU5KQyxNQU1JLFFBTkpBLE1BTUk7QUFBQSxNQUxKQyxXQUtJLFFBTEpBLFdBS0k7QUFBQSxNQUpKQyxJQUlJLFFBSkpBLElBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxHQUVJLFFBRkpBLEdBRUk7QUFBQSxNQURKQyxZQUNJLFFBREpBLFlBQ0k7O0FBQ0osTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRLEVBQVIsRUFBWUMsTUFBWixDQUFtQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUFF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L2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmltcG9ydCB7XG4gIGFydGljbGUsXG4gIGFydGljbGVUaXRsZSxcbiAgYXJ0aWNsZU1lc3NhZ2UsXG4gIGFydGljbGVBdXRob3IsXG4gIGFydGljbGVEZXNjcmlwdGlvbixcbiAgYXJ0aWNsZUxpbmssXG4gIGFydGljbGVJbWFnZSxcbiAgYXJ0aWNsZURhdGUsXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEFydGljbGVJdGVtID0gKHtcbiAgdGl0bGUsXG4gIGF1dGhvcixcbiAgZGVzY3JpcHRpb24sXG4gIGRhdGUsXG4gIGltYWdlLFxuICB1cmwsXG4gIGRlZmF1bHRJbWFnZSxcbn0pID0+IHtcbiAgY29uc3QgaGFzaENvZGUgPSAocykgPT4gcy5zcGxpdCgnJykucmVkdWNlKChhLCBiKSA9PiB7IGNvbnN0IG5ld0EgPSAoKGEgPDwgNSkgLSBhKSArIGIuY2hhckNvZGVBdCgwKTsgcmV0dXJuIG5ld0EgJiBuZXdBOyB9LCAwKTtcblxuICAvL1RPRE8gbW92ZSB0byBzaGFyZWQgZnVuY3Rpb25zXG4gIGNvbnN0IGludFRvUkdCID0gKGkpID0+IHtcbiAgICBjb25zdCBjID0gKGkgJiAweDAwRkZGRkZGKVxuICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgLnRvVXBwZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gJzAwMDAwJy5zdWJzdHJpbmcoMCwgNiAtIGMubGVuZ3RoKSArIGM7XG4gIH07XG5cbiAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gIWltYWdlICYmIGBsaW5lYXItZ3JhZGllbnQoMGRlZywgIyR7aW50VG9SR0IoaGFzaENvZGUodGl0bGUpKX1lZSAwJSwgIyR7aW50VG9SR0IoaGFzaENvZGUodGl0bGUpKX1hYSAxMDAlKSwgdXJsKFwiJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9JHtkZWZhdWx0SW1hZ2UgfHwgJy9pbWFnZXMvYmxvZy9mZWF0dXJlZC5qcGcnfVwiKWA7XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2FydGljbGV9IGtleT17YGFydGljbGVzJHt0aXRsZX1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXthcnRpY2xlSW1hZ2V9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZSB9fT5cbiAgICAgICAge2ltYWdlICYmIDxJbWFnZSBzcmM9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0ke2ltYWdlfWB9IGFsdD1cIlwiIGxheW91dD1cImZpbGxcIiBvYmplY3RmaXQ9XCJjb3ZlclwiIG9iamVjdHBvc2l0aW9uPVwiY2VudGVyXCIgbG9hZGluZz1cImxhenlcIiAvPn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2FydGljbGVNZXNzYWdlfT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17YXJ0aWNsZVRpdGxlfT48YSBjbGFzc05hbWU9e2FydGljbGVMaW5rfSBocmVmPXt1cmx9Pnt0aXRsZX08L2E+PC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXthcnRpY2xlRGF0ZX0+e2RhdGV9PC9wPlxuICAgICAgICB7YXV0aG9yICYmIDxwIGNsYXNzTmFtZT17YXJ0aWNsZUF1dGhvcn0+Ynkge2F1dGhvcn08L3A+fVxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPHAgY2xhc3NOYW1lPXthcnRpY2xlRGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L3A+fVxuICAgICAgPC9kaXY+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUl0ZW07XG5cbkFydGljbGVJdGVtLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYXV0aG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdEltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ArticleItem/index.jsx\n");

/***/ })

})
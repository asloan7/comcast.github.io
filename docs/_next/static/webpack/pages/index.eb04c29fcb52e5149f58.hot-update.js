webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Nav/index.jsx":
/*!**************************************!*\
  !*** ./src/components/Nav/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Nav/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n // import { nav } from './style.module.css';\n\nvar KEYCODE_TAB = 9;\nvar ESC = 27;\n\nvar Nav = function Nav() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var navOpenRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var navCloseRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (open === null) {\n      return;\n    }\n\n    if (open) {\n      navCloseRef.current.focus();\n    } else {\n      navOpenRef.current.focus();\n    }\n  }, [open]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (open) {\n      var focusableEls = document.querySelector('.nav').querySelectorAll('.navigation__close, a[href]');\n      var firstFocusableEl = focusableEls[0];\n      var lastFocusableEl = focusableEls[focusableEls.length - 1];\n\n      var listener = function listener(event) {\n        if (event.keyCode === ESC) {\n          setOpen(false);\n        }\n\n        if (event.key === 'Tab' || event.keyCode === KEYCODE_TAB) {\n          if (event.shiftKey) {\n            if (document.activeElement === firstFocusableEl) {\n              lastFocusableEl.focus();\n              event.preventDefault();\n            }\n          } else if (document.activeElement === lastFocusableEl) {\n            firstFocusableEl.focus();\n            event.preventDefault();\n          }\n        }\n      };\n\n      document.addEventListener('keydown', listener);\n      return function () {\n        document.removeEventListener('keydown', listener);\n      };\n    }\n\n    return '';\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    className: \"nav \".concat(open ? 'open' : ''),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"navigation__button\",\n      type: \"button\",\n      \"aria-expanded\": !!open,\n      \"aria-label\": \"Expand navigation menu\",\n      onClick: function onClick() {\n        return setOpen(!open);\n      },\n      ref: navOpenRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"navigation__close\",\n      type: \"button\",\n      \"aria-expanded\": !!open,\n      \"aria-label\": \"Close navigation menu\",\n      onClick: function onClick() {\n        return setOpen(!open);\n      },\n      ref: navCloseRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"\".concat(\"\", \"/\"),\n          children: \"About\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"\".concat(\"\", \"/projects\"),\n          children: \"Projects\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"\".concat(\"\", \"/people\"),\n          children: \"People\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"\".concat(\"\", \"/community\"),\n          children: \"Community\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"\".concat(\"\", \"/events\"),\n          children: \"Events\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"\".concat(\"\", \"/blog\"),\n          children: \"Blog\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Nav, \"4RH+35hhvvIutwDEbTa73DuvskE=\");\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L2luZGV4LmpzeD9lNmY1Il0sIm5hbWVzIjpbIktFWUNPREVfVEFCIiwiRVNDIiwiTmF2IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsIm5hdk9wZW5SZWYiLCJ1c2VSZWYiLCJuYXZDbG9zZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJmb2N1cyIsImZvY3VzYWJsZUVscyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaXJzdEZvY3VzYWJsZUVsIiwibGFzdEZvY3VzYWJsZUVsIiwibGVuZ3RoIiwibGlzdGVuZXIiLCJldmVudCIsImtleUNvZGUiLCJrZXkiLCJzaGlmdEtleSIsImFjdGl2ZUVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHLENBQXBCO0FBQ0EsSUFBTUMsR0FBRyxHQUFHLEVBQVo7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLElBQUQsQ0FEaEI7QUFBQSxNQUNUQyxJQURTO0FBQUEsTUFDSEMsT0FERzs7QUFFaEIsTUFBTUMsVUFBVSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBekI7QUFDQSxNQUFNQyxXQUFXLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUExQjtBQUVBRSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTCxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUFFO0FBQVM7O0FBQzlCLFFBQUlBLElBQUosRUFBVTtBQUNSSSxpQkFBVyxDQUFDRSxPQUFaLENBQW9CQyxLQUFwQjtBQUNELEtBRkQsTUFFTztBQUNMTCxnQkFBVSxDQUFDSSxPQUFYLENBQW1CQyxLQUFuQjtBQUNEO0FBQ0YsR0FQUSxFQU9OLENBQUNQLElBQUQsQ0FQTSxDQUFUO0FBU0FLLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlMLElBQUosRUFBVTtBQUNSLFVBQU1RLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLEVBQStCQyxnQkFBL0IsQ0FBZ0QsNkJBQWhELENBQXJCO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUdKLFlBQVksQ0FBQyxDQUFELENBQXJDO0FBQ0EsVUFBTUssZUFBZSxHQUFHTCxZQUFZLENBQUNBLFlBQVksQ0FBQ00sTUFBYixHQUFzQixDQUF2QixDQUFwQzs7QUFDQSxVQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsWUFBSUEsS0FBSyxDQUFDQyxPQUFOLEtBQWtCcEIsR0FBdEIsRUFBMkI7QUFDekJJLGlCQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0Q7O0FBQ0QsWUFBSWUsS0FBSyxDQUFDRSxHQUFOLEtBQWMsS0FBZCxJQUF1QkYsS0FBSyxDQUFDQyxPQUFOLEtBQWtCckIsV0FBN0MsRUFBMEQ7QUFDeEQsY0FBSW9CLEtBQUssQ0FBQ0csUUFBVixFQUFvQjtBQUNsQixnQkFBSVYsUUFBUSxDQUFDVyxhQUFULEtBQTJCUixnQkFBL0IsRUFBaUQ7QUFDL0NDLDZCQUFlLENBQUNOLEtBQWhCO0FBQ0FTLG1CQUFLLENBQUNLLGNBQU47QUFDRDtBQUNGLFdBTEQsTUFLTyxJQUFJWixRQUFRLENBQUNXLGFBQVQsS0FBMkJQLGVBQS9CLEVBQWdEO0FBQ3JERCw0QkFBZ0IsQ0FBQ0wsS0FBakI7QUFDQVMsaUJBQUssQ0FBQ0ssY0FBTjtBQUNEO0FBQ0Y7QUFDRixPQWZEOztBQWdCQVosY0FBUSxDQUFDYSxnQkFBVCxDQUEwQixTQUExQixFQUFxQ1AsUUFBckM7QUFFQSxhQUFPLFlBQU07QUFDWE4sZ0JBQVEsQ0FBQ2MsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0NSLFFBQXhDO0FBQ0QsT0FGRDtBQUdEOztBQUNELFdBQU8sRUFBUDtBQUNELEdBNUJRLENBQVQ7QUE4QkEsc0JBQ0U7QUFBSyxhQUFTLGdCQUFTZixJQUFJLEdBQUcsTUFBSCxHQUFZLEVBQXpCLENBQWQ7QUFBQSw0QkFDRTtBQUFRLGVBQVMsRUFBQyxvQkFBbEI7QUFBdUMsVUFBSSxFQUFDLFFBQTVDO0FBQXFELHVCQUFlLENBQUMsQ0FBQ0EsSUFBdEU7QUFBNEUsb0JBQVcsd0JBQXZGO0FBQWdILGFBQU8sRUFBRTtBQUFBLGVBQU1DLE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQWI7QUFBQSxPQUF6SDtBQUErSSxTQUFHLEVBQUVFO0FBQXBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQVEsZUFBUyxFQUFDLG1CQUFsQjtBQUFzQyxVQUFJLEVBQUMsUUFBM0M7QUFBb0QsdUJBQWUsQ0FBQyxDQUFDRixJQUFyRTtBQUEyRSxvQkFBVyx1QkFBdEY7QUFBOEcsYUFBTyxFQUFFO0FBQUEsZUFBTUMsT0FBTyxDQUFDLENBQUNELElBQUYsQ0FBYjtBQUFBLE9BQXZIO0FBQTZJLFNBQUcsRUFBRUk7QUFBbEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBQSw4QkFDRTtBQUFBLCtCQUFJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxZQUFLb0IsRUFBTCxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSwrQkFBSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksWUFBS0EsRUFBTCxjQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBQSwrQkFBSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksWUFBS0EsRUFBTCxZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUU7QUFBQSwrQkFBSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksWUFBS0EsRUFBTCxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0U7QUFBQSwrQkFBSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksWUFBS0EsRUFBTCxZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBTUU7QUFBQSwrQkFBSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksWUFBS0EsRUFBTCxVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0ExREQ7O0dBQU0xQixHOztLQUFBQSxHO0FBNERTQSxrRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL05hdi9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuLy8gaW1wb3J0IHsgbmF2IH0gZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcbmNvbnN0IEtFWUNPREVfVEFCID0gOTtcbmNvbnN0IEVTQyA9IDI3O1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBuYXZPcGVuUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBuYXZDbG9zZVJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChvcGVuID09PSBudWxsKSB7IHJldHVybjsgfVxuICAgIGlmIChvcGVuKSB7XG4gICAgICBuYXZDbG9zZVJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdk9wZW5SZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cbiAgfSwgW29wZW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBjb25zdCBmb2N1c2FibGVFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JykucXVlcnlTZWxlY3RvckFsbCgnLm5hdmlnYXRpb25fX2Nsb3NlLCBhW2hyZWZdJyk7XG4gICAgICBjb25zdCBmaXJzdEZvY3VzYWJsZUVsID0gZm9jdXNhYmxlRWxzWzBdO1xuICAgICAgY29uc3QgbGFzdEZvY3VzYWJsZUVsID0gZm9jdXNhYmxlRWxzW2ZvY3VzYWJsZUVscy5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0MpIHtcbiAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXlDb2RlID09PSBLRVlDT0RFX1RBQikge1xuICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGZpcnN0Rm9jdXNhYmxlRWwpIHtcbiAgICAgICAgICAgICAgbGFzdEZvY3VzYWJsZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBsYXN0Rm9jdXNhYmxlRWwpIHtcbiAgICAgICAgICAgIGZpcnN0Rm9jdXNhYmxlRWwuZm9jdXMoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGxpc3RlbmVyKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGxpc3RlbmVyKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17YG5hdiAke29wZW4gPyAnb3BlbicgOiAnJ31gfT5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9fYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9eyEhb3Blbn0gYXJpYS1sYWJlbD1cIkV4cGFuZCBuYXZpZ2F0aW9uIG1lbnVcIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0gcmVmPXtuYXZPcGVuUmVmfSAvPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX19jbG9zZVwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWV4cGFuZGVkPXshIW9wZW59IGFyaWEtbGFiZWw9XCJDbG9zZSBuYXZpZ2F0aW9uIG1lbnVcIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0gcmVmPXtuYXZDbG9zZVJlZn0gLz5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPjxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vYH0+QWJvdXQ8L0xpbms+PC9saT5cbiAgICAgICAgPGxpPjxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vcHJvamVjdHNgfT5Qcm9qZWN0czwvTGluaz48L2xpPlxuICAgICAgICA8bGk+PExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9wZW9wbGVgfT5QZW9wbGU8L0xpbms+PC9saT5cbiAgICAgICAgPGxpPjxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vY29tbXVuaXR5YH0+Q29tbXVuaXR5PC9MaW5rPjwvbGk+XG4gICAgICAgIDxsaT48TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2V2ZW50c2B9PkV2ZW50czwvTGluaz48L2xpPlxuICAgICAgICA8bGk+PExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9ibG9nYH0+QmxvZzwvTGluaz48L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Nav/index.jsx\n");

/***/ })

})
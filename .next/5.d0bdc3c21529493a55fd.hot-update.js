webpackHotUpdate(5,{

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _mockData = __webpack_require__(672);

var _group = __webpack_require__(596);

var _scale = __webpack_require__(679);

var _shape = __webpack_require__(598);

var _glyph = __webpack_require__(811);

var _axis = __webpack_require__(652);

var _gradient = __webpack_require__(668);

var _d3Array = __webpack_require__(555);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pensona/checkout/vx-experiment/pages/index.js?entry';


var data = _mockData.appleStock;

var width = 750;
var height = 400;

var x = function x(d) {
  return new Date(d.date);
};
var y = function y(d) {
  return d.close;
};

// Bounds
var margin = {
  top: 60,
  bottom: 60,
  left: 80,
  right: 80
};
var xMax = width - margin.left - margin.right;
var yMax = height - margin.top - margin.bottom;

var xScale = (0, _scale.scaleTime)({
  range: [0, xMax],
  domain: (0, _d3Array.extent)(data, x)
});
var yScale = (0, _scale.scaleLinear)({
  range: [yMax, 0],
  domain: [0, (0, _d3Array.max)(data, y)]
});

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement('svg', { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, _react2.default.createElement(_gradient.LinearGradient, {
    from: '#fbc2eb',
    to: '#a6c1ee',
    id: 'gradient',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), _react2.default.createElement(_group.Group, { top: margin.top, left: margin.left, __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, _react2.default.createElement(_shape.LinePath, {
    data: data,
    xScale: xScale,
    yScale: yScale,
    x: x,
    y: y,
    glyph: function glyph(d, i) {
      return _react2.default.createElement('g', { key: 'line-point-' + i, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_glyph.GlyphDot, {
        cx: xScale(x(d)),
        cy: yScale(y(d)),
        r: 6,
        fill: '#fff',
        stroke: '#01f2ff',
        strokeWidth: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement(_glyph.GlyphDot, {
        cx: xScale(x(d)),
        cy: yScale(y(d)),
        r: 6,
        fill: '#01f2ff',
        stroke: '#7e20dc',
        strokeWidth: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), _react2.default.createElement(_glyph.GlyphDot, {
        cx: xScale(x(d)),
        cy: yScale(y(d)),
        r: 4,
        fill: '#ffffff',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }), _react2.default.createElement(_axis.AxisLeft, {
    scale: yScale,
    top: 0,
    left: 0,
    label: 'Close Price ($)',
    stroke: '#1b1a1e',
    tickTextFill: '#1b1a1e',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }), _react2.default.createElement(_axis.AxisBottom, {
    scale: xScale,
    top: yMax,
    label: 'Years',
    stroke: '#1b1a1e',
    tickTextFill: '#1b1a1e',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }))));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/pensona/checkout/vx-experiment/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pensona/checkout/vx-experiment/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kMGJkYzNjMjE1Mjk0OTNhNTVmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBhcHBsZVN0b2NrIH0gZnJvbSAnQHZ4L21vY2stZGF0YSc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJ0B2eC9ncm91cCc7XG5pbXBvcnQgeyBzY2FsZVRpbWUsIHNjYWxlTGluZWFyIH0gZnJvbSAnQHZ4L3NjYWxlJztcbmltcG9ydCB7IExpbmVQYXRoIH0gZnJvbSAnQHZ4L3NoYXBlJztcbmltcG9ydCB7IEdseXBoRG90IH0gZnJvbSAnQHZ4L2dseXBoJztcbmltcG9ydCB7IEF4aXNMZWZ0LCBBeGlzQm90dG9tIH0gZnJvbSAnQHZ4L2F4aXMnO1xuaW1wb3J0IHsgTGluZWFyR3JhZGllbnQgfSBmcm9tICdAdngvZ3JhZGllbnQnO1xuaW1wb3J0IHsgZXh0ZW50LCBtYXggfSBmcm9tICdkMy1hcnJheSc7XG5cbmNvbnN0IGRhdGEgPSBhcHBsZVN0b2NrO1xuXG5jb25zdCB3aWR0aCA9IDc1MDtcbmNvbnN0IGhlaWdodCA9IDQwMDtcblxuY29uc3QgeCA9IGQgPT4gbmV3IERhdGUoZC5kYXRlKTtcbmNvbnN0IHkgPSBkID0+IGQuY2xvc2U7XG5cbi8vIEJvdW5kc1xuY29uc3QgbWFyZ2luID0ge1xuICB0b3A6IDYwLFxuICBib3R0b206IDYwLFxuICBsZWZ0OiA4MCxcbiAgcmlnaHQ6IDgwLFxufTtcbmNvbnN0IHhNYXggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuY29uc3QgeU1heCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG5jb25zdCB4U2NhbGUgPSBzY2FsZVRpbWUoe1xuICByYW5nZTogWzAsIHhNYXhdLFxuICBkb21haW46IGV4dGVudChkYXRhLCB4KVxufSk7XG5jb25zdCB5U2NhbGUgPSBzY2FsZUxpbmVhcih7XG4gIHJhbmdlOiBbeU1heCwgMF0sXG4gIGRvbWFpbjogWzAsIG1heChkYXRhLCB5KV0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICA8TGluZWFyR3JhZGllbnRcbiAgICAgICAgZnJvbT0nI2ZiYzJlYidcbiAgICAgICAgdG89JyNhNmMxZWUnXG4gICAgICAgIGlkPSdncmFkaWVudCdcbiAgICAgIC8+XG5cbiAgICAgIDxHcm91cCB0b3A9e21hcmdpbi50b3B9IGxlZnQ9e21hcmdpbi5sZWZ0fT5cblxuICAgICAgICA8TGluZVBhdGhcbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIHhTY2FsZT17eFNjYWxlfVxuICAgICAgICAgIHlTY2FsZT17eVNjYWxlfVxuICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgeT17eX1cbiAgZ2x5cGg9eyhkLGkpID0+IHtcblx0ICByZXR1cm4gKFxuXHRcdCAgPGcga2V5PXtgbGluZS1wb2ludC0ke2l9YH0+XG4gICAgICAgICAgICAgICAgPEdseXBoRG90XG4gICAgICAgICAgICAgICAgICBjeD17eFNjYWxlKHgoZCkpfVxuICAgICAgICAgICAgICAgICAgY3k9e3lTY2FsZSh5KGQpKX1cbiAgICAgICAgICAgICAgICAgIHI9ezZ9XG4gICAgICAgICAgICAgICAgICBmaWxsPScjZmZmJ1xuICAgICAgICAgICAgICAgICAgc3Ryb2tlPScjMDFmMmZmJ1xuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEdseXBoRG90XG4gICAgICAgICAgICAgICAgICBjeD17eFNjYWxlKHgoZCkpfVxuICAgICAgICAgICAgICAgICAgY3k9e3lTY2FsZSh5KGQpKX1cbiAgICAgICAgICAgICAgICAgIHI9ezZ9XG4gICAgICAgICAgICAgICAgICBmaWxsPScjMDFmMmZmJ1xuICAgICAgICAgICAgICAgICAgc3Ryb2tlPScjN2UyMGRjJ1xuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8R2x5cGhEb3RcbiAgICAgICAgICAgICAgICAgIGN4PXt4U2NhbGUoeChkKSl9XG4gICAgICAgICAgICAgICAgICBjeT17eVNjYWxlKHkoZCkpfVxuICAgICAgICAgICAgICAgICAgcj17NH1cbiAgICAgICAgICAgICAgICAgIGZpbGw9JyNmZmZmZmYnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9nPlxuXHRcdCAgKTtcbiAgICAgIH19XG4gICAgICAgIC8+XG5cbiAgICAgICAgPEF4aXNMZWZ0XG4gICAgICAgICAgc2NhbGU9e3lTY2FsZX1cbiAgICAgICAgICB0b3A9ezB9XG4gICAgICAgICAgbGVmdD17MH1cbiAgICAgICAgICBsYWJlbD17J0Nsb3NlIFByaWNlICgkKSd9XG4gICAgICAgICAgc3Ryb2tlPXsnIzFiMWExZSd9XG4gICAgICAgICAgdGlja1RleHRGaWxsPXsnIzFiMWExZSd9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPEF4aXNCb3R0b21cbiAgICAgICAgICBzY2FsZT17eFNjYWxlfVxuICAgICAgICAgIHRvcD17eU1heH1cbiAgICAgICAgICBsYWJlbD17J1llYXJzJ31cbiAgICAgICAgICBzdHJva2U9eycjMWIxYTFlJ31cbiAgICAgICAgICB0aWNrVGV4dEZpbGw9eycjMWIxYTFlJ31cbiAgICAgICAgLz5cblxuICAgICAgPC9Hcm91cD5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBOztBQUhBO0FBTUE7QUFOQTtBQUNBO0FBS0E7QUFFQTtBQUZBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQU5BO0FBUUE7QUFSQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQU5BO0FBUUE7QUFSQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQUE7O0FBSkE7QUFRQTtBQVJBO0FBQ0E7QUExQkE7O0FBQUE7QUFvQ0E7QUFwQ0E7QUFDQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBTkE7QUFTQTtBQVRBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUxBO0FBQUE7QUFBQTtBQUNBO0FBekRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
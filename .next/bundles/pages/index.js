
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

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

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(647);


/***/ })

},[800]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2ViMGEyOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgYXBwbGVTdG9jayB9IGZyb20gJ0B2eC9tb2NrLWRhdGEnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICdAdngvZ3JvdXAnO1xuaW1wb3J0IHsgc2NhbGVUaW1lLCBzY2FsZUxpbmVhciB9IGZyb20gJ0B2eC9zY2FsZSc7XG5pbXBvcnQgeyBMaW5lUGF0aCB9IGZyb20gJ0B2eC9zaGFwZSc7XG5pbXBvcnQgeyBHbHlwaERvdCB9IGZyb20gJ0B2eC9nbHlwaCc7XG5pbXBvcnQgeyBBeGlzTGVmdCwgQXhpc0JvdHRvbSB9IGZyb20gJ0B2eC9heGlzJztcbmltcG9ydCB7IExpbmVhckdyYWRpZW50IH0gZnJvbSAnQHZ4L2dyYWRpZW50JztcbmltcG9ydCB7IGV4dGVudCwgbWF4IH0gZnJvbSAnZDMtYXJyYXknO1xuXG5jb25zdCBkYXRhID0gYXBwbGVTdG9jaztcblxuY29uc3Qgd2lkdGggPSA3NTA7XG5jb25zdCBoZWlnaHQgPSA0MDA7XG5cbmNvbnN0IHggPSBkID0+IG5ldyBEYXRlKGQuZGF0ZSk7XG5jb25zdCB5ID0gZCA9PiBkLmNsb3NlO1xuXG4vLyBCb3VuZHNcbmNvbnN0IG1hcmdpbiA9IHtcbiAgdG9wOiA2MCxcbiAgYm90dG9tOiA2MCxcbiAgbGVmdDogODAsXG4gIHJpZ2h0OiA4MCxcbn07XG5jb25zdCB4TWF4ID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbmNvbnN0IHlNYXggPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuY29uc3QgeFNjYWxlID0gc2NhbGVUaW1lKHtcbiAgcmFuZ2U6IFswLCB4TWF4XSxcbiAgZG9tYWluOiBleHRlbnQoZGF0YSwgeClcbn0pO1xuY29uc3QgeVNjYWxlID0gc2NhbGVMaW5lYXIoe1xuICByYW5nZTogW3lNYXgsIDBdLFxuICBkb21haW46IFswLCBtYXgoZGF0YSwgeSldLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgPExpbmVhckdyYWRpZW50XG4gICAgICAgIGZyb209JyNmYmMyZWInXG4gICAgICAgIHRvPScjYTZjMWVlJ1xuICAgICAgICBpZD0nZ3JhZGllbnQnXG4gICAgICAvPlxuXG4gICAgICA8R3JvdXAgdG9wPXttYXJnaW4udG9wfSBsZWZ0PXttYXJnaW4ubGVmdH0+XG5cbiAgICAgICAgPExpbmVQYXRoXG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICB4U2NhbGU9e3hTY2FsZX1cbiAgICAgICAgICB5U2NhbGU9e3lTY2FsZX1cbiAgICAgICAgICB4PXt4fVxuICAgICAgICAgIHk9e3l9XG4gIGdseXBoPXsoZCxpKSA9PiB7XG5cdCAgcmV0dXJuIChcblx0XHQgIDxnIGtleT17YGxpbmUtcG9pbnQtJHtpfWB9PlxuICAgICAgICAgICAgICAgIDxHbHlwaERvdFxuICAgICAgICAgICAgICAgICAgY3g9e3hTY2FsZSh4KGQpKX1cbiAgICAgICAgICAgICAgICAgIGN5PXt5U2NhbGUoeShkKSl9XG4gICAgICAgICAgICAgICAgICByPXs2fVxuICAgICAgICAgICAgICAgICAgZmlsbD0nI2ZmZidcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT0nIzAxZjJmZidcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsxMH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxHbHlwaERvdFxuICAgICAgICAgICAgICAgICAgY3g9e3hTY2FsZSh4KGQpKX1cbiAgICAgICAgICAgICAgICAgIGN5PXt5U2NhbGUoeShkKSl9XG4gICAgICAgICAgICAgICAgICByPXs2fVxuICAgICAgICAgICAgICAgICAgZmlsbD0nIzAxZjJmZidcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT0nIzdlMjBkYydcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXszfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEdseXBoRG90XG4gICAgICAgICAgICAgICAgICBjeD17eFNjYWxlKHgoZCkpfVxuICAgICAgICAgICAgICAgICAgY3k9e3lTY2FsZSh5KGQpKX1cbiAgICAgICAgICAgICAgICAgIHI9ezR9XG4gICAgICAgICAgICAgICAgICBmaWxsPScjZmZmZmZmJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZz5cblx0XHQgICk7XG4gICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxBeGlzTGVmdFxuICAgICAgICAgIHNjYWxlPXt5U2NhbGV9XG4gICAgICAgICAgdG9wPXswfVxuICAgICAgICAgIGxlZnQ9ezB9XG4gICAgICAgICAgbGFiZWw9eydDbG9zZSBQcmljZSAoJCknfVxuICAgICAgICAgIHN0cm9rZT17JyMxYjFhMWUnfVxuICAgICAgICAgIHRpY2tUZXh0RmlsbD17JyMxYjFhMWUnfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxBeGlzQm90dG9tXG4gICAgICAgICAgc2NhbGU9e3hTY2FsZX1cbiAgICAgICAgICB0b3A9e3lNYXh9XG4gICAgICAgICAgbGFiZWw9eydZZWFycyd9XG4gICAgICAgICAgc3Ryb2tlPXsnIzFiMWExZSd9XG4gICAgICAgICAgdGlja1RleHRGaWxsPXsnIzFiMWExZSd9XG4gICAgICAgIC8+XG5cbiAgICAgIDwvR3JvdXA+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBOztBQUhBO0FBTUE7QUFOQTtBQUNBO0FBS0E7QUFFQTtBQUZBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQU5BO0FBUUE7QUFSQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQU5BO0FBUUE7QUFSQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQUE7O0FBSkE7QUFRQTtBQVJBO0FBQ0E7QUExQkE7O0FBQUE7QUFvQ0E7QUFwQ0E7QUFDQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBTkE7QUFTQTtBQVRBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUxBO0FBQUE7QUFBQTtBQUNBO0FBekRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        
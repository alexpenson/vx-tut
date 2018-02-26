'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mockData = require('@vx/mock-data');

var _group = require('@vx/group');

var _scale = require('@vx/scale');

var _shape = require('@vx/shape');

var _glyph = require('@vx/glyph');

var _axis = require('@vx/axis');

var _gradient = require('@vx/gradient');

var _d3Array = require('d3-array');

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
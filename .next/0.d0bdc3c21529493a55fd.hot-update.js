webpackHotUpdate(0,{

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Glyph;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _group = __webpack_require__(814);

var _classnames = __webpack_require__(553);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Glyph(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      className = _ref.className,
      children = _ref.children;

  return _react2.default.createElement(
    _group.Group,
    {
      className: (0, _classnames2.default)('vx-glyph', className),
      top: top,
      left: left
    },
    children
  );
}

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = additionalProps;

var _callOrValue = __webpack_require__(812);

var _callOrValue2 = _interopRequireDefault(_callOrValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function additionalProps(restProps, data) {
  return Object.keys(restProps).reduce(function (ret, cur) {
    ret[cur] = (0, _callOrValue2.default)(restProps[cur], data);
    return ret;
  }, {});
}

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GlyphCircle;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(553);

var _classnames2 = _interopRequireDefault(_classnames);

var _d3Shape = __webpack_require__(577);

var _Glyph = __webpack_require__(801);

var _Glyph2 = _interopRequireDefault(_Glyph);

var _additionalProps = __webpack_require__(802);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function GlyphCircle(_ref) {
  var children = _ref.children,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      size = _ref.size,
      restProps = _objectWithoutProperties(_ref, ['children', 'className', 'top', 'left', 'size']);

  var path = (0, _d3Shape.symbol)();
  path.type(_d3Shape.symbolCircle);
  if (size) path.size(size);
  return _react2.default.createElement(
    _Glyph2.default,
    { top: top, left: left },
    _react2.default.createElement('path', _extends({
      className: (0, _classnames2.default)('vx-glyph-circle', className),
      d: path()
    }, (0, _additionalProps2.default)(restProps))),
    children
  );
}

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GlyphCross;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(553);

var _classnames2 = _interopRequireDefault(_classnames);

var _d3Shape = __webpack_require__(577);

var _Glyph = __webpack_require__(801);

var _Glyph2 = _interopRequireDefault(_Glyph);

var _additionalProps = __webpack_require__(802);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function GlyphCross(_ref) {
  var children = _ref.children,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      size = _ref.size,
      restProps = _objectWithoutProperties(_ref, ['children', 'className', 'top', 'left', 'size']);

  var path = (0, _d3Shape.symbol)();
  path.type(_d3Shape.symbolCross);
  if (size) path.size(size);
  return _react2.default.createElement(
    _Glyph2.default,
    { top: top, left: left },
    _react2.default.createElement('path', _extends({
      className: (0, _classnames2.default)('vx-glyph-cross', className),
      d: path()
    }, (0, _additionalProps2.default)(restProps))),
    children
  );
}

/***/ }),

/***/ 805:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GlyphDiamond;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(553);

var _classnames2 = _interopRequireDefault(_classnames);

var _d3Shape = __webpack_require__(577);

var _Glyph = __webpack_require__(801);

var _Glyph2 = _interopRequireDefault(_Glyph);

var _additionalProps = __webpack_require__(802);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function GlyphDiamond(_ref) {
  var children = _ref.children,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      size = _ref.size,
      restProps = _objectWithoutProperties(_ref, ['children', 'className', 'top', 'left', 'size']);

  var path = (0, _d3Shape.symbol)();
  path.type(_d3Shape.symbolDiamond);
  if (size) path.size(size);
  return _react2.default.createElement(
    _Glyph2.default,
    { top: top, left: left },
    _react2.default.createElement('path', _extends({
      className: (0, _classnames2.default)('vx-glyph-diamond', className),
      d: path()
    }, (0, _additionalProps2.default)(restProps))),
    children
  );
}

/***/ }),

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GlyphDot;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(553);

var _classnames2 = _interopRequireDefault(_classnames);

var _Glyph = __webpack_require__(801);

var _Glyph2 = _interopRequireDefault(_Glyph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function GlyphDot(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      className = _ref.className,
      children = _ref.children,
      cx = _ref.cx,
      cy = _ref.cy,
      r = _ref.r,
      fill = _ref.fill,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      restProps = _objectWithoutProperties(_ref, ['top', 'left', 'className', 'children', 'cx', 'cy', 'r', 'fill', 'stroke', 'strokeWidth', 'strokeDasharray']);

  return _react2.default.createElement(
    _Glyph2.default,
    { top: top, left: left },
    _react2.default.createElement('circle', _extends({
      className: (0, _classnames2.default)('vx-glyph-dot', className),
      cx: cx,
      cy: cy,
      r: r,
      fill: fill,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray
    }, restProps)),
    children
  );
}

/***/ }),

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GlyphSquare;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(553);

var _classnames2 = _interopRequireDefault(_classnames);

var _d3Shape = __webpack_require__(577);

var _Glyph = __webpack_require__(801);

var _Glyph2 = _interopRequireDefault(_Glyph);

var _additionalProps = __webpack_require__(802);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function GlyphSquare(_ref) {
  var children = _ref.children,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      size = _ref.size,
      restProps = _objectWithoutProperties(_ref, ['children', 'className', 'top', 'left', 'size']);

  var path = (0, _d3Shape.symbol)();
  path.type(_d3Shape.symbolSquare);
  if (size) path.size(size);
  return _react2.default.createElement(
    _Glyph2.default,
    { top: top, left: left },
    _react2.default.createElement('path', _extends({
      className: (0, _classnames2.default)('vx-glyph-square', className),
      d: path()
    }, (0, _additionalProps2.default)(restProps))),
    children
  );
}

/***/ }),

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GlyphStar;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(553);

var _classnames2 = _interopRequireDefault(_classnames);

var _d3Shape = __webpack_require__(577);

var _Glyph = __webpack_require__(801);

var _Glyph2 = _interopRequireDefault(_Glyph);

var _additionalProps = __webpack_require__(802);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function GlyphStar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      size = _ref.size,
      restProps = _objectWithoutProperties(_ref, ['children', 'className', 'top', 'left', 'size']);

  var path = (0, _d3Shape.symbol)();
  path.type(_d3Shape.symbolStar);
  if (size) path.size(size);
  return _react2.default.createElement(
    _Glyph2.default,
    { top: top, left: left },
    _react2.default.createElement('path', _extends({
      className: (0, _classnames2.default)('vx-glyph-star', className),
      d: path()
    }, (0, _additionalProps2.default)(restProps))),
    children
  );
}

/***/ }),

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GlyphTriangle;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(553);

var _classnames2 = _interopRequireDefault(_classnames);

var _d3Shape = __webpack_require__(577);

var _Glyph = __webpack_require__(801);

var _Glyph2 = _interopRequireDefault(_Glyph);

var _additionalProps = __webpack_require__(802);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function GlyphTriangle(_ref) {
  var children = _ref.children,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      size = _ref.size,
      restProps = _objectWithoutProperties(_ref, ['children', 'className', 'top', 'left', 'size']);

  var path = (0, _d3Shape.symbol)();
  path.type(_d3Shape.symbolTriangle);
  if (size) path.size(size);
  return _react2.default.createElement(
    _Glyph2.default,
    { top: top, left: left },
    _react2.default.createElement('path', _extends({
      className: (0, _classnames2.default)('vx-glyph-triangle', className),
      d: path()
    }, (0, _additionalProps2.default)(restProps))),
    children
  );
}

/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GlyphWye;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(553);

var _classnames2 = _interopRequireDefault(_classnames);

var _d3Shape = __webpack_require__(577);

var _Glyph = __webpack_require__(801);

var _Glyph2 = _interopRequireDefault(_Glyph);

var _additionalProps = __webpack_require__(802);

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function GlyphWye(_ref) {
  var children = _ref.children,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      size = _ref.size,
      restProps = _objectWithoutProperties(_ref, ['children', 'className', 'top', 'left', 'size']);

  var path = (0, _d3Shape.symbol)();
  path.type(_d3Shape.symbolWye);
  if (size) path.size(size);
  return _react2.default.createElement(
    _Glyph2.default,
    { top: top, left: left },
    _react2.default.createElement('path', _extends({
      className: (0, _classnames2.default)('vx-glyph-wye', className),
      d: path()
    }, (0, _additionalProps2.default)(restProps))),
    children
  );
}

/***/ }),

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Glyph = __webpack_require__(801);

Object.defineProperty(exports, 'Glyph', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Glyph).default;
  }
});

var _Dot = __webpack_require__(806);

Object.defineProperty(exports, 'GlyphDot', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Dot).default;
  }
});

var _Cross = __webpack_require__(804);

Object.defineProperty(exports, 'GlyphCross', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Cross).default;
  }
});

var _Diamond = __webpack_require__(805);

Object.defineProperty(exports, 'GlyphDiamond', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Diamond).default;
  }
});

var _Star = __webpack_require__(808);

Object.defineProperty(exports, 'GlyphStar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Star).default;
  }
});

var _Triangle = __webpack_require__(809);

Object.defineProperty(exports, 'GlyphTriangle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Triangle).default;
  }
});

var _Wye = __webpack_require__(810);

Object.defineProperty(exports, 'GlyphWye', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Wye).default;
  }
});

var _Square = __webpack_require__(807);

Object.defineProperty(exports, 'GlyphSquare', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Square).default;
  }
});

var _Circle = __webpack_require__(803);

Object.defineProperty(exports, 'GlyphCircle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Circle).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = callOrValue;
function callOrValue(maybeFn, data) {
  if (typeof maybeFn === 'function') {
    return maybeFn(data);
  }
  return maybeFn;
}

/***/ }),

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Group;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(553);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Group(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      transform = _ref.transform,
      className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ['top', 'left', 'transform', 'className', 'children']);

  return _react2.default.createElement(
    'g',
    _extends({
      className: (0, _classnames2.default)('cx-group', className),
      transform: transform || 'translate(' + left + ', ' + top + ')'
    }, restProps),
    children
  );
}

/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Group = __webpack_require__(813);

Object.defineProperty(exports, 'Group', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Group).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMGJkYzNjMjE1Mjk0OTNhNTVmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vfi9AdngvZ2x5cGgvYnVpbGQvZ2x5cGhzL0dseXBoLmpzPzk3NDkiLCJ3ZWJwYWNrOi8vLy4vfi9AdngvZ2x5cGgvYnVpbGQvdXRpbC9hZGRpdGlvbmFsUHJvcHMuanM/MWM4MCIsIndlYnBhY2s6Ly8vLi9+L0B2eC9nbHlwaC9idWlsZC9nbHlwaHMvQ2lyY2xlLmpzPzE0ZDciLCJ3ZWJwYWNrOi8vLy4vfi9AdngvZ2x5cGgvYnVpbGQvZ2x5cGhzL0Nyb3NzLmpzP2RlZGMiLCJ3ZWJwYWNrOi8vLy4vfi9AdngvZ2x5cGgvYnVpbGQvZ2x5cGhzL0RpYW1vbmQuanM/MzE5MCIsIndlYnBhY2s6Ly8vLi9+L0B2eC9nbHlwaC9idWlsZC9nbHlwaHMvRG90LmpzPzMxYjgiLCJ3ZWJwYWNrOi8vLy4vfi9AdngvZ2x5cGgvYnVpbGQvZ2x5cGhzL1NxdWFyZS5qcz8zZTEyIiwid2VicGFjazovLy8uL34vQHZ4L2dseXBoL2J1aWxkL2dseXBocy9TdGFyLmpzPzg3NTIiLCJ3ZWJwYWNrOi8vLy4vfi9AdngvZ2x5cGgvYnVpbGQvZ2x5cGhzL1RyaWFuZ2xlLmpzP2UyMWIzNmYiLCJ3ZWJwYWNrOi8vLy4vfi9AdngvZ2x5cGgvYnVpbGQvZ2x5cGhzL1d5ZS5qcz9lMjFiMzZmIiwid2VicGFjazovLy8uL34vQHZ4L2dseXBoL2J1aWxkL2luZGV4LmpzP2UyMWIzNmYiLCJ3ZWJwYWNrOi8vLy4vfi9AdngvZ2x5cGgvYnVpbGQvdXRpbC9jYWxsT3JWYWx1ZS5qcz9lMjFiMzZmIiwid2VicGFjazovLy8uL34vQHZ4L2dseXBoL34vQHZ4L2dyb3VwL2J1aWxkL0dyb3VwLmpzP2UyMWIzNmYiLCJ3ZWJwYWNrOi8vLy4vfi9AdngvZ2x5cGgvfi9AdngvZ3JvdXAvYnVpbGQvaW5kZXguanM/ZTIxYjM2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBHbHlwaDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2dyb3VwID0gcmVxdWlyZSgnQHZ4L2dyb3VwJyk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBHbHlwaChfcmVmKSB7XG4gIHZhciBfcmVmJHRvcCA9IF9yZWYudG9wLFxuICAgICAgdG9wID0gX3JlZiR0b3AgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJHRvcCxcbiAgICAgIF9yZWYkbGVmdCA9IF9yZWYubGVmdCxcbiAgICAgIGxlZnQgPSBfcmVmJGxlZnQgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJGxlZnQsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX2dyb3VwLkdyb3VwLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgndngtZ2x5cGgnLCBjbGFzc05hbWUpLFxuICAgICAgdG9wOiB0b3AsXG4gICAgICBsZWZ0OiBsZWZ0XG4gICAgfSxcbiAgICBjaGlsZHJlblxuICApO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9AdngvZ2x5cGgvYnVpbGQvZ2x5cGhzL0dseXBoLmpzXG4vLyBtb2R1bGUgaWQgPSA4MDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkaXRpb25hbFByb3BzO1xuXG52YXIgX2NhbGxPclZhbHVlID0gcmVxdWlyZSgnLi9jYWxsT3JWYWx1ZScpO1xuXG52YXIgX2NhbGxPclZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbGxPclZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYWRkaXRpb25hbFByb3BzKHJlc3RQcm9wcywgZGF0YSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMocmVzdFByb3BzKS5yZWR1Y2UoZnVuY3Rpb24gKHJldCwgY3VyKSB7XG4gICAgcmV0W2N1cl0gPSAoMCwgX2NhbGxPclZhbHVlMi5kZWZhdWx0KShyZXN0UHJvcHNbY3VyXSwgZGF0YSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSwge30pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9AdngvZ2x5cGgvYnVpbGQvdXRpbC9hZGRpdGlvbmFsUHJvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDgwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEdseXBoQ2lyY2xlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX2QzU2hhcGUgPSByZXF1aXJlKCdkMy1zaGFwZScpO1xuXG52YXIgX0dseXBoID0gcmVxdWlyZSgnLi9HbHlwaCcpO1xuXG52YXIgX0dseXBoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0dseXBoKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMgPSByZXF1aXJlKCcuLi91dGlsL2FkZGl0aW9uYWxQcm9wcycpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRpdGlvbmFsUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIEdseXBoQ2lyY2xlKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgdG9wID0gX3JlZi50b3AsXG4gICAgICBsZWZ0ID0gX3JlZi5sZWZ0LFxuICAgICAgc2l6ZSA9IF9yZWYuc2l6ZSxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2NoaWxkcmVuJywgJ2NsYXNzTmFtZScsICd0b3AnLCAnbGVmdCcsICdzaXplJ10pO1xuXG4gIHZhciBwYXRoID0gKDAsIF9kM1NoYXBlLnN5bWJvbCkoKTtcbiAgcGF0aC50eXBlKF9kM1NoYXBlLnN5bWJvbENpcmNsZSk7XG4gIGlmIChzaXplKSBwYXRoLnNpemUoc2l6ZSk7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBfR2x5cGgyLmRlZmF1bHQsXG4gICAgeyB0b3A6IHRvcCwgbGVmdDogbGVmdCB9LFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgX2V4dGVuZHMoe1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCd2eC1nbHlwaC1jaXJjbGUnLCBjbGFzc05hbWUpLFxuICAgICAgZDogcGF0aCgpXG4gICAgfSwgKDAsIF9hZGRpdGlvbmFsUHJvcHMyLmRlZmF1bHQpKHJlc3RQcm9wcykpKSxcbiAgICBjaGlsZHJlblxuICApO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9AdngvZ2x5cGgvYnVpbGQvZ2x5cGhzL0NpcmNsZS5qc1xuLy8gbW9kdWxlIGlkID0gODAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gR2x5cGhDcm9zcztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9kM1NoYXBlID0gcmVxdWlyZSgnZDMtc2hhcGUnKTtcblxudmFyIF9HbHlwaCA9IHJlcXVpcmUoJy4vR2x5cGgnKTtcblxudmFyIF9HbHlwaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9HbHlwaCk7XG5cbnZhciBfYWRkaXRpb25hbFByb3BzID0gcmVxdWlyZSgnLi4vdXRpbC9hZGRpdGlvbmFsUHJvcHMnKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkaXRpb25hbFByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBHbHlwaENyb3NzKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgdG9wID0gX3JlZi50b3AsXG4gICAgICBsZWZ0ID0gX3JlZi5sZWZ0LFxuICAgICAgc2l6ZSA9IF9yZWYuc2l6ZSxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2NoaWxkcmVuJywgJ2NsYXNzTmFtZScsICd0b3AnLCAnbGVmdCcsICdzaXplJ10pO1xuXG4gIHZhciBwYXRoID0gKDAsIF9kM1NoYXBlLnN5bWJvbCkoKTtcbiAgcGF0aC50eXBlKF9kM1NoYXBlLnN5bWJvbENyb3NzKTtcbiAgaWYgKHNpemUpIHBhdGguc2l6ZShzaXplKTtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIF9HbHlwaDIuZGVmYXVsdCxcbiAgICB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH0sXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Z4LWdseXBoLWNyb3NzJywgY2xhc3NOYW1lKSxcbiAgICAgIGQ6IHBhdGgoKVxuICAgIH0sICgwLCBfYWRkaXRpb25hbFByb3BzMi5kZWZhdWx0KShyZXN0UHJvcHMpKSksXG4gICAgY2hpbGRyZW5cbiAgKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vQHZ4L2dseXBoL2J1aWxkL2dseXBocy9Dcm9zcy5qc1xuLy8gbW9kdWxlIGlkID0gODA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gR2x5cGhEaWFtb25kO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX2QzU2hhcGUgPSByZXF1aXJlKCdkMy1zaGFwZScpO1xuXG52YXIgX0dseXBoID0gcmVxdWlyZSgnLi9HbHlwaCcpO1xuXG52YXIgX0dseXBoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0dseXBoKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMgPSByZXF1aXJlKCcuLi91dGlsL2FkZGl0aW9uYWxQcm9wcycpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRpdGlvbmFsUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIEdseXBoRGlhbW9uZChfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHRvcCA9IF9yZWYudG9wLFxuICAgICAgbGVmdCA9IF9yZWYubGVmdCxcbiAgICAgIHNpemUgPSBfcmVmLnNpemUsXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydjaGlsZHJlbicsICdjbGFzc05hbWUnLCAndG9wJywgJ2xlZnQnLCAnc2l6ZSddKTtcblxuICB2YXIgcGF0aCA9ICgwLCBfZDNTaGFwZS5zeW1ib2wpKCk7XG4gIHBhdGgudHlwZShfZDNTaGFwZS5zeW1ib2xEaWFtb25kKTtcbiAgaWYgKHNpemUpIHBhdGguc2l6ZShzaXplKTtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIF9HbHlwaDIuZGVmYXVsdCxcbiAgICB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH0sXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Z4LWdseXBoLWRpYW1vbmQnLCBjbGFzc05hbWUpLFxuICAgICAgZDogcGF0aCgpXG4gICAgfSwgKDAsIF9hZGRpdGlvbmFsUHJvcHMyLmRlZmF1bHQpKHJlc3RQcm9wcykpKSxcbiAgICBjaGlsZHJlblxuICApO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9AdngvZ2x5cGgvYnVpbGQvZ2x5cGhzL0RpYW1vbmQuanNcbi8vIG1vZHVsZSBpZCA9IDgwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEdseXBoRG90O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX0dseXBoID0gcmVxdWlyZSgnLi9HbHlwaCcpO1xuXG52YXIgX0dseXBoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0dseXBoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBHbHlwaERvdChfcmVmKSB7XG4gIHZhciBfcmVmJHRvcCA9IF9yZWYudG9wLFxuICAgICAgdG9wID0gX3JlZiR0b3AgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJHRvcCxcbiAgICAgIF9yZWYkbGVmdCA9IF9yZWYubGVmdCxcbiAgICAgIGxlZnQgPSBfcmVmJGxlZnQgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJGxlZnQsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGN4ID0gX3JlZi5jeCxcbiAgICAgIGN5ID0gX3JlZi5jeSxcbiAgICAgIHIgPSBfcmVmLnIsXG4gICAgICBmaWxsID0gX3JlZi5maWxsLFxuICAgICAgc3Ryb2tlID0gX3JlZi5zdHJva2UsXG4gICAgICBzdHJva2VXaWR0aCA9IF9yZWYuc3Ryb2tlV2lkdGgsXG4gICAgICBzdHJva2VEYXNoYXJyYXkgPSBfcmVmLnN0cm9rZURhc2hhcnJheSxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ3RvcCcsICdsZWZ0JywgJ2NsYXNzTmFtZScsICdjaGlsZHJlbicsICdjeCcsICdjeScsICdyJywgJ2ZpbGwnLCAnc3Ryb2tlJywgJ3N0cm9rZVdpZHRoJywgJ3N0cm9rZURhc2hhcnJheSddKTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX0dseXBoMi5kZWZhdWx0LFxuICAgIHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQgfSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnY2lyY2xlJywgX2V4dGVuZHMoe1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCd2eC1nbHlwaC1kb3QnLCBjbGFzc05hbWUpLFxuICAgICAgY3g6IGN4LFxuICAgICAgY3k6IGN5LFxuICAgICAgcjogcixcbiAgICAgIGZpbGw6IGZpbGwsXG4gICAgICBzdHJva2U6IHN0cm9rZSxcbiAgICAgIHN0cm9rZVdpZHRoOiBzdHJva2VXaWR0aCxcbiAgICAgIHN0cm9rZURhc2hhcnJheTogc3Ryb2tlRGFzaGFycmF5XG4gICAgfSwgcmVzdFByb3BzKSksXG4gICAgY2hpbGRyZW5cbiAgKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vQHZ4L2dseXBoL2J1aWxkL2dseXBocy9Eb3QuanNcbi8vIG1vZHVsZSBpZCA9IDgwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEdseXBoU3F1YXJlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX2QzU2hhcGUgPSByZXF1aXJlKCdkMy1zaGFwZScpO1xuXG52YXIgX0dseXBoID0gcmVxdWlyZSgnLi9HbHlwaCcpO1xuXG52YXIgX0dseXBoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0dseXBoKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMgPSByZXF1aXJlKCcuLi91dGlsL2FkZGl0aW9uYWxQcm9wcycpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRpdGlvbmFsUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIEdseXBoU3F1YXJlKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgdG9wID0gX3JlZi50b3AsXG4gICAgICBsZWZ0ID0gX3JlZi5sZWZ0LFxuICAgICAgc2l6ZSA9IF9yZWYuc2l6ZSxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2NoaWxkcmVuJywgJ2NsYXNzTmFtZScsICd0b3AnLCAnbGVmdCcsICdzaXplJ10pO1xuXG4gIHZhciBwYXRoID0gKDAsIF9kM1NoYXBlLnN5bWJvbCkoKTtcbiAgcGF0aC50eXBlKF9kM1NoYXBlLnN5bWJvbFNxdWFyZSk7XG4gIGlmIChzaXplKSBwYXRoLnNpemUoc2l6ZSk7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBfR2x5cGgyLmRlZmF1bHQsXG4gICAgeyB0b3A6IHRvcCwgbGVmdDogbGVmdCB9LFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgX2V4dGVuZHMoe1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCd2eC1nbHlwaC1zcXVhcmUnLCBjbGFzc05hbWUpLFxuICAgICAgZDogcGF0aCgpXG4gICAgfSwgKDAsIF9hZGRpdGlvbmFsUHJvcHMyLmRlZmF1bHQpKHJlc3RQcm9wcykpKSxcbiAgICBjaGlsZHJlblxuICApO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9AdngvZ2x5cGgvYnVpbGQvZ2x5cGhzL1NxdWFyZS5qc1xuLy8gbW9kdWxlIGlkID0gODA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gR2x5cGhTdGFyO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX2QzU2hhcGUgPSByZXF1aXJlKCdkMy1zaGFwZScpO1xuXG52YXIgX0dseXBoID0gcmVxdWlyZSgnLi9HbHlwaCcpO1xuXG52YXIgX0dseXBoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0dseXBoKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMgPSByZXF1aXJlKCcuLi91dGlsL2FkZGl0aW9uYWxQcm9wcycpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRpdGlvbmFsUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIEdseXBoU3RhcihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHRvcCA9IF9yZWYudG9wLFxuICAgICAgbGVmdCA9IF9yZWYubGVmdCxcbiAgICAgIHNpemUgPSBfcmVmLnNpemUsXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydjaGlsZHJlbicsICdjbGFzc05hbWUnLCAndG9wJywgJ2xlZnQnLCAnc2l6ZSddKTtcblxuICB2YXIgcGF0aCA9ICgwLCBfZDNTaGFwZS5zeW1ib2wpKCk7XG4gIHBhdGgudHlwZShfZDNTaGFwZS5zeW1ib2xTdGFyKTtcbiAgaWYgKHNpemUpIHBhdGguc2l6ZShzaXplKTtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIF9HbHlwaDIuZGVmYXVsdCxcbiAgICB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH0sXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ3Z4LWdseXBoLXN0YXInLCBjbGFzc05hbWUpLFxuICAgICAgZDogcGF0aCgpXG4gICAgfSwgKDAsIF9hZGRpdGlvbmFsUHJvcHMyLmRlZmF1bHQpKHJlc3RQcm9wcykpKSxcbiAgICBjaGlsZHJlblxuICApO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9AdngvZ2x5cGgvYnVpbGQvZ2x5cGhzL1N0YXIuanNcbi8vIG1vZHVsZSBpZCA9IDgwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEdseXBoVHJpYW5nbGU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfZDNTaGFwZSA9IHJlcXVpcmUoJ2QzLXNoYXBlJyk7XG5cbnZhciBfR2x5cGggPSByZXF1aXJlKCcuL0dseXBoJyk7XG5cbnZhciBfR2x5cGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfR2x5cGgpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wcyA9IHJlcXVpcmUoJy4uL3V0aWwvYWRkaXRpb25hbFByb3BzJyk7XG5cbnZhciBfYWRkaXRpb25hbFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZGl0aW9uYWxQcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gR2x5cGhUcmlhbmdsZShfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHRvcCA9IF9yZWYudG9wLFxuICAgICAgbGVmdCA9IF9yZWYubGVmdCxcbiAgICAgIHNpemUgPSBfcmVmLnNpemUsXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydjaGlsZHJlbicsICdjbGFzc05hbWUnLCAndG9wJywgJ2xlZnQnLCAnc2l6ZSddKTtcblxuICB2YXIgcGF0aCA9ICgwLCBfZDNTaGFwZS5zeW1ib2wpKCk7XG4gIHBhdGgudHlwZShfZDNTaGFwZS5zeW1ib2xUcmlhbmdsZSk7XG4gIGlmIChzaXplKSBwYXRoLnNpemUoc2l6ZSk7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBfR2x5cGgyLmRlZmF1bHQsXG4gICAgeyB0b3A6IHRvcCwgbGVmdDogbGVmdCB9LFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgX2V4dGVuZHMoe1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCd2eC1nbHlwaC10cmlhbmdsZScsIGNsYXNzTmFtZSksXG4gICAgICBkOiBwYXRoKClcbiAgICB9LCAoMCwgX2FkZGl0aW9uYWxQcm9wczIuZGVmYXVsdCkocmVzdFByb3BzKSkpLFxuICAgIGNoaWxkcmVuXG4gICk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L0B2eC9nbHlwaC9idWlsZC9nbHlwaHMvVHJpYW5nbGUuanNcbi8vIG1vZHVsZSBpZCA9IDgwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEdseXBoV3llO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX2QzU2hhcGUgPSByZXF1aXJlKCdkMy1zaGFwZScpO1xuXG52YXIgX0dseXBoID0gcmVxdWlyZSgnLi9HbHlwaCcpO1xuXG52YXIgX0dseXBoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0dseXBoKTtcblxudmFyIF9hZGRpdGlvbmFsUHJvcHMgPSByZXF1aXJlKCcuLi91dGlsL2FkZGl0aW9uYWxQcm9wcycpO1xuXG52YXIgX2FkZGl0aW9uYWxQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRpdGlvbmFsUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIEdseXBoV3llKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgdG9wID0gX3JlZi50b3AsXG4gICAgICBsZWZ0ID0gX3JlZi5sZWZ0LFxuICAgICAgc2l6ZSA9IF9yZWYuc2l6ZSxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2NoaWxkcmVuJywgJ2NsYXNzTmFtZScsICd0b3AnLCAnbGVmdCcsICdzaXplJ10pO1xuXG4gIHZhciBwYXRoID0gKDAsIF9kM1NoYXBlLnN5bWJvbCkoKTtcbiAgcGF0aC50eXBlKF9kM1NoYXBlLnN5bWJvbFd5ZSk7XG4gIGlmIChzaXplKSBwYXRoLnNpemUoc2l6ZSk7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBfR2x5cGgyLmRlZmF1bHQsXG4gICAgeyB0b3A6IHRvcCwgbGVmdDogbGVmdCB9LFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgX2V4dGVuZHMoe1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCd2eC1nbHlwaC13eWUnLCBjbGFzc05hbWUpLFxuICAgICAgZDogcGF0aCgpXG4gICAgfSwgKDAsIF9hZGRpdGlvbmFsUHJvcHMyLmRlZmF1bHQpKHJlc3RQcm9wcykpKSxcbiAgICBjaGlsZHJlblxuICApO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9AdngvZ2x5cGgvYnVpbGQvZ2x5cGhzL1d5ZS5qc1xuLy8gbW9kdWxlIGlkID0gODEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9HbHlwaCA9IHJlcXVpcmUoJy4vZ2x5cGhzL0dseXBoJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnR2x5cGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9HbHlwaCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfRG90ID0gcmVxdWlyZSgnLi9nbHlwaHMvRG90Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnR2x5cGhEb3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Eb3QpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0Nyb3NzID0gcmVxdWlyZSgnLi9nbHlwaHMvQ3Jvc3MnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdHbHlwaENyb3NzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ3Jvc3MpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0RpYW1vbmQgPSByZXF1aXJlKCcuL2dseXBocy9EaWFtb25kJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnR2x5cGhEaWFtb25kJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGlhbW9uZCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfU3RhciA9IHJlcXVpcmUoJy4vZ2x5cGhzL1N0YXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdHbHlwaFN0YXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdGFyKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9UcmlhbmdsZSA9IHJlcXVpcmUoJy4vZ2x5cGhzL1RyaWFuZ2xlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnR2x5cGhUcmlhbmdsZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyaWFuZ2xlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9XeWUgPSByZXF1aXJlKCcuL2dseXBocy9XeWUnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdHbHlwaFd5ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1d5ZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfU3F1YXJlID0gcmVxdWlyZSgnLi9nbHlwaHMvU3F1YXJlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnR2x5cGhTcXVhcmUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TcXVhcmUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0NpcmNsZSA9IHJlcXVpcmUoJy4vZ2x5cGhzL0NpcmNsZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0dseXBoQ2lyY2xlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2lyY2xlKS5kZWZhdWx0O1xuICB9XG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vQHZ4L2dseXBoL2J1aWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4MTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2FsbE9yVmFsdWU7XG5mdW5jdGlvbiBjYWxsT3JWYWx1ZShtYXliZUZuLCBkYXRhKSB7XG4gIGlmICh0eXBlb2YgbWF5YmVGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUZuKGRhdGEpO1xuICB9XG4gIHJldHVybiBtYXliZUZuO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9AdngvZ2x5cGgvYnVpbGQvdXRpbC9jYWxsT3JWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gODEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gR3JvdXA7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gR3JvdXAoX3JlZikge1xuICB2YXIgX3JlZiR0b3AgPSBfcmVmLnRvcCxcbiAgICAgIHRvcCA9IF9yZWYkdG9wID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiR0b3AsXG4gICAgICBfcmVmJGxlZnQgPSBfcmVmLmxlZnQsXG4gICAgICBsZWZ0ID0gX3JlZiRsZWZ0ID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRsZWZ0LFxuICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ3RvcCcsICdsZWZ0JywgJ3RyYW5zZm9ybScsICdjbGFzc05hbWUnLCAnY2hpbGRyZW4nXSk7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdnJyxcbiAgICBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ2N4LWdyb3VwJywgY2xhc3NOYW1lKSxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtIHx8ICd0cmFuc2xhdGUoJyArIGxlZnQgKyAnLCAnICsgdG9wICsgJyknXG4gICAgfSwgcmVzdFByb3BzKSxcbiAgICBjaGlsZHJlblxuICApO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9AdngvZ2x5cGgvfi9AdngvZ3JvdXAvYnVpbGQvR3JvdXAuanNcbi8vIG1vZHVsZSBpZCA9IDgxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfR3JvdXAgPSByZXF1aXJlKCcuL0dyb3VwJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnR3JvdXAnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Hcm91cCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L0B2eC9nbHlwaC9+L0B2eC9ncm91cC9idWlsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
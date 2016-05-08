(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babel-runtime/core-js/object/get-prototype-of"), require("babel-runtime/helpers/classCallCheck"), require("babel-runtime/helpers/createClass"), require("babel-runtime/helpers/possibleConstructorReturn"), require("babel-runtime/helpers/inherits"), require("react"), require("babel-runtime/helpers/defineProperty"), require("classnames"));
	else if(typeof define === 'function' && define.amd)
		define(["babel-runtime/core-js/object/get-prototype-of", "babel-runtime/helpers/classCallCheck", "babel-runtime/helpers/createClass", "babel-runtime/helpers/possibleConstructorReturn", "babel-runtime/helpers/inherits", "react", "babel-runtime/helpers/defineProperty", "classnames"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("babel-runtime/core-js/object/get-prototype-of"), require("babel-runtime/helpers/classCallCheck"), require("babel-runtime/helpers/createClass"), require("babel-runtime/helpers/possibleConstructorReturn"), require("babel-runtime/helpers/inherits"), require("react"), require("babel-runtime/helpers/defineProperty"), require("classnames")) : factory(root["babel-runtime/core-js/object/get-prototype-of"], root["babel-runtime/helpers/classCallCheck"], root["babel-runtime/helpers/createClass"], root["babel-runtime/helpers/possibleConstructorReturn"], root["babel-runtime/helpers/inherits"], root["react"], root["babel-runtime/helpers/defineProperty"], root["classnames"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FlipCardBoard = undefined;

	var _FlipCardBoard = __webpack_require__(1);

	var _FlipCardBoard2 = _interopRequireDefault(_FlipCardBoard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.FlipCardBoard = _FlipCardBoard2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(6);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _Card = __webpack_require__(8);

	var _Card2 = _interopRequireDefault(_Card);

	var _flipCardBoard = __webpack_require__(12);

	var _flipCardBoard2 = _interopRequireDefault(_flipCardBoard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FlipCardBoard = function (_React$Component) {
	    (0, _inherits3.default)(FlipCardBoard, _React$Component);

	    function FlipCardBoard(props) {
	        (0, _classCallCheck3.default)(this, FlipCardBoard);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FlipCardBoard).call(this, props));

	        _this.onClickHandler = _this.onClickHandler.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(FlipCardBoard, [{
	        key: 'onClickHandler',
	        value: function onClickHandler(cardData) {
	            this.props.onCardClick(cardData);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var that = this;
	            var cardNodes = this.props.cards.map(function (cardData) {
	                return _react2.default.createElement(_Card2.default, { data: cardData,
	                    key: cardData.id,
	                    onClick: that.onClickHandler });
	            });

	            return _react2.default.createElement(
	                'div',
	                { className: _flipCardBoard2.default.content },
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    cardNodes
	                )
	            );
	        }
	    }]);
	    return FlipCardBoard;
	}(_react2.default.Component);

	FlipCardBoard.defaultProps = {
	    cards: [],
	    onCardClick: function onCardClick() {}
	};

	exports.default = FlipCardBoard;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(9);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(4);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(6);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _classnames = __webpack_require__(10);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _card = __webpack_require__(11);

	var _card2 = _interopRequireDefault(_card);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Card = function (_React$Component) {
	    (0, _inherits3.default)(Card, _React$Component);

	    function Card(props) {
	        (0, _classCallCheck3.default)(this, Card);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Card).call(this, props));

	        _this.onClickHandler = _this.onClickHandler.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(Card, [{
	        key: 'onClickHandler',
	        value: function onClickHandler() {
	            this.props.onClick(this.props.data);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _classNames;

	            var cardClass = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, _card2.default.card, true), (0, _defineProperty3.default)(_classNames, _card2.default.flipped, this.props.data.flipped), _classNames));

	            return _react2.default.createElement(
	                'div',
	                { className: _card2.default.cardcontainer,
	                    onClick: this.onClickHandler },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'card', className: cardClass },
	                    _react2.default.createElement(
	                        'figure',
	                        { className: _card2.default.front },
	                        '?'
	                    ),
	                    _react2.default.createElement(
	                        'figure',
	                        { className: _card2.default.back },
	                        this.props.data.image
	                    )
	                )
	            );
	        }
	    }]);
	    return Card;
	}(_react2.default.Component);

	Card.defaultProps = {
	    data: {
	        flipped: false
	    },
	    onClick: function onClick() {}
	};

	exports.default = Card;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/defineProperty");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"cardcontainer":"card__cardcontainer___1DtgA","card":"card__card___Jdl3p","front":"card__front___3obto","back":"card__back___3r6c-","flipped":"card__flipped___2M9nV"};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"content":"flipCardBoard__content___6KwVP"};

/***/ }
/******/ ])
});
;
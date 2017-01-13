/******/ (function(modules) { // webpackBootstrap
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

	__webpack_require__(1);
	__webpack_require__(3);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _teamlist = __webpack_require__(2);

	var _teamlist2 = _interopRequireDefault(_teamlist);

	var _chart = __webpack_require__(3);

	var _chart2 = _interopRequireDefault(_chart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	ReactDOM.render(React.createElement(
	  'h1',
	  null,
	  'Tech Stacks'
	), document.getElementById('title'));

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'p',
	          null,
	          React.createElement(
	            ReactRouter.IndexLink,
	            { to: '/' },
	            'Home'
	          ),
	          ' | ',
	          React.createElement(
	            ReactRouter.Link,
	            { to: '/chart' },
	            'Chart'
	          )
	        ),
	        React.createElement('hr', null),
	        React.createElement(
	          'div',
	          { className: 'content' },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return App;
	}(React.Component);

	ReactDOM.render(React.createElement(
	  ReactRouter.Router,
	  null,
	  React.createElement(
	    ReactRouter.Route,
	    { path: '/', component: App },
	    React.createElement(ReactRouter.IndexRoute, { component: _teamlist2.default }),
	    React.createElement(ReactRouter.Route, { path: 'Chart', component: _chart2.default })
	  )
	), document.getElementById('container'));

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TeamBox = function (_React$Component) {
	  _inherits(TeamBox, _React$Component);

	  function TeamBox() {
	    _classCallCheck(this, TeamBox);

	    var _this = _possibleConstructorReturn(this, (TeamBox.__proto__ || Object.getPrototypeOf(TeamBox)).call(this));

	    _this.state = { EditingItemId: -1, TeamData: [] };
	    return _this;
	  }

	  _createClass(TeamBox, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var datasvc = new DataService();
	      datasvc.getTeamData(function (res) {
	        _this2.setState({ TeamData: res });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var teamNodes = this.state.TeamData.map(function (teamInfo) {
	        var _this3 = this;

	        if (teamInfo.TeamId === this.state.EditingItemId) {
	          return React.createElement(
	            'div',
	            { key: teamInfo.TeamId },
	            React.createElement('input', { type: 'text', value: teamInfo.TeamName, ref: function ref(input) {
	                return input && input.focus();
	              }, onBlur: function onBlur(e) {
	                return _this3.changeToSpan(e);
	              }, onChange: function onChange(e) {
	                return _this3.changeTeamHandler(e);
	              } }),
	            ' : ',
	            React.createElement('br', null),
	            React.createElement(TeamSkillTags, { TeamData: teamInfo })
	          );
	        } else {
	          return React.createElement(
	            'div',
	            { key: teamInfo.TeamId },
	            React.createElement(
	              'span',
	              { onClick: function onClick(e) {
	                  return _this3.changeToInput(teamInfo.TeamId, e);
	                } },
	              teamInfo.TeamName
	            ),
	            ' : ',
	            React.createElement('br', null),
	            React.createElement(TeamSkillTags, { TeamData: teamInfo })
	          );
	        }
	      }, this);

	      var plusButtonStyle = {
	        position: 'absolute',
	        right: '4px',
	        width: '48px'
	      };
	      return React.createElement(
	        'div',
	        { className: 'teamBoxes' },
	        teamNodes,
	        React.createElement('br', null),
	        React.createElement('img', { src: './img/plusbutton.png', onClick: function onClick(e) {
	            return _this4.addNewTeam(e);
	          }, style: plusButtonStyle })
	      );
	    }
	  }, {
	    key: 'addNewTeam',
	    value: function addNewTeam(id) {
	      this.state.TeamData.push({ 'TeamName': 'New Team', 'Skills': [], 'TeamId': this.state.TeamData.length + 1 });
	      this.forceUpdate();
	    }
	  }, {
	    key: 'changeTeamHandler',
	    value: function changeTeamHandler(event) {
	      console.log('new input : ' + event.target.value);
	      var t = this;
	      var teamNodes = this.state.TeamData.map(function (teamInfo) {
	        if (teamInfo.TeamId === t.state.EditingItemId) {
	          teamInfo.TeamName = event.target.value;
	          t.forceUpdate();
	          return;
	        }
	      });
	    }
	  }, {
	    key: 'changeToInput',
	    value: function changeToInput(id) {
	      this.setState({ EditingItemId: id });
	    }
	  }, {
	    key: 'changeToSpan',
	    value: function changeToSpan() {
	      var t = this;
	      var teamNodes = this.state.TeamData.map(function (teamInfo) {
	        if (teamInfo.TeamId === t.state.EditingItemId) {
	          var datasvc = new DataService();
	          datasvc.postTeamData({
	            "TableName": "TSteam",
	            "Item": { "TeamId": teamInfo.TeamId, "TeamName": teamInfo.TeamName, "Skills": teamInfo.Skills }
	          }, function (res) {
	            console.log(res);
	          });
	        }
	      });
	      this.setState({ EditingItemId: -1 });
	    }
	  }]);

	  return TeamBox;
	}(React.Component);

	exports.default = TeamBox;

	var TeamSkillTags = function (_React$Component2) {
	  _inherits(TeamSkillTags, _React$Component2);

	  function TeamSkillTags() {
	    _classCallCheck(this, TeamSkillTags);

	    return _possibleConstructorReturn(this, (TeamSkillTags.__proto__ || Object.getPrototypeOf(TeamSkillTags)).apply(this, arguments));
	  }

	  _createClass(TeamSkillTags, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'span',
	        { className: 'teamSkillTags' },
	        React.createElement(Tags, { data: this.props.TeamData })
	      );
	    }
	  }]);

	  return TeamSkillTags;
	}(React.Component);

	var Tags = function (_React$Component3) {
	  _inherits(Tags, _React$Component3);

	  function Tags(props) {
	    _classCallCheck(this, Tags);

	    var _this6 = _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).call(this, props));

	    _this6.state = { tags: props.data.Skills, TeamId: props.data.TeamId, TeamName: props.data.TeamName };
	    return _this6;
	  }

	  _createClass(Tags, [{
	    key: 'handleChange',
	    value: function handleChange(newTags) {
	      var datasvc = new DataService();
	      datasvc.postTeamData({
	        "TableName": "TSteam",
	        "Item": { "TeamId": this.state.TeamId, "TeamName": this.state.TeamName, "Skills": newTags }
	      }, function (res) {
	        console.log(res);
	      });
	      console.log('old tags : ' + this.state.tags);
	      console.log('new tags : ' + newTags);
	      console.log('teamId : ' + this.state.TeamId);
	      console.log('teamName : ' + this.state.TeamName);
	      this.setState({ tags: newTags });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(ReactTagsInput, { value: this.state.tags, onChange: this.handleChange.bind(this), inputProps: { placeholder: "Add Tech" } });
	    }
	  }]);

	  return Tags;
	}(React.Component);

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PieChart = rd3.PieChart;

	var pieData = [{ label: 'C++', value: 20.0 }, { label: 'JavaScript', value: 55.0 }, { label: 'C#', value: 25.0 }, { label: 'Java', value: 25.0 }];

	var coloring = function coloring(idx) {
	  //color setup
	  var colorCode = void 0;
	  switch (idx) {
	    case 0:
	      colorCode = "#111111";
	      break;
	    case 1:
	      colorCode = "#222222";
	      break;
	    case 2:
	      colorCode = "#333333";
	      break;
	    case 3:
	      colorCode = "#444444";
	      break;
	    case 4:
	      colorCode = "#555555";
	      break;
	    case 5:
	      colorCode = "#666666";
	      break;
	    case 6:
	      colorCode = "#777777";
	      break;
	    case 7:
	      colorCode = "#888888";
	      break;
	    case 8:
	      colorCode = "#999999";
	      break;
	    case 9:
	      colorCode = "#aaaaaa";
	      break;
	    case 10:
	      colorCode = "#bbbbbb";
	      break;
	    case 11:
	      colorCode = "#cccccc";
	      break;

	  }
	  return d3.rgb(colorCode);
	};

	var SkillChart = function (_React$Component) {
	  _inherits(SkillChart, _React$Component);

	  function SkillChart() {
	    _classCallCheck(this, SkillChart);

	    var _this = _possibleConstructorReturn(this, (SkillChart.__proto__ || Object.getPrototypeOf(SkillChart)).call(this));

	    var datasvc = new DataService();
	    datasvc.getSummaryData(function (res) {
	      pieData = res;
	      _this.setState({ pieData: pieData });
	    });
	    return _this;
	  }

	  _createClass(SkillChart, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(PieChart, {
	        data: pieData,
	        width: 600,
	        height: 600,
	        radius: 180,
	        innerRadius: 0,
	        cx: 0,
	        cy: 220,
	        sectorBorderColor: 'white',
	        colors: coloring
	      });
	    }
	  }]);

	  return SkillChart;
	}(React.Component);

	exports.default = SkillChart;
	;

/***/ }
/******/ ]);
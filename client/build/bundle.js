/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var RequestHelper = function () {

};

RequestHelper.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', function(){
      if(request.status !== 200) return;
      var jsonString = request.responseText;
      var resultsObject = JSON.parse(jsonString);
      callback(resultsObject);
    })
    request.send();
  },
  makePostRequest: function(url, callback, payload){
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', function(){
      if(request.status !== 200) return;
      var jsonString = request.responseText;
      var resultsObject = JSON.parse(jsonString);
      callback(resultsObject);
    })
    request.send(payload);
  }
};

module.exports = RequestHelper;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Fixtures = __webpack_require__(4);
var RequestHelper = __webpack_require__(0)
var MapWrapper = __webpack_require__(5)

var UI = function(){
  var fixtures = new Fixtures();
  fixtures.all(function(results){
    this.render(results);
  }.bind(this));
  var mapDiv = document.getElementById("main-map");
  mapDiv.style.height = "500px";
  mapDiv.style.width = "500px";
  var center = {lat: -42.570323, lng: 172.146130}
  this.mainMap = new MapWrapper(center, 5, mapDiv)
}

UI.prototype = {
  createText: function(text, label){
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(fixtures){
    var container = document.getElementById("fixtures-container");
    container.innerHTML = "";
    for (var fixture of fixtures) {
      var li = document.createElement('li');
      this.appendText(li, fixture.homeTeamName, 'Home: ');
      this.appendText(li, fixture.awayTeamName, 'Away: ');
      this.addMapMarker(fixture);

      container.appendChild(li);
    }
  },
  addMapMarker: function(fixture){
    console.log(fixture.stadium.latLng)
    this.mainMap.addMarker(fixture.stadium.latLng);
  }
}

module.exports = UI;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var UI = __webpack_require__(1);

var app = function() {
  new UI();
}

window.addEventListener('load', app);

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Fixture = __webpack_require__ (6);
var RequestHelper = __webpack_require__(0)

var Fixtures = function() {
  this.requestHelper = new RequestHelper();
}

Fixtures.prototype = {
  all: function(callback){
    this.requestHelper.makeRequest("http://localhost:3000/api/fixtures", function(results){
      var fixtures = this.populateFixtures(results);
      callback(fixtures);
    }.bind(this));
  },
  populateFixtures: function(results){
    var fixtures = results.map(function(resultObject){
      return new Fixture(resultObject);
    })
    return fixtures;
  },
  add: function(newFixture, callback){
    var fixtureData = JSON.stringify(newFixture);
    this.requestHelper.makePostRequest("http://localhost:3000/api/fixtures", callback, fixtureData);
  }
};

module.exports = Fixtures;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var MapWrapper = function(coords, zoom, container){
  

  this.googleMap = new google.maps.Map(container, {
    zoom: zoom, 
    center: coords
  });
  this.markers = [];
}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    this.markers.push(marker);
  }
  // addInfoToWindow: function(index, info){
  //   var marker = this.markers[index]
  //   var infowindow = new google.maps.InfoWindow({
  //       content: info
  //     });
  //   marker.addListener("click", function(){
  //     infowindow.open(this.googleMap, marker)
  //   }.bind(this))
  // },
  // addClickEvent: function(){
  //   google.maps.event.addListener(this.googleMap, "click", function(event){
  //     var position = {
  //       lat: event.latLng.lat(),
  //       lng: event.latLng.lng()
  //     };
  //     this.addMarker(position);
  //   }.bind(this));
  // }
}

module.exports = MapWrapper;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var Fixture = function(options) {
  this.date = options.date;
  this.matchNumber = options.matchNumber;
  this.kickOffTime = options.kickOffTime;
  this.homeTeamName = options.homeTeamName;
  this.awayTeamName = options.awayTeamName;
  this.stadium = options.stadium;
  this.result = options.result;
  }

module.exports = Fixture;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
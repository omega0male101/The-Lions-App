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
  mapDiv.style.width = "900px";
  var center = {lat: -42.570323, lng: 172.146130}
  this.mainMap = new MapWrapper(center, 5, mapDiv)
  this.requestHelper = new RequestHelper();
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
    // var labelIndex = 1;
    // for (var fixture of fixtures) {
      fixtures.forEach(function (fixture, index) {
      url = "http://api.openweathermap.org/data/2.5/weather?lat=" + fixture.stadium.latLng.lat + "&lon=" + fixture.stadium.latLng.lng + "&appid=d1da5efdf6bd32c103ff303597e79de2";
      

      this.addMapMarker(fixture, String(index + 1));
      

      // Declaring elements
      var div_game = document.createElement('div');
        div_game.setAttribute("id", "fixture-game");
      var div_element = document.createElement('div');
        div_element.setAttribute("id", "fixtures-element");
      var div_info = document.createElement('div');
        div_info.setAttribute("id", "info-div");
      var div_seperator = document.createElement('div');
        div_seperator.setAttribute("id", "seperator-div");
      var div_stadium = document.createElement('div');
        div_stadium.setAttribute("id", "stadium-div");
      var div_details = document.createElement('div');
        div_details.setAttribute("id", "details-div");
      var div_weather = document.createElement('div');
        div_weather.setAttribute("id", "weather-div");
      var div_buttons = document.createElement('div');
        div_buttons.setAttribute("id", "buttons-div");


        // Home & Away Teams
      var teamWrapper = document.createElement('div');
        teamWrapper.setAttribute("id", "team-wrapper");
      var spanHomeTeam = document.createElement('span');
        spanHomeTeam.setAttribute("id", "home-team");
      var spanVS = document.createElement('span');
        spanVS.setAttribute("id", "VS");
      var spanAwayTeam = document.createElement('span');
        spanAwayTeam.setAttribute("id", "away-team");

        spanHomeTeam.textContent = fixture.homeTeamName;
        spanVS.textContent = " VS ";
        spanAwayTeam.textContent = fixture.awayTeamName;

        // Stadium Picture (does not work)
      var stadiumPic = document.createElement('img');
        stadiumPic.setAttribute("id", "stadium-pic");

        stadiumPic.src = fixture.stadium.image;
        // stadiumPic.style.height = 100px;
        // stadiumPic.style.width = 200px;

        // Weather 
      var weather = document.createElement('span');
        weather.setAttribute("id", "weather-text" + index);

        // Details (Date, Arena, Timezone)
      var spanDate = document.createElement('p');
        spanDate.setAttribute("id", "date");
      var spanArena = document.createElement('p');
        spanArena.setAttribute("id", "arena");
      var spanTime = document.createElement('p');
        spanTime.setAttribute("id", "time");

        spanDate.textContent = "Date: " + fixture.date;
        spanArena.textContent = "At " + fixture.stadium.name + ", in " + fixture.stadium.location;
        spanTime.textContent = "Kick off: " + fixture.kickOffTime;

        // Buttons
      var buttonTeam = document.createElement('button');
        buttonTeam.setAttribute("id", "team-button");
          buttonTeam.text = "team-button";
      var buttonTicket = document.createElement('button');
        buttonTicket.setAttribute("id", "ticket-button");
      var buttonFav = document.createElement('button');
        buttonFav.setAttribute("id", "favourite-button");

        // Horizontal Line
      var line = document.createElement('hr');
        div_seperator.appendChild(line);

        //Expandble List
      // var label = document.createElement('label');
      //   label.setAttribute("class", "collapse");
      //   label.innerText = "click for more details.."
      //   label.htmlFor = "_1";

      // var input = document.createElement('input');
      //   input.setAttribute("id", "_1");
      //   input.type = "checkbox";
      

        
    // Append all elements to body of the list item
      div_game.appendChild(spanHomeTeam);
      div_game.appendChild(spanVS);
      div_game.appendChild(spanAwayTeam);

      teamWrapper.appendChild(div_game);

      div_stadium.appendChild(stadiumPic)

      div_weather.appendChild(weather);

      div_buttons.appendChild(buttonTeam);
      div_buttons.appendChild(buttonTicket);
      div_buttons.appendChild(buttonFav);

      div_details.appendChild(spanDate);
      div_details.appendChild(spanArena);
      div_details.appendChild(spanTime);

      
      div_info.appendChild(div_seperator);
      div_info.appendChild(div_stadium);
      div_info.appendChild(div_details);
      div_info.appendChild(div_weather);
      div_info.appendChild(div_buttons);

      div_element.appendChild(teamWrapper);
      // div_element.appendChild(label);
      // div_element.appendChild(input);
      
      div_element.appendChild(div_info);

      container.appendChild(div_element)
      this.requestHelper.makeRequest(url, function ( location ) {
        console.log(location, weather)
        this.populateWeather(location, weather)
      }.bind(this) )
    }.bind(this))
  },

  populateWeather: function(location, weatherSpan){
    // var span = document.getElementById('weather-text' + labelIndex);
    console.log(weatherSpan)
    var p = document.createElement('span')
    p.innerText = "Weather type: " + location.weather[0].main;
    p.setAttribute("id", "weather-text-top");


    var p2 = document.createElement('span')
    var tempCelsius = Math.round((location.main.temp - 273.15))
    p2.innerText = "Temperature (celsius): " + tempCelsius
    p2.setAttribute("id", "weather-text-bottom");


    weatherSpan.appendChild(p)
    weatherSpan.appendChild(p2)
  },

  addMapMarker: function(fixture, labelIndex){
    this.mainMap.addMarker(fixture.stadium.latLng, labelIndex);
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
/* 3 */
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Fixture = __webpack_require__ (3);
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
    center: coords,
    styles:
    // adding styles..
    [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
    // end of style..
  });
  this.markers = [];
}

MapWrapper.prototype = {
  addMarker: function(coords, index){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      label: index
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

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
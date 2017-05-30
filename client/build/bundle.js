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
var Teams = __webpack_require__(7);
var RequestHelper = __webpack_require__(0);
var MapWrapper = __webpack_require__(5);

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

      var div_countdown = document.createElement('div');
        div_countdown.setAttribute("id", "countdown-div");
      var div_container_main_details = document.createElement('div');
        div_container_main_details.setAttribute("id", "container-info");
      var div_container_top_two = document.createElement('div');
        div_container_top_two.setAttribute("id", "container-of2-info");
      var div_full_wrap = document.createElement('div');
        div_full_wrap.setAttribute("id", "div-full-wrap");

        // Home & Away Teams
      var teamWrapper = document.createElement('div');
        teamWrapper.setAttribute("id", "team-wrapper");
      // var spanHomeTeam = document.createElement('span');
      var spanHomeTeam = document.createElement('img');
          spanHomeTeam.setAttribute("id", "home-team");
          spanHomeTeam.src = "/logos/" + fixture.homeTeamName + ".svg";
        // spanHomeTeam.setAttribute("id", "home-team");

      // var spanVS = document.createElement('span');
      var spanVS = document.createElement('span');
          spanVS.setAttribute("id", "VS");
          spanVS.textContent = " V ";
        // spanVS.setAttribute("id", "VS");

      // var spanAwayTeam = document.createElement('span');
      var spanAwayTeam = document.createElement('img');
          spanAwayTeam.setAttribute("id", "away-team");
          spanAwayTeam.src = "/logos/" + fixture.awayTeamName + ".svg";
       
      // Points Bar (Scores)
      var scoreWrapper = document.createElement('div');
        scoreWrapper.setAttribute("id", "score-wrapper");

      var awayPoints = document.createElement('span')
      var homePoints = document.createElement('span')
      var dash = document.createElement('span')

        awayPoints.setAttribute("id", "away-points");
        homePoints.setAttribute("id", "home-points");
        dash.setAttribute("id", "dash-points");

        awayPoints.textContent = fixture.result.awayTeamPoints;
        homePoints.textContent = fixture.result.homeTeamPoints;
        dash.textContent = " - ";

        //Team A / B display
    var spanHomeTeamName = document.createElement('span');
      spanHomeTeamName.setAttribute("id", "home-team-name");
    
    var spanAwayTeamName = document.createElement('span');
      spanAwayTeamName.setAttribute("id", "away-team-name");

      spanHomeTeamName.textContent = fixture.homeTeamName;
      spanAwayTeamName.textContent = fixture.awayTeamName;

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
      var monthDate = document.createElement('p');
        monthDate.setAttribute("id", "date");
      var spanArena = document.createElement('p');
        spanArena.setAttribute("id", "arena");

        var newDate = new Date(fixture.date)
        var monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];

        function nth(date) {
          if(date>3 && date<21) return 'th';
          switch (date % 10) {
                case 1:  return "st";
                case 2:  return "nd";
                case 3:  return "rd";
                default: return "th";
            }
        } 

        monthDate.textContent = "Game commences on the " + newDate.getDate() + nth(newDate.getDate()) + " of " + monthNames[newDate.getMonth()] + " at " + fixture.date.slice(11,16) + " (BST)";

        spanArena.textContent = "Playing at " + fixture.stadium.name + ", in " + fixture.stadium.location + ".";
        // spanTime.textContent = "Kick off: " + fixture.date.slice(11,16) + " (BST)";

      
        
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function getTimeToKickOff() {
          var kickOffMs = Date.parse(fixture.date)
          var distance = (kickOffMs - Date.now())

          if (distance < 0) {
            clearInterval(timer);
            console.log("EXPIRED!");
            return;
          }
          var days = Math.floor(distance / _day);
          var hours = Math.floor((distance % _day) / _hour);
          var minutes = Math.floor((distance % _hour) / _minute);
          var seconds = Math.floor((distance % _minute) / _second);

          // console.log(days + 'days ' + hours + 'hrs ' + minutes + 'mins ' + seconds + 'secs');
          
          var timeToKickOff = {}
          timeToKickOff.days = days
          timeToKickOff.hours = hours
          timeToKickOff.minutes = minutes
          timeToKickOff.seconds = seconds

          return timeToKickOff
        }

        timer = setInterval(getTimeToKickOff, 1000);
        
        // Countdown to game..
      // var countdown = document.createElement('span')
      //   countdown.setAttribute("id", "countdown-timer")
      //   countdown.textContent = "Days: " + getTimeToKickOff().days

          //Counter Boxes
        var divDay = document.createElement('div');
            divDay.setAttribute("class", "counter")
            divDay.textContent = getTimeToKickOff().days + " DAYS"
        var divHour = document.createElement('div');
            divHour.setAttribute("class", "counter")
            divHour.textContent = getTimeToKickOff().hours + " HOURS"
        var divMinute = document.createElement('div');
            divMinute.setAttribute("class", "counter")
            divMinute.textContent = getTimeToKickOff().minutes + " MINUTES"
        var divSecond = document.createElement('div');
            divSecond.setAttribute("class", "counter")
            divSecond.textContent = getTimeToKickOff().seconds + " s";
        



        // Buttons
      var buttonHomeTeam = document.createElement('button');
        buttonHomeTeam.setAttribute("id", fixture.homeTeamName);
        buttonHomeTeam.setAttribute("class", "home-team-button");
          buttonHomeTeam.innerText = "Home Team Details";
          buttonHomeTeam.addEventListener("click", function(){
            if(event.srcElement.id === "New Zealand Provincial Barbarians"){
              this.renderTeam(1);
            };
            if(event.srcElement.id === "New Zealand"){
              this.renderTeam(2);
            }
          }.bind(this))
      var buttonTeam = document.createElement('button');
        buttonTeam.setAttribute("id", "lions-button");
          buttonTeam.innerText = "Lions Details";
          buttonTeam.addEventListener("click", function(){
            this.renderTeam(0);
          }.bind(this))
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

      scoreWrapper.appendChild(spanHomeTeamName);
      scoreWrapper.appendChild(awayPoints);
      scoreWrapper.appendChild(dash);
      scoreWrapper.appendChild(homePoints);
      scoreWrapper.appendChild(spanAwayTeamName);

      teamWrapper.appendChild(div_game);
      teamWrapper.appendChild(scoreWrapper);

      div_stadium.appendChild(stadiumPic)
      div_weather.appendChild(weather);


      // div_countdown.appendChild(countdown);
      div_countdown.appendChild(divDay);
      div_countdown.appendChild(divHour);
      div_countdown.appendChild(divMinute);
      div_countdown.appendChild(divSecond);
      div_details.appendChild(monthDate);
      div_details.appendChild(spanArena);

      div_container_top_two.appendChild(div_details);
      div_container_top_two.appendChild(div_countdown);

      div_container_main_details.appendChild(div_container_top_two);
      div_container_main_details.appendChild(div_weather);

      div_full_wrap.appendChild(div_stadium);
      div_full_wrap.appendChild(div_container_main_details);

      div_buttons.appendChild(buttonHomeTeam);
      div_buttons.appendChild(buttonTeam);
      div_buttons.appendChild(buttonTicket);
      div_buttons.appendChild(buttonFav);

      div_info.appendChild(div_seperator);
      div_info.appendChild(div_full_wrap);
      div_info.appendChild(div_buttons);

      div_element.appendChild(teamWrapper);
      // div_element.appendChild(label);
      // div_element.appendChild(input);
      div_element.appendChild(div_info);

      container.appendChild(div_element);

      this.requestHelper.makeRequest(url, function ( location ) {
        this.populateWeather(location, weather)
      }.bind(this) )

    }.bind(this))
  },

  renderTeam: function(index){
    var body = document.getElementsByTagName("BODY")[0];
    body.innerHTML = "";
    var teamDiv = document.createElement("div");
    teamDiv.setAttribute("id", "teamDiv")
    var backButton = document.createElement("button");
    backButton.setAttribute("id", "back-button");
    backButton.innerText = "Back to Homepage"
    backButton.addEventListener("click", function(){
      window.location.href = "http://localhost:3000/";
    });

    var teams = new Teams();
    teams.all(function(results){
      this.populateTeam((results[index]))
    }.bind(this))

    body.appendChild(teamDiv);
    teamDiv.appendChild(backButton);

  },

  populateTeam: function(team){
    console.log(team)
    var teamDiv = document.getElementById("teamDiv");
    var teamHeading = document.createElement("h1");
    teamHeading.setAttribute("id", "teamHeading")
    var teamHistory = document.createElement("p");
    teamHistory.setAttribute("id", "teamHistory")
    var playersDiv = document.createElement("div");
    playersDiv.setAttribute("id", "playersDiv")
    var squadHeading = document.createElement("h3");
    squadHeading.innerText = "Squad"
    teamHistory.innerText = team.history;
    teamHeading.innerText = team.name;
    playersDiv.appendChild(squadHeading);
    teamDiv.appendChild(teamHeading);
    teamDiv.appendChild(teamHistory);
    teamDiv.appendChild(playersDiv);


    team.players.forEach(function(player, index){
      var playerDiv = document.createElement("div");
      playerDiv.setAttribute("class", "playerDiv");
      playerDiv.setAttribute("id", "playerDiv" + index);
      var playerName = document.createElement("p");
      playerName.setAttribute("class", "playerName");
      playerName.setAttribute("id", "playerName" + index);
      var playerPosition = document.createElement("p");
      playerPosition.setAttribute("class", "playerPosition");
      playerPosition.setAttribute("id", "playerPosition" + index);
      var playerDOB = document.createElement("p");
      playerDOB.setAttribute("class", "playerDOB");
      playerDOB.setAttribute("id", "playerDOB" + index);
      var playerHeight = document.createElement("p");
      playerHeight.setAttribute("class", "playerHeight");
      playerHeight.setAttribute("id", "playerHeight" + index);
      var playerWeight = document.createElement("p");
      playerWeight.setAttribute("class", "playerWeight");
      playerWeight.setAttribute("id", "playerWeight" + index);
      var playerClub = document.createElement("p");
      playerClub.setAttribute("class", "playerClub");
      playerClub.setAttribute("id", "playerClub" + index);
      var playerCaps = document.createElement("p");
      playerCaps.setAttribute("class", "playerCaps");
      playerCaps.setAttribute("id", "playerCaps" + index);
      var playerImageContainer = document.createElement("div");
      playerImageContainer.setAttribute("class", "playerImageContainer");
      playerImageContainer.setAttribute("id", "playerImageContainer" + index);
      var playerImage = document.createElement("img");
      playerImage.setAttribute("class", "playerImage");
      playerImage.setAttribute("id", "playerImage" + index);
      var expander = document.createElement("img");
      expander.setAttribute("class", "expander");
      expander.setAttribute("id", "expander" + index);
      var contractor = document.createElement("img");
      contractor.setAttribute("class", "contractor");
      contractor.setAttribute("id", "contractor" + index);
      playerName.innerText = "Name: " + player.name;
      playerPosition.innerText = "Position: " + player.position;
      playerDOB.innerText = "Date of Birth " + player.dob;
      playerDOB.style.display = 'none'
      playerHeight.innerText = "Height: " + player.height;
      playerHeight.style.display = 'none'
      playerWeight.innerText = "Weight: " + player.weight;
      playerWeight.style.display = 'none'
      playerClub.innerText = "Club: " + player.club;
      playerClub.style.display = 'none'
      playerCaps.innerText = "Caps: " + player.caps;
      playerCaps.style.display = 'none'
      playerImage.setAttribute("src" , player.image);
      playerImage.style.display = 'none'
      expander.setAttribute("height", "10px")
      expander.setAttribute("width", "10px")
      expander.setAttribute("src", "https://image.flaticon.com/icons/png/512/60/60781.png")
      contractor.setAttribute("height", "10px")
      contractor.setAttribute("width", "10px")
      contractor.setAttribute("src", "https://image.flaticon.com/icons/svg/60/60799.svg")
      contractor.style.display = 'none';
      playerDiv.appendChild(playerName);
      playerDiv.appendChild(playerPosition);
      playerDiv.appendChild(playerDOB);
      playerDiv.appendChild(playerHeight);
      playerDiv.appendChild(playerWeight);
      playerDiv.appendChild(playerCaps);
      playerDiv.appendChild(playerClub);
      playerImageContainer.appendChild(playerImage);
      playerDiv.appendChild(playerImageContainer);
      playerDiv.appendChild(expander);
      playerDiv.appendChild(contractor);
      playersDiv.appendChild(playerDiv);

      expander.addEventListener("click", function(event){
        parent = event.srcElement.parentElement;
        parent.childNodes.forEach(function(child){
          child.style.display = "";
        })
        parent.childNodes[7].childNodes[0].style.display = "";
        parent.childNodes[8].style.display = 'none';
      })

      contractor.addEventListener("click", function(event){
        parent = event.srcElement.parentElement;
        parent.childNodes.forEach(function(child){
          child.style.display = 'none';
        })
        parent.childNodes[0].style.display = "block"
        parent.childNodes[1].style.display = "block"
        parent.childNodes[7].childNodes[0].style.display = 'none';
        parent.childNodes[8].style.display = "";
      })

    })
  },

  populateWeather: function(location, weatherSpan){
    // var span = document.getElementById('weather-text' + labelIndex);

    console.log(weatherSpan)
    var p2 = document.createElement('span')
    p2.innerText = " with a chance of " + location.weather[0].main;
    p2.setAttribute("id", "weather-text-top");

    var p = document.createElement('span')
    var tempCelsius = Math.round((location.main.temp - 273.15))
    p.innerText = tempCelsius + "° "
    p.setAttribute("id", "weather-text-bottom");


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

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var Team = function(options) {
  this.name = options.name;
  this.shortName = options.shortName;
  this.history = options.history;
  this.players = options.players;
  }

module.exports = Team;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Team = __webpack_require__ (6);
var RequestHelper = __webpack_require__(0)

var Teams = function() {
  this.requestHelper = new RequestHelper();
}

Teams.prototype = {
  all: function(callback){
    this.requestHelper.makeRequest("http://localhost:3000/api/teams", function(results){
      var teams = this.populateTeams(results);
      callback(teams);
    }.bind(this));
  },
  populateTeams: function(results){
    var teams = results.map(function(resultObject){
      return new Team(resultObject);
    })
    return teams;
  },
  add: function(newTeam, callback){
    var teamData = JSON.stringify(newTeam);
    this.requestHelper.makePostRequest("http://localhost:3000/api/teams", callback, teamData);
  }
};

module.exports = Teams;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
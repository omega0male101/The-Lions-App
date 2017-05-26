var Fixtures = require("../models/fixtures");
var RequestHelper = require('../helpers/request.js')
var MapWrapper = require('./mapWrapper.js')

var UI = function(){
  var fixtures = new Fixtures();
  fixtures.all(function(results){
    this.render(results);
  }.bind(this));
  var mapDiv = document.getElementById("main-map");
  mapDiv.style.height = "10px";
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
    var labelIndex = 1;
    for (var fixture of fixtures) {
      url = "http://api.openweathermap.org/data/2.5/weather?lat=" + fixture.stadium.latLng.lat + "&lon=" + fixture.stadium.latLng.lng + "&appid=d1da5efdf6bd32c103ff303597e79de2";
      this.requestHelper.makeRequest(url, this.populateWeather )

      this.addMapMarker(fixture, String(labelIndex));
      labelIndex ++;

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
        stadiumPic.setAttribute("id", "stadium-div");

        stadiumPic.src = fixture.stadium.image;
        stadiumPic.style.height = "100px";
        stadiumPic.style.width = "200px";

        // Weather (not implemented yet..)
      var weather = document.createElement('span');
        weather.setAttribute("id", "weather-div");

        // Details (Date, Arena, Timezone)
      // var spanHomeTeam = document.createElement('span');
      //   spanHomeTeam.setAttribute("id", "home-team");
      // var spanVS = document.createElement('span');
      //   spanVS.setAttribute("id", "VS");
      // var spanAwayTeam = document.createElement('span');
      //   spanAwayTeam.setAttribute("id", "away-team");

      //   spanHomeTeam.textContent = fixture.homeTeamName;
      //   spanVS.textContent = " VS ";
      //   spanAwayTeam.textContent = fixture.awayTeamName;




    // Append all elements to body of the list item
      div_game.appendChild(spanHomeTeam);
      div_game.appendChild(spanVS);
      div_game.appendChild(spanAwayTeam);

      
      div_info.appendChild(div_seperator);
      div_info.appendChild(div_stadium);
      div_info.appendChild(div_details);
      div_info.appendChild(div_weather);
      div_info.appendChild(div_buttons);

      div_element.appendChild(div_game);
      div_element.appendChild(div_info);

      container.appendChild(div_element)
    }
  },
  populateWeather: function(location){
    console.log(location)
    var ul = document.getElementById('weatherAPI');
    var li = document.createElement('li')
    li.innerText = "Weather type: " + location.weather[0].main

    var li2 = document.createElement('li')
    var tempCelsius = Math.round((location.main.temp - 273.15))
    li2.innerText = "Temperature (celsius): " + tempCelsius

    ul.appendChild(li)
    ul.appendChild(li2)
  },

  addMapMarker: function(fixture, labelIndex){
    this.mainMap.addMarker(fixture.stadium.latLng, labelIndex);
  }
}

module.exports = UI;

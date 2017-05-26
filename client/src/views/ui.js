var Fixtures = require("../models/fixtures");
var RequestHelper = require('../helpers/request.js')
var MapWrapper = require('./mapWrapper.js')
var Weather = require('./weather.js')

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
    for (var fixture of fixtures) {
      url = "http://api.openweathermap.org/data/2.5/weather?lat=" + fixture.stadium.latLng.lat + "&lon=" + fixture.stadium.latLng.lng + "&appid=d1da5efdf6bd32c103ff303597e79de2";
      this.requestHelper.makeRequest(url, this.populateWeather )
      var li = document.createElement('li');
      this.appendText(li, fixture.homeTeamName, 'Home: ');
      this.appendText(li, fixture.awayTeamName, 'Away: ');

      container.appendChild(li);
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
  }
}

module.exports = UI;

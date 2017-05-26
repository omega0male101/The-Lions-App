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
    console.log(fixtures);
    for (var fixture of fixtures) {
      var li = document.createElement('li');
      this.appendText(li, fixture.homeTeamName, 'Home: ');
      this.appendText(li, fixture.awayTeamName, 'Away: ');

      container.appendChild(li);
    }
  }
}

module.exports = UI;
var Fixtures = require("../models/fixtures");
var Teams = require("../models/teams");
var RequestHelper = require('../helpers/request.js');
var MapWrapper = require('./mapWrapper.js');

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
      var buttonHomeTeam = document.createElement('button');
        buttonHomeTeam.setAttribute("id", fixture.homeTeamName +" team-button");
          buttonHomeTeam.innerText = "Home Team Details";
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

      teamWrapper.appendChild(div_game);

      div_stadium.appendChild(stadiumPic)

      div_weather.appendChild(weather);

      div_buttons.appendChild(buttonHomeTeam);
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
      var playerCaps = document.createElement("p");
      playerCaps.setAttribute("class", "playerCaps");
      playerCaps.setAttribute("id", "playerCaps" + index);
      var playerImageContainer = document.createElement("div");
      playerImageContainer.setAttribute("class", "playerImageContainer");
      playerImageContainer.setAttribute("id", "playerImageContainer" + index);
      var playerImage = document.createElement("img");
      playerImage.setAttribute("class", "playerImage");
      playerImage.setAttribute("id", "playerImage" + index);
      playerName.innerText = player.name;
      playerPosition.innerText = player.position;
      playerDOB.innerText = player.dob;
      playerDOB.style.display = 'none'
      playerCaps.innerText = player.caps;
      playerCaps.style.display = 'none'
      playerImage.setAttribute("src" , player.image);
      playerImage.style.display = 'none'
      playerDiv.appendChild(playerName);
      playerDiv.appendChild(playerPosition);
      playerDiv.appendChild(playerDOB);
      playerDiv.appendChild(playerCaps);
      playerImageContainer.appendChild(playerImage);
      playerDiv.appendChild(playerImageContainer);
      playersDiv.appendChild(playerDiv);

      playerDiv.addEventListener("click", function(event){
        console.log(event.srcElement);
      })
    })
  },

  populateWeather: function(location, weatherSpan){
    // var span = document.getElementById('weather-text' + labelIndex);
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

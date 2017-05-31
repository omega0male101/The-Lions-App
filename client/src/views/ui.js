var Fixtures = require("../models/fixtures");
var Teams = require("../models/teams");
var RequestHelper = require('../helpers/request.js');
var MapWrapper = require('./mapWrapper.js');

var UI = function(){
  this.fixtures = new Fixtures();
  this.fixtures.all(function(results){
    this.render(results);
  }.bind(this));
  this.renderMap();
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

  renderMap: function(){
   var mapDiv = document.getElementById("main-map");
   mapDiv.style.height = "500px";
   mapDiv.style.width = "900px";
   var center = {lat: -42.570323, lng: 172.146130}
   this.mainMap = new MapWrapper(center, 5, mapDiv) 
  },

  renderNavBar: function(){ 
    var body = document.getElementsByTagName("BODY")[0];
    var navDiv = document.createElement("div");
    navDiv.setAttribute("id", "navDiv");
    var homeLink = document.createElement("a");
    homeLink.setAttribute("href", "/");
    homeLink.setAttribute("id", "nav-home");
    homeLink.innerText = "Home";
    var matchesLink = document.createElement("a");
    matchesLink.setAttribute("id", "nav-matches");
    matchesLink.innerText = "My Matches";
    matchesLink.addEventListener("click", this.renderFavourites.bind(this))
    var lionsLink = document.createElement("a");
    lionsLink.setAttribute("id", "nav-lions");
    lionsLink.innerText = "Lions Squad";
    lionsLink.addEventListener("click", function(){
      this.renderTeam(0)
    }.bind(this))
    var nzLink = document.createElement("a");
    nzLink.setAttribute("id", "nav-nz");
    nzLink.innerText = "New Zealand Squad";
    nzLink.addEventListener("click", function(){
      this.renderTeam(2)
    }.bind(this))
    navDiv.appendChild(homeLink);
    navDiv.appendChild(matchesLink);
    navDiv.appendChild(lionsLink);
    navDiv.appendChild(nzLink);
    body.insertBefore(navDiv, body.firstChild);

  },

  render: function(fixtures){
    var container = document.getElementById("fixtures-container");
    if(container === null){
      "still hitting this"
      // var container = document.createElement("div");
      // container.setAttribute("fixtures-container");
    }
    container.innerHTML = "";
    this.renderNavBar();
    // var labelIndex = 1;
    // for (var fixture of fixtures) {
      fixtures.forEach(function (fixture, index) {
      url = "http://api.openweathermap.org/data/2.5/weather?lat=" + fixture.stadium.latLng.lat + "&lon=" + fixture.stadium.latLng.lng + "&appid=d1da5efdf6bd32c103ff303597e79de2";
      

      this.addMapMarker(fixture, String(index + 1));

      this.addMapInfoWindow(index, fixture);

      // Declaring elements
      var div_info = document.createElement('div');
        div_info.setAttribute("id", "info-div" + index);
      var div_buttons = document.createElement('div');
        div_buttons.setAttribute("id", "buttons-div" + index);
      var div_game = document.createElement('div');
        div_game.setAttribute("id", "fixture-game");
      var div_element = document.createElement('div');
        div_element.setAttribute("id", "fixtures-element");
      var div_stadium = document.createElement('div');
        div_stadium.setAttribute("id", "stadium-div");
      var div_details = document.createElement('div');
        div_details.setAttribute("id", "details-div");
      var div_weather = document.createElement('div');
        div_weather.setAttribute("id", "weather-div");
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

        monthDate.textContent = "" + newDate.getDate() + nth(newDate.getDate()) + " of " + monthNames[newDate.getMonth()] + " - " + fixture.date.slice(11,16) + " (BST)";

        spanArena.textContent = "Playing at " + fixture.stadium.name + ", in " + fixture.stadium.location + ".";
        // spanTime.textContent = "Kick off: " + fixture.date.slice(11,16) + " (BST)";
        

      // NEW COUNTDOWN TIMER

      var divDay = document.createElement('div');
          divDay.setAttribute("class", "counter")
      var divHour = document.createElement('div');
          divHour.setAttribute("class", "counter")
      var divMinute = document.createElement('div');
          divMinute.setAttribute("class", "counter")
      var divSecond = document.createElement('div');
          divSecond.setAttribute("class", "counter")

      var newCountDownTimer = setInterval(function(){

        var kickOffMs2 = Date.parse(fixture.date)

        var distance2 = (kickOffMs2 - Date.now())

        var days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

         divDay.innerText = days + " DAYS"
         divHour.innerText = hours + " HOURS"
         divMinute.innerText = minutes + " MINUTES"
         divSecond.innerText = seconds + " SECS";

        if (distance2 < 0) {
            clearInterval(newCountDownTimer);
            divDay.innerText = "GAME"
            divHour.innerText = "OVER"
            divMinute.innerText = "MAN"
            divSecond.innerText = "!!!";
          }

      }, 1000)

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
      var buttonFav = document.createElement('button');
        buttonFav.setAttribute("class", "favourite-button");
        buttonFav.setAttribute("id", index);
        buttonFav.setAttribute("value", fixture.matchNumber);
        buttonFav.innerText = "Add to My Matches"
        buttonFav.onclick = function(){
          this.requestHelper.makeRequest("http://localhost:3000/api/fixtures/" + event.srcElement.id, function(result){
            this.fixtures.addMatches(result, this.renderFavourites.bind(this))
          }.bind(this));
        }.bind(this)
        
        var buttonTicket = document.createElement("a")
        buttonTicket.setAttribute("id", "ticket-button")
        buttonTicket.setAttribute("href", "https://www.viagogo.co.uk/Sports-Tickets/Rugby-Union/British-and-Irish-Lions-Tour-Tickets?AffiliateID=49&adposition=1t1&PCID=PSGBGOOSPOBRITIBBD9BF6920-000000&AdID=190438821763&MetroRegionID=&psc=&psc=&ps=&ps=&ps_p=0&ps_c=800200696&ps_ag=44193728529&ps_tg=kwd-12628952&ps_ad=190438821763&ps_adp=1t1&ps_fi=&ps_fi=&ps_li=&ps_li=&ps_lp=9046888&ps_n=g&ps_d=c&gclid=CjwKEAjwsLTJBRCvibaW9bGLtUESJAC4wKw1nuVPhR727H3_ezuQFFH0tWwPXyiiESBT4sLVpudCNRoCAYvw_wcB");
        buttonTicket.setAttribute("target", "_blank")
        buttonTicket.innerText = "Find Tickets";


      //Create Button to expand and contract

      var expanderMain = document.createElement("img");
        expanderMain.setAttribute("class", "expander-main"+ index);
        expanderMain.setAttribute("id", "expander-main"+ index);
      var contractorMain = document.createElement("img");
        contractorMain.setAttribute("class", "contractor-main"+ index);
        contractorMain.setAttribute("id", "contractor-main"+ index);

        expanderMain.setAttribute("height", "14px")
        expanderMain.setAttribute("width", "14px")
        expanderMain.setAttribute("align-content", "right")
        expanderMain.setAttribute("src", "https://image.flaticon.com/icons/png/512/60/60781.png")
        contractorMain.setAttribute("height", "14px")
        contractorMain.setAttribute("width", "14px")
        contractorMain.setAttribute("src", "https://image.flaticon.com/icons/svg/60/60799.svg")
        contractorMain.style.display = 'none';


      expanderMain.addEventListener("click", function(event){
        parent = event.srcElement.parentElement;
        parent.childNodes.forEach(function(child){
          infoDiv = document.getElementById("info-div" + index);
            expanderOpen = document.getElementById("expander-main" + index);
            expanderOpen.style.display = "none";
          infoDiv.style.display = "flex";
          buttonsDiv = document.getElementById("buttons-div" + index);
            contractorClose = document.getElementById("contractor-main" + index);
            contractorClose.style.display = "inline-block";
          buttonsDiv.style.display = "flex";
          
        })
       
      })

      contractorMain.addEventListener("click", function(event){

        parent = event.srcElement.parentElement;
        parent.childNodes.forEach(function(child){

          expanderOpen = document.getElementById("expander-main"+ index);
          expanderOpen.style.display = "inline-block";
          contractorClose = document.getElementById("contractor-main"+ index);
          contractorClose.style.display = "none";

          infoDiv = document.getElementById("info-div"+ index);
          infoDiv.style.display = "none";
          buttonsDiv = document.getElementById("buttons-div"+ index);
          buttonsDiv.style.display = "none";
            })
          })

  
          
          
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
      teamWrapper.appendChild(expanderMain);
      teamWrapper.appendChild(contractorMain);

      div_stadium.appendChild(stadiumPic)
      div_weather.appendChild(weather);

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
        div_buttons.appendChild(buttonFav);
        div_buttons.appendChild(buttonTicket);
      div_info.appendChild(div_full_wrap);
      

      div_element.appendChild(teamWrapper);
      div_element.appendChild(div_info);
      div_element.appendChild(div_buttons);

      container.appendChild(div_element);

      this.requestHelper.makeRequest(url, function ( location ) {
        this.populateWeather(location, weather)
      }.bind(this) )

    }.bind(this))
  },

  renderFavourites: function(){
    var body = document.getElementsByTagName("BODY")[0];
    body.innerHTML = "";
    var fixtures = new Fixtures();
    fixtures.myMatches(function(results){
      // var backButton = document.createElement("button");
      // backButton.setAttribute("id", "back-button");
      // backButton.innerText = "Back to Homepage"
      // backButton.addEventListener("click", function(){
      //   window.location.href = "http://localhost:3000/";
      // });
      var heading = document.createElement("h1");
      heading.innerText = "My Matches"
      var container = document.createElement("div");
      container.setAttribute("id", "fixtures-container");
      var mapDiv = document.createElement("div");
      mapDiv.setAttribute("id", "main-map");

      body.appendChild(heading);
      // body.appendChild(backButton);
      body.appendChild(mapDiv);
      body.appendChild(container);
      console.log(this)
      this.renderMap();
      this.render(results);
      favouriteButtons = document.getElementsByClassName("favourite-button");
      Array.prototype.forEach.call(favouriteButtons, function(button){
        button.innerText = "Delete from Favourites"
        button.onclick = function(){
          console.log(this)
          this.requestHelper.makeDeleteRequest("http://localhost:3000/api/myMatches/" + button.value, this.renderFavourites.bind(this));
        }.bind(this)
      }.bind(this));



      

      
    }.bind(this));

  },

  renderTeam: function(index){
    var body = document.getElementsByTagName("BODY")[0];
    body.innerHTML = "";
    this.renderNavBar();
    var teamDiv = document.createElement("div");
    teamDiv.setAttribute("id", "teamDiv")
    // var backButton = document.createElement("button");
    // backButton.setAttribute("id", "back-button");
    // backButton.innerText = "Back to Homepage"
    // backButton.addEventListener("click", function(){
    //   window.location.href = "http://localhost:3000/";
    // });

    var nationalityStats = document.createElement("div");
    nationalityStats.setAttribute("id", "nationalityStatsDiv");
    teamDiv.appendChild(nationalityStats);

    var capsStats = document.createElement("div");
    capsStats.setAttribute('id', "capsStatsDiv");
    teamDiv.appendChild(capsStats);

    var teams = new Teams();
    teams.all(function(results){
      if(index === 0){
        this.renderNationalityChart((results[index]));
      }
      if(index === 0 || index === 2){
        this.renderCapsChart((results[index]));
      }
      this.populateTeam((results[index]))
    }.bind(this))



    body.appendChild(teamDiv);
    // teamDiv.appendChild(backButton);

  },

  renderCapsChart: function(team){
    var container = document.getElementById("capsStatsDiv");


    var capsCount = []
    var playerNames = []

    team.players.forEach(function(player, index){
      capsCount.push(player.caps)
      playerNames.push(player.name)
    });

    var chart = new Highcharts.Chart({
        chart: {
          type: 'column',
          renderTo: container
        },
        title: {
          text: team.shortName + " by Caps"
        },
        series: [{
          name: "Caps",
          data: capsCount,
          color: "#af001d"
        }],
        xAxis: {
          categories: playerNames
        },
        yAxis: {
          tickInterval: 25,
        }
      })
  },

  renderNationalityChart: function(team){
    var container = document.getElementById("nationalityStatsDiv");
    console.log(container)

    var englandCount = 0;
    var scotlandCount = 0;
    var irelandCount = 0;
    var walesCount = 0;
    var nzCount = 0;
    var fijiCount = 0;
    var tongaCount = 0;

    team.players.forEach(function(player, index){
      if(player.nationality === "England"){
        englandCount += 1;
      }
      else if(player.nationality === "Scotland"){
        scotlandCount += 1;
      }
      else if(player.nationality === "Ireland"){
        irelandCount += 1;
      }
      else if(player.nationality === "Wales"){
        walesCount += 1;
      }
      else if(player.nationality === "New Zealand"){
        nzCount += 1;
      }
      else if(player.nationality === "Fiji"){
        fijiCount += 1;
      }
      else if(player.nationality === "Tonga"){
        tongaCount += 1;
      }
      else {
        return
      }

    })

      var chart = new Highcharts.Chart({
          chart: {
            type: 'pie',
            renderTo: container
          },
          plotOptions: {
            pie: {
              borderColor: '#D3D3D3'
            }
          },
          title: {
            text: "Lions nationality"
          },
          series: [{
            name: "Players",
            data:
            [
              {
                name: "England",
                y: englandCount,
                color: "#FFFFFF"
              },
              {
                name: "Wales",
                y: walesCount,
                color: "#ff0000"
              },
              {
                name: "Scotland",
                y: scotlandCount,
                color: "#2548b4"
              },
              {
                name: "Ireland",
                y: irelandCount,
                color: "#009A49"
              }
            ]
        }]
      });
  },

  populateTeam: function(team){
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

    var nationalityStats = document.getElementById("nationalityStatsDiv")
    var capsStats = document.getElementById("capsStatsDiv")
    teamDiv.appendChild(nationalityStats);
    teamDiv.appendChild(capsStats);

    teamDiv.appendChild(playersDiv);


// Populate players..
    team.players.forEach(function(player, index){
      var playerDiv = document.createElement("div");
        playerDiv.setAttribute("class", "playerDiv");
        playerDiv.setAttribute("id", "playerDiv" + index);

        var playerDivTwo = document.createElement("div");
          playerDivTwo.setAttribute("class", "div-two-container");
          playerDivTwo.setAttribute("id", "div-two-container" + index);


      var playerCountryImage = document.createElement("img");
        playerCountryImage.setAttribute("class", "playerCountryImage");
        playerCountryImage.setAttribute("id", "playerCountryImage" + index);
        playerCountryImage.src = "/flags/" + player.nationality + ".svg";
        playerCountryImage.style.width = "70px";
      var teamDetailsDiv = document.createElement("div");
        teamDetailsDiv.setAttribute("class", "teamDetailsDiv");
        teamDetailsDiv.setAttribute("id", "teamDetailsDiv" + index);


      var playerName = document.createElement("span");
        playerName.setAttribute("class", "playerName");
        playerName.setAttribute("id", "playerName" + index);
      var playerPosition = document.createElement("span");
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
      var playerNat = document.createElement("p");
      playerNat.setAttribute("class", "playerNat");
      playerNat.setAttribute("id", "playerNat" + index);

      var playerImageContainer = document.createElement("div");
        playerImageContainer.setAttribute("class", "playerImageContainer");
        playerImageContainer.setAttribute("id", "playerImageContainer" + index);
      var playerImage = document.createElement("img");
        playerImage.setAttribute("class", "playerImage");
        playerImage.setAttribute("id", "playerImage" + index);


      playerName.innerText = "" + player.name;
      playerPosition.innerText = "- Position: " + player.position;
      playerDOB.innerText = "Date of Birth: " + player.dob.slice(8,10) + "/" + player.dob.slice(5,7) + "/" + player.dob.slice(0,4) + " (Age: " + this.calculateAge(player.dob) + ")";
      playerDOB.style.display = 'none'
      playerHeight.innerText = "Height: " + player.height + " cm";
      playerHeight.style.display = 'none'
      playerWeight.innerText = "Weight: " + player.weight + " kg" ;
      playerWeight.style.display = 'none'
      playerClub.innerText = "Club: " + player.club;
      playerClub.style.display = 'none'
      playerCaps.innerText = "Caps: " + player.caps;
      playerCaps.style.display = 'none'
      playerNat.innerText = "Nation: " + player.nationality;
      playerNat.style.display = 'none'
      playerImage.setAttribute("src" , player.image);
      playerImage.style.display = 'none'


      //Expandle buttons
      var expanderMainTeam = document.createElement("img");
        expanderMainTeam.setAttribute("class", "expander-main-team"+ index);
        expanderMainTeam.setAttribute("id", "expander-main-team"+ index);
      var contractorMainTeam = document.createElement("img");
        contractorMainTeam.setAttribute("class", "contractor-main-team"+ index);
        contractorMainTeam.setAttribute("id", "contractor-main-team"+ index);

        expanderMainTeam.setAttribute("height", "14px")
        expanderMainTeam.setAttribute("width", "14px")
        expanderMainTeam.setAttribute("align-content", "right")
        expanderMainTeam.setAttribute("src", "https://image.flaticon.com/icons/png/512/60/60781.png")
        contractorMainTeam.setAttribute("height", "14px")
        contractorMainTeam.setAttribute("width", "14px")
        contractorMainTeam.setAttribute("src", "https://image.flaticon.com/icons/svg/60/60799.svg")
        contractorMainTeam.style.display = 'none';


      expanderMainTeam.addEventListener("click", function(event){
        console.log("up!")
        parent = event.srcElement.parentElement;
        parent.childNodes.forEach(function(child){
          teamDetailsDiv = document.getElementById("teamDetailsDiv" + index);
            expanderOpenTeam = document.getElementById("expander-main-team" + index);
            expanderOpenTeam.style.display = "none";
          teamDetailsDiv.style.display = "block";
          playerDOB.style.display = "block";
          playerHeight.style.display = "block";
          playerWeight.style.display = "block";
          playerCaps.style.display = "block";
          playerClub.style.display = "block";
          playerNat.style.display = "block";
          playerImage.style.display = "block";
          playerDivTwo.style.display = "flex";

          playerImageContainer = document.getElementById("playerImageContainer" + index);
            contractorCloseTeam = document.getElementById("contractor-main-team" + index);
            contractorCloseTeam.style.display = "inline-block";
          playerImageContainer.style.display = "block";
          
        })
       
      })

      contractorMainTeam.addEventListener("click", function(event){
        console.log("down!")
        parent = event.srcElement.parentElement;
        parent.childNodes.forEach(function(child){

          expanderOpenTeam = document.getElementById("expander-main-team"+ index);
          expanderOpenTeam.style.display = "inline-block";
          contractorCloseTeam = document.getElementById("contractor-main-team"+ index);
          contractorCloseTeam.style.display = "none";

          
          playerDOB.style.display = "none";
          playerHeight.style.display = "none";
          playerWeight.style.display = "none";
          playerCaps.style.display = "none";
          playerClub.style.display = "none";
          playerNat.style.display = "none";
          playerImage.style.display = "none";
          playerDivTwo.style.display = "none";

          teamDetailsDiv = document.getElementById("teamDetailsDiv"+ index);
          teamDetailsDiv.style.display = "none";
          playerImageContainer = document.getElementById("playerImageContainer"+ index);
          playerImageContainer.style.display = "none";
          })
        })

      //Append all elementes
      playerDiv.appendChild(playerCountryImage);
      playerDiv.appendChild(playerName);
      playerDiv.appendChild(playerPosition);
      playerDiv.appendChild(expanderMainTeam);
      playerDiv.appendChild(contractorMainTeam);

      teamDetailsDiv.appendChild(playerDOB);
      teamDetailsDiv.appendChild(playerHeight);
      teamDetailsDiv.appendChild(playerWeight);
      teamDetailsDiv.appendChild(playerCaps);
      teamDetailsDiv.appendChild(playerClub);
      teamDetailsDiv.appendChild(playerNat);
      playerImageContainer.appendChild(playerImage);

      playerDivTwo.appendChild(teamDetailsDiv);
      playerDivTwo.appendChild(playerImageContainer);
      
      playerDiv.appendChild(playerDivTwo);
      playersDiv.appendChild(playerDiv);

    }.bind(this))

  },

  calculateAge: function(birthday) { // birthday is a date
      dob = new Date(birthday);
      var ageDifMs = Date.now() - dob.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
  },


  populateWeather: function(location, weatherSpan){
    var p2 = document.createElement('span')
  
    p2.setAttribute("id", "weather-text-top");

    var p = document.createElement('span')
    var tempCelsius = Math.round((location.main.temp - 273.15))
    p.innerText = tempCelsius + "°C "
    p.setAttribute("id", "weather-text-bottom");

    //Weather Picture
    var weatherImage = document.createElement('img');
        weatherImage.setAttribute("id", "weather-image");
        weatherImage.src = "/icons/" + location.weather[0].main + ".png";
        weatherImage.style.height = "60px";
    weatherSpan.appendChild(p)
    weatherSpan.appendChild(weatherImage);
    
    weatherSpan.appendChild(p2)
  },

  addMapMarker: function(fixture, labelIndex){
    this.mainMap.addMarker(fixture.stadium.latLng, labelIndex);
  },

  addMapInfoWindow: function(index, fixture){
    this.mainMap.addInfoWindow(index, fixture.stadium.location + "<br >" + fixture.homeTeamName + " vs. " + fixture.awayTeamName + "<br >" + fixture.date.slice(0,10))
  }
}

module.exports = UI;
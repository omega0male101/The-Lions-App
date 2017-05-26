var weather = function() {

  var url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=d1da5efdf6bd32c103ff303597e79de2"

  var url2 = "http://api.openweathermap.org/data/2.5/weather?lat=-35.734070&lon=174.329517&appid=d1da5efdf6bd32c103ff303597e79de2"

  var url3 = urlConstructor(-35.734070, 174.329517);

  makeRequest(url3, requestComplete)

}


var urlConstructor = function(lat, lng){
  url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=d1da5efdf6bd32c103ff303597e79de2";
  return url;
}

var requestComplete = function(){
  if(this.status !== 200) return;

  var jsonString = this.responseText;
  var location = JSON.parse(jsonString);
  populateWeather(location);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest()
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

var populateWeather = function(location){
  var ul = document.getElementById('weatherAPI');
  var li = document.createElement('li')
  li.innerText = "Weather type: " + location.weather[0].main
  ul.appendChild(li)
}

window.addEventListener('load', weather);
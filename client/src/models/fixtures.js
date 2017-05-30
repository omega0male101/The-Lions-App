var Fixture = require ('./Fixture');
var RequestHelper = require('../helpers/request.js')

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
  myMatches: function(callback){
    this.requestHelper.makeRequest("http://localhost:3000/api/myMatches", function(results){
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
  addMatches: function(newFixture, callback){
    var fixtureData = JSON.stringify(newFixture);
    this.requestHelper.makePostRequest("http://localhost:3000/api/myMatches", callback, fixtureData);
  },
  deleteMatch: function(toDelete, callback){
    this.requestHelper.makeDeleteRequest("http://localhost:3000/api/myMatches", callback);
  }
};

module.exports = Fixtures;
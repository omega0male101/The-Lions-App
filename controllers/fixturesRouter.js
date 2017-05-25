var express = require('express');
var app = express();
var fixtureRouter = express.Router();

var Fixture = require('../client/src/models/fixture');

var FixtureQuery = require('../db/fixtureQuery.js');
var query = new FixtureQuery();

//fixture index
fixtureRouter.get('/', function(req, res){
  query.all(function(fixtures){
    res.json(fixtures);
  });
});

//add new fixture
fixtureRouter.post('/', function(req, res){
  var fixture = new Fixture({
    date: req.body.date,
    matchNumber: req.body.matchNumber,
    kickOffTime: req.body.kickOffTime,
    homeTeamName: req.body.homeTeamName,
    awayTeamName: req.body.awayTeamName,
    stadiumName: req.body.stadium.name,
    stadiumLocation: req.body.stadium.location,
    stadiumLat: req.body.stadium.latLng.lat,
    stadiumLng: req.body.stadium.latLng.lat,
    stadiumCapacity: req.body.stadium.capacity,
    stadiumImage: req.body.stadium.image,
    resultHome: req.body.result.homeTeamPoints,
    resultAway: req.body.result.homeAwayPoints
  })
  query.add(fixture, function(fixtures){
    res.json(fixtures)
  })
})

module.exports = fixtureRouter;
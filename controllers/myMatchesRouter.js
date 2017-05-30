var express = require('express');
var app = express();
var myMatchesRouter = express.Router();

var Fixture = require('../client/src/models/fixture');

var myMatchesQuery = require('../db/myMatchesQuery.js');
var query = new myMatchesQuery();

//fixture index
myMatchesRouter.get('/', function(req, res){
  query.all(function(fixtures){
    res.json(fixtures);
  });
});

//delete fixture
myMatchesRouter.delete('/:id', function(req, res){
  query.delete(matchNumber);
})

//add new fixture
myMatchesRouter.post('/', function(req, res){
  var fixture = {
    date: req.body.date,
    matchNumber: req.body.matchNumber,
    kickOffTime: req.body.kickOffTime,
    homeTeamName: req.body.homeTeamName,
    awayTeamName: req.body.awayTeamName,
    stadium: {
      name: req.body.stadium.name,
      location: req.body.stadium.location,
      latLng: {
        lat: req.body.stadium.latLng.lat,
        lng: req.body.stadium.latLng.lng
      },
      capacity: req.body.stadium.capacity,
      image: req.body.stadium.image
      },
    result: {
      homeTeamPoints: req.body.result.homeTeamPoints,
      awayTeamPoints: req.body.result.awayTeamPoints
    }
  }
  query.add(fixture, function(fixtures){
    res.json(fixtures)
  })
})

module.exports = myMatchesRouter;
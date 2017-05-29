var express = require('express');
var app = express();
var teamRouter = express.Router();

var Team = require('../client/src/models/team');

var TeamQuery = require('../db/teamQuery.js');
var query = new TeamQuery();

//team index
teamRouter.get('/', function(req, res){
  query.all(function(teams){
    res.json(teams);
  });
});

module.exports = teamRouter;
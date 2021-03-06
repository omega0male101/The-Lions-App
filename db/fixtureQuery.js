var MongoClient = require("mongodb").MongoClient;

var FixtureQuery = function(){
  this.url = "mongodb://localhost:27017/lions";
}

FixtureQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('fixtures');
        collection.find().toArray(function(err,docs){
          onQueryFinished(docs);
        });
      }
    });
  },
  add: function(fixtureToAdd, onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection("fixtures");
        collection.insert(fixtureToAdd);
        collection.find().toArray(function(err,docs){
          onQueryFinished(docs);
        })
      }
    })
  }
}

module.exports = FixtureQuery;
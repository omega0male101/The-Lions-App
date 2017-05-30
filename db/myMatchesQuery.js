var MongoClient = require("mongodb").MongoClient;

var MyMatchesQuery = function(){
  this.url = "mongodb://localhost:27017/lions";
}

MyMatchesQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('favourites');
        collection.find().toArray(function(err,docs){
          onQueryFinished(docs);
        });
      }
    });
  },
  add: function(fixtureToAdd, onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection("favourites");
        collection.insert(fixtureToAdd);
        collection.find().toArray(function(err,docs){
          onQueryFinished(docs);
        })
      }
    })
  }
}

module.exports = MyMatchesQuery;
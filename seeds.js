use lions;

db.dropDatabase();

db.fixtures.insert([ 
{
  date: 2017-06-03,
  matchNumber: 1,
  kickOffTime: "8:35",
  homeTeamName: "New Zealand Provincial Barbarians", 
  awayTeamName: "Lions",
  stadium: {
    name: "Toll",
    location: "Whangarei",
    latLng: {
      lat: -35.734070,
      lng: 174.329517
    },
    capacity: "30,000",
    image: "https://resources.stuff.co.nz/content/dam/images/1/6/b/i/e/g/image.related.StuffLandscapeSixteenByNine.620x349.16o9yq.png/1441300120225.jpg"
  },
  result: {
    homeTeamPoints: null,
    awayTeamPoints: null
  }
},
{
  date: 2017-06-07,
  matchNumber: 2,
  kickOffTime: "8:35",
  homeTeamName: "Blues", 
  awayTeamName: "Lions",
  stadium: {
    name: "Eden Park",
    location: "Auckland",
    latLng: {
      lat: -36.875220,
      lng: 174.744477
    },
    capacity: "50,000",
    image: "http://i.cricketcb.com/i/stats/f/720x415/venue/images/41.jpg"
  },
  result: {
    homeTeamPoints: null,
    awayTeamPoints: null
  }
}
]
)
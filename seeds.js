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
      lat: "-35.734070",
      lng: "174.329517"
    },
    capacity: "30,000",
    image: "https://resources.stuff.co.nz/content/dam/images/1/6/b/i/e/g/image.related.StuffLandscapeSixteenByNine.620x349.16o9yq.png/1441300120225.jpg"
  },
  result: {
    homeTeamPoints: null,
    awayTeamPoints: null
  }
}]
)
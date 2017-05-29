use lions;

db.dropDatabase();

db.fixtures.insert([ 
{
  date: new Date("2017-06-03T08:35:00-00:00"),
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
  date: new Date("2017-06-07T08:35:00-00:00"),
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
},
{
  date: new Date("2017-06-10T08:35:00-00:00"),
  matchNumber: 3,
  kickOffTime: "8:35",
  homeTeamName: "Crusaders", 
  awayTeamName: "Lions",
  stadium: {
    name: "AMI Stadium",
    location: "Christchurch",
    latLng: {
      lat: -43.543797,
      lng: 172.606717
    },
    capacity: "18,000",
    image: "https://i.ytimg.com/vi/DYYGN_CfkcA/maxresdefault.jpg"
  },
  result: {
    homeTeamPoints: null,
    awayTeamPoints: null
  }
},
{
  date: new Date("2017-06-13T08:35:00-00:00"),
  matchNumber: 4,
  kickOffTime: "8:35",
  homeTeamName: "Highlanders", 
  awayTeamName: "Lions",
  stadium: {
    name: "Forsyth Barr Stadium",
    location: "Dunedin",
    latLng: {
      lat: -45.869505,
      lng: 170.525785
    },
    capacity: "30,748",
    image: "https://www.forsythbarr.co.nz/yk-files/c0f492c6c877fa1ea53dd6343c72f8b4/ireland_v_italy_0037.jpg"
  },
  result: {
    homeTeamPoints: null,
    awayTeamPoints: null
  }
},
{
  date: new Date("2017-06-17T08:35:00-00:00"),
  matchNumber: 5,
  kickOffTime: "8:35",
  homeTeamName: "Maori All Blacks", 
  awayTeamName: "Lions",
  stadium: {
    name: "Rotorua International Stadium",
    location: "Rotorua",
    latLng: {
      lat: -38.155642,
      lng: 176.227065
    },
    capacity: "26,000",
    image: "https://cdn.eventfinda.co.nz/uploads/locations/transformed/118822-902-34.jpg"
  },
  result: {
    homeTeamPoints: null,
    awayTeamPoints: null
  }
},
{
  date: new Date("2017-06-20T08:35:00-00:00"),
  matchNumber: 6,
  kickOffTime: "8:35",
  homeTeamName: "Chiefs", 
  awayTeamName: "Lions",
  stadium: {
    name: "FMG Stadium Waikato",
    location: "Hamilton",
    latLng: {
      lat: -37.781019,
      lng: 175.269520
    },
    capacity: "25,800",
    image: "http://www.hamiltonwaikato.com/media/1954/waikato-stadium-birds-eye-view-hamilton-nz.jpg?anchor=center&mode=crop&width=900&height=506&rnd=130806778060000000"
  },
  result: {
    homeTeamPoints: null,
    awayTeamPoints: null
  }
},
{
  date: new Date("2017-06-24T08:35:00-00:00"),
  matchNumber: 7,
  kickOffTime: "8:35",
  homeTeamName: "New Zealand", 
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
},
{
  date: new Date("2017-06-27T08:35:00-00:00"),
  matchNumber: 8,
  kickOffTime: "8:35",
  homeTeamName: "Hurricanes", 
  awayTeamName: "Lions",
  stadium: {
    name: "Westpac Stadium",
    location: "Wellington",
    latLng: {
      lat: -41.273051,
      lng: 174.788576
    },
    capacity: "34,500",
    image: "http://www.retaildimension.co.nz/ic/3984479418/Westpac%20Stadium%20Case%20Study.jpg"
    },
  result: {
    homeTeamPoints: null,
    awayTeamPoints: null
  }
},
{
  date: new Date("2017-07-01T08:35:00-00:00"),
  matchNumber: 9,
  kickOffTime: "8:35",
  homeTeamName: "New Zealand", 
  awayTeamName: "Lions",
  stadium: {
    name: "Westpac Stadium",
    location: "Wellington",
    latLng: {
      lat: -41.273051,
      lng: 174.788576
    },
    capacity: "34,500",
    image: "http://www.retaildimension.co.nz/ic/3984479418/Westpac%20Stadium%20Case%20Study.jpg"
    },
  result: {
    homeTeamPoints: null,
    awayTeamPoints: null
  }
},
{
  date: new Date("2017-07-08T08:35:00-00:00"),
  matchNumber: 10,
  kickOffTime: "8:35",
  homeTeamName: "New Zealand", 
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
},
]
)

db.teams.insert([
  {
    name: "British and Irish Lions",
    shortName: "Lions",
    players: [
      {
        name: "Stuart Hogg",
        age: "24",
        nationality: "Scottish",
        position: "Full Back",
        caps: 53,
        image: "Image from Lions website"
      }
    ]
  }
  ])

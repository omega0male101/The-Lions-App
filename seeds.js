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
},
{
  date: 2017-06-10,
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
  date: 2017-06-13,
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
  date: 2017-06-17,
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
  date: 2017-06-20,
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
  date: 2017-06-24,
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
  date: 2017-06-27,
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
  date: 2017-07-01,
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
  date: 2017-07-08,
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
);

db.teams.insert([
  {
    name: "British and Irish Lions",
    shortName: "Lions",
    history: "The British and Irish Lions is a rugby union team selected from players eligible for any of the Home Nations – the national sides of England, Ireland, Scotland and Wales. The side tours every four years, with these rotating among Australia, New Zealand, and South Africa. From 1888 onwards combined rugby sides from the United Kingdom of Great Britain and Ireland toured the Southern Hemisphere.",
    players: 
    [
      {
        name: "Sam Warburton",
        dob: 1988-10-05,
        height: "1.90M / 6'3''",
        weight: 103,
        nationality: "Welsh",
        position: "Back Row",
        club: "Cardiff Blues",
        caps: 76,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24142207/SamWarburton.jpg"
      },
      {
        name: "Rory Best",
        dob: 1982-08-15,
        height: "1.80M / 5'11'",
        weight: 106,
        nationality: "Irish",
        position: "Hooker",
        club: "Ulster Rugby",
        caps: 108,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24142822/RoryBest.jpg"
      },
      {
        name: "Dan Biggar",
        dob: 1989-10-16,
        height: "1.85M / 6'1'",
        weight: 93,
        nationality: "Welsh",
        position: "Fly Half",
        club: "Ospreys",
        caps: 56,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24143439/DanBiggar.jpg"
      },
      {
        name: "Dan Cole",
        dob: 1987-05-09,
        height: "1.89M / 6'2'",
        weight: 120,
        nationality: "England",
        position: "Prop",
        club: "Leicester Tigers",
        caps: 83,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24144134/DanCole.jpg"
      },
      {
        name: "Elliot Daly",
        dob: 1992-10-08,
        height: "1.82M / 6'0'",
        weight: 97,
        nationality: "England",
        position: "Wing",
        club: "Wasps",
        caps: 13,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24144255/ElliotDaly.jpg"
      },
      {
        name: "Jonathan Davies",
        dob: 1988-04-05,
        height: "1.86M / 6'1'",
        weight: 103,
        nationality: "Welsh",
        position: "Centre",
        club: "Scarlets",
        caps: 71,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24144744/JonathanDavies.jpg"
      },
      {
        name: "Taulupe Faletau",
        dob: 1990-11-12,
        height: "1.92M / 6'4'",
        weight: 109,
        nationality: "Welsh",
        position: "Back Row",
        club: "Bath Rugby",
        caps: 73,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24145024/TaulupeFaletau.jpg"
      },
      {
        name: "Owen Farrell",
        dob: 1991-09-24,
        height: "1.86M / 6'1'",
        weight: 93,
        nationality: "England",
        position: "Fly Half",
        club: "Saracens",
        caps: 59,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24145237/OwenFarrell.jpg"
      },
      {
        name: "Tadhg Furlong",
        dob: 1992-11-14,
        height: "1.85M / 6'1'",
        weight: 123,
        nationality: "Irish",
        position: "Prop",
        club: "Leinster Rugby",
        caps: 16,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24145449/TaghFurlong.jpg"
      },
      {
        name: "Jamie George",
        dob: 1990-10-22,
        height: "1.83M / 6'0'",
        weight: 110,
        nationality: "England",
        position: "Hooker",
        club: "Saracens",
        caps: 17,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24145953/JamieGeorge-600x900.jpg"
      },
      {
        name: "Leigh Halfpenny",
        dob: 1988-12-22,
        height: "1.78M / 5'10'",
        weight: 87,
        nationality: "Welsh",
        position: "Full Back",
        club: "RC Toulon",
        caps: 78,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24150344/LeighHalfpenny.jpg"
      },
      {
        name: "James Haskell",
        dob: 1985-04-02,
        height: "1.93M / 6'4'",
        weight: 120,
        nationality: "England",
        position: "Back Row",
        club: "Wasps",
        caps: 75,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/05/22081846/JamesHaskell-600x900.jpg"
      },
      {
        name: "Iain Henderson",
        dob: 1992-02-21,
        height: "2.00M / 6'7'",
        weight: 118,
        nationality: "Irish",
        position: "Second Row",
        club: "Ulster Rugby",
        caps: 32,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24150634/IanHenderson.jpg"
      },
      {
        name: "Robbie Henshaw",
        dob: 1993-06-12,
        height: "1.90M / 6'3'",
        weight: 102,
        nationality: "Irish",
        position: "Centre",
        club: "Leinster Rugby",
        caps: 29,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24151134/RobbieHenshaw.jpg"
      },
      {
        name: "Stuart Hogg",
        dob: 1992-06-24,
        height: "1.80M / 5'11'",
        weight: 100,
        nationality: "Scottish",
        position: "Full Back",
        club: "Glasgow Warriors",
        caps: 58,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24151512/StuartHogg.jpg"
      },
      {
        name: "Maro Itoje",
        dob: 1994-10-28,
        height: "1.95M / 6'5'",
        weight: 117,
        nationality: "England",
        position: "Second Row",
        club: "Saracens",
        caps: 12,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24151825/MaroItoje.jpg"
      },
      {
        name: "Jonthan Joseph",
        dob: 1991-05-21,
        height: "1.83M / 6'0'",
        weight: 95,
        nationality: "England",
        position: "Centre",
        club: "Bath Rugby",
        caps: 33,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24152157/JonathanJoseph.jpg"
      },
      {
        name: "Alun Wyn Jones",
        dob: 1985-09-19,
        height: "1.98M / 6'6'",
        weight: 118,
        nationality: "Welsh",
        position: "Second Row",
        club: "Ospreys",
        caps: 123,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24152409/Alun-WynJones.jpg"
      },
      {
        name: "George Kruis",
        dob: 1990-02-22,
        height: "1.98M / 6'6'",
        weight: 117,
        nationality: "England",
        position: "Second Row",
        club: "Saracens",
        caps: 20,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24152644/GeorgeKruis.jpg"
      },
      {
        name: "Greg Laidlaw",
        dob: 1985-10-12,
        height: "1.75M / 5'9'",
        weight: 80,
        nationality: "Scottish",
        position: "Scrum Half",
        club: "Gloucester Rugby",
        caps: 58,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/05/08093750/Greig-Laidlaw.jpg"
      },
      {
        name: "Courtney Lawes",
        dob: 1989-02-23,
        height: "2.01M / 6'7'",
        weight: 115,
        nationality: "England",
        position: "Second Row",
        club: "Northampton Saints",
        caps: 58,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24153057/CourtneyLawes.jpg"
      },
      {
        name: "Joe Marler",
        dob: 1990-07-07,
        height: "1.83M / 6'0'",
        weight: 114,
        nationality: "England",
        position: "Prop",
        club: "Harlequins",
        caps: 51,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24153342/JoeMarler.jpg"
      },
      {
        name: "Jack McGrath",
        dob: 1989-10-11,
        height: "1.82M / 6'0'",
        weight: 120,
        nationality: "Irish",
        position: "Prop",
        club: "Leinster Rugby",
        caps: 41,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24153912/JackMcGrath.jpg"
      },
      {
        name: "Ross Moriarty",
        dob: 1994-04-18,
        height: "1.90M / 6'3'",
        weight: 106,
        nationality: "Welsh",
        position: "Back Row",
        club: "Gloucester Rugby",
        caps: 17,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24154329/RossMoriarty.jpg"
      },
      {
        name: "Conor Murray",
        dob: 1989-04-20,
        height: "1.88M / 6'2'",
        weight: 94,
        nationality: "Irish",
        position: "Scrum Half",
        club: "Munster Rugby",
        caps: 64,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24154606/ConorMurray.jpg"
      },
      {
        name: "George North",
        dob: 1992-04-13,
        height: "1.93M / 6'4'",
        weight: 108,
        nationality: "Welsh",
        position: "Wing",
        club: "Northampton Saints",
        caps: 78,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24154959/GeorgeNorth.jpg"
      },
      {
        name: "Jack Nowell",
        dob: 1993-04-11,
        height: "1.80M / 5'11'",
        weight: 98,
        nationality: "England",
        position: "Wing",
        club: "Exeter Cheifs",
        caps: 23,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24155226/JackNowell.jpg"
      },
      {
        name: "Sean O'Brien",
        dob: 1987-02-14,
        height: "1.87M / 6'2'",
        weight: 108,
        nationality: "Irish",
        position: "Back Row",
        club: "Leinster Rugby",
        caps: 55,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24155447/SeanOBrien.jpg"
      },
      {
        name: "Peter O'Mahony",
        dob: 1989-09-17,
        height: "1.91M / 6'3'",
        weight: 108,
        nationality: "Irish",
        position: "Back Row",
        club: "Munster Rugby",
        caps: 40,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24155737/PeterOMahony.jpg"
      },
      {
        name: "Ken Owens",
        dob: 1987-01-03,
        height: "1.84M / 6'0'",
        weight: 108,
        nationality: "Welsh",
        position: "Hooker",
        club: "Scarlets",
        caps: 50,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24160251/KenOwens.jpg"
      },
      {
        name: "Jared Payne",
        dob: 1985-10-13,
        height: "1.83M / 6'0'",
        weight: 98,
        nationality: "Irish",
        position: "Centre",
        club: "Ulster Rugby",
        caps: 20,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24160609/JaredPayne.jpg"
      },
      {
        name: "Jonathan Sexton",
        dob: 1985-07-11,
        height: "1.88M / 6'2'",
        weight: 93,
        nationality: "Irish",
        position: "Fly Half",
        club: "Leinster Rugby",
        caps: 73,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24160826/JohnnySexton.jpg"
      },
      {
        name: "Tommy Seymour",
        dob: 1988-07-01,
        height: "1.83M / 6'0'",
        weight: 94,
        nationality: "Scottish",
        position: "Wing",
        club: "Glasgow Warriors",
        caps: 36,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24161307/TommySeymour.jpg"
      },
      {
        name: "Kyle Sinckler",
        dob: 1993-03-30,
        height: "1.80M / 5'11'",
        weight: 122,
        nationality: "England",
        position: "Prop",
        club: "Harlequins",
        caps: 8,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24161600/KyleSinckler.jpg"
      },
      {
        name: "CJ Stander",
        dob: 1990-04-05,
        height: "1.89M / 6'2'",
        weight: 115,
        nationality: "Irish",
        position: "Back Row",
        club: "Munster Rugby",
        caps: 15,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24161758/CJStander.jpg"
      },
      {
        name: "Ben Te'o",
        dob: 1987-01-27,
        height: "1.88M / 6'2'",
        weight: 106,
        nationality: "England",
        position: "Centre",
        club: "Worcester Warriors",
        caps: 8,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24162555/BenTeo.jpg"
      },
      {
        name: "Justin Tipuric",
        dob: 1989-04-06,
        height: "1.88M / 6'2'",
        weight: 101,
        nationality: "Welsh",
        position: "Back Row",
        club: "Ospreys",
        caps: 57,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24162807/JustinTipuric.jpg"
      },
      {
        name: "Mako Vunipola",
        dob: 1991-01-13,
        height: "1.83M / 6'0'",
        weight: 121,
        nationality: "England",
        position: "Prop",
        club: "Saracens",
        caps: 49,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24163230/MakoVunipola.jpg"
      },
      {
        name: "Anthony Watson",
        dob: 1994-02-26,
        height: "1.84M / 6'0'",
        weight: 94,
        nationality: "England",
        position: "Wing",
        club: "Bath Rugby",
        caps: 26,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24163509/AnthonyWatson.jpg"
      },
      {
        name: "Rhys Webb",
        dob: 1988-12-09,
        height: "1.83M / 6'0'",
        weight: 92,
        nationality: "Welsh",
        position: "Scrum Half",
        club: "Ospreys",
        caps: 28,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24163716/RhysWebb.jpg"
      },
      {
        name: "Liam Williams",
        dob: 1991-04-09,
        height: "1.88M / 6'1'",
        weight: 86,
        nationality: "Welsh",
        position: "Wing",
        club: "Scarlets",
        caps: 43,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24163948/LiamWilliams.jpg"
      }
    ]
  },
  {
    name: "New Zealand Provincial Barbarians",
    shortName: "NZ Barbarians",
    history: "The New Zealand Barbarians, nicknamed the Baa-Baas, are an invitational rugby union team which has been a major part of New Zealand rugby since the team was founded in 1937 by two ex-All Blacks, Ronald Bush, and Hubert McLean who captained their first game (against Auckland) in 1938.",
    players: [
      {
        name: "Sam Anderson-Heather",
        dob: 1988-02-15,
        height: "1.81M / 5'11'",
        weight: 104,
        nationality: "New Zealand",
        position: "Hooker",
        club: "Otago",
        caps: null,
        image: "http://sportsgroundproduction.blob.core.windows.net/cms/8013/58332/245779/96905642-ce8c-450f-a11c-97baa6cee444_wo.jpg?v=undefined"
      },
      {
        name: "Llachlan Boshier",
        dob: 1994-11-16,
        height: "1.94M / 6'4'",
        weight: 102,
        nationality: "New Zealand",
        position: "Back Row",
        club: "Taranaki / Chiefs",
        caps: null,
        image: "http://www.chiefs.co.nz/media/xt-adaptive-images/900/media/bearleague/bl14865196411993.jpg"
      },
      {
        name: "Mitchell Dunshea",
        dob: 1995-11-18,
        height: "1.96M / 6'5'",
        weight: 114,
        nationality: "New Zealand",
        position: "Back Row",
        club: "Canterbury / Crusaders",
        caps: null,
        image: "https://crusaders.co.nz/media/com_mtree/images/listings/m/442.jpg"
      },
      // NO LONGER IN SQUAD
      // {
      //   name: "Heiden Bedwell-Curtis",
      //   dob: 1991-06-25,
      //   height: "1.94M / 6'4'",
      //   weight: 103,
      //   nationality: "New Zealand",
      //   position: "Flanker",
      //   club: "Manawatu / Crusaders",
      //   caps: null,
      //   image: "http://cdn.c.photoshelter.com/img-get2/I0000uusXdP1ft2A/fit=1000x750/Heiden-Bedwell-Curtis.jpg"
      // },
      // {
      //   name: "Mitchell Brown",
      //   dob: 1993-08-15,
      //   height: "1.94M / 6'4'",
      //   weight: 110,
      //   nationality: "New Zealand",
      //   position: "Flanker",
      //   club: "Taranaki / Chiefs",
      //   caps: null,
      //   image: "http://www.chiefs.co.nz/media/xt-adaptive-images/900/media/bearleague/bl1486519795597.jpg"
      // },
      // {
      //   name: "Johnny Fa'auli",
      //   dob: 1995-09-13,
      //   height: "1.80M / 5'11'",
      //   weight: 103,
      //   nationality: "New Zealand",
      //   position: "Centre",
      //   club: "Taranaki / Chiefs",
      //   caps: null,
      //   image: "http://www.chiefs.co.nz/media/xt-adaptive-images/900/media/bearleague/bl14865196061738.jpg"
      // },
      {
        name: "Tolu Fahamokioa",
        dob: 1991-05-05,
        height: "1.90M / 6'03'",
        weight: 105,
        nationality: "Tonga",
        position: "Prop",
        club: "Wellington",
        caps: null,
        image: "http://cdn.c.photoshelter.com/img-get/I0000fYVHRF1Q9ag/s/800/800/DLwr130812-007.jpg"
      },
      {
        name: "Kaveinga Finau",
        dob: 1994-08-21,
        height: "1.80M / 5'9'",
        weight: 95,
        nationality: "New Zealand",
        position: "Centre",
        club: "Canterbury",
        caps: null,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p2385.jpg"
      },
      // {
      //   name: "Epalahame Faiva",
      //   dob: 1994-05-09,
      //   height: "1.81M / 5'11'",
      //   weight: 108,
      //   nationality: "New Zealand",
      //   position: "Hooker",
      //   club: "Waikato / Blues",
      //   caps: null,
      //   image: "https://www.mooloo.co.nz/assets/Uploads/_resampled/detailimage-Faiva-Hame-2016.jpg"
      // },
      {
        name: "Bryn Gatland",
        dob: 1995-05-10,
        height: "1.78M / 5'10'",
        weight: 88,
        nationality: "New Zealand",
        position: "Fly Half",
        club: "North Harbour / Blues",
        caps: null,
        image: "http://www.harbourrugby.co.nz/media/players/players57a8ee7abfdd9.gif"
      },
      {
        name: "Josh Goodhue",
        dob: 1995-06-13,
        height: "1.99M / 6'6'",
        weight: 115,
        nationality: "New Zealand",
        position: "Second Row",
        club: "Northland / Blues",
        caps: null,
        image: "http://sportsgroundproduction.blob.core.windows.net/cms/8180/59000/234981/49382b4a-3020-4017-9773-bbc96a0f1637_wo.jpg?v=undefined"
      },
      {
        name: "Oliver Jager",
        dob: 1995-07-05,
        height: "1.92M / 6'4'",
        weight: 120,
        nationality: "England",
        position: "Prop",
        club: "Canterbury / Crusaders",
        caps: null,
        image: "http://cdn.c.photoshelter.com/img-get2/I0000zr3v5uexIsI/fit=1000x750/Oliver-Jager.jpg"
      },
      {
        name: "Richard Judd",
        dob: 1992-05-18,
        height: "1.78M / 5'8'",
        weight: 90,
        nationality: "New Zealand",
        position: "Scum Half",
        club: "Bay of Plenty",
        caps: null,
        image: "https://www.ultimaterugby.com/images/entities/145638-d8d587976a-3/RichardJuddrugbyplayer.jpg"
      },
      {
        name: "Luteru Laulala",
        dob: 1995-05-30,
        height: "1.83M / 6'0'",
        weight: 95,
        nationality: "New Zealand",
        position: "Full Back",
        club: "Counties Manukau",
        caps: null,
        image: "http://media.gettyimages.com/photos/luteru-laulala-poses-during-a-chiefs-super-rugby-headshots-session-on-picture-id633244008?s=612x612"
      },
      {
        name: "Jonah Lowe",
        dob: 1996-05-09,
        height: "1.84M / 6'0'",
        weight: 92,
        nationality: "New Zealand",
        position: "Wing",
        club: "Hawke's Bay",
        caps: null,
        image: "http://sportsgroundproduction.blob.core.windows.net/cms/2143/6648/151876/6827679f-1ad6-4976-b9b8-bcb3048b518a_wo.jpg?v=undefined"
      },
      {
        name: "Andrew Makalio",
        dob: 1992-01-22,
        height: "1.82M / 6'0'",
        weight: 111,
        nationality: "New Zealand",
        position: "Hooker",
        club: "Tasman / Crusaders",
        caps: null,
        image: "http://www.makos.co.nz/_makos/Library/Product/Item/f_99_Makalio.jpg"
      },
      {
        name: "Matt Matich",
        dob: 1991-07-10,
        height: "1.86M / 6'1'",
        weight: 106,
        nationality: "New Zealand",
        position: "Flanker",
        club: "Northland",
        caps: null,
        image: "http://sportsgroundproduction.blob.core.windows.net/cms/8180/59000/234981/502b1121-2f5b-4446-9108-466fb473120d_wo.jpg?v=undefined"
      },
      {
        name: "Keepa Mewett",
        dob: 1987-05-10,
        height: "1.98M / 6'4'",
        weight: 111,
        nationality: "New Zealand",
        position: "Second Row",
        club: "Bay of Plenty",
        caps: null,
        image: "http://www.boprugby.co.nz/images/Keepa.png?width=200&height=auto&shrink="
      },
      {
        name: "Junior Ngaluafe",
        dob: null,
        height: null,
        weight: 91,
        nationality: "New Zealand",
        position: "Full Back",
        club: "Southland",
        caps: null,
        image: "http://www.rugbysouthland.co.nz/uploads/1/1/3/8/11384993/junior-ngaluafe.jpg?180"
      },
      {
        name: "Sevu Reece",
        dob: 1997-02-13,
        height: "1.79M / 5'10'",
        weight: 87,
        nationality: "Figi",
        position: "Wing",
        club: "Waikato",
        caps: null,
        image: "http://www.ultimaterugby.com/images/entities/146316-02641e9c1b-11/SevuReecerugbyplayer.jpg"
      },
      {
        name: "Marcel Renata",
        dob: 1994-01-24,
        height: "1.89M / 6'2'",
        weight: 116,
        nationality: "New Zealand",
        position: "Prop",
        club: "Auckland",
        caps: null,
        image: "http://sportsgroundproduction.blob.core.windows.net/cms/14254/137310/144782/083af70e-58a8-47d5-a372-5b38edd0b215_wo.jpg?v=undefined"
      },
      {
        name: "Aidan Ross",
        dob: 1995-10-25,
        height: "1.89M / 6'2'",
        weight: 112,
        nationality: "New Zealand",
        position: "Prop",
        club: "Bay of Plenty/ Chiefs",
        caps: null,
        image: "http://www.chiefs.co.nz/media/xt-adaptive-images/900/media/bearleague/bl1487549540196.jpg"
      },
      {
        name: "Peter Rowe",
        dob: 1981-12-07,
        height: "1.83M / 6'0'",
        weight: 103,
        nationality: "New Zealand",
        position: "Back Row",
        club: "Whanganui",
        caps: null,
        image: "http://www.ultimaterugby.com/images/entities/182731-cdc843d5cd-3/PeterRowerugbyplayer.jpg"
      },
      {
        name: "Jack Stratton",
        dob: 1994-08-21,
        height: "1.85M / 6'0'",
        weight: 92,
        nationality: "New Zealand",
        position: "Scrum Half",
        club: "Canterbury",
        caps: null,
        image: "http://www.ultimaterugby.com/images/entities/146051-f8b79362fe-3/JackStrattonrugbyplayer.jpg"
      },
      {
        name: "Dwayne Sweeney",
        dob: 1984-08-08,
        height: "1.80M / 5'11'",
        weight: 95,
        nationality: "New Zealand",
        position: "Centre",
        club: "Munakata",
        caps: null,
        image: "http://media.gettyimages.com/photos/dwayne-sweeney-of-the-barbarians-poses-for-a-portrait-during-the-at-picture-id485184598"
      },
      {
        name: "James Tucker",
        dob: 1994-08-05,
        height: "1.97M / 6'6'",
        weight: 115,
        nationality: "New Zealand",
        position: "Second Row",
        club: "Waikato / Chiefs",
        caps: null,
        image: "http://media.gettyimages.com/photos/james-tucker-poses-during-a-chiefs-super-rugby-headshots-session-on-picture-id633244162?s=612x612"
      },
      {
        name: "Sam Vaka",
        dob: 1992-10-26,
        height: "1.86M / 6'1'",
        weight: 95,
        nationality: "New Zealand",
        position: "Wing",
        club: "Counties Manukau",
        caps: null,
        image: "http://www4.pictures.zimbio.com/gi/Chiefs+Headshots+Session+LVwLvVUiS26x.jpg"
      }
      ]
    }
  ])

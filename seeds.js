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
    homeTeamPoints: 0,
    awayTeamPoints: 0
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
    homeTeamPoints: 0,
    awayTeamPoints: 0
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
    homeTeamPoints: 0,
    awayTeamPoints: 0
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
    homeTeamPoints: 0,
    awayTeamPoints: 0
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
    homeTeamPoints: 0,
    awayTeamPoints: 0
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
    homeTeamPoints: 0,
    awayTeamPoints: 0
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
    homeTeamPoints: 0,
    awayTeamPoints: 0
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
    homeTeamPoints: 0,
    awayTeamPoints: 0
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
    homeTeamPoints: 0,
    awayTeamPoints: 0
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
    homeTeamPoints: 0,
    awayTeamPoints: 0
  }
},
]
);

db.teams.insert([
  {
    name: "British and Ireland Lions",
    shortName: "Lions",
    history: "The British and Ireland Lions is a rugby union team selected from players eligible for any of the Home Nations – the national sides of England, Ireland, Scotland and Wales. The side tours every four years, with these rotating among Australia, New Zealand, and South Africa. From 1888 onwards combined rugby sides from the United Kingdom of Great Britain and Ireland toured the Southern Hemisphere.",
    players: 
    [
      {
        name: "Sam Warburton",
        dob: new Date("1988-10-05"),
        height: 190,
        weight: 103,
        nationality: "Wales",
        position: "Back Row",
        club: "Cardiff Blues",
        caps: 76,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24142207/SamWarburton.jpg"
      },
      {
        name: "Rory Best",
        dob: new Date("1982-08-15"),
        height: 180,
        weight: 106,
        nationality: "Ireland",
        position: "Hooker",
        club: "Ulster Rugby",
        caps: 108,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24142822/RoryBest.jpg"
      },
      {
        name: "Dan Biggar",
        dob: new Date("1989-10-16"),
        height: 185,
        weight: 93,
        nationality: "Wales",
        position: "Fly Half",
        club: "Ospreys",
        caps: 56,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24143439/DanBiggar.jpg"
      },
      {
        name: "Dan Cole",
        dob: new Date("1987-05-09"),
        height: 189,
        weight: 120,
        nationality: "England",
        position: "Prop",
        club: "Leicester Tigers",
        caps: 83,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24144134/DanCole.jpg"
      },
      {
        name: "Elliot Daly",
        dob: new Date("1992-10-08"),
        height: 182,
        weight: 97,
        nationality: "England",
        position: "Wing",
        club: "Wasps",
        caps: 13,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24144255/ElliotDaly.jpg"
      },
      {
        name: "Jonathan Davies",
        dob: new Date("1988-04-05"),
        height: 186,
        weight: 103,
        nationality: "Wales",
        position: "Centre",
        club: "Scarlets",
        caps: 71,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24144744/JonathanDavies.jpg"
      },
      {
        name: "Taulupe Faletau",
        dob: new Date("1990-11-12"),
        height: 192,
        weight: 109,
        nationality: "Wales",
        position: "Back Row",
        club: "Bath Rugby",
        caps: 73,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24145024/TaulupeFaletau.jpg"
      },
      {
        name: "Owen Farrell",
        dob: new Date("1991-09-24"),
        height: 186,
        weight: 93,
        nationality: "England",
        position: "Fly Half",
        club: "Saracens",
        caps: 59,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24145237/OwenFarrell.jpg"
      },
      {
        name: "Tadhg Furlong",
        dob: new Date("1992-11-14"),
        height: 185,
        weight: 123,
        nationality: "Ireland",
        position: "Prop",
        club: "Leinster Rugby",
        caps: 16,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24145449/TaghFurlong.jpg"
      },
      {
        name: "Jamie George",
        dob: new Date("1990-10-22"),
        height: 183,
        weight: 110,
        nationality: "England",
        position: "Hooker",
        club: "Saracens",
        caps: 17,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24145953/JamieGeorge-600x900.jpg"
      },
      {
        name: "Leigh Halfpenny",
        dob: new Date("1988-12-22"),
        height: 178,
        weight: 87,
        nationality: "Wales",
        position: "Full Back",
        club: "RC Toulon",
        caps: 78,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24150344/LeighHalfpenny.jpg"
      },
      {
        name: "James Haskell",
        dob: new Date("1985-04-02"),
        height: 193,
        weight: 120,
        nationality: "England",
        position: "Back Row",
        club: "Wasps",
        caps: 75,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/05/22081846/JamesHaskell-600x900.jpg"
      },
      {
        name: "Iain Henderson",
        dob: new Date("1992-02-21"),
        height: 2.00,
        weight: 118,
        nationality: "Ireland",
        position: "Second Row",
        club: "Ulster Rugby",
        caps: 32,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24150634/IanHenderson.jpg"
      },
      {
        name: "Robbie Henshaw",
        dob: new Date("1993-06-12"),
        height: 190,
        weight: 102,
        nationality: "Ireland",
        position: "Centre",
        club: "Leinster Rugby",
        caps: 29,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24151134/RobbieHenshaw.jpg"
      },
      {
        name: "Stuart Hogg",
        dob: new Date("1992-06-24"),
        height: 180,
        weight: 100,
        nationality: "Scotland",
        position: "Full Back",
        club: "Glasgow Warriors",
        caps: 58,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24151512/StuartHogg.jpg"
      },
      {
        name: "Maro Itoje",
        dob: new Date("1994-10-28"),
        height: 195,
        weight: 117,
        nationality: "England",
        position: "Second Row",
        club: "Saracens",
        caps: 12,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24151825/MaroItoje.jpg"
      },
      {
        name: "Jonathan Joseph",
        dob: new Date("1991-05-21"),
        height: 183,
        weight: 95,
        nationality: "England",
        position: "Centre",
        club: "Bath Rugby",
        caps: 33,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24152157/JonathanJoseph.jpg"
      },
      {
        name: "Alun Wyn Jones",
        dob: new Date("1985-09-19"),
        height: 198,
        weight: 118,
        nationality: "Wales",
        position: "Second Row",
        club: "Ospreys",
        caps: 123,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24152409/Alun-WynJones.jpg"
      },
      {
        name: "George Kruis",
        dob: new Date("1990-02-22"),
        height: 198,
        weight: 117,
        nationality: "England",
        position: "Second Row",
        club: "Saracens",
        caps: 20,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24152644/GeorgeKruis.jpg"
      },
      {
        name: "Greg Laidlaw",
        dob: new Date("1985-10-12"),
        height: 175,
        weight: 80,
        nationality: "Scotland",
        position: "Scrum Half",
        club: "Gloucester Rugby",
        caps: 58,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/05/08093750/Greig-Laidlaw.jpg"
      },
      {
        name: "Courtney Lawes",
        dob: new Date("1989-02-23"),
        height: 201,
        weight: 115,
        nationality: "England",
        position: "Second Row",
        club: "Northampton Saints",
        caps: 58,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24153057/CourtneyLawes.jpg"
      },
      {
        name: "Joe Marler",
        dob: new Date("1990-07-07"),
        height: 183,
        weight: 114,
        nationality: "England",
        position: "Prop",
        club: "Harlequins",
        caps: 51,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24153342/JoeMarler.jpg"
      },
      {
        name: "Jack McGrath",
        dob: new Date("1989-10-11"),
        height: 182,
        weight: 120,
        nationality: "Ireland",
        position: "Prop",
        club: "Leinster Rugby",
        caps: 41,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24153912/JackMcGrath.jpg"
      },
      {
        name: "Ross Moriarty",
        dob: new Date("1994-04-18"),
        height: 190,
        weight: 106,
        nationality: "Wales",
        position: "Back Row",
        club: "Gloucester Rugby",
        caps: 17,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24154329/RossMoriarty.jpg"
      },
      {
        name: "Conor Murray",
        dob: new Date("1989-04-20"),
        height: 188,
        weight: 94,
        nationality: "Ireland",
        position: "Scrum Half",
        club: "Munster Rugby",
        caps: 64,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24154606/ConorMurray.jpg"
      },
      {
        name: "George North",
        dob: new Date("1992-04-13"),
        height: 193,
        weight: 108,
        nationality: "Wales",
        position: "Wing",
        club: "Northampton Saints",
        caps: 78,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24154959/GeorgeNorth.jpg"
      },
      {
        name: "Jack Nowell",
        dob: new Date("1993-04-11"),
        height: 180,
        weight: 98,
        nationality: "England",
        position: "Wing",
        club: "Exeter Cheifs",
        caps: 23,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24155226/JackNowell.jpg"
      },
      {
        name: "Sean O'Brien",
        dob: new Date("1987-02-14"),
        height: 187,
        weight: 108,
        nationality: "Ireland",
        position: "Back Row",
        club: "Leinster Rugby",
        caps: 55,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24155447/SeanOBrien.jpg"
      },
      {
        name: "Peter O'Mahony",
        dob: new Date("1989-09-17"),
        height: 191,
        weight: 108,
        nationality: "Ireland",
        position: "Back Row",
        club: "Munster Rugby",
        caps: 40,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24155737/PeterOMahony.jpg"
      },
      {
        name: "Ken Owens",
        dob: new Date("1987-01-03"),
        height: 184,
        weight: 108,
        nationality: "Wales",
        position: "Hooker",
        club: "Scarlets",
        caps: 50,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24160251/KenOwens.jpg"
      },
      {
        name: "Jared Payne",
        dob: new Date("1985-10-13"),
        height: 183,
        weight: 98,
        nationality: "Ireland",
        position: "Centre",
        club: "Ulster Rugby",
        caps: 20,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24160609/JaredPayne.jpg"
      },
      {
        name: "Jonathan Sexton",
        dob: new Date("1985-07-11"),
        height: 188,
        weight: 93,
        nationality: "Ireland",
        position: "Fly Half",
        club: "Leinster Rugby",
        caps: 73,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24160826/JohnnySexton.jpg"
      },
      {
        name: "Tommy Seymour",
        dob: new Date("1988-07-01"),
        height: 183,
        weight: 94,
        nationality: "Scotland",
        position: "Wing",
        club: "Glasgow Warriors",
        caps: 36,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24161307/TommySeymour.jpg"
      },
      {
        name: "Kyle Sinckler",
        dob: new Date("1993-03-30"),
        height: 180,
        weight: 122,
        nationality: "England",
        position: "Prop",
        club: "Harlequins",
        caps: 8,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24161600/KyleSinckler.jpg"
      },
      {
        name: "CJ Stander",
        dob: new Date("1990-04-05"),
        height: 189,
        weight: 115,
        nationality: "Ireland",
        position: "Back Row",
        club: "Munster Rugby",
        caps: 15,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24161758/CJStander.jpg"
      },
      {
        name: "Ben Te'o",
        dob: new Date("1987-01-27"),
        height: 188,
        weight: 106,
        nationality: "England",
        position: "Centre",
        club: "Worcester Warriors",
        caps: 8,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24162555/BenTeo.jpg"
      },
      {
        name: "Justin Tipuric",
        dob: new Date("1989-04-06"),
        height: 188,
        weight: 101,
        nationality: "Wales",
        position: "Back Row",
        club: "Ospreys",
        caps: 57,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24162807/JustinTipuric.jpg"
      },
      {
        name: "Mako Vunipola",
        dob: new Date("1991-01-13"),
        height: 183,
        weight: 121,
        nationality: "England",
        position: "Prop",
        club: "Saracens",
        caps: 49,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24163230/MakoVunipola.jpg"
      },
      {
        name: "Anthony Watson",
        dob: new Date("1994-02-26"),
        height: 184,
        weight: 94,
        nationality: "England",
        position: "Wing",
        club: "Bath Rugby",
        caps: 26,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24163509/AnthonyWatson.jpg"
      },
      {
        name: "Rhys Webb",
        dob: new Date("1988-12-09"),
        height: 183,
        weight: 92,
        nationality: "Wales",
        position: "Scrum Half",
        club: "Ospreys",
        caps: 28,
        image: "https://d2cx26qpfwuhvu.cloudfront.net/lions/wp-content/uploads/2017/04/24163716/RhysWebb.jpg"
      },
      {
        name: "Liam Williams",
        dob: new Date("1991-04-09"),
        height: 188,
        weight: 86,
        nationality: "Wales",
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
        dob: new Date("1988-02-15"),
        height: 181,
        weight: 104,
        nationality: "New Zealand",
        position: "Hooker",
        club: "Otago",
        caps: 0,
        image: "http://sportsgroundproduction.blob.core.windows.net/cms/8013/58332/245779/96905642-ce8c-450f-a11c-97baa6cee444_wo.jpg?v=undefined"
      },
      {
        name: "Llachlan Boshier",
        dob: new Date("1994-11-16"),
        height: 194,
        weight: 102,
        nationality: "New Zealand",
        position: "Back Row",
        club: "Taranaki / Chiefs",
        caps: 0,
        image: "http://www.chiefs.co.nz/media/xt-adaptive-images/900/media/bearleague/bl14865196411993.jpg"
      },
      {
        name: "Mitchell Dunshea",
        dob: new Date("1995-11-18"),
        height: 196,
        weight: 114,
        nationality: "New Zealand",
        position: "Back Row",
        club: "Canterbury / Crusaders",
        caps: 0,
        image: "https://crusaders.co.nz/media/com_mtree/images/listings/m/442.jpg"
      },
      // NO LONGER IN SQUAD
      // {
      //   name: "Heiden Bedwell-Curtis",
      //   dob: new Date("1991-06-25"),
      //   height: "1.94M / 6'4'",
      //   weight: 103,
      //   nationality: "New Zealand",
      //   position: "Flanker",
      //   club: "Manawatu / Crusaders",
      //   caps: 0,
      //   image: "http://cdn.c.photoshelter.com/img-get2/I0000uusXdP1ft2A/fit=1000x750/Heiden-Bedwell-Curtis.jpg"
      // },
      // {
      //   name: "Mitchell Brown",
      //   dob: new Date("1993-08-15"),
      //   height: "1.94M / 6'4'",
      //   weight: 110,
      //   nationality: "New Zealand",
      //   position: "Flanker",
      //   club: "Taranaki / Chiefs",
      //   caps: 0,
      //   image: "http://www.chiefs.co.nz/media/xt-adaptive-images/900/media/bearleague/bl1486519795597.jpg"
      // },
      // {
      //   name: "Johnny Fa'auli",
      //   dob: new Date("1995-09-13"),
      //   height: "1.80M / 5'11'",
      //   weight: 103,
      //   nationality: "New Zealand",
      //   position: "Centre",
      //   club: "Taranaki / Chiefs",
      //   caps: 0,
      //   image: "http://www.chiefs.co.nz/media/xt-adaptive-images/900/media/bearleague/bl14865196061738.jpg"
      // },
      {
        name: "Tolu Fahamokioa",
        dob: new Date("1991-05-05"),
        height: 190,
        weight: 105,
        nationality: "Tonga",
        position: "Prop",
        club: "Wellington",
        caps: 0,
        image: "http://cdn.c.photoshelter.com/img-get/I0000fYVHRF1Q9ag/s/800/800/DLwr130812-007.jpg"
      },
      {
        name: "Kaveinga Finau",
        dob: new Date("1994-08-21"),
        height: 180,
        weight: 95,
        nationality: "New Zealand",
        position: "Centre",
        club: "Canterbury",
        caps: 0,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p2385.jpg"
      },
      // {
      //   name: "Epalahame Faiva",
      //   dob: new Date("1994-05-09"),
      //   height: "1.81M / 5'11'",
      //   weight: 108,
      //   nationality: "New Zealand",
      //   position: "Hooker",
      //   club: "Waikato / Blues",
      //   caps: 0,
      //   image: "https://www.mooloo.co.nz/assets/Uploads/_resampled/detailimage-Faiva-Hame-2016.jpg"
      // },
      {
        name: "Bryn Gatland",
        dob: new Date("1995-05-10"),
        height: 178,
        weight: 88,
        nationality: "New Zealand",
        position: "Fly Half",
        club: "North Harbour / Blues",
        caps: 0,
        image: "http://www.harbourrugby.co.nz/media/players/players57a8ee7abfdd9.gif"
      },
      {
        name: "Josh Goodhue",
        dob: new Date("1995-06-13"),
        height: 199,
        weight: 115,
        nationality: "New Zealand",
        position: "Second Row",
        club: "Northland / Blues",
        caps: 0,
        image: "http://sportsgroundproduction.blob.core.windows.net/cms/8180/59000/234981/49382b4a-3020-4017-9773-bbc96a0f1637_wo.jpg?v=undefined"
      },
      {
        name: "Oliver Jager",
        dob: new Date("1995-07-05"),
        height: 192,
        weight: 120,
        nationality: "England",
        position: "Prop",
        club: "Canterbury / Crusaders",
        caps: 0,
        image: "http://cdn.c.photoshelter.com/img-get2/I0000zr3v5uexIsI/fit=1000x750/Oliver-Jager.jpg"
      },
      {
        name: "Richard Judd",
        dob: new Date("1992-05-18"),
        height: 178,
        weight: 90,
        nationality: "New Zealand",
        position: "Scum Half",
        club: "Bay of Plenty",
        caps: 0,
        image: "https://www.ultimaterugby.com/images/entities/145638-d8d587976a-3/RichardJuddrugbyplayer.jpg"
      },
      {
        name: "Luteru Laulala",
        dob: new Date("1995-05-30"),
        height: 183,
        weight: 95,
        nationality: "New Zealand",
        position: "Full Back",
        club: "Counties Manukau",
        caps: 0,
        image: "http://media.gettyimages.com/photos/luteru-laulala-poses-during-a-chiefs-super-rugby-headshots-session-on-picture-id633244008?s=612x612"
      },
      {
        name: "Jonah Lowe",
        dob: new Date("1996-05-09"),
        height: 184,
        weight: 92,
        nationality: "New Zealand",
        position: "Wing",
        club: "Hawke's Bay",
        caps: 0,
        image: "http://sportsgroundproduction.blob.core.windows.net/cms/2143/6648/151876/6827679f-1ad6-4976-b9b8-bcb3048b518a_wo.jpg?v=undefined"
      },
      {
        name: "Andrew Makalio",
        dob: new Date("1992-01-22"),
        height: 182,
        weight: 111,
        nationality: "New Zealand",
        position: "Hooker",
        club: "Tasman / Crusaders",
        caps: 0,
        image: "http://www.makos.co.nz/_makos/Library/Product/Item/f_99_Makalio.jpg"
      },
      {
        name: "Matt Matich",
        dob: new Date("1991-07-10"),
        height: 186,
        weight: 106,
        nationality: "New Zealand",
        position: "Flanker",
        club: "Northland",
        caps: 0,
        image: "http://sportsgroundproduction.blob.core.windows.net/cms/8180/59000/234981/502b1121-2f5b-4446-9108-466fb473120d_wo.jpg?v=undefined"
      },
      {
        name: "Keepa Mewett",
        dob: new Date("1987-05-10"),
        height: 198,
        weight: 111,
        nationality: "New Zealand",
        position: "Second Row",
        club: "Bay of Plenty",
        caps: 0,
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
        caps: 0,
        image: "http://www.rugbysouthland.co.nz/uploads/1/1/3/8/11384993/junior-ngaluafe.jpg?180"
      },
      {
        name: "Sevu Reece",
        dob: new Date("1997-02-13"),
        height: 179,
        weight: 87,
        nationality: "Figi",
        position: "Wing",
        club: "Waikato",
        caps: 0,
        image: "http://www.ultimaterugby.com/images/entities/146316-02641e9c1b-11/SevuReecerugbyplayer.jpg"
      },
      {
        name: "Marcel Renata",
        dob: new Date("1994-01-24"),
        height: 189,
        weight: 116,
        nationality: "New Zealand",
        position: "Prop",
        club: "Auckland",
        caps: 0,
        image: "http://sportsgroundproduction.blob.core.windows.net/cms/14254/137310/144782/083af70e-58a8-47d5-a372-5b38edd0b215_wo.jpg?v=undefined"
      },
      {
        name: "Aidan Ross",
        dob: new Date("1995-10-25"),
        height: 189,
        weight: 112,
        nationality: "New Zealand",
        position: "Prop",
        club: "Bay of Plenty/ Chiefs",
        caps: 0,
        image: "http://www.chiefs.co.nz/media/xt-adaptive-images/900/media/bearleague/bl1487549540196.jpg"
      },
      {
        name: "Peter Rowe",
        dob: new Date("1981-12-07"),
        height: 183,
        weight: 103,
        nationality: "New Zealand",
        position: "Back Row",
        club: "Whanganui",
        caps: 0,
        image: "http://www.ultimaterugby.com/images/entities/182731-cdc843d5cd-3/PeterRowerugbyplayer.jpg"
      },
      {
        name: "Jack Stratton",
        dob: new Date("1994-08-21"),
        height: 185,
        weight: 92,
        nationality: "New Zealand",
        position: "Scrum Half",
        club: "Canterbury",
        caps: 0,
        image: "http://www.ultimaterugby.com/images/entities/146051-f8b79362fe-3/JackStrattonrugbyplayer.jpg"
      },
      {
        name: "Dwayne Sweeney",
        dob: new Date("1984-08-08"),
        height: 180,
        weight: 95,
        nationality: "New Zealand",
        position: "Centre",
        club: "Munakata",
        caps: 0,
        image: "http://media.gettyimages.com/photos/dwayne-sweeney-of-the-barbarians-poses-for-a-portrait-during-the-at-picture-id485184598"
      },
      {
        name: "James Tucker",
        dob: new Date("1994-08-05"),
        height: 197,
        weight: 115,
        nationality: "New Zealand",
        position: "Second Row",
        club: "Waikato / Chiefs",
        caps: 0,
        image: "http://media.gettyimages.com/photos/james-tucker-poses-during-a-chiefs-super-rugby-headshots-session-on-picture-id633244162?s=612x612"
      },
      {
        name: "Sam Vaka",
        dob: new Date("1992-10-26"),
        height: 186,
        weight: 95,
        nationality: "New Zealand",
        position: "Wing",
        club: "Counties Manukau",
        caps: 0,
        image: "http://www4.pictures.zimbio.com/gi/Chiefs+Headshots+Session+LVwLvVUiS26x.jpg"
      }
      ]
    },
    {
      name: "New Zealand",
      shortName: "All Blacks",
      players: [
        {
          name: "Ardie Savea",
          dob: new Date("1993-10-14"),
          height: 190,
          weight: 89,
          nationality: "New Zealand",
          position: "Back Row",
          club: "Hurricanes",
          caps: 12,
          image: "https://pbs.twimg.com/profile_images/781696379081089026/8W97eo0s.jpg"
        },
        {
          name: "Brodie Retallick",
          dob: new Date("1991-05-31"),
          height: 204,
          weight: 120,
          nationality: "New Zealand",
          position: "Lock",
          club: "Chiefs",
          caps: 60,
          image: "http://www1.pictures.zimbio.com/gi/Brodie+Retallick+New+Zealand+Blacks+Headshots+QBUC_xABZnll.jpg"
        },
        {
        name: "Charlie Faumuina",
        dob: new Date("1986-12-24"),
        height: 184,
        weight: 127,
        nationality: "New Zealand",
        position: "Prop",
        club: "Blues",
        caps: 46,
        image: "http://www.rugby365.com/uploads/image/asset/26203/large_Charlie-Faumuina-All-Blacks.jpg"
        },
        {
        name: "Codie Taylor",
        dob: new Date("1991-03-31"),
        height: 183,
        weight: 106,
        nationality: "New Zealand",
        position: "Hooker",
        club: "Crusaders",
        caps: 14,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1940.jpg"
        },
        {
        name: "Dane Coles",
        dob: new Date("1986-12-10"),
        height: 184,
        weight: 109,
        nationality: "New Zealand",
        position: "Hooker",
        club: "Hurricanes",
        caps: 49,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1396.jpg"
        },
        {
        name: "Elliot Dixon",
        dob: new Date("1989-09-04"),
        height: 193,
        weight: 110,
        nationality: "New Zealand",
        position: "Back row",
        club: "Highlanders",
        caps: 3,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1901.jpg"
        },
        {
        name: "James Parsons",
        dob: new Date("1986-11-27"),
        height: 185,
        weight: 106,
        nationality: "New Zealand",
        position: "Hooker",
        club: "Blues",
        caps: 2,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p2457.jpg"
        },
        {
        name: "Jerome Kaino",
        dob: new Date("1983-04-06"),
        height: 196,
        weight: 105,
        nationality: "New Zealand",
        position: "Back Row",
        club: "Blues",
        caps: 77,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p539.jpg"
        },
        {
        name: "Joe Moody",
        dob: new Date("1988-09-18"),
        height: 188,
        weight: 118,
        nationality: "New Zealand",
        position: "Prop",
        club: "Crusaders",
        caps: 24,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p2400.jpg"
        },
        {
        name: "Kane Hames",
        dob: new Date("1988-08-28"),
        height: 181,
        weight: 111,
        nationality: "New Zealand",
        position: "Prop",
        club: "Highlanders",
        caps: 1,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p2341.jpg"
        },
        {
        name: "Kieran Read",
        dob: new Date("1985-10-26"),
        height: 193,
        weight: 111,
        nationality: "New Zealand",
        position: "Back Row",
        club: "Crusaders",
        caps: 97,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1282.jpg"
        },
        {
        name: "Liam Coltman",
        dob: new Date("1990-01-25"),
        height: 186,
        weight: 107,
        nationality: "New Zealand",
        position: "Hooker",
        club: "Highlanders",
        caps: 1,
        image: "http://www1.pictures.zimbio.com/gi/Liam+Coltman+2013+Highlanders+Headshots+LsYhVHojvLvl.jpg"
        },
        {
        name: "Liam Squire",
        dob: new Date("1991-03-20"),
        height: 196,
        weight: 113,
        nationality: "New Zealand",
        position: "Back Row",
        club: "Highlanders",
        caps: 8,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p2346.jpg"
        },
        {
        name: "Luke Romano",
        dob: new Date("1986-02-16"),
        height: 199,
        weight: 115,
        nationality: "New Zealand",
        position: "Lock",
        club: "Crusaders",
        caps: 26,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p2183.jpg"
        },
        {
        name: "Matt Todd",
        dob: new Date("1988-03-24"),
        height: 185,
        weight: 104,
        nationality: "New Zealand",
        position: "Back Row",
        club: "Crusaders",
        caps: 8,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p2119.jpg"
        },
        {
        name: "Nathan Harris",
        dob: new Date("1992-03-08"),
        height: 186,
        weight: 105,
        nationality: "New Zealand",
        position: "Hooker",
        club: "Chiefs",
        caps: 4,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p2170.jpg"
        },
        {
        name: "Ofa Tu'ungafasi",
        dob: new Date("1992-04-19"),
        height: 192,
        weight: 115,
        nationality: "New Zealand",
        position: "Prop",
        club: "Blues",
        caps: 4,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1942.jpg"
        },
        {
        name: "Owen Franks",
        dob: new Date("1987-12-23"),
        height: 185,
        weight: 119,
        nationality: "New Zealand",
        position: "Prop",
        club: "Crusaders",
        caps: 90,
        image: "http://www4.pictures.zimbio.com/gi/New+Zealand+IRB+RWC+2011+Headshots+HZZ60SLB_Zll.jpg"
        },
        {
        name: "Patrick Tuipulotu",
        dob: new Date("1993-01-23"),
        height: 198,
        weight: 120,
        nationality: "New Zealand",
        position: "Lock",
        club: "Blues",
        caps: 12,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p2152.jpg"
        },
        {
        name: "Sam Cane",
        dob: new Date("1992-01-13"),
        height: 189,
        weight: 103,
        nationality: "New Zealand",
        position: "Back Row",
        club: "Chiefs",
        caps: 40,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1922.jpg"
        },
        {
        name: "Sam Whitelock",
        dob: new Date("1988-12-10"),
        height: 202,
        weight: 116,
        nationality: "New Zealand",
        position: "Lock",
        club: "Crusaders",
        caps: 84,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1800.jpg"
        },
        {
        name: "Scott Barrett",
        dob: new Date("1993-11-20"),
        height: 197,
        weight: 105,
        nationality: "New Zealand",
        position: "Lock",
        club: "Crusaders",
        caps: 4,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p2290.jpg"
        },
        {
        name: "Steven Luatua",
        dob: new Date("1991-04-19"),
        height: 196,
        weight: 112,
        nationality: "New Zealand",
        position: "Back Row",
        club: "Blues",
        caps: 15,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1927.jpg"
        },
        {
        name: "Wyatt Crockett",
        dob: new Date("1983-01-24"),
        height: 193,
        weight: 116,
        nationality: "New Zealand",
        position: "Prop",
        club: "Crusaders",
        caps: 58,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1466.jpg"
        },
        {
        name: "Aaron Cruden",
        dob: new Date("1989-01-08"),
        height: 178,
        weight: 84,
        nationality: "New Zealand",
        position: "Fly Half",
        club: "Chiefs",
        caps: 47,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1900.jpg"
        },
        {
        name: "Aaron Smith",
        dob: new Date("1988-11-21"),
        height: 171,
        weight: 84,
        nationality: "New Zealand",
        position: "Scrum Half",
        club: "Highlanders",
        caps: 58,
        image: "http://www2.pictures.zimbio.com/gi/Aaron+Smith+New+Zealand+Blacks+Headshots+Session+TitQhPEubwCl.jpg"
        },
        {
        name: "Anton Lienert-Brown",
        dob: new Date("1995-04-15"),
        height: 185,
        weight: 96,
        nationality: "New Zealand",
        position: "Centre",
        club: "Chiefs",
        caps: 9,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p2386.jpg"
        },
        {
        name: "Beauden Barrett",
        dob: new Date("1991-05-27"),
        height: 187,
        weight: 91,
        nationality: "New Zealand",
        position: "Fly Half",
        club: "Hurricanes",
        caps: 49,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1965.jpg"
        },
        {
        name: "Ben Smith",
        dob: new Date("1986-06-01"),
        height: 186,
        weight: 93,
        nationality: "New Zealand",
        position: "Wing",
        club: "Highlanders",
        caps: 60,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1832.jpg"
        },
        {
        name: "Charlie Ngatai",
        dob: new Date("1990-08-17"),
        height: 186,
        weight: 97,
        nationality: "New Zealand",
        position: "Centre",
        club: "Chiefs",
        caps: 1,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1990.jpg"
        },
        {
        name: "Damian McKenzie",
        dob: new Date("1995-04-20"),
        height: 177,
        weight: 87,
        nationality: "New Zealand",
        position: "Fly Half",
        club: "Chiefs",
        caps: 2,
        image: "http://www1.pictures.zimbio.com/gi/Chiefs+Headshots+Session+d8IejNRzeJNx.jpg"
        },
        {
        name: "George Moala",
        dob: new Date("1990-11-05"),
        height: 188,
        weight: 104,
        nationality: "New Zealand",
        position: "Wing",
        club: "Blues",
        caps: 4,
        image: "http://theblues.co.nz/wp-content/uploads/2015/11/George-Moala-1.jpg"
        },
        {
        name: "Israel Dagg",
        dob: new Date("1988-06-06"),
        height: 186,
        weight: 96,
        nationality: "New Zealand",
        position: "Full back",
        club: "Crusaders",
        caps: 61,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1620.jpg"
        },
        {
        name: "Julian Savea",
        dob: new Date("1990-08-07"),
        height: 192,
        weight: 108,
        nationality: "New Zealand",
        position: "Wing",
        club: "Hurricanes",
        caps: 52,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1890.jpg"
        },
        {
        name: "Lima Sopoaga",
        dob: new Date("1991-02-03"),
        height: 177,
        weight: 91,
        nationality: "New Zealand",
        position: "Fly Half",
        club: "Highlanders",
        caps: 6,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1936.jpg"
        },
        {
        name: "Malakai Fekitoa",
        dob: new Date("1992-05-10"),
        height: 187,
        weight: 97,
        nationality: "New Zealand",
        position: "Centre",
        club: "Highlanders",
        caps: 23,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p2399.jpg"
        },
        {
        name: "Rieko Ioane",
        dob: new Date("1997-18-03"),
        height: 189,
        weight: 102,
        nationality: "New Zealand",
        position: "Centre",
        club: "Blues",
        caps: 2,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p2401.jpg"
        },
        {
        name: "Ryan Crotty",
        dob: new Date("1988-09-23"),
        height: 181,
        weight: 91,
        nationality: "New Zealand",
        position: "Centre",
        club: "Crusaders",
        caps: 26,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1784.jpg"
        },
        {
        name: "Setareki Tamanivalu",
        dob: new Date("1992-06-23"),
        height: 189,
        weight: 94,
        nationality: "New Zealand",
        position: "Centre",
        club: "Chiefs",
        caps: 3,
        image: "http://www1.pictures.zimbio.com/gi/Seta+Tamanivalu+iyUh5CJ1kDFm.jpg"
        },
        {
        name: "Tawera Kerr-Barlow",
        dob: new Date("1990-08-15"),
        height: 187,
        weight: 89,
        nationality: "New Zealand",
        position: "Scrum Half",
        club: "Chiefs",
        caps: 25,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p1985.jpg"
        },
        {
        name: "TJ Perenara",
        dob: new Date("1992-01-23"),
        height: 184,
        weight: 94,
        nationality: "New Zealand",
        position: "Scrum Half",
        club: "Hurricanes",
        caps: 29,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p2122.jpg"
        },
        {
        name: "Waisake Naholo",
        dob: new Date("1991-05-08"),
        height: 186,
        weight: 96,
        nationality: "New Zealand",
        position: "Wing",
        club: "Highlanders",
        caps: 12,
        image: "http://media.allblacks.com/dnaImages/PlayersSecondary/p2121.jpg"
        },
    ]}
  ])

db.favourites.insert([
  ])


// http://nosql.how2js.com/dbs-and-docs/5

// Create three queries to fulfill the following requirements.
// Adjust the _id values in your docs to facilitate querying.
//  List all the actors sorted by first name then last name
//  List all movies with Emma Watson
//  List all movies with John Candy released in 1986 and 1987

const PouchDB = require('pouchdb');
var db = new PouchDB('http://localhost:5984/ex5-movies');

let movie = [{
    _id: "---",
    type: "actor",
    firstName: "Emma",
    lastName: "Watson",
    phone: "200 222 2222",
    email: "hermione@yahoo.com",
    active: true
}, {
    _id: "---",
    type: "actor",
    firstName: "Tom",
    lastName: "Cruise",
    phone: "843 555 1144",
    email: "tomcruise@gmail.com",
    active: true
}, {
    _id: "---",
    type: "actor",
    firstName: "John",
    lastName: "Candy",
    phone: "404 867 5309",
    email: "JCandy@sctv.com",
    active: false
}, {
    _id: "---",
    type: "actor",
    firstName: "Shia",
    lastName: "LaBeouf",
    phone: "303 543 9876",
    email: "shia@disturbia.com",
    active: true
}, {
    _id: "---",
    type: "actor",
    firstName: "Pierce",
    lastName: "Brosnan",
    phone: "330 111 1234",
    email: "pierce@dantespeak.com",
    active: true
}, {
    _id: "---",
    name: "Dante\'s Peak",
    actorID: "---",
    role: "Harry Dalton",
    year: 1997,
    desc: "A vulcanologist (Pierce Brosnan) arrives at a countryside town recently named the second most desirable ... Videos. Dante's Peak -- Pierce Brosnan and Linda Hamilton star in this adrenaline-pumping adventure"
}, {
    _id: "---",
    name: "Indiana Jones and the Kingdom of the Crystal Skull",
    actorID: "---",
    role: "Mutt Williams",
    year: 2008,
    desc: "The movie pays tribute to the science fiction B-movies of the era, pitting Indiana Jones against Soviet agents—led by Irina Spalko (Cate Blanchett)—searching for a telepathic crystal skull. Indiana is aided by his former lover Marion Ravenwood (Karen Allen) and their son Mutt Williams (Shia LaBeouf)"
}, {
    _id: "---",
    name: "Uncle Buck",
    actorID: "---",
    role: "Buck Russell",
    year: 1989,
    desc: "Bachelor and all round slob (John Candy), Buck, babysits his brother's rebellious teenage daughter and her cute younger brother and sister."
}, {
    _id: "---",
    name: "Space Balls",
    actorID: "---",
    role: "Barf the Mog",
    year: 1987,
    desc: "Planet Spaceballs\' President Skroob sends Lord Dark Helmet to steal planet Druidia\'s abundant supply of air to replenish their own, and only Lone Starr can stop them."
}, {
    _id: "---",
    name: "Planes Trains and Automobiles",
    actorID: "---",
    role: "Del Griffith",
    year: 1987,
    desc: "A man must struggle to travel home for Thanksgiving with an obnoxious slob of a shower curtain ring salesman as his only companion."
}, {
    _id: "---",
    name: "Little Shop of Horrors",
    actorID: "---",
    role: "Wink Wilkinson",
    year: 1987,
    desc: "A nerdy florist finds his chance for success and romance with the help of a giant man-eating plant who demands to be fed."
}, {
    _id: "---",
    name: "Top Gun",
    actorID: "---",
    role: "Pete Mitchell",
    year: 1986,
    desc: "As students (Tom Cruise) at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom."
}, {
    _id: "---",
    name: "Rain Man",
    actorID: "---",
    role: "Charlie Babbitt",
    year: 1988,
    desc: "Selfish yuppie Charlie Babbitt's (Tom Cruise) father left a fortune to his savant brother Raymond (Dustin Hoffman) and a pittance to Charlie; they travel cross-country."
}, {
    _id: "---",
    name: "Harry Potter and the Goblet of Fire",
    actorID: "---",
    role: "Hermione Granger",
    year: 2005,
    desc: "Harry finds himself mysteriously selected as an under-aged competitor in a dangerous tournament between three schools of magic."
}, {
    _id: "---",
    name: "Harry Potter and the Order of the Phoenix",
    actorID: "---",
    role: "Hermione Granger",
    year: 2007,
    desc: "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts."
}];

// var callback = function (err, data) {
//         if (err) return console.log(err.message)
//         return console.log(JSON.stringify(data, null, 2))
//     }


var callback = function(message) {
    return function(err, data) {
        if (err) return console.log(err.message)
        return console.log(message, JSON.stringify(data, null, 2))
    }
}

db.bulkDocs(movie, function(err, response) {
    if (err) return console.log(err);
    // handle result
    if (response) {
        // list all the actors.
        db.-- - (-- - , callback("List all the actors"))

        // list all the movies with Emma Watson
        db.-- - (-- - , callback("list all the movies with Emma Watson"))

        // list all movies with John Candy released in 1986 and 1987
        db.allDocs(-- - , callback("list all movies with John Candy released in 1986 and 1987"))
    }
});

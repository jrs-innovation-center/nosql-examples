const PouchDB = require('pouchdb');
var db = new PouchDB('http://localhost:5984/ex4');

let drivers = [{
        _id: "1",
        type: "driver",
        firstName: "Steve",
        lastName: "Jobs"
    }, {
        _id: "2",
        type: "driver",
        firstName: "Taylor",
        lastName: "Swift"
    }, {
        _id: "3",
        type: "driver",
        firstName: "Justin",
        lastName: "Bieber"
    }, {
        _id: "4",
        type: "driver",
        firstName: "Jerry",
        lastName: "Seinfeld"
    }, {
        _id: "5",
        type: "driver",
        firstName: "Timmy",
        lastName: "Smith"
    },  {
        _id: "6",
        type: "driver",
        firstName: "Herschel",
        lastName: "Krustofsky"
    },  {
        _id: "7",
        type: "driver",
        firstName: "Robert",
        lastName: "Terwilliger"
    }
];

var callback = function (err, data) {
        if (err) return console.log(err.message)
        return console.log(JSON.stringify(data, null, 2))
    }

db.bulkDocs(drivers, function(err, response) {
    if (err) {
        return console.log(err);
    }
    // handle result
    if (response) {
        db.----({----}, callback);
    }
});

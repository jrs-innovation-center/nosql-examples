const PouchDB = require('pouchdb');
var db = new PouchDB('http://localhost:5984/ex4');

let drivers = [{
        _id: "Jobs_Steve",
        type: "driver",
        firstName: "Steve",
        lastName: "Jobs"
    }, {
        _id: "Swift_Taylor",
        type: "driver",
        firstName: "Taylor",
        lastName: "Swift"
    }, {
        _id: "Bieber_Justin",
        type: "driver",
        firstName: "Justin",
        lastName: "Bieber"
    }, {
        _id: "Seinfeld_Jerry",
        type: "driver",
        firstName: "Jerry",
        lastName: "Seinfeld"
    }, {
        _id: "Smith_Timmy",
        type: "driver",
        firstName: "Timmy",
        lastName: "Smith"
    },  {
        _id: "Krustofsky_Herschel",
        type: "driver",
        firstName: "Herschel",
        lastName: "Krustofsky"
    },  {
        _id: "Terwilliger_Robert",
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
        db.allDocs({include_docs: true, startkey: "4", endkey:"C"}, callback);
    }
});

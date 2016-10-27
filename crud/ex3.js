const PouchDB = require('pouchdb');
var db = new PouchDB('http://localhost:5984/ex3');

let drivers = [{
        _id: "Jobs_Steve",
        type: "driver",
        firstName: "Steve",
        lastName: "Jobs"
    }, {
        _id: "Swift_Taylor",
        type: "driver",
        firstName: "Taylor",
        lastName: "Swift",
        issuedState: "SC",
        suspended: false,
        violations: [{
            id: "100",
            date: "2016-04-05T14:30Z",
            points: 2
        }, {
            id: "200",
            date: "2016-05-05T17:23Z",
            points: 1
        }]
    }, {
        _id: "3",
        type: "driver",
        firstName: "Justin",
        lastName: "Bieber",
        suspended: true,
        issuedState: "SC",
        plates: [{
            tagNumber: "ABE463"
        }, {
            tagNumber: "TIMMAY"
        }],
        violations: [{
            id: "200",
            date: "2016-06-30T17:30Z",
            points: 2
        }, {
            id: "201",
            date: "2016-07-02T01:30Z",
            points: 5
        }, {
            id: "202",
            date: "2016-07-04T15:01Z",
            points: 5
        }, {
            id: "203",
            date: "2016-07-05T01:16Z",
            points: 5
        }]
    }, {
        _id: "4",
        type: "driver",
        firstName: "Jerry",
        lastName: "Seinfeld",
        issuedState: "SC",
        suspended: true,
        license: "12345",
        plates: [{
            tagNumber: "GLX123"
        }, {
            tagNumber: "DAWGS1"
        }],
        violations: [{
            id: "1",
            date: "2016-05-01T12:30Z",
            points: "2"
        }, {
            id: "2",
            date: "2016-05-02T01:30Z",
            points: "2"
        }, {
            id: "4",
            date: "2016-06-03T19:01Z",
            points: "2"
        }, {
            id: "3",
            date: "2016-06-05T17:16Z",
            points: "1"
        }]
    }, {
        _id: "5",
        type: "driver",
        firstName: "Timmy",
        lastName: "Smith",
        issuedState: "SC",
        suspended: true,
        license: "343123",
        plates: [{
            tagNumber: "ABE463"
        }, {
            tagNumber: "TIMMAY"
        }],
        violations: [{
            id: "1",
            date: "2016-07-01T15:30Z",
            points: "3"
        }, {
            id: "2",
            date: "2016-07-10T16:30Z",
            points: "2"
        }]
    }
];

db.bulkDocs(drivers, function(err, response) {
    if (err) {
        return console.log(err);
    }
    // handle result
    if (response) {
        db.allDocs({include_docs: true}, function (err, data) {
            if (err) return console.log(err.message)
            return console.log(JSON.stringify(data, null, 2))
        });
    }
});

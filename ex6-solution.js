//http://nosql.how2js.com/dbs-and-docs/6
var PouchDB = require('pouchdb');
var db = new PouchDB('http://localhost:5984/ex6-concurrency');

var drivers = [{
    _id: "1",
    type: "driver",
    firstName: "Steve",
    lastName: "Jobs"
}, {
    _id: "2",
    type: "driver",
    firstName: "Taylor",
    lastName: "Swift"
}];

var callback = function(message) {
    return function(err, data) {
        if (err) return console.log(err.message)
        return console.log(message, JSON.stringify(data, null, 2))
    }
}

// add the records
db.bulkDocs(drivers, function(err, response) {
    if (err) {
        return console.log(err);
    }
    // handle result
    if (response) {
        console.log("BulkDocs response: ", response)

        // update taylor swift with suspended: true.  _rev value must be current
        db.put({
            _id: response[1].id,
            _rev: response[1].rev,
            type: "driver",
            firstName: "Taylor",
            lastName: "Swift",
            suspended: true
        }, function(err, response) {
            if (err) {
                return console.log(err);
            }
            // retrieve her record back from the database
            if (response) {
                db.get(response.id, callback("retrieve her record back from the database"));
            }
        });
    }
});

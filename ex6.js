//http://nosql.how2js.com/dbs-and-docs/6
//https://pouchdb.com/api.html#create_document

drivers = [{
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

var PouchDB = require('pouchdb');
var db = new PouchDB('http://localhost:5984/ex6-concurrency');

var callback = function(message) {
    return function(err, data) {
        if (err) return console.log(err.message)
        return console.log(message, JSON.stringify(data, null, 2))
    }
}


// add the records
db.--- (---- , function(err, response) {
    if (err) {
        return console.log(err);
    }
    // update taylor swift with suspended: true.  _rev value must be current
    if (response) {
        db.--- (----, function(err, response) {
            if (err) {
                return console.log(err);
            }
            // retrieve her record back from the database
            if (response) {
                db.---(----, callback("retrieve her record back from the database"));
            }
        });
    }
});

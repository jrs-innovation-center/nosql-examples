
//Updating a document
//http://nosql.how2js.com/dbs-and-docs/6
//https://pouchdb.com/api.html#create_document

// CouchDB uses an optimistic concurrency model.
// When it is time to update a document, you send the document
// revision value (_rev) along with the rest of your data in the update.
// You are optimistic that no one else has updated your record in the meantime.
// If they have, the _rev will be a different value and Couch will reject your update.
//
// A new database named test has been created.
// Add two documents to this database with the following information:

// Update Taylor Swift's record by adding the following property to the document:
// 
// suspended: true
//
// Remember, when updating you are replacing the entire document.
// Once you have updated her record, retrieve her record back from the database.
// The callbacks for the responses have been provided. Similarly to previous exercises,
// the 3rd callback will utilize a function named testcallback to check your work.

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

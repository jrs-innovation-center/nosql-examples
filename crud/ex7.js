//http://nosql.how2js.com/dbs-and-docs/7

// A new database named test has been created and two drivers have been added for you.
// Delete Taylor Swift's record.
// Once you've deleted her record, attempt to retrieve her deleted record back from the database.
//
// You should receive an error message stating that the document is missing.
// The callback to test for the appropriate error message has been provided. Similarly to previous exercises,
// the 3rd callback will utilize a function named testcallback to check your work.

const PouchDB = require('pouchdb');
var db = new PouchDB('http://localhost:5984/ex7-delete');

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
}];

var callback = function(message) {
    return function(err, data) {
        if (err) return console.log("error! ", message, err.message)
        return console.log("success! ", message, JSON.stringify(data, null, 2))
    }
}

// adding the drivers
db.bulkDocs(drivers, function(err, response) {
    if (err) {
        return console.log(err);
    }
    // handle result
    if (response) {
        console.log("Added the drivers via bulkDocs", response)

        //Delete Taylor
        db.---(---,  function(err, deleteResponse) {
            if (err) {
                return console.log(err);
            }
            // handle result
            if (deleteResponse) {
                console.log("Delete success!", deleteResponse)
                // try and retrieve the deleted Taylor Swift record back out of the database
                db.---(---, callback("try and retrieve the deleted Taylor Swift record: "));
            }
        });
    }
});

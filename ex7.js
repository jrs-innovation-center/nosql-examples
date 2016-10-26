
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

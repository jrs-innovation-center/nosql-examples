
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

db.bulkDocs(drivers, function(err, response) {
    if (err) return console.log(err)
    // handle result
    if (response) {
        console.log("Added the drivers via bulkDocs", response)
        //Delete Taylor using remove.  You can also use db.put() with {_deleted: true}
        db.remove({
            _id: response[1].id,
            _rev: response[1].rev
          },  function(err, deletedResponse) {
            if (err) return console.log("delete error!", err);
            if (deletedResponse) {
                console.log("Delete success!", deletedResponse)
                // try and retrieve the deleted record back out of the database
                db.get(deletedResponse.id, callback("try and retrieve the deleted Taylor Swift record: "));
            }
        });
    }
});

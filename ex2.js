
const PouchDB = require('pouchdb');

var db = new PouchDB('http://localhost:5984/ex2b');

const drivers = [
    {
        "_id": "alex",
        "type": "driver",
        "firstName": "Alex",
        "lastName": "Boquist",
        "issuedState": "SC",
        "suspended": true,
        "license": "huh?",
        "violations": {
            "id": 3,
            "date": new Date().toISOString(),
            "points": 3
        },
        "plates": {
            "tagNumber": "bew231"
        }
    }
]

db.bulkDocs(drivers, function cb(err, result){
  if (err) {
    console.log(err)
  }
  if (result) {
    console.log(JSON.stringify(result, null, 2))
  }
})



BROWSER --- INTERNET (HTTP) --- SPOTIFY API  --- COUCHDB                                                                        DATABASE (COUCHDB)

const PouchDB = require('pouchdb');

var db = new PouchDB('http://localhost:5984/ex2');

function getDocs(ids, callback  )
{

  db.bulkGet({
    docs: ids
  }, function (err, result) {
    if (err) {callback (err)}
    callback(null, result)
  })
}

getDocs([], function(err, dataResponse){
  if (err) console.log(err)
  return dataResponse
})

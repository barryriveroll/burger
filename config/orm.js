var connection = require("./connection.js");

var orm = {
  selectAll: function(table, callback) {
    var queryString = "SELECT * FROM " + table;
    connection.query(queryString, function(err, results) {
      if (err) throw err;
      callback(results);
    });
  },
  insertOne: function() {
    //
  },
  updateOne: function() {
    //
  }
};

module.exports = orm;

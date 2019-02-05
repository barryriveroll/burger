var connection = require("./connection.js");

var orm = {
  selectAll: function(table, callback) {
    var queryString = "SELECT * FROM " + table;

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  insertOne: function(table, columns, values, callback) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += columns.toString();
    queryString += ") ";
    queryString += "VALUES (?, ?)";

    connection.query(queryString, values, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  updateOne: function(table, columns, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET devoured = " + columns.devoured;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;

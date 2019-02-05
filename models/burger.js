var orm = require("../config/orm.js");

var burger = {
  allBurgers: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },

  addBurger: function(columns, values, callback) {
    orm.insertOne("burgers", columns, values, function(res) {
      callback(res);
    });
  },

  updateDevoured: function(columns, condition, callback) {
    orm.updateOne("burgers", columns, condition, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;

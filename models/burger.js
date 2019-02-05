var orm = require("../config/orm.js");

var burger = {
  allBurgers: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  }
};

module.exports = burger;

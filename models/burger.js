const orm = require('../config/orm.js');

burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },
    insertOne: function (burgerName, cb) {
        orm.insertOne('burgers', 'burger_name', 'devoured', burgerName, false, function (res) {
            cb(res);
        });
    },
    updateOne: function (burgerID, devouredStatus, cb) {
        orm.updateOne('burgers', 'devoured', devouredStatus, 'id', burgerID, function (res) {
            cb(res);
        });
    },
    deleteOne: function (burgerID, cb) {
        orm.deleteOne('burgers', 'id', burgerID, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;
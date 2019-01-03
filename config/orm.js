const connection = require('./connection.js');
const mysql = require('mysql');

const orm = {
    selectAll: function (table, cb) {
        var query = 'SELECT * FROM ??';
        connection.query(query, [table], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function (table, columnOne, columnTwo, valueOne, valueTwo, cb) {
        var query = 'INSERT INTO ?? (??, ??) VALUES (?, ?)';
        var inserts = [table, columnOne, columnTwo, valueOne, valueTwo];
        var string = mysql.format(query, inserts);
        connection.query(string, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function (table, columnOne, valueOne, columnTwo, valueTwo, cb) {
        var query = 'UPDATE ?? SET ?? = ? WHERE ?? = ?'
        connection.query(query, [table, columnOne, valueOne, columnTwo, valueTwo], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    deleteOne: function (table, columnOne, valueOne, cb) {
        var query = 'DELETE FROM ?? WHERE ?? = ?';
        connection.query(query, [table, columnOne, valueOne], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;
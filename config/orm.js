const connection = require('./connection.js');
const mysql = require('mysql');

const orm = {
    selectAll: function (table, cb) {
        let query = 'SELECT * FROM ??';
        connection.query(query, [table], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function (table, columnOne, columnTwo, valueOne, valueTwo, cb) {
        let query = 'INSERT INTO ?? (??, ??) VALUES (?, ?)';
        let inserts = [table, columnOne, columnTwo, valueOne, valueTwo];
        let string = mysql.format(query, inserts);
        connection.query(string, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function (table, columnOne, valueOne, columnTwo, valueTwo, cb) {
        let query = 'UPDATE ?? SET ?? = ? WHERE ?? = ?'
        connection.query(query, [table, columnOne, valueOne, columnTwo, valueTwo], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    deleteOne: function (table, columnOne, valueOne, cb) {
        let query = 'DELETE FROM ?? WHERE ?? = ?';
        connection.query(query, [table, columnOne, valueOne], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;
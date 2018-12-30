var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// router.get("/add-burger", function (req, res) {
//     res.render("/Users/jessicanguyen/Desktop/development/homework/burger/views/add-burger.handlebars", { title: "Add burger" });
// })

// Create the routes and associated logic
router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burgers', function (req, res) {
    burger.insertOne([
        'burger_name'
    ], [
            req.body.burger_name
        ], function (data) {
            res.redirect('/');
        });
});

router.put('/burgers/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function (data) {
        res.redirect('/');
    });
});

// Export router
module.exports = router;
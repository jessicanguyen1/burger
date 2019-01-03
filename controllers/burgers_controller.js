const express = require('express');
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        const hbsObject = { burgers: data };
        res.render("index", hbsObject);
    });
});

router.get("/add-burger", function (req, res) {
    res.render("add-burger");
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.newBurger, function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    const id = req.params.id;
    let changedStatus;
    if (req.body.devour === 'true') { changedStatus = true }
    if (req.body.devour === 'false') { changedStatus = false }

    burger.updateOne(id, changedStatus, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    const id = req.params.id;
    burger.deleteOne(id, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
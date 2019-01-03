const express = require('express');
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = { burgers: data };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
        res.redirect("/");
        // res.json({ id: result.insertId });
    });
});

router.delete("/api/burgers/:id", function (req, res) {

    var condition = "id = " + req.params.id;

    burger.deleteOne(condition, function (result) {
        res.redirect("/");
    });

});



module.exports = router;








// router.put("/:id", function (req, res) {
//     var id = req.params.id;

//     console.log("id", id);

//     burger.updateOne(id, function () {
//         res.redirect("/");
//     });
// });

// router.delete("/api/burgers/:id", function (req, res) {
//     var id = req.params.id;
//     burger.deleteOne(id, function (result) {
//         if (result.affectedRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });
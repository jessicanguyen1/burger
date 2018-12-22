var express = require("express");
var router = express.Router();

router.get("/add-burger", function (req, res) {
    res.render("/Users/jessicanguyen/Desktop/development/homework/burger/views/add-burger.handlebars", { title: "Add burger" });
})

// Export router
module.exports = router;
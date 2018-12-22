// Require express, method-override, body-parser
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exhbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

// Express middleware // Parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add view engine for the app
app.engine("handlebars", exhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Create server initial route
app.get("/", function (req, res) {
    res.render("index", { title: "Eat-Da-Burger" });
});

// Burger API routes
// require("./controllers/burgers_controller");

app.get("/add-burger", function (req, res) {
    res.render("add-burger", { title: "Add Burger" });
});




// Listener
app.listen(PORT, function () {
    console.log(`App Listening on PORT: ${PORT}`);
});

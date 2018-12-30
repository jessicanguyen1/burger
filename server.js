// Require express, method-override, body-parser
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exhbs = require("express-handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");

var app = express();
var PORT = process.env.PORT || 8080;

// Express middleware // Parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Add view engine for the app
app.engine("handlebars", exhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Create server initial route
app.get("/", function (req, res) {
    res.render("index");
});

app.use('/', routes);


// Listener
app.listen(PORT, function () {
    console.log(`App Listening on PORT: ${PORT}`);
});

const express = require('express');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const exphbs  = require('express-handlebars');
var passport = require("./config/passport");
var session = require("express-session");
var PORT = process.env.PORT || 3000;

var app = express();
var router = express.Router();

// bring in the models
var db = require("./models");


app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// var routes = require("./controllers/....");

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
  });  




// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
var Op = require("sequelize").Op;

// Routes
// =============================================================
module.exports = function(app) {
  // ajax routes for all makes
  app.get("/api/all", function(req, res) {
    db.make.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a specific make
  app.get("/api/:make", function(req, res) {
    db.make.findAll({
      where: {
        title: req.params.make
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get all models of a specific make
  app.get("/api/model/:model", function(req, res) {
    db.make.findAll({
      where: {
        model: req.params.model
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  
};

// var db = require("../models");

// module.exports = function(app) {
//   // Load index page
 
//   // Load make page and pass in an make by id
//   app.get("/make/:id", function(req, res) {
//     db.make.findOne({ where: { id: req.params.id } }).then(function(dbMake) {
      
//       console.log(dbMake);
//     });
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
    
//     console.log("404");
//   });
// };




// // *********************************************************************************
// // html-routes.js - this file offers a set of routes for sending users to the various html pages
// // *********************************************************************************

// // Dependencies
// // =============================================================
 var path = require("path");
var express = require("express");
var router = express.Router();
var make = require("../models/make.js");
var model = require("../models/model.js");

// // Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   make.all(function(data) {
//     var hbsObject = {
//       makes: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/api/makes", function(req, res) {
//   make.create([
//     "name"
//   ], [
//     req.body.name
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/makes/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   make.update({
//     name: req.body.name
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/makes/:id", function(req, res) {
//   var id = parseInt(req.params.id);

//   make.delete(id, function(result) {
//     console.log(result);
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
//   res.status(200).end();
// });

// // Export routes for server.js to use.
// module.exports = router;



// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  // add route loads the add.html page, where users can enter new books to the db
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
    console.log("add");
  });

  // all route loads the all.html page, where all books in the db are displayed
  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/all.html"));
    console.log("all");
  });

  
};

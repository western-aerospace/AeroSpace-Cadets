//Plane make matched with ids go here ---------------------------
//start of plane Make list
var db = require("../models");
var seedUtil = require("./seeds-utility.js");
db.sequelize.sync({force:true}).then(async function () {
    await seedUtil();
    db.sequelize.close();
})
//Plane make matched with ids go here ---------------------------
//start of plane Make list
var db = require("../models");
var makes = [
    {
        id: 1,
        name: "Bell",
    },
    {
        id: 2,
        name: "Caravan",
    },

    {
        id: 3,
        name: "Cessna",
    },

    {
        id: 4,
        name: "Challenger",
    },

    {
        id: 5,
        name: "Convair",
    },

    {
        id: 6,
        name: "Falcon",
    },
    
    {
        id: 7,
        name: "Gulfstream",
    },

    {
        id: 8,
        name: "Hawker",
    },

    {
        id: 9,
        name: "King Air",
    },

    {
        id: 10,
        name: "Kodiak",
    },

    {
        id: 11,
        name: "Pilatus",
    },

    {
        id: 12,
        name: "Piper",
    },

]; //end of plane make list

//Plane models matched with make id and make id-------------------
var models = [
    //Bell make id 1 --------------------------------------------
    { 
        id: 1,
        makeId: 1,
        name: "429"
    },
    {
        id: 2,
        makeId: 1,
        name: "407"
    },
    {
        id: 3,
        makeId: 1,
        name: "205"
    },
    {
        id: 4,
        makeId: 1,
        name: "205A-1"
    },
    //Caravan make id 2 ------------------------------------------
    {
        id: 5,
        makeId: 2,
        name: "208"
    },
    //Cessna make id 3 -------------------------------------------
    {
        id: 6,
        makeId: 3,
        name: "150"
    },

    {
        id: 7,
        makeId: 3,
        name: "172"
    },
    {
        id: 8,
        makeId: 3,
        name: "182"
    }, 
    
    {
        id: 9,
        makeId: 3,
        name: "182C"
    },

    {
        id: 10,
        makeId: 3,
        name: "206"
    },

    {
        id: 11,
        makeId: 3,
        name: "T206H"
    },

    //Challenger Make 4 -----------------------------------------

    {
        id: 12,
        makeId: 4,
        name: "601-3A"
    },

    //Convair id 5
    {
        id: 13,
        makeId: 5,
        name: "580"
    },

    //Falcon id 6 --------------------------------------------------

     {
        id: 14,
        makeId: 6,
        name: "10"
    },

    {
        id: 15,
        makeId: 6,
        name: "50"
    },

    {
        id: 16,
        makeId: 6,
        name: "2000"
    },

    {
        id: 17,
        makeId: 6,
        name: "2000EX"
    },

    {
        id: 18,
        makeId: 6,
        name: "2000LX"
    },

    {
        id: 19,
        makeId: 6,
        name: "50EX"
    },

    {
        id: 20,
        makeId: 6,
        name: "7X"
    },

    {
        id: 21,
        makeId: 6,
        name: "900B"
    },

    {
        id: 22,
        makeId: 6,
        name: "900C"
    },

    {
        id: 23,
        makeId: 6,
        name: "900EX"
    },

    //Gulfstream ID 7 -------------------------------------------
    {
        id: 24,
        makeId: 7,
        name: "G150"
    },

    {
        id: 25,
        makeId: 7,
        name: "G450"
    },

    {
        id: 26,
        makeId: 7,
        name: "G550"
    },

    {
        id: 27,
        makeId: 7,
        name: "G650"
    },

    //Hawker id 8 ------------------------------------------------
    {
        id: 28,
        makeId: 8,
        name: "800XP"
    },

    //King Air id 9 -----------------------------------------------

    {
        id: 29,
        makeId: 9,
        name: "C90"
    },

    {
        id: 30,
        makeId: 9,
        name: "B200"
    },

    {
        id: 31,
        makeId: 9,
        name: "B200GT"
    },

    {
        id: 32,
        makeId: 9,
        name: "350"
    },

    //Kodiak id 10 ------------------------------------------

    {
        id: 33,
        makeId: 10,
        name: "100"
    },

    //Pilatus id 11 --------------------------------------------

    {
        id: 34,
        makeId: 11,
        name: "PC-12"
    },
    
    {
        id: 35,
        makeId: 11,
        name: "PC-12/45"
    },

    {
        id: 36,
        makeId: 11,
        name: "PC-12/47"
    },


    {
        id: 37,
        makeId: 11,
        name: "PC-12/47E"
    },


    {
        id: 38,
        makeId: 11,
        name: "PC-7"
    },

    {
        id: 39,
        makeId: 11,
        name: "PC-24"
    },

//Piper id 12

{
    id: 40,
    makeId: 12,
    name: "Meridian"
},

{
    id: 41,
    makeId: 12,
    name: "P500"
},

{
    id: 42,
    makeId: 12,
    name: "350T"
},

    
];

async function makeData(model, data) {
    var promises = [];
    for (var i = 0; i < data.length; i++) {
        promises.push(model.create(data[i]));
    }
    var items = await Promise.all(promises);
    return items;
}
db.sequelize.sync({force:true}).then(async function () {
    await makeData(db.make, makes);
    await makeData(db.model, models);
    db.sequelize.close();
})
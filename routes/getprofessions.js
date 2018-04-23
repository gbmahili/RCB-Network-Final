const db = require('../model');
const mongoose = require("../controllers/mongoose");
module.exports = app => {
    app.post('/getprofession', (req, res) => {
        const professionName= req.body.getProfession.professionName
      db.Users.find({'professions.professionName':professionName},
    {
       _id: 0,
       firstName: 1,
       lastName: 1,
       email:1,
       city:1,
       stateName:1,
       professions:1,
       UserProfilePicture:1
    },
    function(error, document){
        if (error) throw error;
        res.json(document);
    }
    )
    });
};
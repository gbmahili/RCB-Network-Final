const db = require('../model');
const mongoose = require("../controllers/mongoose");
module.exports = app => {
    app.post('/userLogin', (req, res) => {
        let loginInfo = req.body;
        let query = { 
            "email": loginInfo.userEmail,
            "password": loginInfo.userPassword
        }
        //Send data to the database
        db.Users.findOne(query, (err, serverResponseData) => {
            if (err) return res.send(500, { error: err });
            console.log(serverResponseData);
            res.json(serverResponseData);
        });

    });
};
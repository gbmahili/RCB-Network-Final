const db = require('../model');
const mongoose = require("../controllers/mongoose");
module.exports = app => {
    // When a user logs in with email
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
    // When a user logs in with google
    app.post('/loginWithGoogle', (req, res) => {
        let loginInfo = req.body;
        let query = {
            "email": loginInfo.googleProfileEmail
        }
        //Send data to the database
        db.Users.findOne(query, (err, serverResponseData) => {
            if (err) return res.send(500, { error: err });
            if(serverResponseData) {
                res.json(serverResponseData);
            }else{
                res.json({"RCB_NO_GOOLE_USER_IN_DB": "We do not have that google user account in our system."})
            };
            
        });

    });
};
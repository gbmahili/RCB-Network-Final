const cors = require('express');
const db = require('../model');
const mongoose = require("../controllers/mongoose");
module.exports = app => {
    app.post('/userSignup', (req, res) => {
        let signupInfo = req.body
        console.log("LOGIN_INFO: ", signupInfo);
        // let query = { "email": loginInfo.userEmail }
        // let newData = { 'password': loginInfo.userPassword };
        //Send data to the database
        db.Users.create(signupInfo, (err, doc) => {
            if (err) {
                res.json({error: err.message})
            };
            res.json(doc);
        });

    });
};
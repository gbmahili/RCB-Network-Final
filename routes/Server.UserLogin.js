
const cors = require('express');
const db = require('../model');
const mongoose = require("../controllers/mongoose");
module.exports = app => {
    app.post('/userLogin', (req, res) => {
        let loginInfo = req.body
        console.log("LOGIN_INFO: ", loginInfo);
        let query = { 
            "email": loginInfo.userEmail,
            "password": loginInfo.userPassword
        }
        // let newData = { 'password': loginInfo.userPassword };
        //Send data to the database
        db.Users.findOne(query, (err, doc) => {
            if (err) return res.send(500, { error: err });
            res.json(doc);
        });

    });
};
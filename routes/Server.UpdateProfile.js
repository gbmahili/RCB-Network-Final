//userUpdateProfile
const cors = require('express');
const db = require('../model');
const mongoose = require("../controllers/mongoose");
module.exports = app => {
    app.post('/userUpdateProfile', (req, res) => {
        // Get sign up information
        let updateInfo = req.body
        console.log(updateInfo)
        let query = { "email": updateInfo.email }
        db.Users.findOne(query, (err, users) => {
            // Check if the db does not have the user:
            if (!users) {
                console.log("EMAIL_TO_UPDATE", updateInfo.email)
                console.log("DB EMAIL", users.email)
                res.json({ "Error": "This is weird...we can't find that email in our system. Please up instead." })
                return;
            } else {
                //Send data to the database
                db.Users.findOneAndUpdate(query,{$set: updateInfo}, (err, doc) => {
                    if (err) {
                        res.json({ error: err.message })
                    }else{
                        let query = { _id: doc._id }
                        db.Users.findOne(query, (err, serverResponseData) => {
                            if (err) return res.send(500, { error: err });
                            console.log(serverResponseData);
                            res.json(serverResponseData);
                        });
                    };
                });
            }

        });
    });
};
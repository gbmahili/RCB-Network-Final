const cors = require('express');
const db = require('../model');
const mongoose = require("../controllers/mongoose");
module.exports = app => {
    app.post('/userSignup', (req, res) => {
        // Get sign up information
        let signupInfo = req.body
        let query = { "email": signupInfo.email }
        db.Users.findOne(query, (err, users) => {
            // Check if the db has the user:            
            if (users) {
                res.json({ "Error": "There is a user with that email. Please login instead." })
                return;
            } else {
                //Send data to the database
                db.Users.create(signupInfo, (err, doc) => {
                    if (err) {
                        res.json({ error: err.message })
                    };
                    res.json(doc);
                });
            }
            
        });
    });
};
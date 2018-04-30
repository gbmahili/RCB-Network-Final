const db = require('../model');
const mongoose = require("../controllers/mongoose");
module.exports = app => {
    app.post('/allusers', (req, res) => {
        db.Users.find({}, (err, response) => {
            res.json(response)
        });
    });
};
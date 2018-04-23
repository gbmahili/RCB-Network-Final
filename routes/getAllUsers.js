const db = require('../model');
const mongoose = require("../controllers/mongoose");
module.exports = app => {
    app.post('/api/users', (req, res) => {
        db.Users.find({}, (err, response) => {
            res.json(response)
        });
    });
};
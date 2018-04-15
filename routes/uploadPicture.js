const db = require('../model');
const mongoose = require("../controllers/mongoose");
module.exports = app => {
    app.post('/upload', (req, res, next) => {
        let imageFileName = req.body.fileName;
        let query = { "email": req.body.userEmail }
        let newData = { 'UserProfilePicture': imageFileName };
        // Send data to the database
        db.Users.findOneAndUpdate(query, newData, { upsert: true }, function (err, doc) {
            if (err) return res.send(500, { error: err });
            // Get the new link:
            db.Users.findOne(
                { _id: doc._id },
                function (err, newURL) {
                    if (err) return res.send(500, { error: err });
                    res.json(newURL);
                }
            );
        });
        
    });
};
const fileUpload = require('express-fileupload');
const cors = require('cors');
const db = require('../model');
const mongoose = require("../controllers/mongoose");
module.exports = app => {
    app.use(cors());
    app.use(fileUpload());
    app.post('/upload', (req, res, next) => {
        let imageFileName = req.body.fileName;
        console.log("CLOUDINARY_LINK: ", imageFileName);
        let query = { "lastName": "Mahili" }
        let newData = { 'UserProfilePicture': imageFileName };
        // Send data to the database
        db.Users.findOneAndUpdate(query, newData, { upsert: true }, function (err, doc) {
            if (err) return res.send(500, { error: err });
            console.log("MONGODB_RESPONSE_OLD_URL: ", doc.UserProfilePicture);
            // Get the new link:
            db.Users.findOne(
                { _id: doc._id },
                function (err, newURL) {
                    if (err) return res.send(500, { error: err });
                    console.log("MONGODB_RESPONSE_NEW_URL: ", newURL.UserProfilePicture);
                    res.json(newURL);
                }

            );
            
            
        });
        
    });
};
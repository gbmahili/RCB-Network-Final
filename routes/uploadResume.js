//const fileUpload = require('express-fileupload');
//const cors = require('cors');
const db = require('../model');
const mongoose = require("../controllers/mongoose");
module.exports = app => {
    //app.use(cors());
    //app.use(fileUpload());
    app.post('/uploadResume', (req, res) => {
        let resumeData = req.body;
        let query = { "email": resumeData.userEmail };
        let newResumeInfo = {
            professionName: resumeData.professionName,
            resumeLink: resumeData.resumeLink
        }
        // see if the current professionName already exists:
        db.Users.findOne(
            { 
                "email": resumeData.userEmail,
                "professions.professionName": resumeData.professionName
            }, {profession: 1},
            function (err, currentProfessions) {
                if (err) console.log(err);
                // If that profession already exist under the user's array...then tell the user to delete it first
                if(currentProfessions){

                    console.log("LIST_CURRENT_PROFESSION: ", currentProfessions);
                    res.json({"RCB_RESUME_EXISTS_INFO": "That profession already exist. Please delete the current resume first, then upload a new one."})
                }else{
                    console.log("That profession does not exisit, you can insert it now...");
                    // Send data to the database
                    db.Users.findOneAndUpdate(query, {$push: {professions: newResumeInfo}}, { upsert: true }, function (err, doc) {
                        if (err) return res.send(500, { error: err });
                        //Get all the resumes for the user:
                        db.Users.findOne(
                            { email: resumeData.userEmail }, {professions: 1},
                            function (err, allResumes) {
                                if (err) return res.send(500, { error: err });
                                console.log("MONGODB_RESPONSE_NEW_URL: ", allResumes);
                                res.json(allResumes);
                            }
                        );
                    });
                };
            }
        );
    });
};
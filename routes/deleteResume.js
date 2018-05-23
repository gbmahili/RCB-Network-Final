const db = require('../model');
const mongoose = require("../controllers/mongoose");
module.exports = app => {
  app.post('/deleteResume', (req, res) => {
    let resumeData = req.body;
    console.log(resumeData)
    let query =[ { _id: resumeData.userId }, 
      { $pull: { professions: { resumeLink: resumeData.resumeLink} } },
      { multi: true }];
    db.Users.update(
      { _id: resumeData.userId }, { $pull: { professions: { resumeLink: resumeData.resumeLink } } },
      { multi: true },
      function (err, allResumes) {
        if (err) return res.send(500, { error: err });
        db.Users.findById(resumeData.userId, {professions: 1}, function(err, allResumes){
          if (err) return res.send(500, { error: err });
          // TODO: Send better results
          //Send all the resumes for the user:
          res.json(allResumes);
        })
        
      }
    );
  });
};
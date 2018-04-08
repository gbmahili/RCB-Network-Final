const fileUpload = require('express-fileupload');
const cors = require('cors');
module.exports = app => {
app.use(cors());
app.use(fileUpload());
app.post('/upload', (req, res, next) => {
    let imageFileName = req.body.fileName;
    console.log(imageFileName)
    // Push filename to db
    res.json({ file: imageFileName });
    
    });
};
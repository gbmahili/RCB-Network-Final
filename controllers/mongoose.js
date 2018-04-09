const db = require ('../model');

module.exports = {
    create: function(req, res) {
        console.log(req.body)
        db.Users.create(req.body).then(dbUser => res.json(dbUser))
          .catch(err => res.status(422).json(err));
    }

}

const db = require ('../model');

module.exports = {
    create: function(req, res) { 
        var testRes = {};
        db.Users.create(req.body.userobject).then(dbuser => {
            //res.json(dbuser)
            console.log(dbuser);
           // testRes = dbUser;
        //    console.log('req.body.title : ' + req.body.title)
           db.Professions.create(req.body.userobject).then(dbProfession => {
               console.log(dbProfession);

           })
        })
    }

    // hello: function(req, res){
    //     console.log(req.body.profobject)
    // }
      

}


const router = require("express").Router();

// this test is going to be run from the client side server
router.post('/test', function(req, res){
    console.log(req.body);
  })
  
  // this test is going to be run from the server side server
  router.get('/test', function(req, res){
    console.log('hi i called test');
  })
  
  module.exports = router;
import axios from 'axios';

export default {
    // this /test route is created.  this test method is called in the test.js
    test: function(userData){
      // this is being sent to be called when the client side server runs it shall display "hello i mv veeena"
      return axios.post('/users', userData);
    },

    getUsers: function(professionName){
      return axios.post('/getprofession', professionName);
    },

    allUsers: function(){
      return axios.post('/allusers', )
    }
  };  
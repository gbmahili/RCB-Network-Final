import axios from 'axios';

export default {
    // this /test route is created.  this test method is called in the test.js
    test: function(){
      return axios.get('/test')
    }
  };
  
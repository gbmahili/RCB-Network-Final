import axios from 'axios';

const user = {
  firstName: 'veena',
  lastName: 'Uppal'
};
export default {
  
    // this /test route is created.  this test method is called in the test.js
    test: function(){
      // this is being sent to be called when the client side server runs it shall display "hello i mv veeena"
      return axios.post('/api/signup');
    }
  };
  
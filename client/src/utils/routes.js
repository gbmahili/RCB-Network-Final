import axios from 'axios';

export default {
    test: function(){
      return axios.get('/test')
    }
  };
  
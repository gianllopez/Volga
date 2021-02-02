import Axios from 'axios';

class VolgaREST {

   baseconfig(endpoint) {
      return {
         method: 'get',
         url: 'http://localhost:8000/api/v1/users' + endpoint + '/',
         headers: {
            Authorization: `Token ${localStorage.getItem('user-token')}`
         }
      }
   };
   
   post(endpoint, data) {
      let config = this.baseconfig(endpoint);
      config.method = 'post';
      config.data = data;
      return Axios(config);
   };

   get(endpoint, params={}) {
      let config = this.baseconfig(endpoint);
      config.params = params;
      return Axios(config);
   };

};

export default new VolgaREST();

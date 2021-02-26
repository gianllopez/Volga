import Axios from 'axios';

class VolgaREST {
   
   token = localStorage.getItem('user-token') || false;

   baseconfig(endpoint, authreq) {
      return {
         method: 'get',
         url: 'http://localhost:8000/api/v1/users' + endpoint + '/',
         ...this.token && {
            headers: { Authorization: `Token ${this.token}`}}
      };
   };
   
   post(endpoint, data, authreq=false) {
      let config = this.baseconfig(endpoint, authreq);
      config.method = 'post';
      config.data = data;
      return Axios(config);
   };

   get(endpoint, params={}, authreq=false) {
      let config = this.baseconfig(endpoint, authreq);
      config.params = params;
      return Axios(config);
   };

};

export default new VolgaREST();

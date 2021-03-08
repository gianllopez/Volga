import Axios from 'axios';
import { isAuthenticated } from './routing-tools';

class VolgaREST {
   
   baseconfig(endpoint) {
      return {
         method: 'get',
         url: 'http://localhost:8000/api/v1/users' + endpoint + '/',
         ...isAuthenticated() && {
            headers: { Authorization: `Token ${localStorage.getItem('user-token')}`}}
      };
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

   delete(endpoint) {
      let config = this.baseconfig(endpoint);
      config.method = 'delete';
      return Axios(config);
   };

};

export default new VolgaREST();

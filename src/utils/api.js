import Axios from 'axios';
import { isAuthenticated } from './routing-tools';

class VolgaREST {
   
   baseconfig(endpoint) {
      return {
         method: 'get',
         url: 'https://volgarest.herokuapp.com/api/v1' + endpoint + '/',
         ...isAuthenticated() && {
            headers: { Authorization: `Token ${localStorage.getItem('user-token')}`}}
      };
   };
   
   post(endpoint, data, ...rest) {
      let config = this.baseconfig(endpoint);
      config.method = 'post';
      config.data = data;
      return Axios(config, ...rest);
   };

   get(endpoint, params={}) {
      let config = this.baseconfig(endpoint);
      config.params = params;
      return Axios(config);
   };

};

export default new VolgaREST();

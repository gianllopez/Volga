import Axios from 'axios';

class VolgaREST {

   baseurl = 'http://localhost:8000/api/v1/users'

   post(endpoint, data) {
      const url = this.baseurl + endpoint + '/',
         authtoken = localStorage.getItem('user-token'),
         config = authtoken && { headers: { Authorization: `Token ${authtoken}` } };
      return Axios.post(url, data, config);
   };

};

export default new VolgaREST();

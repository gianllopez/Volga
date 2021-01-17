import Axios from 'axios';

class VolgaREST {

   baseurl = 'http://localhost:8000/api/v1/users'

   post(endpoint, data) {
      let url = this.baseurl + endpoint;
      return Axios.post(url, data)
   };

};

export default new VolgaREST();

import React, { Component } from 'react';
import { PageLoader } from '..';
import { NotFound } from '../..';
import api from '../../../utils/api';

class UserPageExists extends Component {
   
   state = { found: false, loading: true };

   render() {
      return (
         this.state.loading ? <PageLoader/> :
            this.state.found ?
               this.props.children :
               <NotFound />
      );
   };

   componentDidMount() {
      let { userParam, onExists } = this.props;
      if (userParam) {
         api.post('/validation/user-exists', { username: userParam })
            .then(() => this.setState({ found: true }, onExists))
            .finally(() => this.setState({ loading: false }));
      } else {
         this.setState({ found: true, loading: false });
      };
   };

   componentDidUpdate(prevProps) {;
      if (prevProps.userParam !== this.props.userParam && !this.state.found) {
         this.componentDidMount();
      };
   };

};

export default UserPageExists;
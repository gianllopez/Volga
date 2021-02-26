import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
      let { onExists, match, location } = this.props,
      { username } = match.params,
      { exists } = location.state || { exists: false };
      if (!exists) {
         api.post('/validation/user-exists', { username })
            .then(() => this.setState({ found: true }, onExists))
            .finally(() => this.setState({ loading: false }));
      } else {
         this.setState({ found: true, loading: false }, onExists);
      };
   };

   componentDidUpdate(prevProps) {;
      if (prevProps.userParam !== this.props.userParam && !this.state.found) {
         this.componentDidMount();
      };
   };

};

export default withRouter(UserPageExists);
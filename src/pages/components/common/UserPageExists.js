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
      let { componentProps, onExists } = this.props,
      { username } = componentProps.match.params;
      api.post('/validation/user-exists', { username })
         .then(() => {
            this.setState({ found: true }, onExists)
         })
         .finally(() => this.setState({ loading: false }));
   };

};

export default UserPageExists;
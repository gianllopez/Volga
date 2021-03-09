import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { PageLoader } from '../';
import { NotFound } from '../../';
import api from '../../../utils/api';

class UserPageExists extends Component {
   
   state = { found: false, loading: true };

   render() {
      let { loading, found, itsme } = this.state,
      { onlyclients, children } = this.props;
      return (
         onlyclients && itsme ? <Redirect to="/" /> :
            loading ? <PageLoader/> :
               found ? children : <NotFound />
      );
   };

   componentDidMount() {
      let { onExists, match, location } = this.props,
      { exists } = location.state || false;
      if (!exists) {
         api.post('/validation/user-exists', { ...match.params })
            .then(() => this.setState({ found: true }, onExists))
            .finally(() => this.setState({ loading: false }));
      } else {
         this.setState({ found: true, loading: false }, onExists);
      };
      let { username } = JSON.parse(localStorage.getItem('uiprev')) || '';
      if (username === match.params.username) {
         this.setState({ itsme: true });
      };
   };

};

export default withRouter(UserPageExists);

// Terminado, nada más que revisar...
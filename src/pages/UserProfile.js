import React, { Component, createContext } from 'react';
import { ProductsPresentation, OpinionsPresentation,
         UserPageExists, PresentationHeader,
         ModalDisplayer, UserStats } from './components';
import './styles/UserProfile.css';
import api from '../utils/api';

export const UserProfileContext = createContext({});

class UserProfile extends Component {

   state = {
      user: {
         name: '', stats: {}, picture: '',
         opinions: '', products: [], following: false,
         ...this.props.match.params
      },
      ...this.props.location.state
   };

   fetchUserData = userQuery => {
      if (!this.state.fetched) {
         let username = userQuery || this.state.user.username;
         api.get('/get-data/user', { username })
            .then(({ data }) =>
               this.setState({ fetched: true, user: data }));
      };
   };

   deleteHandler = query => {
      ModalDisplayer({
         type: 'CUSTOM',
         title: `Esta acción es irreversible, luego de
                 eliminarlo ya no estará en tu catálogo.`,
         message: '¿Estás seguro que lo eliminas?'
      }).then(() =>
         api.post('/products/delete', query)
            .then(() =>
               this.setState({ fetched: false, exists: true }, this.fetchUserData)
      ));
   };
   render() {
      return (
         <UserPageExists onExists={this.fetchUserData}>
            <div id="user-profile">
               <UserProfileContext.Provider value={this.state.user}>
                  <PresentationHeader className="profile-section"/>
                  <UserStats className="profile-section"/>                  
                  <ProductsPresentation
                     deleteHandler={this.deleteHandler} className="profile-section"/>
                  <OpinionsPresentation className="profile-section"/>
               </UserProfileContext.Provider>
            </div>
         </UserPageExists>
      );
   };
   
   componentDidMount() {
      document.title = `Volga - ${this.state.user.username}`;
   };

   componentDidUpdate(prevProps) {
      let { username } = this.state.user;
      let prevUser = prevProps.match.params.username;
      if (username !== prevUser) {
         this.setState({ fetched: false }, () => this.fetchUserData(username))         
      };
   };

};

export default UserProfile;

// Terminado, nada más que revisar...

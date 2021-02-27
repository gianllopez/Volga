import React, { Component } from 'react';
import { CustomModal } from '..';
import api from '../../../utils/api';
import { isAuthenticated } from '../../../utils/routing-tools';
import './styles/FollowButton.css';

class FollowButton extends Component {

   state = { isauth: isAuthenticated() };

   animChanger = following => {
      if (this.state.isauth) {
         let btn = document.querySelector('.follow-btn');
         if (following) {
            btn.classList.add('following');
            btn.textContent = 'Siguiendo';
         } else {
            btn.classList.remove('following');
            btn.textContent = 'Seguir';
         };
      };
   };
   
   actionSubmit = () => {
      if(this.state.isauth) {
         api.post('/follow', { user: this.props.user })
            .then(({ data }) => this.animChanger(data.following))
            .catch(({ response }) => {
               if (response.status === 404) {
                  CustomModal(<span>{ response.data[this.props.user] }</span>, [false, 'Entendido'])
                     .then(ok => ok && this.props.history.push('/'));
               };
            }); 
      } else {
         this.props.history.push('/login');
      };
   };

   render() {
      return (
         <button className="follow-btn" onClick={this.actionSubmit}>
            Seguir
         </button>
      );
   };

   componentDidUpdate() {
      this.animChanger(this.props.following && 'following');
   };

};

export default FollowButton;
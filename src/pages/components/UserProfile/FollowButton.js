import React, { Component } from 'react';
import { CustomModal } from '..';
import api from '../../../utils/api';
import './styles/FollowButton.css';

class FollowButton extends Component {

   animChanger = following => {
      let btn = document.querySelector('.follow-btn');
      if (following) {
         btn.classList.add('following');
         btn.textContent = 'Siguiendo';
      } else {
         btn.classList.remove('following');
         btn.textContent = 'Seguir';
      };
   };
   
   actionSubmit = () => {
      api.post('/follow', { user: this.props.user })
         .then(({ data }) => this.animChanger(data.following))
         .catch(({ response }) => {
            if (response.status === 404) {
               CustomModal(<span>{ response.data[this.props.user] }</span>, [false, 'Entendido'])
                  .then(ok => ok && this.props.history.push('/'));
            };
         });
   };

   render() {
      return (
         <button className="follow-btn" onClick={this.actionSubmit}>
            Seguir
         </button>
      );
   };

   componentDidUpdate() {
      this.animChanger(this.props.following && 'create');
   };

};

export default FollowButton;
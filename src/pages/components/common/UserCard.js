import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './styles/UserCard.css';

class UserCard extends Component {

   state = { redirect: false };

   toPage = () => this.setState({ redirect: true });

   render() {
      let { picture, username, name, location } = this.props.data;
      return (
         !this.state.redirect ?
            <div className="user-card" onClick={this.toPage}>
               <img src={picture} alt="user-picard"/>
               <div>
                  <h3>{username}</h3>
                  <h4>{name}</h4>
                  <p>{location}</p>
               </div>
            </div> : <Redirect to={`/users/${username}`}/>
      );
   };
};

export default UserCard;
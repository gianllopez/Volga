import React, { Component, Fragment } from 'react';
import { NavBar, UserOpinion, Footer } from './components/'
import './styles/ShopOpinions.css';

class ShopOpinions extends Component {
   render() {
      return (
         <div id="shop-opinions">
            <h2>Esto es lo que opinan de *shop* sus clientes:</h2>
            <div id="users-opinions">
               <UserOpinion/>
               <UserOpinion/>
               <UserOpinion/>
               <UserOpinion/>
               <UserOpinion/>
               <UserOpinion/>
               <UserOpinion/>
               <UserOpinion/>
               <UserOpinion/>
               <UserOpinion/>
            </div>
         </div>
      );
   };
};

export default ShopOpinions;

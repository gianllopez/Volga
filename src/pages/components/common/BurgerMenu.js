import React, { Component } from 'react';
import './styles/BurgerMenu.css';

class BurgerMenu extends Component {
   
   render() {
      return (
         <div id="burger-menu">
            <div className="blade blade-1"/>
            <div className="blade blade-2"/>
            <div className="blade blade-3"/>
         </div>
      );
   };

   componentDidMount() {
      const bgmenu = this._reactInternalFiber.child.stateNode;
      const blades = ['blade-1', 'blade-2', 'blade-3'];
      bgmenu.addEventListener('click', () => {
         blades.forEach(blade => {
            bgmenu.querySelector(`.${blade}`)
               .classList.toggle(`${blade}-animation`);
         });
      });
   };


};

export default BurgerMenu;

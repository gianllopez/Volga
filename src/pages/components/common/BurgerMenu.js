import React from 'react';
import './styles/BurgerMenu.css';

function BurgerMenu({ clickCallback }) {

   const bgmenuAnimation = ({ target }) => {
      for (let blade of target.children) {
         blade.classList.toggle(`${blade.id}-animation`);
      };
      clickCallback();
   };

   return (
      <div id="burger-menu" onClick={bgmenuAnimation}>
         <div className="blade" id="blade-1"/>
         <div className="blade" id="blade-2"/>
         <div className="blade" id="blade-3"/>         
      </div>
   );
};

export default BurgerMenu;

// Terminado, nada más que revisar...
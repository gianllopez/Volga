import React, { useEffect } from 'react';
import './styles/BurgerMenu.css';

function BurgerMenu({ clickCallback }) {

   useEffect(() => {
      const bgmenu = document.querySelector('#burger-menu');
      bgmenu.addEventListener('click', () => {
         for (let blade of bgmenu.children) {
            blade.classList.toggle(`${blade.id}-animation`);
         };
         clickCallback();
      });
   });

   return (
      <div id="burger-menu">
         <div className="blade" id="blade-1"/>
         <div className="blade" id="blade-2"/>
         <div className="blade" id="blade-3"/>         
      </div>
   );
};

export default BurgerMenu;

// Terminado, nada más que revisar...
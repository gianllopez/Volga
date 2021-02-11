import React from 'react';
import './styles/FilterSelector.css';

function FilterSelector(props) {
   
   const filterChange = ({ target }) => {
      document.querySelector('#filter-selector div')
         .style.transform =
            target.innerText === 'Productos' ?
               'translateX(-50%)' : 'translateX(50%)';
      document.querySelectorAll('#filter-selector p')
         .forEach(p => p.style.color = 'initial');
      target.style.color = 'white'
   };

   return (
      <div id="filter-selector">
         <div/>
         <p onClick={filterChange}>Productos</p>
         <p onClick={filterChange}>Usuarios</p>
      </div>
   );
};

export default FilterSelector;
import React from 'react';
import './styles/FilterSelector.css';

function FilterSelector(props) {
   
   const filterChange = ({ target }) => {
      let { innerText } = target;
      document.querySelector('#filter-selector div')
         .style.transform =
            innerText === 'Productos' ?
               'translateX(-50%)' : 'translateX(50%)';
      document.querySelectorAll('#filter-selector p')
         .forEach(p => p.style.color = 'initial');
      target.style.color = 'white'
      props.onChange(target.dataset.filter);
   };

   return (
      <div id="filter-selector">
         <div/>
         <p data-filter="products" onClick={filterChange}>Productos</p>
         <p data-filter="users" onClick={filterChange}>Usuarios</p>
      </div>
   );
};

export default FilterSelector;

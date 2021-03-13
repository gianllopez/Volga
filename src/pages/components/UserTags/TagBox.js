import React from 'react';
import './TagBox.css';

function TagBox({ name, onChange, image }) {

   let name4jsx = name.toLowerCase().replace(' ', '-');
   
   return (
      <div className='tagbox-wrapper'>
      <input
         type='checkbox'
         name={name4jsx}
         id={`${name4jsx}-checkbox`}
         value={name}
         onChange={onChange}
         hidden
      />
      <label htmlFor={`${name4jsx}-checkbox`}>
         <img src={image} alt={`${name4jsx}-icon`}/>
         <h2>{name}</h2>
      </label>
      </div>
   );
};

export default TagBox;

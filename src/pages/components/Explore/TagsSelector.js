import React from 'react';
import { tagsProps } from '../../../assets';
import './TagsSelector.css';

function TagsSelector(props) {
   
   const clickHandler = ({ target }) => {
      target.classList.toggle('selected-tag');
      props.onSelect(target);
   };

   let tags = Object.keys(tagsProps).sort((a, b) => a.length - b.length);
   return (
      <div id="tags-selector">
         {tags.map((tag, index) =>
            <p key={index} onClick={clickHandler}>
               {tag}
            </p>)}
      </div>
   );
};

export default TagsSelector;

// Terminado, nada más que revisar...
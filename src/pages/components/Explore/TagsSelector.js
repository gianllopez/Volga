import React, { Component } from 'react';
import { tagsProps } from '../../../assets';
import './TagsSelector.css';

class TagsSelector extends Component {
   render() {
      let tags = Object.keys(tagsProps).sort((a, b) => a.length - b.length);
      return (
         <div id="tags-selector">
            {tags.map((tag, index) => (
               <p key={index}>
                  {tag}
               </p>
            ))}
         </div>
      );
   };
};

export default TagsSelector;
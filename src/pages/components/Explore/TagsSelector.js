import React, { Component } from 'react';
import { tagsProps } from '../../../assets';
import './TagsSelector.css';

class TagsSelector extends Component {


   clickHandler = ({ target }) => {
      target.classList.toggle('selected-tag');
      this.props.onSelect(target);
   };

   render() {
      let tags = Object.keys(tagsProps).sort((a, b) => a.length - b.length);
      return (
         <div id="tags-selector">
            {tags.map((tag, index) => (
               <p key={index} onClick={this.clickHandler}>
                  {tag}
               </p>
            ))}
         </div>
      );
   };

};

export default TagsSelector;
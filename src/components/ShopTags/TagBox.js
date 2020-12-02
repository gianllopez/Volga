import React, { Component } from 'react';
import './styles/TagBox.css';

class TagBox extends Component {
  
   render() {
      return (
         <div class='tagbox-wrapper'>
         <input
            type='checkbox'
            name={this.props.name}
            id={`${this.props.name}-checkbox`}
            value={this.props.value}
         />
         <label htmlFor={`${this.props.name}-checkbox`}>
            <img src='' alt=''/> // get the image from some place.
            <h2>Lorem ipsum dolor sit amet.</h2>
         </label>
         </div>
      );
   };

};

export default TagBox;

import React, { Component } from 'react';
import './TagBox.css';

class TagBox extends Component {  
   render() {
      let name4jsx = this.props.name.toLowerCase().replace(' ', '-');
      return (
         <div className='tagbox-wrapper'>
         <input
            type='checkbox'
            name={name4jsx}
            id={`${name4jsx}-checkbox`}
            value={this.props.name}
            onChange={this.props.onChange}
            hidden
         />
         <label htmlFor={`${name4jsx}-checkbox`}>
            <img src={this.props.image} alt={`${name4jsx}-icon`}/>
            <h2>{this.props.name}</h2>
         </label>
         </div>
      );
   };
};

export default TagBox;

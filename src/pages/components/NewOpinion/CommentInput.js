import React, { Component } from 'react';
import { Input } from '..';
import './styles/CommentInput.css';

class CommentInput extends Component {

   state = { length: 0 }
   
   entryValidation = event => {
      let { value } = event.target;
      if (value.length > 125) {
         event.target.value = value.substring(0, 125);
      };
      this.setState({ length: event.target.value.length })
      this.props.onChange(event);
   };

   render() {
      return (
         <Input {...this.props} >
            <p>{this.state.length}/125</p>
            <textarea
               name={this.props.name}
               id="comment"
               placeholder="..."
               onChange={this.entryValidation}
            />
         </Input>
      )
   };
};

export default CommentInput;

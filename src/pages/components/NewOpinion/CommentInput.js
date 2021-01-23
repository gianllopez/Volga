import React, { Component } from 'react';
import { Input } from '..';
import './styles/CommentInput.css';

class CommentInput extends Component {

   state = { length: 0 }

   maxLengthHandler = ({ target }) => {
      let { value } = target;
      if (value.length >= 125) {
         target.value = value.substring(0, 124);
      };
      this.setState({ length: value.length })
   };

   render() {
      return (
         <Input {...this.props} >
            <p>{this.state.length}/125</p>
            <textarea
               name={this.props.name}
               id="comment"
               placeholder="..."
               onKeyDown={this.maxLengthHandler}
               onChange={this.props.onChange}
            />
         </Input>
      )
   };
};

export default CommentInput;

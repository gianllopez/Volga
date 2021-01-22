import React, { Component } from 'react';
import { Input } from '..';
import './styles/CommentInput.css';

class CommentInput extends Component {

   maxLengthHandler = ({ target }) => {
      let { value } = target;
      if (value.length >= 125) {
         target.value = value.substring(0, 124);
      };
   };

   render() {
      let { name, length } = this.props;
      return (
         <Input label="Comentario" name={name}>
            <p>{length}/125</p>
            <textarea
               name={name}
               id="comment"
               placeholder="..."
               onKeyDown={this.maxLengthHandler}
               {...this.props}
            />
         </Input>
      )
   };
};

export default CommentInput;

import React, { Component } from 'react';
import { Input } from '..';
import './styles/CommentInput.css';

class CommentInput extends Component {
   render() {
      let { name, length } = this.props;
      return (
         <Input label="Comentario" name={name}>
            <p>{length}/125</p>
            <textarea
               name={name}
               id="comment"
               placeholder="..."
               maxLength="125"
               {...this.props}
            />
         </Input>
      )
   };
};

export default CommentInput;

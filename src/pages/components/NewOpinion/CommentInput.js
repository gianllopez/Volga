import React, { Component } from 'react';
import { Input } from '..';
import './styles/CommentInput.css';

class CommentInput extends Component {
   render() {
      return (
         <Input label="Comentario">
            <textarea
               name="comment"
               id="comment"
               placeholder="..."
               maxLength="150"
               {...this.props}
            />
         </Input>
      )
   };
};

export default CommentInput;
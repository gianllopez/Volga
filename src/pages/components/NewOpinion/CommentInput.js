import React, { Component } from 'react';
import { Input } from '..';
import { changeValidator } from '../../../utils/validators';
import './styles/CommentInput.css';

class CommentInput extends Component {

   state = { length: 0 };
   
   entryValidation = event => {      
      let { length } = changeValidator(event, 125, this.props.onChange);
      this.setState({ length });
   };

   render() {
      return (
         <Input {...this.props} >
            <p>{this.state.length}/125</p>
            <textarea
               id="comment"
               maxLength="125"
               placeholder="..."
               name={this.props.name}
               onChange={this.entryValidation}
            />
         </Input>
      )
   };
};

export default CommentInput;

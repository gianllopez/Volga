import React, { Component } from 'react';
import { Input } from '../';
import { logupContext } from '../../Logup';

class LogupInput extends Component {

   static contextType = logupContext;

   render = () => (
      <Input
         onChange={this.context.changeHandler}
         errors={this.context.errors}
         {...this.props}
      />
   );
   
};

export default LogupInput;

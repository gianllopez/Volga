import React from 'react';
import './styles/CustomMessage.css';

function CustomMessage(props) {
   let { msgimage, message } = props;
   return (
      <div id="customsg-wrapper">
         <figure>
            <img src={msgimage} alt="message-img" />
         </figure>
         <p>{message}</p>
      </div>
   );
};

export default CustomMessage;
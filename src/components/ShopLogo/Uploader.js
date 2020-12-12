import React from 'react';
import './styles/Uploader.css';

function Uploader(props) {
   return (
      <div id="progress-bar">
         <div id="filler"
            style={{
               width: `${props.percentage}%`
            }}
         />
      </div>
   );
};

export default Uploader;

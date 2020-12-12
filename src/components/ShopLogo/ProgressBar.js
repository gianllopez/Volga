import React from 'react';
import './styles/ProgressBar.css';

function ProgressBar(props) {
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

export default ProgressBar;

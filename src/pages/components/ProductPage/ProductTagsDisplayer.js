import React, { useState } from 'react';
import './styles/ProductTagsDisplayer.css';

function ProductTagsDisplayer({ tags  }) {

   const [displayed, setDisplayed] = useState(false);

   return (
      <div id="p-tags-displayer" onClick={() => setDisplayed(!displayed)}>
         <h4>Etiquetas {displayed ? "-" : "+"}</h4>
         <div id="displayed-tags">
            {displayed &&
               (tags ?
                  tags.map((tag, index) => 
                     <p key={index}>{tag}</p>) :
                     <p>Este producto no tiene etiquetas.</p>)}
         </div>
      </div>
   );
};

export default ProductTagsDisplayer;

// Terminado, nada más que revisar...
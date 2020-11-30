import React, { Component } from 'react';
import './styles/ConfirmBlankModal.css';

class ConfirmBlankModal extends Component {

   selection;

   handleSelection(event) {
      debugger
   };

   render() {
      return (
         <div id='confirm-blank-modal'>
            <div id='modal-info'>            
               <h2>
                  Las redes sociales son<br/>
                  indispensables en el alcance<br/>
                  de personas de tu tienda.
               </h2>
               <p>
                  Te recomendamos rellenar o crear<br/>
                  las redes sociales que te sugerimos.<br/>
               </p>
               <span>¿Deseas continuar sin rellenarlas todas?</span>
            </div>
            <div id='options-btns'>
               <button value={true} onClick={this.handleSelection} id='continue'>
                  Si, Continuar
               </button>
               <button value={false} onClick={this.handleSelection} id='fill'>
                  No, rellenar
               </button>
            </div>
         </div>
      );
   };
};

export default ConfirmBlankModal;

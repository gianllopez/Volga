import React, { Component, Fragment } from 'react';
import { TagBox, ButtonLoader, ConfirmationModal } from './components';
import { tagsProps } from '../assets';
import './styles/UserTags.css';

class UserTags extends Component {

   state = {
      tags: {},
      loading: false
   };

   changeHandler = ({ target }) => {
      this.setState({
         tags: {
            ...this.state.tags,
            [target.name]: target.value
         }
      });
   };

   submitHandler = event => {
      event.preventDefault();
      if (Object.keys(this.state.tags).length === 0) {
         let content = (
            <Fragment>
               <p>No has seleccionado ninguna etiqueta.</p>
               <span>¿Deseas continuar así?</span>
            </Fragment>
         );
         ConfirmationModal(content)
      };

   };

   render() {
      return (
         <form id="tags-form" onSubmit={this.submitHandler}>
            <div id="tags-header">
               <h2>
                  ¿Con qué etiquetas relacionarías<br />
                  los productos que vendes?
               </h2>
               <span>Selecciona las que quieras</span>
            </div>
            <div id="tags-entries">
               {tagsProps.map(
                  (tagdata, i) => (
                     <TagBox
                        key={i}
                        name={tagdata[0]}
                        image={tagdata[1]}
                        onChange={this.changeHandler}
                     />
                  )
               )}
            </div>
            <ButtonLoader isloading={this.state.loading} />
         </form>
      );
   };
};

export default UserTags;

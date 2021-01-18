import React, { Component, Fragment } from 'react';
import api from '../utils/api';
import { TagBox, ButtonLoader, ConfirmationModal } from './components';
import { tagsProps } from '../assets';
import './styles/UserTags.css';

class UserTags extends Component {

   state = {
      tags: [],
      loading: false
   };

   changeHandler = ({ target }) => {
      let { tags } = this.state,
         { value } = target;
      if (tags.includes(value)) {
         let i = tags.indexOf(value);
         tags.splice(i);
      } else {
         tags.push(value)
      };
      this.setState({ tags })
   };

   submitHandler = event => {
      event.preventDefault();
      const sendRequest = () => {
         this.setState({
            tags: this.state.tags.join(', '),
            user: this.props.match.params['username'],
            loading: true,
         }, () => {
            api.post('/tags/', this.state)
               .catch(({ response }) => {
                  if (response.data.user) { };
               })
         });
      };
      if (this.state.tags.length === 0) {
         let content = (
            <Fragment>
               <p>No has seleccionado ninguna etiqueta.</p>
               <span>¿Deseas continuar así?</span>
            </Fragment>
         );
         FormsModals('warning', { content })
            .then(allowBlank => allowBlank && sendRequest());
      } else sendRequest();
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

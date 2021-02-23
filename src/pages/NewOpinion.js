import React, { Component } from 'react';
import { RatingSelector, CommentInput, ButtonLoader, CustomModal, UserPageExists } from './components';
import NotFound from './NotFound';
import api from '../utils/api';
import { noBlankValidator } from '../utils/validators';
import opsheader from '../assets/NewOpinion/users-opinions.svg';
import './styles/NewOpinion.css';
import swal from 'sweetalert';

class NewOpinion extends Component {

   state = {
      data: {
         to_user: this.props.match.params['username'],
         rating: 10,
         comment: ''
      },
      loading: false,
      errors: {}
   };

   changeHandler = event => {
      let { target } = event;
      let { name, value } = target;
      if (name === 'client') {
         const regex = /(?!.*\s{2})^[a-zA-ZÀ-úñÑ\s]+$/
         if (!regex.test(value)) {
            target.value = value.substring(0, (value.length - 1));
         };
      };
      this.setState({
         data: {
            ...this.state.data,
            [name]: target.value
         }
      });
   };

   submitHandler = event => {
      event.preventDefault();
      let { isValid, errors } = noBlankValidator(this.state.data);
      if (isValid) {
         this.setState({ loading: true });
         api.post('/opinions', this.state.data)
            .then(({status}) => {
               if (status === 201) {
                  swal({title: '¡Opinión enviada!',
                        text: '¡Gracias por tu opinión!',
                        icon: 'success'}).then(ok => ok && this.props.history.push('/'))
               };
            })
      } else {
         this.setState({ errors });
      };
   };

   render() {
      return (
         <UserPageExists userParam={this.state.data.to_user}>
            <form id="opinion-form" onSubmit={this.submitHandler}>
               <div id="op-header">
                  <figure>
                     <img src={opsheader} alt="opsheader-icon" />
                  </figure>
                  <h2>Opina sobre *shop*</h2>
                  <p>Déjalo saber que piensas</p>
               </div>
               <div id="opinion-entries">
                  <h3>¿Cómo calificarías su servicio?</h3>
                  <RatingSelector onChange={this.changeHandler} />
                  <CommentInput
                     label="Tu opinión"
                     name="comment"
                     errors={this.state.errors}
                     onChange={this.changeHandler}
                  />
                  <ButtonLoader isloading={this.state.loading} />
               </div>
            </form>
         </UserPageExists>

      );
   };

   componentDidMount() {
      document.title = `${this.state.data.to_user} - Nueva Opinión`;
   };

};

export default NewOpinion;

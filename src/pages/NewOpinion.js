import React, { Component } from 'react';
import { RatingSelector, CommentInput,
         ButtonLoader, UserPageExists } from './components';
import { blankForm } from '../utils/validators';
import swal from 'sweetalert';
import api from '../utils/api';
import opsheader from '../assets/NewOpinion/users-opinions.svg';
import './styles/NewOpinion.css';

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

   changeHandler = ({ target }) => {
      this.setState({
         data: {
            ...this.state.data,
            [target.name]: target.value
         }
      });
   };

   submitHandler = event => {
      event.preventDefault();
      let { valid, errors } = blankForm(this.state.data);
      if (valid) {
         this.setState({ loading: true });
         api.post('/opinions', this.state.data)
            .then(() => {
               swal({
                  title: '¡Opinión enviada!',
                  text: '¡Gracias por tu opinión!',
                  icon: 'success'
               }).then(ok =>ok && this.props.history.push(`/users/${this.user}`));
            });
      } else {
         this.setState({ errors });
      };
   };

   render() {
      this.user = this.state.data.to_user;
      return (
         <UserPageExists onlyclients>
            <form id="opinion-form" onSubmit={this.submitHandler}>
               <div id="op-header">
                  <img src={opsheader} alt="op-header-icon" />
                  <h2>Opina sobre {this.user}</h2>
                  <p>Déjal@ saber que piensas</p>
               </div>
               <div id="opinion-entries">
                  <h3>¿Cómo calificarías su servicio?</h3>
                  <RatingSelector onChange={this.changeHandler} />
                  <CommentInput
                     name="comment"
                     label="Tu opinión"
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
      document.title = `${this.user} - Nueva Opinión`;
   };

};

export default NewOpinion;

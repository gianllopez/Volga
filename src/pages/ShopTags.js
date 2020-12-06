import React, { Component } from 'react';
import swal from '@sweetalert/with-react';
import Loader from '../components/common/Loader';
import TagBox from '../components/ShopTags/TagBox';
import tagsProps from '../utils/tagsProps';
import shoptagsHero from '../assets/ShopTags/shop-tags-hero.svg';
import './styles/ShopTags.css';

class ShopTags extends Component {
   
   state = {
      tags: [],
      error: '',
      loading: false
   }

   handleChange = event => {      
      this.setState({
         tags: [
            ...this.state.tags,
            event.target.value
         ]
      });
   };

   handleSubmit = event => {

      this.setState({ loading: true });

      event.preventDefault();
      
      let shoptoken = localStorage.getItem('shoptoken');

      fetch(`https://volga-rest.herokuapp.com/tags/?token=${shoptoken}`, 
         {
            method: 'post',
            headers: {
               'Authorization': 'Token 86d97d29eafeec948c5dbca2c611be0a6d4c8190',
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({tags: this.state.tags.join('/')})
         }
      ).then(response => {
         this.setState({ loading: false });
         if (response.ok) {
            // this.props.history.push('') --> post a product.
         } else {
            return response.json();
         }
      }).then(json => {
            if (json) {
               swal({
                  title: 'Error en el registro.',
                  content: (
                     <p style={{textAlign: 'center'}}>
                        {json.non_field_errors[0]}
                     </p>
                  ),
                  icon: 'error',
                  dangerMode: true                  
               });
            };
      }).catch(error => console.error(error));

   };

   render() {
      return (
         <form id='shop-tags-wrapper' onSubmit={this.handleSubmit}>
            <div id='header'>
               <h1>¿Con qué etiquetas<br/>relacionarías tu tienda?</h1>
               <h2>Seleccionalas</h2>
               <img src={shoptagsHero} alt="shop-tags-hero"/>
            </div>
            <div id='tags-form'>
               {Object.entries(tagsProps).map((tagData, i) => {
                  return (
                     <TagBox
                        name={tagData[0]} 
                        image={tagData[1]}
                        changeHandler={this.handleChange}
                        key={i}
                     />
                  )
               })}
            </div>
            {this.state.loading ? 
               <Loader style={{width: 110, height: 35, marginTop: 20}}/>:
               <button type='submit'>
                  Continuar
               </button>
            }
         </form>
      );
   };

   componentDidMount() {
      document.title = `${this.props.match.params['shop']} - Tags`;
   };

};

export default ShopTags;
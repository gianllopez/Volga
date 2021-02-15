import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import { CustomModal, FavButton, PageLoader, ProductGallery } from './components';
import './styles/ProductPage.css';

class ProductPage extends Component {

   state = { fetched: false, data: {} };

   centeredCallback = height => {
      let pp = document.querySelector('.product-page');
      height < 433 ?
         pp.classList.add('centered-position') :
         pp.classList.remove('centered-position');
   };

   render() {
      let { images, product, price, description, key, user } = this.state.data;
      return (
         this.state.fetched ? (
            <div className="product-page">
               <ProductGallery
                  images={images}
                  product={product}
                  heightChangeCallback={this.centeredCallback}
               />
               <section id="pp-product-info">
                  <div>
                     <h2>{product}</h2>
                     <h4>{price}</h4>
                     <p>{description}</p>
                     <div id="btns">
                        <Link to={`/${user}/contact`}>
                           <button>Preguntar</button>
                        </Link>
                        <FavButton productkey={key} withtext />
                     </div>
                  </div>
               </section>
            </div>
         ) : <PageLoader />
      );
   };

   componentDidMount() {
      const { username, productkey } = this.props.match.params;
      document.title = `Volga - ${productkey}`;
      api.get('/get-data/product', { username, productkey })
         .then(({ data }) => this.setState({ fetched: true, data }))
         .catch(({ response }) => {
            let { error } = response.data;
            if (error === '404') {
               CustomModal(
                  <span>
                     El producto que buscas no se encuentra
                     en el catálogo de {username}
                  </span>, [false, 'Entendido'])
                  .then(ok => ok && this.props.history.push('/'));
            };
         });
   };




};

export default ProductPage;

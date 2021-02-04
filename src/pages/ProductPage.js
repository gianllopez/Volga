import React, { Component } from 'react';
import api from '../utils/api';
import { CustomModal, PageLoader, ProductGallery } from './components';
import './styles/ProductPage.css';

class ProductPage extends Component {

   state = { fetched: false, data: {} };

   centeredCallback = height => {
      let pp = document.querySelector('#product-page');
      height < 433 ? 
         pp.classList.add('centered-position') :
         pp.classList.remove('centered-position');      
   };

   render() {
      let {images, product, price, description} = this.state.data;
      return (
         this.state.fetched ? (
            <div id="product-page">
               <ProductGallery
                  images={images}
                  product={this.state.data.product}
                  heightChangeCallback={this.centeredCallback}
               />
               <section id="pp-product-info">
                  <div>
                     <h2>{product}</h2>
                     <h4>{price}</h4>
                     <p>{description}</p>
                     <div id="btns">
                        <button>Preguntar</button>
                        <button>
                           Añadir a favoritos
                        </button>
                     </div>
                  </div>
               </section>
            </div>
         ) : <PageLoader/>
      );
   };

   componentDidMount() {
      const { username, productkey } = this.props.match.params;
      api.get('/get-data/product', { username, productkey })
         .then(({data}) => this.setState({fetched: true, data}))
         .catch(({response}) => {
            let notfound = response.data.product;
            if (notfound) {
               CustomModal(<span>{ notfound }</span>, [false, 'Entendido'])
                  .then(ok => ok && this.props.history.push('/'));
            };
         });
   };

   


};

export default ProductPage;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FavButton, ModalDisplayer, PageLoader,
         ProductGallery, ProductTagsDisplayer } from './components';
import api from '../utils/api';
import { isAuthenticated } from '../utils/routing-tools';
import './styles/ProductPage.css';

class ProductPage extends Component {

   state = {
      isauth: isAuthenticated(),
      fetched: false,
      data: {...this.props.match.params}
   };

   render() {
      let { images, product, price, description,
            tags, isfav, key, username } = this.state.data;
      return (
         this.state.fetched ?
            <div className="product-page">
               <ProductGallery
                  images={images}
                  product={product}
               />
               <section id="pp-product-info">
                  <div>
                     <h2>{product}</h2>
                     <h4>{price}</h4>
                     <p>{description ?
                           description : "Este producto no tiene descripción."}</p>
                     <ProductTagsDisplayer tags={tags}/>
                     <div id="btns">
                        <Link to={{ pathname:`/${username}/contact`, state: { exists: true } }} >
                           <button>Preguntar</button>
                        </Link>
                        {this.state.isauth &&
                           <FavButton
                              isfav={isfav}
                              product={key}
                              favCallback={this.fetchProductData}
                              withtext />}
                     </div>
                  </div>
               </section>
            </div> : <PageLoader/>
      );
   };

   componentDidMount() {
      let { username, key } = this.state.data;
      document.title = `Volga - ${key}`;
      api.get('/get-data/product', { username, key })
         .then(({ data }) =>
            this.setState({ fetched: true, data: {...data, username, key }}))
         .catch(({ response }) => {
            if (response.status === 404) {
               ModalDisplayer({
                  type: 'CUSTOM',
                  title: 'Se produjo un error',
                  message: `El producto que buscas no se encuentra
                           en el catálogo de ${username}`
               }).then(() => this.props.history.push('/'));
            }});
   };

   componentDidUpdate() {
      if (!this.state.isauth) {
         document.querySelectorAll('#btns a, #btns a button')
            .forEach(el => el.style.width = '100%');
      };
   };

};

export default ProductPage;

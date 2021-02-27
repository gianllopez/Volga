import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FavButton, PageLoader,
         ProductGallery, ProductTagsDisplayer } from './components';
import api from '../utils/api';
import { isAuthenticated } from '../utils/routing-tools';
import './styles/ProductPage.css';

class ProductPage extends Component {

   state = {
      isauth: isAuthenticated(),
      fetched: false,
      data: {}
   };

   render() {
      let { images, product, price,
            description, tags, isfav, key } = this.state.data,
      { username } = this.props.match.params;
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
                     <p>{description ? description : "Este producto no tiene descripción."}</p>
                     <ProductTagsDisplayer tags={tags}/>
                     <div id="btns">
                        <Link to={`/${username}/contact`} >
                           <button>Preguntar</button>
                        </Link>
                        {this.state.isauth && <FavButton isfav={isfav} product={key} withtext />}
                     </div>
                  </div>
               </section>
            </div> : <PageLoader/>
      );
   };

   componentDidMount() {
      const { location, match } = this.props,
      { username, key } = match.params;
      document.title = `Volga - ${key}`;
      let locState = location.state;
      if (!locState) {
         api.get('/get-data/product', { username, key })
            .then(({ data }) => this.setState({ fetched: true, data }))
            .catch(({ response }) => {
               if (response.status === 404) {
                  // CustomModal(
                  //    <span>
                  //       El producto que buscas no se encuentra
                  //       en el catálogo de {username}
                  //    </span>, [false, 'Entendido'])
                  //       .then(ok =>ok && this.props.history.push('/'));
               }});
      } else {
         this.setState({ fetched: true, data: locState.product });
      };
   };

   componentDidUpdate() {
      if (!this.state.isauth) {
         document.querySelectorAll('#btns a, #btns a button')
            .forEach(el => el.style.width = '100%');
      };
   };

};

export default ProductPage;

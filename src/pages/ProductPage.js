import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import { CustomModal, FavButton, PageLoader, ProductGallery, ProductTagsDisplayer } from './components';
import './styles/ProductPage.css';

class ProductPage extends Component {

   state = { fetched: false, data: {} };

   render() {
      let { images, product, price, description,
            tags, isfav, key, user } = this.state.data;
      return (
         this.state.fetched ? (
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
                     {<ProductTagsDisplayer tags={tags}/>}
                     <div id="btns">
                        <Link to={`/${user}/contact`}>
                           <button>Preguntar</button>
                        </Link>
                        <FavButton isfav={isfav} productkey={key} withtext />
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
      let fromlink = this.props.location.state;
      if (!fromlink) {
         api.get('/get-data/product', { username, productkey })
            .then(({ data }) => this.setState({ fetched: true, data }))
            .catch(({response}) => {
               if (response.status === 404) {
                  CustomModal(
                     <span>
                        El producto que buscas no se encuentra
                        en el catálogo de {username}
                     </span>, [false, 'Entendido'])
                        .then(ok => ok && this.props.history.push('/'));
               };});
      } else {
         this.setState({fetched: true, data: fromlink.product});
      };
   };
};

export default ProductPage;

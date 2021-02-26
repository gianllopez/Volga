import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import { CustomModal, FavButton, PageLoader, ProductGallery, ProductTagsDisplayer } from './components';
import './styles/ProductPage.css';

class ProductPage extends Component {

   state = {
      isauth: localStorage.getItem('user-token') ? true : false,
      fetched: false,
      data: {}
   };

   render() {
      let { isauth, images, product, price,
            description, tags, isfav, key } = this.state.data;
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
                        <Link to={`/${this.props.match.params.username}/contact`} >
                           <button>Preguntar</button>
                        </Link>
                        {isauth && <FavButton isfav={isfav} key={key} withtext/>}
                        {/* <FavButton isfav={isfav} key={key} withtext/> */}
                     </div>
                  </div>
               </section>
            </div>
         ) : <PageLoader />
      );
   };

   componentDidMount() {
      const { username, key } = this.props.match.params;
      document.title = `Volga - ${key}`;
      let fromlink = this.props.location.state;
      if (!fromlink) {
         api.get('/get-data/product', { username, key })
            .then(({ data }) => {this.setState({ fetched: true, data })})
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

   componentDidUpdate() {
      if (!this.state.isauth) {
         document.querySelectorAll('#btns a, #btns a button')
            .forEach(el => el.style.width = '100%')
            
      };
   };

};

export default ProductPage;

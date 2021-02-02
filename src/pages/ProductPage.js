import React, { Component, Fragment } from 'react';
import api from '../utils/api';
import { PageLoader } from './components';
import './styles/ProductPage.css';

class ProductPage extends Component {

   state = { fetched: false, data: {} };

   render() {
      let {images, product, price, description} = this.state.data;
      return (
         this.state.fetched ? (
            <Fragment>
               <div id="product-page-wrapper">
                  <img src={images[0]} alt="product" />
                  <div id="productpage-info">
                     <h2>{product}</h2>
                     <h4 className="ppgray-content">{price}</h4>
                     <p>{description}</p>
                     <div id="iproduct-btns">
                        <button>Preguntar</button>
                        <button>Añadir a deseos</button>
                     </div>
                  </div>
               </div>
               <div id="page-border" />
            </Fragment>
         ) : <PageLoader/>
      );
   };

   componentDidMount() {
      const { username, productkey } = this.props.match.params;
      api.get('/get-data/product', { username, productkey })
         .then(({data}) => this.setState({fetched: true, data}))
         .catch(errors => { debugger });
   };

};

export default ProductPage;

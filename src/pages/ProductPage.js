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
            <div>
               {/* Structure  */}
            </div>
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

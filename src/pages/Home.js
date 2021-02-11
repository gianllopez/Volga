import React, { Component } from 'react';
import api from '../utils/api';
import { ShopProduct } from './components/';
import './styles/Home.css';

class Home extends Component {

   state = { feed: [] };

   render() {
      let { feed } = this.state;
      return (
         <div id="feed-products">
            {feed.map((product, index) => (
               <ShopProduct product_data={product}/>
            ))}
         </div>   
      );
   };

   componentDidMount() {
      api.get('/get-data/feed')
         .then(({ data }) => this.setState({ feed: data }));
   };

};

export default Home;

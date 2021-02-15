import React, { Component } from 'react';
import api from '../utils/api';
import { UserProduct } from './components/';
import './styles/Home.css';

class Home extends Component {

   state = { feed: [] };

   render() {
      let { feed } = this.state;
      return (
         <div id="feed-products">
            {feed.length !== 0 ?
               feed.map((product, index) =>
                  <UserProduct data={product} key={index} />) :
               <p>Esto hay que hacerlo un componente lindo...</p>}
         </div>
      );
   };

   componentDidMount() {
      document.title = 'Volga - Inicio';
      api.get('/get-data/feed')
         .then(({ data }) => this.setState({ feed: data }));
   };

};

export default Home;

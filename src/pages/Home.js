import React, { Component } from 'react';
import api from '../utils/api';
import { CustomMessage, UserProduct } from './components/';
import missingfollower from '../assets/Home/missing-follower.svg';
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
               <CustomMessage
                  msgimage={missingfollower}
                  message="No estás siguiendo a nadie,
                           sigue a usuarios para ver sus productos aquí en inicio"
               />}
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

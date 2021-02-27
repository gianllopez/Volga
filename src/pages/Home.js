import React, { Component } from 'react';
import { CustomMessage, UserProduct } from './components/';
import { Landing } from './';
import api from '../utils/api';
import { isAuthenticated } from '../utils/routing-tools';
import missingfollower from '../assets/Home/missing-follower.svg';
import './styles/Home.css';

class Home extends Component {

   state = { isauth: isAuthenticated(), feed: [] };

   render() {
      let { isauth, feed } = this.state;
      return (
         isauth ? 
            <div id="feed-products">
               {feed.length !== 0 ?
                  feed.map((product, index) =>
                     <UserProduct data={product} key={index} />) :
                  <CustomMessage
                     msgimage={missingfollower}
                     message="No estás siguiendo a nadie,
                              sigue a usuarios para ver sus productos aquí en inicio"
                  />}
            </div> : <Landing />
      );
   };

   componentDidMount() {
      document.title = 'Volga - Inicio';
      if(this.state.isauth) {
         api.get('/get-data/feed')
            .then(({ data }) => this.setState({ feed: data }));
      };
   };

};

export default Home;

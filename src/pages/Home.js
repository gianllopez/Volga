import React, { Component, Fragment } from 'react';
import { NavBar, ShopProduct } from './components/';
import './styles/Home.css';

class Home extends Component {
   render() {
      return (
         <Fragment>
            <NavBar/>
            <div id="feed">
               <div id="feed-products">
                  <ShopProduct shop="ovo"/>
                  <ShopProduct shop="ovo"/>
                  <ShopProduct shop="ovo"/>
                  <ShopProduct shop="ovo"/>
                  <ShopProduct shop="ovo"/>
                  <ShopProduct shop="ovo"/>
                  <ShopProduct shop="ovo"/>
                  <ShopProduct shop="ovo"/>
               </div>
            </div>
         </Fragment>      
      );
   };
};

export default Home;

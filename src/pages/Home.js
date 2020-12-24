import React, { Component, Fragment } from 'react';
import { Footer, NavBar, ShopProduct } from './components/';
import './styles/Home.css';

class Home extends Component {
   render() {
      return (
         <Fragment>
            <NavBar/>
            <div id="feed">
               <div id="feed-products">
                  <ShopProduct shop="ovo" history={this.props.history}/>
                  <ShopProduct shop="ovo" history={this.props.history}/>
                  <ShopProduct shop="ovo" history={this.props.history}/>
                  <ShopProduct shop="ovo" history={this.props.history}/>
                  <ShopProduct shop="ovo" history={this.props.history}/>
                  <ShopProduct shop="ovo" history={this.props.history}/>
                  <ShopProduct shop="ovo" history={this.props.history}/>
                  <ShopProduct shop="ovo" history={this.props.history}/>
               </div>
            </div>
            <Footer/>
         </Fragment>      
      );
   };
};

export default Home;

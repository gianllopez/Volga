import React, { Component } from 'react';
import { ShopProduct } from './components/';
import './styles/Home.css';

class Home extends Component {
   render() {
      return (
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
      );
   };
};

export default Home;

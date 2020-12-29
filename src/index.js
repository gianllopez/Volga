import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Logup, SocialNets, ShopTags, ShopLogo,
         Login, ShopProfile, ProductPage, Home,
         PostProduct, NewOpinion, ShopOpinions,
         ShopContact } from './pages/';
import { NavBar, Footer } from './pages/components';
import './index.css';

ReactDOM.render(
   <BrowserRouter>
      <Switch>
         <NavBar/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/logup' component={Logup}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/shops/:shop' component={ShopProfile}/>
            <Route exact path='/:shop/products/:product' component={ProductPage}/>
            <Route exact path='/:shop/products/new' component={PostProduct}/>
            <Route exact path='/:shop/opinions' component={ShopOpinions}/>
            <Route exact path='/:shop/opinions/new' component={NewOpinion}/>
            <Route exact path='/:shop/contact' component={ShopContact}/>
         <Footer/>
         <Route exact path='/:shop/social-networks' component={SocialNets}/>
         <Route exact path='/:shop/tags' component={ShopTags}/>
         <Route exact path='/:shop/logo' component={ShopLogo}/>
      </Switch>
   </BrowserRouter>,
   document.getElementById('root')
);

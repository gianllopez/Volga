import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Logup, UserContact, ShopTags, ShopLogo,
         Login, ShopProfile, ProductPage, Home,
         PostProduct, NewOpinion, ShopOpinions,
         ShopContact } from './pages/';
import { SomeRoutesLayout } from './pages/components';
import './index.css';

ReactDOM.render(
   <BrowserRouter>
      <Switch>
         <Route exact path='/:shop/contact-networks' component={UserContact}/>
         <Route exact path='/:shop/tags' component={ShopTags}/>
         <Route exact path='/:shop/logo' component={ShopLogo}/>
         <SomeRoutesLayout>
            <Route exact path='/' component={Home}/>
            <Route exact path='/logup' component={Logup}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/shops/:shop' component={ShopProfile}/>
            <Route exact path='/:shop/products/new' component={PostProduct}/>
            <Route exact path='/:shop/catalog/:product' component={ProductPage}/>
            <Route exact path='/:shop/opinions' component={ShopOpinions}/>
            <Route exact path='/:shop/opinions/new' component={NewOpinion}/>
            <Route exact path='/:shop/contact' component={ShopContact}/>
         </SomeRoutesLayout>
      </Switch>
   </BrowserRouter>,
   document.getElementById('root')
);

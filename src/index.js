import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logup from './pages/Logup';
import SocialNets from './pages/SocialNets';
import ShopTags from './pages/ShopTags';
import ShopLogo from './pages/ShopLogo';
import Login from './pages/Login';
import ShopProfile from './pages/ShopProfile';
import ProductPage from './pages/ProductPage';
import Home from './pages/Home';
import PostProduct from './pages/PostProduct';
import NewOpinion from './pages/NewOpinion';
import ShopOpinions from './pages/ShopOpinions';
import './index.css';

ReactDOM.render(
   <BrowserRouter>
      <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/logup' component={Logup}/>
         <Route exact path='/:shop/social-networks' component={SocialNets}/>
         <Route exact path='/:shop/tags' component={ShopTags}/>
         <Route exact path='/:shop/logo' component={ShopLogo}/>
         <Route exact path='/login' component={Login}/>
         <Route exact path='/shops/:shop' component={ShopProfile}/>
         <Route exact path='/:shop/products/:product' component={ProductPage}/>
         <Route exact path='/:shop/products/new' component={PostProduct}/>
         <Route exact path='/:shop/opinions' component={ShopOpinions}/>
         <Route exact path='/:shop/opinions/new' component={NewOpinion}/>
      </Switch>
   </BrowserRouter>,
   document.getElementById('root')
);

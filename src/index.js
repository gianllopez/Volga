import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logup from './pages/Logup';
import SocialNets from './pages/SocialNets';
import ShopTags from './pages/ShopTags';
import ShopLogo from './pages/ShopLogo';
import Login from './pages/Login';
import './index.css';

ReactDOM.render(
   <BrowserRouter>
      <Switch>
         <Route exact path='/logup' component={Logup}/>
         <Route exact path='/:shop/social-networks' component={SocialNets}/>
         <Route exact path='/:shop/tags' component={ShopTags}/>
         <Route exact path='/:shop/logo' component={ShopLogo}/>
         <Route exact path='/login' component={Login}/>
      </Switch>
   </BrowserRouter>,
   document.getElementById('root')
);

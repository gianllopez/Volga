import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SocialNets from './pages/SocialNets';
import ShopTags from './pages/ShopTags';
import Logup from './pages/Logup';
import Login from './pages/Login';
import ShopLogo from './pages/ShopLogo';

import './index.css';

ReactDOM.render(
   <BrowserRouter>
      <Switch>
         <Route exact path='/:shop/social-networks' component={SocialNets}/>
         <Route exact path='/:shop/tags' component={ShopTags}/>
         <Route exact path='/logup' component={Logup}/>
         <Route exact path='/login' component={Login}/>
         <Route exact path='/:shop/logo' component={ShopLogo}/>
      </Switch>
   </BrowserRouter>,
   document.getElementById('root'),
);

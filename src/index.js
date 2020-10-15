import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SocialNets from './pages/SocialNets';
import ShopTags from './pages/ShopTags';
import LogUp from './pages/LogUp';
import LogIn from './pages/LogIn';

import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/social-networks' component={SocialNets} />
            <Route exact path='/shop-tags' component={ShopTags} />
            <Route exact path='/logup' component={LogUp} />
            <Route exact path='/login' component={LogIn} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'),
);

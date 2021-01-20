import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
   Logup, ContactNetworks, UserProfilePicture, UserTags,
   Login, ShopProfile, ProductPage, Home,
   PostProduct, NewOpinion, ShopOpinions,
   ShopContact
} from './pages/';
import { SomeRoutesLayout } from './pages/components';
import './index.css';

ReactDOM.render(
   <BrowserRouter>
      <Switch>
         <Route exact path='/:username/contact-networks' component={ContactNetworks} /> {/* Ready, por revisar si hay código que resumir... */}
         <Route exact path='/:username/tags' component={UserTags} /> {/* Ready, por revisar si hay código que resumir... */}
         <Route exact path='/:username/profile-picture' component={UserProfilePicture} /> {/* Ready, por revisar si hay código que resumir... */}
         <SomeRoutesLayout>
            <Route exact path='/' component={Home} />
            <Route exact path='/logup' component={Logup} /> {/* Ready, por revisar si hay código que resumir... */}
            <Route exact path='/login' component={Login} />
            <Route exact path='/users/:username' component={ShopProfile} />
            <Route exact path='/:shop/products/new' component={PostProduct} />
            <Route exact path='/:shop/catalog/:product' component={ProductPage} />
            <Route exact path='/:shop/opinions' component={ShopOpinions} />
            <Route exact path='/:shop/opinions/new' component={NewOpinion} />
            <Route exact path='/:shop/contact' component={ShopContact} />
         </SomeRoutesLayout>
      </Switch>
   </BrowserRouter>,
   document.getElementById('root')
);

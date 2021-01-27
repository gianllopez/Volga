import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import {
   Logup, ContactNetworks, UserProfilePicture, UserTags,
   Login, UserProfile, ProductPage, Home,
   PostProduct, NewOpinion, ClientsOpinions,
   ShopContact, SearchResults
} from './pages/';
import { MainLayout } from './pages/components/';
import './index.css';

const isAuthenticated = localStorage.getItem('user-token') ? true : false;

const ProtectedRoute = ({ component: Component, ...routeprops }) => (
   <Route {...routeprops} render={props => (
      isAuthenticated ?
         <Component {...props} /> :
         <Redirect to="/login" />
   )} />
);

ReactDOM.render(
   <BrowserRouter>
      <Switch>
         <ProtectedRoute exact path='/:username/contact-networks' component={ContactNetworks} /> {/* Ready, por revisar si hay código que resumir... */}
         <ProtectedRoute exact path='/:username/tags' component={UserTags} /> {/* Ready, por revisar si hay código que resumir... */}
         <ProtectedRoute exact path='/:username/profile-picture' component={UserProfilePicture} /> {/* Ready, por revisar si hay código que resumir... */}
         <MainLayout nofooter={['/login']}>
            <Route exact path='/' component={Home} />
            {!isAuthenticated ? (
               <Fragment>
                  <Route exact path='/logup' component={Logup} /> {/* Ready, por revisar si hay código que resumir... */}
                  <Route exact path='/login' component={Login} />
               </Fragment>) : <Redirect to="/" />}
            <Route exact path='/users/:username' component={UserProfile} />
            <Route exact path='/:username/catalog/:product' component={ProductPage} />
            <ProtectedRoute exact path='/:username/products/new' component={PostProduct} />
            <Route exact path='/:username/opinions' component={ClientsOpinions} /> {/* Ready, por revisar si hay código que resumir... */}
            <ProtectedRoute exact path='/:username/opinions/new' component={NewOpinion} /> {/* Ready, por revisar si hay código que resumir... */}
            <Route exact path='/:shop/contact' component={ShopContact} />
            <Route exact path='/search/results' component={SearchResults} />
            <Route render={() => <Redirect to="/" />} />
         </MainLayout>
      </Switch>
   </BrowserRouter >, document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import {
   Logup, ContactNetworks, UserProfilePicture, UserTags,
   Login, UserProfile, ProductPage, Home,
   PostProduct, NewOpinion, ClientsOpinions,
   ShopContact, SearchResults, NotFound, Explore, FavoritesProducts
} from './pages/';
import { MainLayout } from './pages/components/';
import './index.css';

const isAuthenticated = () => localStorage.getItem('user-token') ? true : false;

const ProtectedRoute = ({ component: Component, ...routeprops }) => (
   <Route {...routeprops} render={props => (
      isAuthenticated() ?
         <Component {...props} /> :
         <Redirect to="/login" />
   )} />
);

const NoAuthRoute = ({ component: Component, ...routeprops }) => (
   <Route {...routeprops} render={props => (
      !isAuthenticated() ?
         <Component {...props} /> :
         <Redirect to="/" />
   )} />
);

ReactDOM.render(
   <BrowserRouter>
      <Switch>
         <ProtectedRoute exact path="/:username/contact-networks" component={ContactNetworks} /> {/* Ready, por revisar si hay código que resumir... */}
         {/* <ProtectedRoute exact path="/:username/tags" component={UserTags} /> Ready, por revisar si hay código que resumir... */}
         <ProtectedRoute exact path="/:username/profile-picture" component={UserProfilePicture} /> {/* Ready, por revisar si hay código que resumir... */}
         <MainLayout nofooter={['/login', '/my-products/new']}>
            <Switch>
               <Route exact path="/" component={Home} />
               <NoAuthRoute exact path="/logup" component={Logup} /> {/* Ready, por revisar si hay código que resumir... */}
               <NoAuthRoute exact path="/login" component={Login} />
               <Route exact path="/users/:username" component={UserProfile} />
               <Route exact path="/products/explore" component={Explore} />
               <Route exact path="/:username/catalog/:productkey" component={ProductPage} />
               <ProtectedRoute exact path="/my-products/new" component={PostProduct} />
               <ProtectedRoute exact path="/me/favorites-products" component={FavoritesProducts} />
               <Route exact path="/:username/opinions" component={ClientsOpinions} /> {/* Ready, por revisar si hay código que resumir... */}
               <ProtectedRoute exact path="/:username/opinions/new" component={NewOpinion} /> {/* Ready, por revisar si hay código que resumir... */}
               <Route exact path="/:username/contact" component={ShopContact} />
               <Route exact path="/search/results" component={SearchResults} />
               <Route component={NotFound} />
            </Switch>
         </MainLayout>
      </Switch>
   </BrowserRouter >, document.getElementById('root'));

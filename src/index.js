import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import {
   Logup, ContactNetworks, UserProfilePicture, UserTags,
   Login, UserProfile, ProductPage, Home,
   PostProduct, NewOpinion, ClientsOpinions,
   ShopContact, SearchResults
} from './pages/';
import { SomeRoutesLayout } from './pages/components';
import './index.css';

const isAuthenticated = () => localStorage.getItem('user-token') || false;

// const ProtectedRoute = props => (
//    isAuthenticated() ?
//       <Route {...props} /> :
//       <Redirect to="/login" />
// );

const ProtectedRoute = ({ component: Component, ...rest }) => (
   <Route {...rest} render={(props) => (
      isAuthenticated() === true ?
         <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
   )} />
);

const LogForms = ({ children }) => isAuthenticated() ? <Redirect to="/" /> : children;

ReactDOM.render(
   <BrowserRouter>
      <Switch>
         <ProtectedRoute exact path='/:username/contact-networks' component={ContactNetworks} /> {/* Ready, por revisar si hay código que resumir... */}
         <ProtectedRoute exact path='/:username/tags' component={UserTags} /> {/* Ready, por revisar si hay código que resumir... */}
         <ProtectedRoute exact path='/:username/profile-picture' component={UserProfilePicture} /> {/* Ready, por revisar si hay código que resumir... */}
         <SomeRoutesLayout>
            <Route exact path='/search/results' component={SearchResults} />
            <Route exact path='/' component={Home} />
            <LogForms>
               <Route exact path='/logup' component={Logup} /> {/* Ready, por revisar si hay código que resumir... */}
               <Route exact path='/login' component={Login} />
            </LogForms>
            <Route exact path='/users/:username' component={UserProfile} />
            <ProtectedRoute exact path='/:shop/products/new' component={PostProduct} />
            <Route exact path='/:username/catalog/:product' component={ProductPage} />
            <Route exact path='/:username/opinions' component={ClientsOpinions} /> {/* Ready, por revisar si hay código que resumir... */}
            <ProtectedRoute exact path='/:username/opinions/new' component={NewOpinion} /> {/* Ready, por revisar si hay código que resumir... */}
            <Route exact path='/:shop/contact' component={ShopContact} />
         </SomeRoutesLayout>
      </Switch>
   </BrowserRouter>,
   document.getElementById('root')
);

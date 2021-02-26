import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Footer, NavBar } from '../pages/components';

const isAuthenticated = () => localStorage.getItem('user-token') ? true : false;

function ProtectedRoute({ component: Component, disabledonauth,  ...mainprops }) {
   let isauth = isAuthenticated();
   return (
      <Route {...mainprops} render={props => 
         disabledonauth ?
            !isauth ?
               <Component {...props} /> : <Redirect to="/"/> :
            isauth ?
               <Component {...props} /> : <Redirect to="/login"/>
      } exact/>
   );
}

function Layout(props) {
   return (
      <Fragment>
         <NavBar/>
         <Switch>
            {props.children}
         </Switch>
         {props.withfooter && <Footer/>}
      </Fragment>
   );
};


const completePaths = [
   '/:username/opinions',
   '/:username/contact',
   '/products/explore',
   '/users/:username',
   '/search/results',
   '/me/favorites',
   '/logup'
];

const noFooterPaths = [
   '/:username/catalog/:productkey',
   '/:username/opinions/new',
   '/my-products/new',
   '/login',
   '/'
];

export { Layout, ProtectedRoute, completePaths, noFooterPaths, isAuthenticated };

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Logup, ContactNetworks, UserProfilePicture, Login, UserProfile,
         ProductPage, Home, PostProduct, NewOpinion, ClientsOpinions,
         UserContact, SearchResults, NotFound, Explore,
         FavoritesProducts, EmailVerification } from './pages/';
import { Layout, ProtectedRoute, completePaths, noFooterPaths } from './utils/routing-tools';
import './index.css';

function VolgaApp(props={}) {
   return (
      <BrowserRouter>
         <Switch>
            <ProtectedRoute path="/:username/contact-networks" component={ContactNetworks} />
            <ProtectedRoute path="/:username/profile-picture" component={UserProfilePicture} />
            <Route path={completePaths} exact>
               <Layout withfooter>
                  <ProtectedRoute path="/logup" component={Logup} disabledonauth/>
                  <Route exact path="/products/explore" component={Explore} />
               </Layout>
            </Route>
            <Route path={noFooterPaths} exact>
               <Layout>
                  <ProtectedRoute path="/:username/opinions" component={ClientsOpinions} exact />
                  <ProtectedRoute path="/me/favorites" component={FavoritesProducts} />
                  <Route path="/:username/contact" component={UserContact} exact />
                  <Route path="/search/results" component={SearchResults} exact />
                  <Route path="/:username/catalog/:key" component={ProductPage} exact />
                  <Route path="/users/:username" component ={UserProfile} exact />
                  <Route path="/" component={Home} exact />
                  <ProtectedRoute path="/:username/opinions/new" component={NewOpinion} />
                  <ProtectedRoute path="/my-products/new" component={PostProduct} exact />
                  <ProtectedRoute path="/login" component={Login} disabledonauth/>                  
               </Layout>
            </Route>
            <ProtectedRoute path="/:username/email-verification" component={EmailVerification} exact/>
            <Route component={NotFound}/>
         </Switch>
      </BrowserRouter>
   );
};

ReactDOM.render(<VolgaApp/> , document.getElementById('root'));

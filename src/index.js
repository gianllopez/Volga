import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Logup, ContactNetworks, UserProfilePicture, Login, UserProfile,
         ProductPage, Home, PostProduct, NewOpinion, ClientsOpinions,
         UserContact, SearchResults, NotFound, Explore,
         FavoritesProducts } from './pages/';
import { Layout, CustomRoute, completePaths, noFooterPaths } from './utils/routing-tools';
import './index.css';

function VolgaApp() {
   return (
      <BrowserRouter>
         <Switch>
            <CustomRoute path="/:username/contact-networks" component={ContactNetworks} />
            <CustomRoute path="/:username/profile-picture" component={UserProfilePicture} />
            <Route path={completePaths} exact>
               <Layout withfooter>
                  <Route path="/:username/opinions" component={ClientsOpinions} exact />
                  <CustomRoute path="/me/favorites" component={FavoritesProducts} />
                  <Route path="/:username/contact" component={UserContact} exact />
                  <Route path="/search/results" component={SearchResults} exact />
                  <Route path="/users/:username" component={UserProfile} exact />
                  <CustomRoute path="/logup" component={Logup} disabledonauth/>
                  <Route exact path="/products/explore" component={Explore} />
               </Layout>
            </Route>
            <Route path={noFooterPaths} exact>
               <Layout>
                  <Route path="/:username/catalog/:productkey" component={ProductPage} exact />
                  <Route path="/" component={Home} exact />
                  <CustomRoute path="/:username/opinions/new" component={NewOpinion} />
                  <CustomRoute path="/my-products/new" component={PostProduct} exact />
                  <CustomRoute path="/login" component={Login} disabledonauth/>                  
               </Layout>
            </Route>
            <Route component={NotFound}/>
         </Switch>
      </BrowserRouter>
   );
};

ReactDOM.render(<VolgaApp/> , document.getElementById('root'));

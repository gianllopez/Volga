import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routing from './routing';
import { Footer, NavBar } from './pages/components';
import './index.css';

function CompleteLayout({children}) {
   return (
      <Fragment>
         <NavBar/>
         <Switch>
            {children}
         </Switch>
         <Footer/>
      </Fragment>
   );
};

function NoFooterLayout({children}) {
   return (
      <Fragment>
         <NavBar/>
         <Switch>
            {children}
         </Switch>
      </Fragment>
   );
};

function VolgaApp(props) {
   const VolgaRoutes = props => (
      props.routes.map((route, index) => 
         <Route {...route} key={index} />)
   ), { complete, nofooter } = routing;
   return (
      <BrowserRouter> 
         <Switch>
            <Route path={complete.paths}>
               <CompleteLayout>  
                  <VolgaRoutes routes={complete.routes}/>
               </CompleteLayout>
            </Route>
            <Route path={nofooter.paths}>
               <NoFooterLayout>
                  <VolgaRoutes routes={nofooter.routes}/>
               </NoFooterLayout>
            </Route>
         </Switch>
      </BrowserRouter>
   );
};

ReactDOM.render(<VolgaApp/>, document.getElementById('root'));
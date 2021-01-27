import React, { Component, Fragment } from 'react';
import { NavBar, Footer } from '../';

class MainLayout extends Component {

   render() {
      return (
         <Fragment>
            <NavBar />
            {this.props.children}
            <Footer />
         </Fragment>
      );
   };

};

export default MainLayout;
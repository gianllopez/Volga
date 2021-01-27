import React, { Component, Fragment } from 'react';
import { NavBar, Footer } from '../';

class MainLayout extends Component {

   state = { footer: true };

   render() {
      return (
         <Fragment>
            <NavBar />
            {this.props.children}
            {this.state.footer && <Footer />}
         </Fragment>
      );
   };

   componentDidMount() {
      const { nofooter, location } = this.props,
         path = location.pathname;
      if (nofooter.includes(path) && this.state.footer) {
         this.setState({ footer: false });
      };
      if (!nofooter.includes(path) && !this.state.footer) {
         this.setState({ footer: true });
      };
   };

   componentDidUpdate() {
      this.componentDidMount()
   };

};

export default MainLayout;
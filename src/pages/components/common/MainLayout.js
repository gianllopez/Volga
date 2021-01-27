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
      this.componentDidUpdate()
   };

   componentDidUpdate() {
      const { nofooter, location } = this.props, path = location.pathname;
      let hasFooter = !nofooter.includes(path), { footer } = this.state;
      if (!hasFooter && footer) {
         this.setState({ footer: false });
      } else if (hasFooter && !footer) {
         this.setState({ footer: true });
      };
   };

};

export default MainLayout;
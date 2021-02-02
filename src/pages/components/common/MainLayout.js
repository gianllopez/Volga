import React, { Component, Fragment } from 'react';
import { NavBar, Footer } from '../';

class MainLayout extends Component {

   state = { footer: false };

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
      const { nofooter, location } = this.props, path = location.pathname;
      let hasFooter = !nofooter.includes(path), { footer } = this.state;
      if (!hasFooter && footer) {
         this.setState({ footer: false });
      } else if (hasFooter && !footer) {
         if (location.key && !/.+\/catalog\/.+/gm.test(path)) {
            this.setState({ footer: true });
         };
      };
   };

   componentDidUpdate() {
      this.componentDidMount();
   };

};

export default MainLayout;
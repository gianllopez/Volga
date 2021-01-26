import React, { Component, Fragment } from 'react';
import { NavBar, Footer } from '..'

class SomeRoutesLayout extends Component {

   state = { footer: true };

   render() {
      return (
         <Fragment>
            <NavBar />
            { this.props.children}
            {this.state.footer && <Footer />}
         </Fragment>
      );
   };

   componentDidMount() {
      const path = this.props.location.pathname, ppregex = /.*\/catalog\/.+/;
      if (ppregex.test(path)) {
         this.setState({ footer: false });
      };
   };

};

export default SomeRoutesLayout;

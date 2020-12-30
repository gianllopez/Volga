import React, { Component, Fragment } from 'react';
import { NavBar, Footer } from '..'

class SomeRoutesLayout extends Component {

   state = {};

   render() {
      return (
         <Fragment>
            <NavBar/>
            { this.props.children }
            {this.state.footer && 
               <Footer/>
            }
         </Fragment>
      );
   };
   
   componentDidMount() {
      const noFooterPaths = ['/logup', '/login'];
      if (!noFooterPaths.includes(this.props.location.pathname)) {
         this.setState({
            footer: true
         });
      };
   };

};

export default SomeRoutesLayout;

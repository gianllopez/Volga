import React, { Fragment } from 'react';
import { NavBar, Footer } from '..'

function SomeRoutesLayout(props) {
   return (
      <Fragment>
         <NavBar/>
         { props.children }
         <Footer/>
      </Fragment>
   );
};

export default SomeRoutesLayout;

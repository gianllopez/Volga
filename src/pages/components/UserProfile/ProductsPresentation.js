import React, { Fragment, useContext, useEffect } from 'react';
import { ProductCard } from '../';
import { UserProfileContext } from '../../UserProfile';
import './styles/ProductsPresentation.css';

function ProductsPresentation(props) {
   
   let { products, username, itsme } = useContext(UserProfileContext);

   useEffect(() => {
      if (!products.length) {
         document.querySelector('#user-products')
            .classList.add('no-prods-styles');
      };
   });

   return (
      <section id="user-products" className={props.className}>
         {products.length ?
            <Fragment>
               <h3 className="section-title">Aquí puedes encontrar:</h3>
               <div id="products">                         
                  {products.map((product, index) => 
                     <ProductCard
                        key={index}
                        user={username}
                        product-data={product}
                        isowner={itsme || false}
                        onDelete={props.deleteHandler}
                     />)}
               </div>
            </Fragment> :
            <h3 className="blank-header">
               Este usuario no ha posteado ningún producto.
            </h3>}
      </section>
   );
};

export default ProductsPresentation;

// Terminado, nada más que revisar...
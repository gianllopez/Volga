import React, { Component, createContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { UserStats, ProductCard, Opinion,
         FollowButton, UserPageExists, PresentationHeader } from './components';
import './styles/UserProfile.css';
import api from '../utils/api';
import { isAuthenticated } from '../utils/routing-tools';

export const UserProfileContext = createContext({});

class UserProfile extends Component {

   state = {
      user: {
         name: '', stats: {}, picture: '', opinions: '',
         products: [], following: '',
         ...this.props.match.params
      },
      ...this.props.location.state
   };

   fetchUserData = userQuery => {
      if (!this.state.fetched) {
         let username = userQuery || this.state.user.username;
         api.get('/get-data/user', { username })
            .then(({data}) => this.setState({ fetched: true, user: {...data} }));
      };
   };

   deleteHandler = query => {
      // CustomModal((
      //    <Fragment>
      //       <p>Esta acción es irreversible, luego de eliminarlo ya no estará en tu catálogo.</p>
      //       <span>¿Estás seguro que lo eliminas?</span>
      //    </Fragment>
      // ), ['Cancelar', 'Si, eliminar']).then(del => {
      //    if (del) {
      //       api.post('/products/delete', query)
      //          .then(({status}) => {
      //             if (status === 204) {
      //                this.setState({fetched: false, exists: true}, this.fetchUserData);
      //             };
      //          });
      //    };
      // });
   };
   
   render() {
      let { picture, username, name, stats, opinions,
            products, following, itsme } = this.state.user;
      return (
         <UserPageExists onExists={this.fetchUserData}>
            <div id="user-profile">
               <UserProfileContext.Provider value={{...this.state.user}}>

                  <PresentationHeader className="profile-section"/>

                  <UserStats className="profile-section"/>                  

                  <section id="user-products" className="profile-section">
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
                                    onDelete={this.deleteHandler}
                                 />)}
                           </div>
                        </Fragment> :
                        <h3 className="blank-header">
                           Este usuario no ha posteado ningún producto.
                        </h3>}
                  </section>

                  <section id="clients-opinions" className="profile-section">
                     {opinions.length !== 0 ?
                        <Fragment>
                           <h3 className="section-title">Opiniones de clientes:</h3>
                           {opinions.map((opinion, index) => 
                              <Opinion {...opinion} key={index}/>)}
                        </Fragment> : <h3 className="blank-header">Este usuario no tiene opiniones de clientes.</h3>}
                        <div>
                           {opinions.length !== 0 &&
                              isAuthenticated() && <Link to={`/${username}/opinions`}>Ver todas</Link>}
                           {!itsme &&
                              <Link to={{pathname: `/${username}/opinions/new`, state: {exists: true}}}>Opinar</Link>}
                        </div>
                  </section>

               </UserProfileContext.Provider>
            </div>
         </UserPageExists>
      );
   };

   componentDidMount() {
      document.title = `Volga - ${this.state.user.username}`;
      let { length } = this.state.user.products,
      prodsect = document.querySelector('section#user-products');
      if (!length && prodsect) {
         prodsect.classList.add('no-prods-styles');
      };
   };

   componentDidUpdate(prevProps) {
      let { username } = this.props.match.params;
      let prevUser = prevProps.match.params.username;
      if (username !== prevUser) {
         this.setState({ fetched: false}, () => this.fetchUserData(username))         
      };
   };

};

export default UserProfile;

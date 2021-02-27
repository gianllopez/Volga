import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { UserStats, ProductCard, Opinion, FollowButton, UserPageExists } from './components';
import './styles/UserProfile.css';
import api from '../utils/api';
import { isAuthenticated } from '../utils/routing-tools';

class UserProfile extends Component {

   state = {
      user: {
         username: this.props.match.params['username'],
         name: '', stats: {}, picture: '', opinions: '',
         products: [], following: '',
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
         <UserPageExists userParam={!this.state.exists && username} onExists={this.fetchUserData}>
            <div id="user-profile">
               <section id="profile-header" className="profile-section sub-section">
                  <img src={picture} alt="user-profilepic" />
                  <div id="user-info">
                     <h2>{username}</h2>
                     <h4>{name}</h4>
                  </div>
                  {!itsme && 
                     <div id="interaction-btns">
                        <Link to={`/${username}/contact`}>
                           <button>Contactar</button>
                        </Link>
                        <FollowButton
                           user={username}
                           following={following}
                           history={this.props.history}
                           />
                     </div>}
               </section>
               <section id="user-stats" className="profile-section sub-section">
                  <UserStats stats={stats} />
               </section>
               <section id="user-products"
                  className={`profile-section${products.length === 0 ? " no-prods-styles" : ""}`}>
                  {products.length !== 0 && <h3 className="section-title">Aquí puedes encontrar:</h3>}
                  <div id="products">
                     {products.length !== 0 ?
                        <Fragment>
                           {products.map((product, index) => 
                              <ProductCard
                                 product-data={product}
                                 onDelete={this.deleteHandler}
                                 user={username}
                                 key={index}
                                 isowner={itsme || false}
                              />)}
                        </Fragment> :
                        <h3 className="blank-header">Este usuario no ha posteado ningún producto.</h3>}
                  </div>
               </section>
               <section id="clients-opinions" className="profile-section sub-section">
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
            </div>
         </UserPageExists>
      );
   };

   componentDidMount() {
      document.title = `Volga - ${this.state.user.username}`;
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

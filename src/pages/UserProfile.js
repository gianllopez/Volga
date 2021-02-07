import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ShopStats, ProductCard, Opinion, FollowButton } from './components';
import { NotFound } from './';
import './styles/UserProfile.css';
import api from '../utils/api';

class UserProfile extends Component {

   state = {};

   render() {
      let { picture, username, name, stats, opinions, products, following } = this.state;
      return (
         !this.state.notfound ?
            <div id="user-profile">
               <section id="profile-header" className="profile-section sub-section">
                  <img src={picture} alt="user-profilepic" />
                  <div id="user-info">
                     <h2>{username}</h2>
                     <h4>{name}</h4>
                  </div>
                  <div id="interaction-btns">
                     <button>Contactar</button>
                     <FollowButton
                        user={username}
                        following={following}
                        history={this.props.history}                        
                     />
                  </div>
               </section>
               <section id="user-stats" className="profile-section sub-section">
                  <ShopStats data={stats}/>
               </section>
               <section id="user-products" className="profile-section">
                  <h3 className="section-title">Aquí puedes encontrar:</h3>
                  <div id="products">
                     {products && products.length >= 1 ?
                        products.map((product, index) => (
                           <ProductCard 
                              image={product.image_1}
                              name={product.product}
                              price={product.price}
                              key={index}
                           />
                        )) : <p>Este usuario no ha posteado ningún producto.</p>}
                  </div>
               </section>
               <section id="clients-opinions" className="profile-section sub-section">
                  <h3 className="section-title">Opiniones de clientes:</h3>
                  {opinions && opinions.length >= 1 ?
                     <Fragment>
                        {opinions.map((opinion, index) => (
                           <Opinion
                              from={opinion.from}
                              date={opinion.date}
                              comment={opinion.comment}
                              key={index}
                           />
                        ))}
                        <Link to={`/${username}/opinions`}>Ver todas</Link>
                     </Fragment>: <p>Este usuario no tiene opiniones de clientes.</p>}
               </section>
            </div> : <NotFound/>
      );
   };

   componentDidMount() {
      let { username } = this.props.match.params;
      api.post('/validation/user-exists', { username })
         .catch(({ response }) => {
            if (response.status === 404) {
               this.setState({ notfound: true });
            };
         }).then(() => {
            api.get('/get-data/user', { username })
            .then(({ data }) => {
               this.setState({ ...data.user });
            })
         });
   };


};

export default UserProfile;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ShopStats, ProductCard, Opinion, FollowButton } from './components';
import { NotFound } from './';
import './styles/UserProfile.css';
import api from '../utils/api';

class UserProfile extends Component {

   state = {};

   render() {
      return (
         !this.state.notfound ?
            <div id="user-profile">
               <section id="profile-header" className="profile-section sub-section">
                  <img src="https://i.pinimg.com/originals/77/b6/6f/77b66fa7469f75773d5eb443056f2f8f.jpg" alt="shop-logo" />
                  <div id="user-info">
                     <h2>ovotheshop</h2>
                     <h4>Aubrey Drake Graham</h4>
                  </div>
                  <div id="interaction-btns">
                     <button>Contactar</button>
                     <FollowButton user={this.props.match.params.username} history={this.props.history}/>
                  </div>
               </section>
               <section id="user-stats" className="profile-section sub-section">
                  <ShopStats />
               </section>
               <section id="user-products" className="profile-section">
                  <h3 className="section-title">Aquí puedes encontrar:</h3>
                  <div id="products">
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                     <ProductCard />
                  </div>
               </section>
               <section id="clients-opinions" className="profile-section sub-section">
                  <h3 className="section-title">Opiniones de clientes:</h3>
                  <Opinion />
                  <Opinion />
                  <Opinion />
                  <Opinion />
                  <Opinion />
                  <Link to="/">Ver todas</Link>
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
         });
      // api.get('/get-data/user')
   };


};

export default UserProfile;

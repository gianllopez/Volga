import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Opinion } from '../';
import { UserProfileContext } from '../../UserProfile';
import { isAuthenticated } from '../../../utils/routing-tools';
import './styles/OpinionsPresentation.css';

function OpinionsPresentation(props) {
   let { opinions, username, itsme } = useContext(UserProfileContext);
   return (
      <section id="clients-opinions" className={props.className}>
         {opinions.length ?
            <Fragment>
               <h3 className="section-title">Opiniones de clientes:</h3>
               {opinions.map((opinion, index) => 
                  <Opinion {...opinion} key={index}/>)}
            </Fragment> :
            <h3 className="blank-header">
               Este usuario no tiene opiniones de clientes.
            </h3>}
            <div>
               {opinions.length &&
                  isAuthenticated() &&
                     <Link to={`/${username}/opinions`}>Ver todas</Link>}
               {!itsme &&
                  <Link to={{
                     pathname: `/${username}/opinions/new`,
                     state: { exists: true }}}>Opinar</Link>}
            </div>
      </section>
   );
};

export default OpinionsPresentation;

// Terminado, nada más que revisar...
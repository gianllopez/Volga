import React from 'react';
import { Link } from 'react-router-dom';
import { snprofileicons } from '../../../assets/';
import './styles/SocialNetLink.css';

const SocialNetLink = (props) => {
   return (
      <Link to='/' className={`link ${props.name}-link`}>
         <img src={snprofileicons[props.name]} alt={`${props.name}-linkicon`}/>
      </Link>      
   );
};

export default SocialNetLink;

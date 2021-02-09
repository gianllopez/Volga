import React, { Component } from 'react';
import { ButtonLoader, TagsSelector } from './components';
import './styles/Explore.css';

class Explore extends Component {
   render() {
      return (
         <div id="explore-page">
            <h1>Etiquetas a explorar:</h1>
            <TagsSelector/>
            <ButtonLoader/>
         </div>
      );
   };
};

export default Explore;
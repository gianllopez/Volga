import React, { Component } from 'react';
import { ButtonLoader, TagsSelector } from './components';
import './styles/Explore.css';

class Explore extends Component {

   state = { querytags: [] };

   selectHandler = target => {
      let tag = target.innerText,
      { querytags } = this.state;
      if (querytags.includes(tag)) {
         querytags.splice(querytags.indexOf(tag), 1);
      } else {
         querytags.push(tag);
      };
      this.setState({ querytags });
   };

   render() {
      return (
         <div id="explore-page">
            <h1>Etiquetas a explorar:</h1>
            <TagsSelector
               onSelect={this.selectHandler}
               selectedTags={this.state.querytags}
            />
            <ButtonLoader/>
         </div>
      );
   };
};

export default Explore;
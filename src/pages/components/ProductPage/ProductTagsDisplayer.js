import React, { Component } from 'react';
import './styles/ProductTagsDisplayer.css';

class ProductTagsDisplayer extends Component {
   
   state = { displayed: false };

   tagsDisplayer = () => {
      this.setState(prevState => ({ displayed: !prevState.displayed }));
   };

   render() {
      let { displayed } = this.state;
      return (
         <div id="p-tags-displayer" onClick={this.tagsDisplayer}>
            <h4>Etiquetas {displayed ? "-" : "+"}</h4>
            {displayed && <p>{this.props.tags}</p>}
         </div>
      );
   };
   
};

export default ProductTagsDisplayer;
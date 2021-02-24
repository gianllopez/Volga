import React, { Component, Fragment } from 'react';
import './styles/ProductTagsDisplayer.css';

class ProductTagsDisplayer extends Component {

   state = { displayed: false };

   tagsDisplayer = () => {
      this.setState(prevState => ({ displayed: !prevState.displayed }));
   };

   render() {
      let { displayed } = this.state,
      { tags } = this.props;
      return (
         <div id="p-tags-displayer" onClick={this.tagsDisplayer}>
            <h4>Etiquetas {displayed ? "-" : "+"}</h4>
            <div id="displayed-tags">
               {displayed && (
                  tags ?
                     tags.map((tag, index) => 
                        <p key={index}>{tag}</p>) :
                        <p>Este producto no tiene etiquetas.</p>)}
            </div>
         </div>
      );
   };

};

export default ProductTagsDisplayer;
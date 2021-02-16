import React, { Component, Fragment } from 'react';
import './styles/ProductTagsDisplayer.css';

class ProductTagsDisplayer extends Component {

   state = { displayed: false };

   tagsDisplayer = () => {
      this.setState(prevState => ({ displayed: !prevState.displayed }));
   };

   render() {
      let { displayed } = this.state,
         { tags } = this.props,
         sortedtags = tags.sort((a, b) => b.length - a.length)
      return (
         <div id="p-tags-displayer" onClick={this.tagsDisplayer}>
            {tags ?
               <Fragment>
                  <h4>Etiquetas {displayed ? "-" : "+"}</h4>
                  <div id="displayed-tags">
                     {displayed && sortedtags.map((tag, index) =>
                        <p key={index}>{tag}</p>
                     )}
                  </div>
               </Fragment> :
               <p>Este producto no tiene etiquetas.</p>}
         </div>
      );
   };

};

export default ProductTagsDisplayer;
import React,{ Component } from 'react';
import uploadicon from '../../../assets/PostProduct/upload-icon.svg';
import closeicon from '../../../assets/PostProduct/close-img.svg';
import './styles/ImageUploaderButton.css';

class ImgUploaderButton extends Component {

   state = {
      loaded: false
   };

   trigger = () => {
      const querystr = `#btn-${this.props.index} > input[type="file"]`;
      document.querySelector(querystr).click();
   }

   render() {
      return (
         <div className="imguploader" id={`btn-${this.props.index}`} onClick={this.trigger}>
            <button type="button">
               <img src={uploadicon} alt="upload-icon"/>
            </button>
            <input
               type="file"
               accept=".png, .jpg, .jpeg"
               onChange={this.props.imageLoader}
               hidden
            />
            {this.state.loaded && (
               <img src={closeicon} onClick={this.props.removeHandler} alt="close-i"/>
            )}
         </div>
      );
   };

   componentDidUpdate() {
      let images = this.props.images || {};
      const btnimg = document.querySelector(`#btn-${this.props.index} > button > img`);
      const image = images[parseInt(this.props.index)];
      if (image) {
         btnimg.src = image;
         if (!this.state.loaded) {
            this.setState({ loaded: true });
         };
      } else {
         if (this.state.loaded) {
            this.setState({ loaded: false });
         };
      };
   };

};

export default ImgUploaderButton;

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
               onChange={this.props.onChange}
               hidden
            />
            {this.state.loaded && (
               <img src={closeicon} onClick={this.props.removeHandler}/>
            )}
         </div>
      );
   };

   componentDidUpdate() {
      let images = this.props.images || {};
      const JSX = document.querySelector(`#btn-${this.props.index}`);
      let btnimg = JSX.querySelector('button > img');
      let input = JSX.querySelector('input[type="file"]');
      if (input.value) {
         debugger
         btnimg.src = images[parseInt(this.props.index)];
         if (!this.state.loaded) {
            this.setState({ loaded: true });
         };
      };
   };

};

export default ImgUploaderButton;

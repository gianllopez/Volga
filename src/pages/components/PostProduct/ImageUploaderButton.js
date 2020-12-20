import React,{ Component } from 'react';
import uploadicon from '../../../assets/PostProduct/upload-icon.svg';
import closeicon from '../../../assets/PostProduct/close-img.svg';
import './styles/ImageUploaderButton.css';

class ImgUploaderButton extends Component {

   trigger = () => {
      const querystr = `#btn-${this.props.index} > input[type="file"]`;
      document.querySelector(querystr).click();
   }

   render() {
      return (
         <div className="imguploader" id={`btn-${this.props.index}`} onClick={this.trigger}>
            <button id="imgloaderbtn" type="button">
               <img src={uploadicon} alt="upload-icon"/>
            </button>
            <input
               type="file"
               accept=".png, .jpg, .jpeg"
               onInput={this.props.inputHandler}
               hidden
            />
         </div>
      );
   };
};

export default ImgUploaderButton;

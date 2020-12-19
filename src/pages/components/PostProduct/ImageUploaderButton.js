import React,{ Component } from 'react';
import uploadicon from '../../../assets/PostProduct/upload-icon.svg';
import closeicon from '../../../assets/PostProduct/close-img.svg';
import './styles/ImageUploaderButton.css';

class ImgUploaderButton extends Component {
   render() {
      return (
         <div className="imguploader-wrapper">
            <button className="imgloader-btn" type="button">
               <img src={uploadicon} alt="upload-icon"/>
            </button>
            <input
               type="file"
               name={`productimage${this.props.index}`}
               onInput={this.props.inputHandler}
               accept=".png, .jpg, .jpeg"
               hidden               
            />
         </div>
      );
   };
};

export default ImgUploaderButton;

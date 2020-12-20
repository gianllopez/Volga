import React,{ Component } from 'react';
import uploadicon from '../../../assets/PostProduct/upload-icon.svg';
import closeicon from '../../../assets/PostProduct/close-img.svg';
import './styles/ImageUploaderButton.css';

class ImgUploaderButton extends Component {
   
   index = this.props.index;
   
   loaderTrigger = () => document.querySelector(`.prodimg${this.index}`).click();
   
   render() {
      return (
         <div className="imguploader-wrapper" onClick={this.loaderTrigger}>
            <button id={`imgloaderbtn-${this.index}`} type="button">
               <img src={uploadicon} alt="upload-icon"/>
            </button>
            <input
               type="file"
               name={`prodimg${this.index}`}
               className={`prodimg${this.index}`}
               onInput={this.props.inputHandler}
               accept=".png, .jpg, .jpeg"
               hidden               
            />
         </div>
      );
   };

   componentDidUpdate() {
      const btn = document.querySelector(`#imgloaderbtn-${this.index}`);
      const input = btn.parentElement.querySelector('input');
      const imgs = this.props.imgs;
      if (input.value) {
         btn.querySelector('img').src = imgs[parseInt(this.index)];
      };
   };

};

export default ImgUploaderButton;

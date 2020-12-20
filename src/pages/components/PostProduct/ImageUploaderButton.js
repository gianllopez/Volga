import React,{ Component } from 'react';
import uploadicon from '../../../assets/PostProduct/upload-icon.svg';
import closeicon from '../../../assets/PostProduct/close-img.svg';
import './styles/ImageUploaderButton.css';

class ImgUploaderButton extends Component {
   
   state = { loaded: false };
   
   index = this.props.index;
   
   loaderTrigger = () => document.querySelector(`.prodimg${this.index}`).click();
   
   render() {
      return (
         <div className="imguploader-wrapper" onClick={this.loaderTrigger}>
            <button id={`imgloaderbtn-${this.index}`} type="button">
               <img src={uploadicon} alt="upload-icon"/>
               {this.state.loaded && (
                  <di className={`removebtn removebtn-${this.index}`}/>
               )}
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
      const images = this.props.loadedImages;
      if (input.value) {
         btn.querySelector('img').src = images[parseInt(this.index)];
         if (!this.state.loaded) {
            this.setState({ loaded: true });
         };
      };
   };

};

export default ImgUploaderButton;

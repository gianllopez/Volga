import React, { Component } from 'react';
import uploadicon from '../../../assets/PostProduct/upload-icon.svg';
import closeicon from '../../../assets/PostProduct/close-img.svg';
import successicon from '../../../assets/PostProduct/success-icon.svg';
import './styles/ImageUploaderButton.css';

class ImgUploaderButton extends Component {

   state = { loaded: false };

   clickTrigger = () => document.querySelector(`input[data-index="${this.props.index}"]`).click();

   render() {
      return (
         <div className={`imguploader img-${this.props.index}`}>
            <button type="button" onClick={this.clickTrigger}>
               <img src={this.state.loaded ? successicon : uploadicon} alt="upload-icon" />
            </button>
            <input
               type="file"
               data-index={this.props.index}
               accept=".png, .jpg, .jpeg"
               onChange={this.props.onChange}
               hidden
            />
            {this.state.loaded && <img src={closeicon} alt="close-i" />}
         </div>
      );
   };

   componentDidUpdate() {
      const JSX = this._reactInternalFiber.child.stateNode,
         input = JSX.querySelector('input');
      if (input.value && !this.state.loaded) {
         this.setState({ loaded: true },
            () => JSX.querySelector('img').style.width = '40%');
      };
   };

};

export default ImgUploaderButton;

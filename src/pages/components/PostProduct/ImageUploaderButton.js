import React from 'react';
import './styles/ImageUploaderButton.css';
import uploadicon from '../../../assets/PostProduct/upload-icon.svg';

const ImgUploaderButton = props => (   
   <button className="imgloader-btn" type="button" onClick={props.onClick}>
      <img src={uploadicon} alt="upload-icon"/>
   </button>
);

export default ImgUploaderButton;

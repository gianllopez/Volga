import React from 'react';
import './styles/ImageUploaderButton.css';

const ImgUploaderButton = props => (
   <button
      className="image-uploader-btn"
      type="button"
      onClick={props.onClick}
   />
);

export default ImgUploaderButton;

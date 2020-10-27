import React from 'react';
import './styles/Loader.css';

const Loader = props => (
    <div id='loader-wrapper' style={{width: props.width, height: props.height}}>
        <div id='loader' />
    </div>
);

export default Loader;

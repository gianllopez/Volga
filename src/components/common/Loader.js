import React from 'react';
import './styles/Loader.css';

const Loader = props => (
    <div id='loader-wrapper' style={props.style}>
        <div id='loader' />
    </div>
);

Loader.defaultProps = {
    style: {width: 110, height: 35}
};

export default Loader;

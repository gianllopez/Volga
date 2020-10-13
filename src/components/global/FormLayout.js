import React from 'react';
import './styles/FormLayout.css';

function FormLayout(props) {
    return (
        <form id='form-layout'>
            <div id="form-header">
                <img src={props.headerImg} alt='logup-hero'/>
                {props.headerTitle}                
            </div>
            <div id='entries'>
                {props.formEntries}
            </div>
        </form>
    );
};

export default FormLayout;
import React from 'react';
import './styles/FormLayout.css';

function FormLayout(props) {
    return (
        <form id='form-layout'>
            <div id="form-header">
                <img src={props.headerImg} alt='form-hero'/>
                {props.headerTitle}                
            </div>
            <div id='form-entries'>
                {props.formEntries}
            </div>
        </form>
    );
};

export default FormLayout;
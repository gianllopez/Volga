import React from 'react';
import './styles/FormLayout.css';

function FormLayout(props) {
    return (
        <form className='form-layout' id={props.formId} onSubmit={props.submitHandler}>
            <div id='form-header'>
                <img src={props.headerImg} alt='form-hero' />
                {props.headerTitle}
            </div>            
            <div id='form-entries'>{props.formEntries}</div>
        </form>
    );
}

export default FormLayout;

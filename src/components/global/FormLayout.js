import React from 'react';

function FormLayout(props) {
    return (
        <form className='form-layout' id={props.formId}>
            { props.children }
        </form>
    );
};

export default FormLayout;
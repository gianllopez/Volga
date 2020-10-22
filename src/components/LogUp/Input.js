import React from 'react';
import './styles/Input.css';

function Input(props) {

    return (
        <div className='input-wrapper'>
            <label htmlFor='password'>{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                onChange={props.onChange}
                maxLength={props.maxLength}
                // required
            />
            {Object.keys(props.errorsObject).includes(props.name) && (
                <span className='error-span'>
                    {props.errorsObject[props.name]}
                </span>
            )}
            
        </div>
    );
};

Input.defaultProps = {
    type: 'text',
    maxLength: '40',
    errorsObject: {}
}


export default Input;
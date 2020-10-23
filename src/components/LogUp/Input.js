import React, { Component } from 'react';
import './styles/Input.css';

class Input extends Component {
    
    isError = _ => Object.keys(this.props.errorsObject).includes(this.props.name)
    
    render() {
        return (
            <div className='input-wrapper' id={`${this.props.name}-input-wrapper`}>
                <label htmlFor='password'>{this.props.label}</label>
                <input
                    type={this.props.type}
                    name={this.props.name}
                    onChange={this.props.onChange}
                    maxLength={this.props.maxLength}
                    // required
                />
                {this.isError() && (
                    <span className='error-span'>
                        {this.props.errorsObject[this.props.name]}
                    </span>
                )}                
            </div>
        );
    };

    componentDidUpdate() {
        if (this.isError()) {
            let thisInputWrapper = document.querySelector(`#${this.props.name}-input-wrapper`);
            setTimeout(
                _ => thisInputWrapper.querySelector('span')
                    .classList.add('show-error-span'), 1)
        }
    }
};

Input.defaultProps = {
    type: 'text',
    maxLength: '40',
    errorsObject: {}
}

export default Input;
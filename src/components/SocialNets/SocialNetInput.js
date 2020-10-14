import React, { Component } from 'react';

import instagramIcon from '../../assets/SocialNets/instagram-icon.svg';
import facebookIcon from '../../assets/SocialNets/facebook-icon.svg';
import whatsappIcon from '../../assets/SocialNets/whatsapp-icon.svg';
import twitterIcon from '../../assets/SocialNets/twitter-icon.svg';
import otherIcon from '../../assets/SocialNets/other-icon.svg';
import checkIcon from '../../assets/SocialNets/check-icon.svg';

import './styles/SocialNetInput.css';

class SocialNetInput extends Component {
    icons = {
        instagram: instagramIcon,
        facebook: facebookIcon,
        whatsapp: whatsappIcon,
        twitter: twitterIcon,
        otra: otherIcon,
    };

    name = this.props.snName;

    Name = (str = this.name) => str.charAt(0).toUpperCase() + str.substring(1);

    render() {
        return (
            <div className='social-network'>
                <figure id='logo-wrapper'>
                    <img src={this.icons[this.name]} alt={`${this.name}-icon`} />
                </figure>
                <div id='div-line' />
                <div id='data-input'>
                    <input type='text' maxLength='30' placeholder={this.Name()} name={this.name} />
                    <img src={checkIcon} alt='check-icon' />
                </div>
                <h1>{this.Name()}</h1>
            </div>
        );
    }

    componentDidMount() {
        Object.entries(document.getElementsByClassName('social-network')).map((socialNet) => {
            const colors = {
                instagram: '#c32aa3',
                facebook: '#1877f2',
                whatsapp: '#25d366',
                twitter: '#1da1f2',
                otra: 'black',
            };

            socialNet[1].addEventListener('click', function () {
                let header = this.querySelector('h1');
                let dataInput = this.querySelector('#data-input');
                let input = this.querySelector('input');
                let checkBtn = this.querySelector('#data-input > img');
                let isFocused = input === document.activeElement;

                if (!isFocused) {
                    header.classList.toggle('header-anim');
                    dataInput.classList.toggle('data-input-anim');
                }

                checkBtn.addEventListener('click', function (event) {
                    event.stopPropagation();
                    let name = input.placeholder;
                    header.classList.remove('header-anim');
                    dataInput.classList.remove('data-input-anim');
                    let value = input.value;
                    header.innerText = value ? value : name;
                    header.style.color = value ? colors[name.toLowerCase()] : 'initial';
                });
            });
        });
    }
}

export default SocialNetInput;

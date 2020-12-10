import React, { Component } from 'react';
import checkIcon from '../../assets/SocialNets/check-icon.svg';
import {snicons} from '../../utils/assets-exports';
import './styles/SocialNetInput.css';

class SocialNetInput extends Component {

   name = this.props.name;

   Name = this.name.charAt(0).toUpperCase() + this.name.substring(1);

   render() {
      return (
         <div className='social-network'>
            <figure id='logo-wrapper'>
               <img src={snicons[this.name]} alt={`${this.name}-icon`}/>
            </figure>
            <div id='div-line'/>
            <div id='data-input'>
               <input
                  type='text'
                  maxLength='30'
                  placeholder={this.Name}
                  name={this.name}
                  autoComplete='off'
                  onChange={this.props.onChange}
               />
               <img src={checkIcon} alt='check-icon'/>
            </div>
            <h1>{this.Name}</h1>
         </div>
      );
   }

   componentDidMount() {

      const colors = {
         instagram: '#c32aa3',
         facebook: '#1877f2',
         whatsapp: '#25d366',
         twitter: '#1da1f2',
         pinterest: '#c8232c',
      };

      Object.entries(document.getElementsByClassName('social-network')).map(
         (socialNet) => {

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
                  header.style.color = value
                     ? colors[name.toLowerCase()]
                     : 'initial';
               });
            });
         },
      );
   }
}

export default SocialNetInput;

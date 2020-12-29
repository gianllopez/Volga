import checkicon from '../../assets/ShopLogo/check-icon.svg';

// The next function handles the SocialNetInput Component animations:

export const sncolors = {
   facebook: '#2D88FF',
   whatsapp: '#00E676',
   twitter: '#6CC9F3',
   email: '#FFCE00',
   pinterest: '#C8232C',
   email: '#FFC217'
};

export function SNInputAnimationSetter(element, elementChilds) {
   const colors = {
      instagram: '#C32AA3',
      ...sncolors
   };
   element.addEventListener('click', () => {
      const {
         header, dataInput,
         input, checkBtn
      } = elementChilds;
      if (input !== document.activeElement) {
         header.classList.toggle('header-anim');
         dataInput.classList.toggle('data-input-anim');
      };
      checkBtn.addEventListener('click', event => {
         event.stopPropagation();
         let name = input.placeholder !== 'Correo' ? input.placeholder : 'email';
         header.classList.remove('header-anim');
         dataInput.classList.remove('data-input-anim');
         let value = input.value;
         header.innerText = value ? value : name;
         header.style.color = value
            ? colors[name.toLowerCase()]
            : 'initial';
      });
   });
};

// The next function handles the Uploader Component animations:

export function successAnimationsTrigger(img, span) {
   img.style.animation = 'img-animation 1s';
   span.style.animation = 'span-animation 1s';
   setTimeout(() => {
      img.src = checkicon;
      img.parentElement.style.backgroundColor = '#00E077';
      span.innerText = 'Logo cargado';
      span.classList.add('on-success');
   }, 500);
};

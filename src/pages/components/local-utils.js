import checkicon from '../../assets/ShopLogo/check-icon.svg';

// The next function handles the ContactInput Component animations:

export const sncolors = {
   facebook: '#2D88FF',
   whatsapp: '#00E676',
   twitter: '#6CC9F3',
   email: '#FFC217',
   pinterest: '#C8232C',
};

export function ContactNetworkInputAnimationSetter(element, elementChilds) {
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
      const onFilledField = () => {
         let name = input.placeholder !== 'Correo' ? input.placeholder : 'email';
         header.classList.remove('header-anim');
         dataInput.classList.remove('data-input-anim');
         let value = input.value;
         header.innerText = value ? value : name;
         header.style.color = value
            ? colors[name.toLowerCase()]
            : 'initial';
         const fsizeOnOflow = {
            instagram: 16,
            facebook: 13,
            email: 10
         };
         if (header.offsetHeight > 75) {
            header.style.fontSize = `${fsizeOnOflow[name.toLowerCase()]}px`;
         };         
      };
      checkBtn.addEventListener('click', event => {
         event.stopPropagation();
         onFilledField()
      });
      input.addEventListener('keydown', event => {
         if (event.keyCode === 13) {
            onFilledField();
         };
      })
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

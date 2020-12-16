// The next function triggers the SocialNetInput animation:

function animationSetter(element) {
   const colors = {
      instagram: '#c32aa3',
      facebook: '#1877f2',
      whatsapp: '#25d366',
      twitter: '#1da1f2',
      pinterest: '#c8232c',
   };
   element[1].addEventListener('click', function () {
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
};

export default animationSetter;

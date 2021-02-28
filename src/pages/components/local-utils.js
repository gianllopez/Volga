import checkicon from '../../assets/UserProfilePicture/check-icon.svg';

// The next function handles the ContactInput Component animations:

const sncolors = {
   instagram: '#C32AA3',
   facebook: '#2D88FF',
   whatsapp: '#00E676',
   twitter: '#6CC9F3',
   email: '#FFC217',
   linkedin: '#0A66C2'
};

// The next function handles the Uploader Component animations:

function successAnimationsTrigger(img, span) {
   img.style.animation = 'img-animation 1s';
   span.style.animation = 'span-animation 1s';
   setTimeout(() => {
      img.src = checkicon;
      img.parentElement.style.backgroundColor = '#00E077';
      span.innerText = 'Foto cargada';
      span.classList.add('on-success');
   }, 500);
};

export { sncolors, successAnimationsTrigger };

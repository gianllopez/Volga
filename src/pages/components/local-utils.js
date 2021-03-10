function ratingBackground(rating) {
   let bgColor = '#FF5722';
   if (rating >= 5 && rating <= 8) {
      bgColor = '#ffcd29';
   } else if (rating > 8) {
      bgColor = '#6dcc6d';
   };
   return bgColor;
};

// The next function handles the ContactInput Component animations:

const CN_COLORS = {
   instagram: '#C32AA3',
   facebook: '#2D88FF',
   whatsapp: '#00E676',
   twitter: '#6CC9F3',
   email: '#FFC217',
   linkedin: '#0A66C2'
};

export { ratingBackground, CN_COLORS };

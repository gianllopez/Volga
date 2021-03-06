function blankForm(data, allowfields = []) {
   let valid = true;
   const formData = Object.entries(data);
   let errors = {};
   for (let x of formData) {
      if (!x[1] && !allowfields.includes(x[0])) {
         errors[x[0]] = 'Este campo es requerido.';
         valid = false;
      }
   };
   return { valid, errors };
};

function changeValidator(event, length=0, changeHandler) {
   let isMobile = matchMedia('(max-width: 768px)').matches,
   { target } = event;
   if (isMobile) {
      let { value } = target;
      if (value.length > length) {
         target.value = value.substring(0, length)
      };
   };
   if (changeHandler) {
      changeHandler(event)};
   return target.value;
};

export { blankForm, changeValidator };
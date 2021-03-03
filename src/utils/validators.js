export function noBlankValidator(data, allowfields = []) {
   let isValid = true;
   const formData = Object.entries(data);
   let errors = {};
   for (let x of formData) {
      if (!x[1] && !allowfields.includes(x[0])) {
         errors[x[0]] = 'Este campo es requerido.';
         isValid = false;
      }
   };
   return { isValid, errors };
};
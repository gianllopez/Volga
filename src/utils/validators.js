export function noBlankValidator(data, alloweds) {
   let isValid = true;
   const formData = Object.entries(data);
   let errors = {};
   for (let x of formData) {
      if (!x[1] && !(alloweds || []).includes(x[0])) {
         errors[x[0]] = 'Este campo es requerido.'
         isValid = false
      }
   };
   return {isValid, errors};
};

export function logUpFormValidator(data, alloweds) {
   return new Promise((resolve, reject) => {
      let {isValid, errors} = noBlankValidator(data, alloweds),
      {password, confirmpwd} = data;
      if (!isValid) {
         reject(errors);
      };
      if (password !== confirmpwd) {
         let msg = 'Las contraseñas no coinciden.';
         errors.password = msg;
         errors.confirmpwd = msg;
         reject(errors);
      } else {
         resolve(isValid);
      };
   });
};

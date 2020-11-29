
// no empty fields validator:
function formValidator(data, onSuccess, onError) {

   let invalidForm;
   const formData = Object.entries(data);
   let fieldsErrors = {};

   for (let x of formData) {
      if (!x[1]) {
         fieldsErrors[x[0]] = 'Este campo es requerido.'
         invalidForm = true
      }
   };

   invalidForm ? onError(fieldsErrors) : onSuccess();

}

export default formValidator;
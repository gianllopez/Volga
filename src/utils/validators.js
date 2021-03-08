import { ModalDisplayer } from "../pages/components";

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

function imagesFormat(files) {
   let formats = ['image/png', 'image/jpeg', 'image/jpg'],
   validFormat = Array.from(files).every((file) => formats.includes(file.type));
   if (!validFormat) {
      ModalDisplayer({
         type: 'CUSTOM',
         title: 'Archivo(s) inválido(s)',
         message: 'Verifica que los archivos que cargaste sean imágenes (png, jpg).'
      });
   } else {
      return true;
   };
};

export { blankForm, changeValidator, imagesFormat };
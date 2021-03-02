// Here i got the tools that i'm going to use in the project:

const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1); 

function changeValidator(event, length=0, changeHandler) {
   let isMobile = matchMedia('(max-width: 768px)').matches,
   { target } = event;
   if (isMobile) {
      let { value } = target;
      if (value.length > length) {
         target.value = value.substring(0, length)
      };
   };
   changeHandler(event);
   return target.value;
};

export { capitalize, changeValidator };

/* REVISADO Y NO HAY MÁS QUE RESUMIR: 27/02/2021 */

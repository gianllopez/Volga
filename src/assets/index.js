// ---------- ContactNetInput (Component) Imports ---------- //
import instagramLogo from './UserContact/instagram-icon.svg';
import facebookLogo from './UserContact/facebook-icon.svg';
import whatsappLogo from './UserContact/whatsapp-icon.svg';
import twitterLogo from './UserContact/twitter-icon.svg';
import emailLogo from './UserContact/email-icon.svg';
import pinterestLogo from './UserContact/pinterest-icon.svg';

// ---------- ShopTags (Page) Imports ---------- //
import vehicles_icon from './ShopTags/tags-icons/car.svg';
import foods_icon from './ShopTags/tags-icons/food-basket.svg';
import pets_icon from './ShopTags/tags-icons/dog.svg';
import antiques_icon from './ShopTags/tags-icons/african.svg';
import arts_icon from './ShopTags/tags-icons/art.svg';
import stationery_icon from './ShopTags/tags-icons/printer.svg';
import beauty_icon from './ShopTags/tags-icons/beauty.svg';
import ticketsales_icon from './ShopTags/tags-icons/ticket.svg';
import cameras_icon from './ShopTags/tags-icons/camera.svg';
import cellphones_icon from './ShopTags/tags-icons/cellphone.svg';
import computing_icon from './ShopTags/tags-icons/laptop.svg';
import consoles_icon from './ShopTags/tags-icons/console.svg';
import sports_icon from './ShopTags/tags-icons/basket.svg';
import homeappliances_icon from './ShopTags/tags-icons/home-appliances.svg';
import constructools_icon from './ShopTags/tags-icons/bricks.svg';
import estates_icon from './ShopTags/tags-icons/house.svg';
import musicinstruments_icon from './ShopTags/tags-icons/guitar.svg';
import toys_icon from './ShopTags/tags-icons/brick-toys.svg';
import reading_icon from './ShopTags/tags-icons/books.svg';
import multimedia_icon from './ShopTags/tags-icons/multimedia.svg';
import jewelry_icon from './ShopTags/tags-icons/rings.svg';
import clothes_icon from './ShopTags/tags-icons/clothes.svg';
import services_icon from './ShopTags/tags-icons/services.svg';
import botanic_icon from './ShopTags/tags-icons/plant.svg'

// ---------- ShopProfile (Page) Imports ---------- //
import starIcon from './ShopProfile/star.svg';
import followerIcon from './ShopProfile/follower.svg';
import productIcon from './ShopProfile/product.svg';

// ---------- ContactNetInput (Component) Exports ---------- //
export const contact_icons = {
   instagram: instagramLogo,
   facebook: facebookLogo,
   whatsapp: whatsappLogo,
   twitter: twitterLogo,
   email: emailLogo,
   pinterest: pinterestLogo
};

// ---------- ShopTags (Page) Exports ---------- //
export const tagsProps = Object.entries({
   'Vehículos': vehicles_icon,
   'Alimentos': foods_icon,
   'Mascotas': pets_icon,
   'Antigüedades': antiques_icon,
   'Arte': arts_icon,
   'Papelería': stationery_icon,  
   'Venta de Plantas': botanic_icon,
   'Belleza': beauty_icon,
   'Boletas para espectáculos': ticketsales_icon,
   'Cámaras': cameras_icon,
   'Celulares': cellphones_icon,
   'Computación': computing_icon,
   'Consolas & Videojuegos': consoles_icon,
   'Deportes & Fitness': sports_icon,
   'Enseres': homeappliances_icon,
   'Herramientas & Materiales': constructools_icon,
   'Hogares e Inmuebles': estates_icon,
   'Instrumentos musicales': musicinstruments_icon,
   'Juegos & Juguetes': toys_icon,
   'Libros, Revistas & Comics': reading_icon,
   'Música, Películas & Series': multimedia_icon,   
   'Joyas': jewelry_icon,
   'Ropa & Accesorios': clothes_icon,
   'Prestación de Servicios': services_icon
});

// ---------- ShopProfile (Page) Exports ---------- //
export const statsicons = {
   rating: starIcon,
   followers: followerIcon,
   products: productIcon
};

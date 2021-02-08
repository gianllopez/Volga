// ---------- ContactNetInput (Component) Imports ---------- //
import instagramLogo from './ContactNetworks/instagram-icon.svg';
import facebookLogo from './ContactNetworks/facebook-icon.svg';
import whatsappLogo from './ContactNetworks/whatsapp-icon.svg';
import twitterLogo from './ContactNetworks/twitter-icon.svg';
import emailLogo from './ContactNetworks/email-icon.svg';
import linkedinLogo from './ContactNetworks/linkedin-icon.svg';

// ---------- UserTags (Page) Imports ---------- //
import vehicles_icon from './UserTags/tags-icons/car.svg';
import foods_icon from './UserTags/tags-icons/food-basket.svg';
import pets_icon from './UserTags/tags-icons/dog.svg';
import antiques_icon from './UserTags/tags-icons/african.svg';
import arts_icon from './UserTags/tags-icons/art.svg';
import stationery_icon from './UserTags/tags-icons/printer.svg';
import beauty_icon from './UserTags/tags-icons/beauty.svg';
import ticketsales_icon from './UserTags/tags-icons/ticket.svg';
import cameras_icon from './UserTags/tags-icons/camera.svg';
import cellphones_icon from './UserTags/tags-icons/cellphone.svg';
import computing_icon from './UserTags/tags-icons/laptop.svg';
import consoles_icon from './UserTags/tags-icons/console.svg';
import sports_icon from './UserTags/tags-icons/basket.svg';
import homeappliances_icon from './UserTags/tags-icons/home-appliances.svg';
import constructools_icon from './UserTags/tags-icons/bricks.svg';
import estates_icon from './UserTags/tags-icons/house.svg';
import musicinstruments_icon from './UserTags/tags-icons/guitar.svg';
import toys_icon from './UserTags/tags-icons/brick-toys.svg';
import reading_icon from './UserTags/tags-icons/books.svg';
import multimedia_icon from './UserTags/tags-icons/multimedia.svg';
import jewelry_icon from './UserTags/tags-icons/rings.svg';
import clothes_icon from './UserTags/tags-icons/clothes.svg';
import services_icon from './UserTags/tags-icons/services.svg';
import botanic_icon from './UserTags/tags-icons/plant.svg'

// ---------- ShopProfile (Page) Imports ---------- //
import starIcon from './UserProfile/star.svg';
import followerIcon from './UserProfile/follower.svg';
import productIcon from './UserProfile/product.svg';

// ---------- ContactNetInput (Component) Exports ---------- //
export const cn_icons = {
   instagram: instagramLogo,
   facebook: facebookLogo,
   whatsapp: whatsappLogo,
   twitter: twitterLogo,
   email: emailLogo,
   linkedin: linkedinLogo
};

// ---------- UserTags (Page) Exports ---------- //
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

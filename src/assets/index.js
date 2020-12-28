// ---------- SocialNetInput (Component) Imports ---------- //
import instagramLogo from './SocialNets/instagram-icon.svg';
import facebookLogo from './SocialNets/facebook-icon.svg';
import whatsappLogo from './SocialNets/whatsapp-icon.svg';
import twitterLogo from './SocialNets/twitter-icon.svg';
import emailLogo from './SocialNets/email-icon.svg';

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
import instagramIcon from './ShopProfile/social-networks/instagram.svg';
import facebookIcon from './ShopProfile/social-networks/facebook.svg';
import whatsappIcon from './ShopProfile/social-networks/whatsapp.svg';
import twitterIcon from './ShopProfile/social-networks/twitter.svg';
import pinterestIcon from './ShopProfile/social-networks/pinterest.svg';

// ---------- SocialNetInput (Component) Exports ---------- //
export const snicons = {
   instagram: instagramLogo,
   facebook: facebookLogo,
   whatsapp: whatsappLogo,
   twitter: twitterLogo,
   email: emailLogo
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

export const snprofileicons = {
   instagram: instagramIcon,
   facebook: facebookIcon,
   whatsapp: whatsappIcon,
   twitter: twitterIcon,
   pinterest: pinterestIcon
}

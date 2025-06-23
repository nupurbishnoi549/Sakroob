import tvIcon from '../assets/images/svg/tv.svg';
import smartwatchIcon from '../assets/images/svg/smartwatch.svg';
import monitorsIcon from '../assets/images/svg/monitors.svg';
import gameIcon from '../assets/images/svg/game.svg';
import storageIcon from '../assets/images/svg/storage.svg';
import graphicIcon from '../assets/images/svg/graphic-card.svg';
import heroBg1 from '../assets/images/png/hero-img.png'
import heroBg2 from '../assets/images/png/hero-img.png'
import expressDelivery from '../assets/images/svg/express-delivery.svg';
import easyReturn from '../assets/images/svg/easy-return.svg';
import supportIcon from '../assets/images/svg/support.svg';
import premiumWarranty from '../assets/images/svg/premium.svg';
import specialGift from '../assets/images/svg/special-gift.svg';
import testimonialImg from '../assets/images/png/william-gate-img.png'
import testimonialImg2 from '../assets/images/png/darrell-img.png'


export const CATEGORY_DATA = [
    { id: 1, title: "Televisions", icon: tvIcon },
    { id: 2, title: "Smartwatch", icon: smartwatchIcon },
    { id: 3, title: "Monitors", icon: monitorsIcon },
    { id: 4, title: "Game", icon: gameIcon },
    { id: 5, title: "Storage (SSD)", icon: storageIcon },
    { id: 6, title: "Graphic Card", icon: graphicIcon },
];

export const HERO_SLIDES = [
    {
        id: 1,
        heading: 'Where Tinkerers Bring Ideas Alive',
        text: 'Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.',
        img: heroBg1,
    },
    {
        id: 2,
        heading: 'Make. Test. Repeat.',
        text: 'From concept to creation, unleash your tech skills with tools that inspire.',
        img: heroBg2,
    },
];

export const FEATURES_LIST = [
    {
        icon: expressDelivery,
        title: 'EXPRESS Delivery',
       text: 'Order Now',
    },
    {
        icon: easyReturn,
        title: 'Easy Return',
       text: '30 days return',
    },
    {
        icon: supportIcon,
        title: '24/7 Support',
       text: 'Premium Services',
    },
    {
        icon: premiumWarranty,
        title: 'Premium Warranty',
       text: 'Up to 2 years',
    },
    {
        icon: specialGift,
        title: 'Best Special Gift',
       text: 'For Order',
    },
];

export const TESTIMONIALS_DATA = [
    {
        title: "William Gate",
        role: "CEO",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...",
        image: testimonialImg,
    },
    {
        title: "Darrell Steward",
        role: "Manager",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...",
        image: testimonialImg2,
    },
];

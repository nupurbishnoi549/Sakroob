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
import testimonialImg from '../assets/images/png/william-gate-img.png';
import testimonialImg2 from '../assets/images/png/darrell-img.png';
import sensorImg from '../assets/images/png/sensor.png';
import pcPartsImg from '../assets/images/png/pc-parts.png';
import diyImg from '../assets/images/png/diy.png';
import cablesImg from '../assets/images/png/cables.png';
import gamingImg from '../assets/images/png/gaming.png';
import raspberryImg from '../assets/images/png/raspberry.png';
import user from '../assets/images/svg/user.svg';
import wishlist from '../assets/images/svg/wishlist.svg';
import cart from '../assets/images/svg/cart.svg';
import profile from '../assets/images/svg/profile.svg';
import facebook from '../assets/images/svg/facebook.svg';
import instagram from '../assets/images/svg/instagram.svg'
import twitter from '../assets/images/svg/twitter.svg'
import youtube from '../assets/images/svg/youtube.svg'


export const NAV_ITEMS = [
    {
        label: 'Categories',
    },
    {
        label: 'PC Products',
        hasDropdown: true,
        dropdown: ['Standard PC Components', 'Reference Earlier Examples'],
    },
    {
        label: 'Services',
        hasDropdown: true,
        dropdown: ['DIY Services'],
    },
    {
        label: 'Support',
        hasDropdown: true,
        dropdown: ['FAQ’s', 'Returns', 'Contact'],
    },
    { label: 'About' },
    { label: 'Blog' },
    { label: 'Contact' },
];

export const NAVBAR_ICONS = [
    { alt: 'User', icon: user },
    { alt: 'Wishlist', icon: wishlist },
    { alt: 'Cart', icon: cart },
    { alt: 'Profile', icon: profile },
];
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

export const SHOP_DATA = [
    {
        title: 'Sensors & Modules',
        image: sensorImg,
        bgColor: '#DCEEFF',
    },
    {
        title: 'Custom PC Parts',
        image: pcPartsImg,
        bgColor: '#F2F7FC',
    },
    {
        title: 'DIY Tools',
        image: diyImg,
        bgColor: '#EFEFEF',
    },
    {
        title: 'Cables & Connectors',
        image: cablesImg,
        bgColor: '#F6FAFC',
    },
    {
        title: 'Gaming Peripherals',
        image: gamingImg,
        bgColor: '#F2F1EE',
    },
    {
        title: 'Raspberry Pi Kits',
        image: raspberryImg,
        bgColor: '#DCEEFF',
    },
];

export const NAV_LINKS = [
    { label: "Shipping", href: "#" },
    { label: "Warranty", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
];

export const SOCIALS = [
    { alt: "Facebook", href: "#", icon: facebook },
    { alt: "Instagram", href: "#", icon: instagram },
    { alt: "X", href: "#", icon: twitter },
    { alt: "YouTube", href: "#", icon: youtube },
];

export const LEGAL_LINKS = [
    { label: "Term of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
];


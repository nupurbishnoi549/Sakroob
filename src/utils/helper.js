import {
    TvIcon, SmartwatchIcon, MonitorsIcon, GameIcon, StorageIcon, GraphicIcon,
    ExpressDeliveryIcon, EasyReturnIcon, SupportIcon, PremiumWarrantyIcon,
    SpecialGiftIcon, User, Wishlist, Cart, Profile, FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon
} from './Icons';
import heroBg1 from '../assets/images/png/hero-img.png'
import testimonialImg from '../assets/images/png/william-gate-img.png';
import testimonialImg2 from '../assets/images/png/darrell-img.png';
import sensorImg from '../assets/images/png/sensor.png';
import pcPartsImg from '../assets/images/png/pc-parts.png';
import diyImg from '../assets/images/png/diy.png';
import cablesImg from '../assets/images/png/cables.png';
import gamingImg from '../assets/images/png/gaming.png';
import raspberryImg from '../assets/images/png/raspberry.png';
import gamingChair from '../assets/images/png/gaming-chair.png';
import wirelessRouter from '../assets/images/png/wireless-router.png';
import gamingPc from '../assets/images/png/gaming-pc.png';
import ratingImage from '../assets/images/svg/star.svg';
import blogImg1 from '../assets/images/png/blog-img1.png';
import blogImg2 from '../assets/images/png/blog-img2.png';
import blogImg3 from '../assets/images/png/blog-img3.png';
import blogImg4 from '../assets/images/png/blog-img4.png';
import pcCase from '../assets/images/png/pc-case.png';
import getForce from '../assets/images/png/get-force.png';
import fan from '../assets/images/png/fan.png';

export const NAV_ITEMS = [
    {
        label: 'Categories',
        to: '#categories',
    },
    {
        label: 'PC Products',
        hasDropdown: true,
        dropdown: [
            { label: 'Standard PC Components', to: '#standard-pc' },
            { label: 'Reference Earlier Examples', to: '#reference' },
        ],
    },
    {
        label: 'Services',
        hasDropdown: true,
        dropdown: [{ label: 'DIY Services', to: '#diy-services' }],
    },
    {
        label: 'Support',
        hasDropdown: true,
        dropdown: [
            { label: 'FAQ’s', to: '#faqs' },
            { label: 'Returns', to: '#returns' },
            { label: 'Contact', to: '#contact' },
        ],
    },
    { label: 'About', to: '#about' },
    { label: 'Blog', to: '#blog' },
    { label: 'Contact', to: '#contact' },
];

export const NAVBAR_ICONS = [
    { alt: 'User', icon: User },
    { alt: 'Wishlist', icon: Wishlist },
    { alt: 'Cart', icon: Cart, to: '/cart' },
    { alt: 'Profile', icon: Profile },
];
export const CATEGORY_DATA = [
    { id: 1, title: "Televisions", icon: TvIcon },
    { id: 2, title: "Smartwatch", icon: SmartwatchIcon },
    { id: 3, title: "Monitors", icon: MonitorsIcon },
    { id: 4, title: "Game", icon: GameIcon },
    { id: 5, title: "Storage (SSD)", icon: StorageIcon },
    { id: 6, title: "Graphic Card", icon: GraphicIcon },
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
        img: heroBg1,
    },
    {
        id: 3,
        heading: 'Where Tinkerers Bring Ideas Alive',
        text: 'Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.',
        img: heroBg1,
    },
    {
        id: 4,
        heading: 'Make. Test. Repeat.',
        text: 'From concept to creation, unleash your tech skills with tools that inspire.',
        img: heroBg1,
    },
    {
        id: 5,
        heading: 'Where Tinkerers Bring Ideas Alive',
        text: 'Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers.',
        img: heroBg1,
    },
];
export const BLOG_DATA = [
    {
        title: 'How to Build a Mini NAS',
        desc: 'Learn to build your own network storage system with simple components.',
        cta: 'Read Guide',
        img: blogImg1,
        bg: 'bg-[#F0F0F0]',
    },
    {
        title: '5 Tools Every Maker Should Own',
        desc: 'The essential toolkit for every DIY electronics enthusiast.',
        cta: 'Read Article',
        img: blogImg2,
        bg: 'bg-[#E8F2FF]',
    },
    {
        title: 'Inside a Raspberry Pi Retro Console',
        desc: 'Step-by-step log of building a retro game machine.',
        cta: 'View Build Log',
        imgLeft: blogImg3,
        imgRight: blogImg4,
        bg: 'bg-[#D6ECFF]',
        fullWidth: true,
    },
];
export const FEATURES_LIST = [
    {
        icon: ExpressDeliveryIcon,
        title: 'EXPRESS Delivery',
        text: 'Order Now',
    },
    {
        icon: EasyReturnIcon,
        title: 'Easy Return',
        text: '30 days return',
    },
    {
        icon: SupportIcon,
        title: '24/7 Support',
        text: 'Premium Services',
    },
    {
        icon: PremiumWarrantyIcon,
        title: 'Premium Warranty',
        text: 'Up to 2 years',
    },
    {
        icon: SpecialGiftIcon,
        title: 'Best Special Gift',
        text: 'For Order',
    },
];
export const BESTSELLERS_DATA = [
    {
        img: gamingPc,
        title: 'Vortex Gaming PC',
        description: 'Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.',
        price: '₹ 12956.00',
        rating: ratingImage,
        slug: 'vortex-gaming-pc',
    },
    {
        img: wirelessRouter,
        title: 'D-Link ADSL Wireless Router DSL2790U',
        description: 'Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.',
        price: '₹ 15956.00',
        rating: ratingImage,
        slug: 'd-link-adsl-wireless-router-dsl2790u',
    },
    {
        img: gamingChair,
        title: 'Gaming Chair',
        description: 'Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.',
        price: '₹ 23956.00',
        rating: ratingImage,
        slug: 'gaming-chair',
    },
    {
        img: wirelessRouter,
        title: 'D-Link ADSL Wireless Router DSL2790U',
        description: 'Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.',
        price: '$179.99',
        rating: ratingImage,
        slug: 'd-link-adsl-wireless-router-dsl2790u-2',
    },
];
export const POPULAR_PRODUCT = [
    {
        img: pcCase,
        title: 'NZXT H510 Elite PC Case',
        description: 'Tempered glass case with clean cable management and optimized airflow.',
        price: '$249.99',
        rating: ratingImage,
    },
    {
        img: getForce,
        title: 'MSI GeForce RTX 4070 GPU',
        description: 'Ray tracing, AI-powered DLSS, and ultra-performance — redefine how you game.',
        price: '$349.99',
        rating: ratingImage,
    },
    {
        img: fan,
        title: 'Gaming fan',
        description: 'Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.',
        price: '$259.99',
        rating: ratingImage,
    },
];

export const TESTIMONIALS_DATA = [
    {
        title: "William Gate",
        role: "CEO",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,",
        image: testimonialImg,
    },
    {
        title: "Darrell Steward",
        role: "Manager",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,",
        image: testimonialImg2,
    },
    {
        title: "John Doe",
        role: "Designer",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,",
        image: testimonialImg,
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
        bgColor: '#EEF4FB',
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
    { alt: "Facebook", href: "https://www.facebook.com/", icon: FacebookIcon },
    { alt: "Instagram", href: "https://www.instagram.com/", icon: InstagramIcon },
    { alt: "X", href: "https://twitter.com/", icon: TwitterIcon }, // formerly Twitter
    { alt: "YouTube", href: "https://www.youtube.com/", icon: YoutubeIcon },
];
export const LEGAL_LINKS = [
    { label: "Term of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
];
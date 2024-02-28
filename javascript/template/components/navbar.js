// Mostra menù a tendina Nav
const toggleMenu = (id) => {
    const menu = document.querySelector(id);
    menu.classList.toggle('visible');
    menu.classList.toggle('invisible');
    menu.classList.toggle('pointer-events-none');
    menu.classList.toggle('pointer-events-auto');
};

const addMenuHoverListeners = (elementId, menuId) => {
    const element = document.getElementById(elementId);
    element.addEventListener('mouseover', () => toggleMenu(menuId));
    element.addEventListener('mouseout', () => toggleMenu(menuId));
};

addMenuHoverListeners('trade', '#tradeMenu');
addMenuHoverListeners('earn', '#earnMenu');
addMenuHoverListeners('game', '#gameMenu');
addMenuHoverListeners('NFT', '#NFTMenu');
addMenuHoverListeners('threeDot', '#threeDotMenu');

// Mostra riquadro violetto Nav
const toggleMenuChangeColor = (id) => {
    const menu = document.querySelector(id);
    menu.classList.toggle('bg-[#353547]');
    menu.classList.toggle('rounded-2xl');
};

const showBgNav = (id) => toggleMenuChangeColor(id);

const hideBgNav = (id) => toggleMenuChangeColor(id);

// Array di ID dei menu e funzioni associate
const leftNavItems = [
    { id: '#tradeBgNav' },
    { id: '#earnBgNav' },
    { id: '#gameBgNav' },
    { id: '#threeBgNav' }
];

leftNavItems.forEach(item => {
    const { id } = item;
    const menuItem = document.querySelector(id);
    menuItem.addEventListener('mouseover', showBgNav.bind(null, id));
    menuItem.addEventListener('mouseout', hideBgNav.bind(null, id));
});

// Mostra cambio colore Menù
const toggleBgMenu = (id) => {
    const menu = document.querySelector(id);
    menu.classList.toggle('bg-[#353547]'); 
};

// Array di ID dei menu e funzioni associate
const menuItems = [
    { id: '#swap', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#liquidity', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#perpetual', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#bridge', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#buy', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#trading', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#farms', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#pools', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#positionManager', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#gamingMarketplace', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#prediction', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#lottery', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#pottery', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#info', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#affiliateProgram', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#blog', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#docs ', show: toggleBgMenu, hide: toggleBgMenu },
];

// Assegna gli eventi a ciascun elemento del menu
menuItems.forEach(item => {
    const { id, show, hide } = item;
    const menuItem = document.querySelector(id);
    menuItem.addEventListener('mouseover', show.bind(null, id));
    menuItem.addEventListener('mouseout', hide.bind(null, id));
});


// Mostra Menù lingue
const toggleLanguage = (id) => {
    menu = document.querySelector(id);
    menu.classList.toggle('opacity-0'); 
    menu.classList.toggle('opacity-100'); 
    menu.classList.toggle('pointer-events-none'); 
    menu.classList.toggle('pointer-events-auto');
    menu.classList.toggle('overflow-hidden');
    menu.classList.toggle('overflow-y-auto');
};

const addLanguageHoverListeners = (elementId, menuId) => {
    const element = document.getElementById(elementId);
    element.addEventListener('mouseover', () => toggleLanguage(menuId));
    element.addEventListener('mouseout', () => toggleLanguage(menuId));
};

addLanguageHoverListeners('languageSVG', '#languageButton');

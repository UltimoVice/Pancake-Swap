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

addMenuHoverListeners('cryptoSel', '#cryptoMenu');


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
    { id: '#docs', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#bnbChains', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#ethereum', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#polygon', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#zkSync', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#arbitrum', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#linea', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#base', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#opBNB', show: toggleBgMenu, hide: toggleBgMenu },
    { id: '#aptos', show: toggleBgMenu, hide: toggleBgMenu },
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
addLanguageHoverListeners('languageSVG2', '#languageButton2');


// Cambia colore bottoni lingue
const colorLanguage = (id) => {
    const menu = document.querySelector(id);
    menu.classList.toggle('text-[#A9A5B2]'); 
    menu.classList.toggle('text-colorWhite'); 
    menu.classList.toggle('pointer-events-auto');
    menu.classList.toggle('cursor-pointer');
};

const languageItems = [
    { id: '#lingua1', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua3', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua4', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua5', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua6', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua7', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua8', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua9', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua10', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua11', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua12', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua13', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua14', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua15', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua16', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua17', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua18', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua19', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua20', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua21', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua22', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua23', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua24', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua25', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua26', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua27', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua28', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua1-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua2-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua3-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua4-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua5-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua6-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua7-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua8-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua9-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua10-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua11-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua12-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua13-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua14-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua15-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua16-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua17-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua18-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua19-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua20-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua21-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua22-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua23-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua24-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua25-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua26-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua27-2', show: colorLanguage, hide: colorLanguage },
    { id: '#lingua28-2', show: colorLanguage, hide: colorLanguage },
];


languageItems.forEach(item => {
    const { id, show, hide } = item;
    const languageItem = document.querySelector(id);
    languageItem.addEventListener('mouseover', show.bind(null, id));
    languageItem.addEventListener('mouseout', hide.bind(null, id));
});

// Mostra e nascondi finestra settings
const toggleSettings = (id) => {
    const menu = document.querySelector(id);
    if (menu.classList.contains('fade-in')) {
        menu.classList.remove('fade-in');
        menu.classList.add('fade-out');
        menu.classList.add('pointer-events-none');
        menu.classList.remove('pointer-events-auto');
    } else if (menu.classList.contains('fade-out')) {
        menu.classList.remove('fade-out');
        menu.classList.add('pointer-events-auto');
    } else {
        menu.classList.add('fade-in');
        menu.classList.remove('pointer-events-none');
        menu.classList.add('pointer-events-auto');
    }
};


const addSettingsClick = (elementId, menuId) => {
    const element = document.getElementById(elementId);
    element.addEventListener('click', () => toggleSettings(menuId));
};

addSettingsClick('openSettings', '#windowSettings');
addSettingsClick('closeSettings', '#windowSettings');
addSettingsClick('closeBgSettings', '#windowSettings');


// Mostra e nascondi finestra notifications
const toggleNotification = (id) => {
    const menu = document.querySelector(id);
    menu.classList.toggle('visible');
    menu.classList.toggle('invisible');
    menu.classList.toggle('pointer-events-none');
    menu.classList.toggle('pointer-events-auto');
};

const addNotificationClick = (elementId, menuId) => {
    const element = document.getElementById(elementId);
    element.addEventListener('click', () => toggleNotification(menuId));
};

addNotificationClick('toggleNotification', '#windowNotification');


// Cambio colore Change Crypto
const toggleCrypto = (id) => {
    const menu = document.querySelector(id);
    menu.classList.toggle('text-[#ACA8B5]');
    menu.classList.toggle('text-colorWhite');
};

const addCryptoHover = (elementId, menuId) => {
    const element = document.getElementById(elementId);
    element.addEventListener('mouseover', () => toggleCrypto(menuId));
    element.addEventListener('mouseout', () => toggleCrypto(menuId));
};

addCryptoHover('cryptoSel', '#topCrypto');
addCryptoHover('cryptoSel', '#svgCrypto');
addCryptoHover('cryptoSel', '#imgCrypto');


// Spostamento Featured News 
const featuredNews = document.getElementById("featuredNews");
const moveLeftButton = document.getElementById("moveLeftButton");
const moveRightButton = document.getElementById("moveRightButton");

moveLeftButton.addEventListener("click", function () {
    featuredNews.scrollLeft -= 320;
});

moveRightButton.addEventListener("click", function () {
    featuredNews.scrollLeft += 320;
});


// Underline Footer
const toggleTelegram = (id) => {
    const menu = document.querySelector(id);
    menu.classList.toggle('opacity-0');
    menu.classList.toggle('opacity-100');
    menu.classList.toggle('pointer-events-none');
    menu.classList.toggle('pointer-events-auto');
};

const addTelegramMenu = (elementId, menuId) => {
    const element = document.getElementById(elementId);
    element.addEventListener('mouseover', () => toggleTelegram(menuId));
    element.addEventListener('mouseout', () => toggleTelegram(menuId));
};

addTelegramMenu('toggleTelegram', '#windowTelegram');


// Sposta bottone Dark Mode
const toggleDark = (id) => {
    const menu = document.querySelector(id);
    menu.classList.toggle('left-[calc(100%-30px)]');
    menu.classList.toggle('left-[calc(100%-52px)]');
};

const changeDark = (elementId, menuId) => {
    const element = document.getElementById(elementId);
    element.addEventListener('click', () => toggleDark(menuId));
};

changeDark('contDarkMode', '#buttonDarkMode');

changeDark('contDarkMode2', '#buttonDarkMode2');

changeDark('contSubgraphHealthIndicator', '#buttonSubgraphHealthIndicator');
changeDark('contShowUsername', '#buttonShowUsername');
changeDark('contAllowNotifications', '#buttonAllowNotifications');
changeDark('contShowTestnet', '#buttonShowTestnet');


// Cambio SVG Dark Mode
const toggleSVG = (id) => {
    const menu = document.querySelector(id);
    menu.classList.toggle('opacity-0');
    menu.classList.toggle('opacity-100');
};

const changeSVG = (elementId, menuId) => {
    const element = document.getElementById(elementId);
    element.addEventListener('click', () => toggleSVG(menuId));
};

changeSVG('contDarkMode', '#svgMoon');
changeSVG('contDarkMode', '#svgSun');

changeSVG('contDarkMode2', '#svgMoon2');
changeSVG('contDarkMode2', '#svgSun2');


// Cambio Bg Button
const toggleAqua = (id) => {
    const menu = document.querySelector(id);
    menu.classList.toggle('bg-[#372f47]');
    menu.classList.toggle('bg-[#31d0aa]');
};

const changeBgAqua = (elementId, menuId) => {
    const element = document.getElementById(elementId);
    element.addEventListener('click', () => toggleAqua(menuId));
};

changeBgAqua('contSubgraphHealthIndicator', '#contSubgraphHealthIndicator');
changeBgAqua('contShowUsername', '#contShowUsername');
changeBgAqua('contAllowNotifications', '#contAllowNotifications');
changeBgAqua('contShowTestnet', '#contShowTestnet');


// More Connect Wallet
const toggleMore = (id) => {
    const menu = document.querySelector(id);
    menu.classList.toggle('opacity-100');
    menu.classList.toggle('opacity-0');
    menu.classList.toggle('pointer-events-none');
    menu.classList.toggle('pointer-events-auto');
    menu.classList.toggle('relative');
    menu.classList.toggle('absolute');
};

const addMore = (elementId, menuId) => {
    const element = document.getElementById(elementId);
    element.addEventListener('click', () => toggleMore(menuId));
    element.addEventListener('click', () => {
        element.remove()
    })
};

addMore('more', '#rabbyWallet');
addMore('more', '#mathWallet');
addMore('more', '#tokenPocket');
addMore('more', '#safePal');
addMore('more', '#coin98');
addMore('more', '#blocto');
addMore('more', '#cyberWallet');
addMore('more', '#ledger');


// Switch Connect
const toggleConnect = (id) => {
    const menu = document.querySelector(id);
    menu.classList.toggle('z-[100]');
    menu.classList.toggle('z-[99]');
};

const changeConnect = (elementId, menuId) => {
    const element = document.getElementById(elementId);
    element.addEventListener('click', () => toggleConnect(menuId));
};

changeConnect('connectWindow', '#firstForm');
changeConnect('whatsNew', '#firstForm');


// Switch color connect window
const toggleColorUp = (id) => {
    const menu = document.querySelector(id);
    menu.classList.toggle('text-[#372f47]');
    menu.classList.toggle('text-textViolet');
    menu.classList.toggle('bg-[#372f47]');
    menu.classList.toggle('bg-textViolet');
};

const changeColorUp = (elementId, menuId) => {
    const element = document.getElementById(elementId);
    element.addEventListener('click', () => toggleColorUp(menuId));
};

changeColorUp('connectWindow', '#whatsNew');
changeColorUp('whatsNew', '#connectWindow');
changeColorUp('whatsNew', '#whatsNew');
changeColorUp('connectWindow', '#connectWindow');


// Bottone seconda scheda
const toggleColorButton = (id) => {
    const menu = document.querySelector(id);
    menu.classList.toggle('bg-[#262130]');
    menu.classList.toggle('bg-colorsSecondary');
};

const changeColorButton = (elementId, menuId) => {
    const element = document.getElementById(elementId);
    element.addEventListener('click', () => toggleColorButton(menuId));
};

changeColorButton('buttonRightConnect', '#buttonLeftConnect');
changeColorButton('buttonLeftConnect', '#buttonRightConnect');
changeColorButton('buttonLeftConnect', '#buttonLeftConnect');
changeColorButton('buttonRightConnect', '#buttonRightConnect');


// Switch schede connect
const changeWindowConnect = document.getElementById("changeWindowConnect");
const buttonLeftConnect = document.getElementById("buttonLeftConnect");
const buttonRightConnect = document.getElementById("buttonRightConnect");

buttonLeftConnect.addEventListener("click", function () {
    changeWindowConnect.scrollLeft -= 1000;
});

buttonRightConnect.addEventListener("click", function () {
    changeWindowConnect.scrollLeft += 1000;
});


// Bottone connect wallet
const openConnectWallet = (id) => {
    const menu = document.querySelector(id);
    if (menu.classList.contains('fade-in')) {
        menu.classList.remove('fade-in');
        menu.classList.add('fade-out');
        menu.classList.add('pointer-events-none');
        menu.classList.remove('pointer-events-auto');
    } else if (menu.classList.contains('fade-out')) {
        menu.classList.remove('fade-out');
        menu.classList.add('pointer-events-auto');
    } else {
        menu.classList.add('fade-in');
        menu.classList.remove('pointer-events-none');
        menu.classList.add('pointer-events-auto');
    }
};

const addRemoveConnectWallet = (elementId, menuId) => {
    const element = document.getElementById(elementId);
    element.addEventListener('click', () => openConnectWallet(menuId));
};

addRemoveConnectWallet('connectWalletButton', '#windowConnectWallet');
addRemoveConnectWallet('connectWalletButton2', '#windowConnectWallet');
addRemoveConnectWallet('connectWalletButton3', '#windowConnectWallet');
addRemoveConnectWallet('whiteConnectWallet', '#windowConnectWallet');

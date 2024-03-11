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
    menu.classList.toggle('dark:bg-[#EFF4F5]');
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
    menu.classList.toggle('dark:bg-[#EFF4F5]');
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
    menu.classList.toggle('dark:bg-[#eeeaf4]');
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
    menu.classList.toggle('dark:text-[#7a6eaa]');
    menu.classList.toggle('dark:bg-[#eeeaf4]');
    menu.classList.toggle('dark:text-[#eeeaf4]');
    menu.classList.toggle('dark:bg-[#7a6eaa]');
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
    menu.classList.toggle('dark:bg-[#7645d9]');
    menu.classList.toggle('dark:bg-[#d7caec]');
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


// Attiva/Disattiva Dark Mode
const toggleDarkMode = (id) => {
    const menu = document.querySelector(id);
    menu.classList.toggle('dark');
};

const changeDarkMode = (elementId, menuId) => {
    const element = document.getElementById(elementId);
    element.addEventListener('click', () => toggleDarkMode(menuId));
};

changeDarkMode('contDarkMode', '#html');

changeDarkMode('contDarkMode2', '#html');

// CONTENUTI BANNERS
const banners = {
    banner1: { //balena
        commDiv_innerHTML: `
        <div
            class="slide h-[192px] w-[1128px]  bg-gradient-to-tl from-[#c6a3ff] to-[#9aedff] rounded-[32px] p-5 flex absolute ">
            <div>
                <img alt="pancakeSwapLogo"
                    src="https://pancakeswap.finance/_next/static/media/vecake-title.de07d9b9.png" decoding="async"
                    data-nimg="intrinsic" class="h-[25px] fill-white block inset-0 top-1" />
                <div class="h-fit text-[28px] text-[#7645d9] font-semibold"
                    style="text-shadow: 2px 2px 0 white, -2px -2px 0 white;;">
                    <span>Be Our Top 100 Traders and Earn a 3%</span><br>
                    <span>Trading Fee Rebate!</span>
                </div>
                <div class="flex mt-2">
                    <div class=" z-10  text-[#7645d9]  tracking-[0.03em] shadow-[0px_-1px_0px_0px_inset_rgba(14, 14, 44, 0.4)] cursor-pointer text-base font-semibold bg-transparent border-none  rounded-2xl h-12 px-6 fill-current relative flex items-center justify-start ">
                        Join Now!
                        <svg viewBox="0 0 24 24" color="#7645D9" ml="4px" width="20px"
                            xmlns="http://www.w3.org/2000/svg" class="sc-grXZZQ dBBtLS">
                            <path
                                d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="bottom-[120px] left-[150px] relative">
                <img src="https://assets.pancakeswap.finance/web/banners/top-traders/floating-item.png"
                    class="lg:visible animate-bounce-slow h-[64px] right-[10px] top-[70px] relative" alt="">
                <img src="https://assets.pancakeswap.finance/web/banners/top-traders/bg-desktop.png"
                    class="h-[224px] right-[370px] top-[30px]">
            </div>
        </div>
        `,
    },
    banner2: {
        commDiv_innerHTML: `
        <div class="slide h-[192px] w-[1128px] bg-[url('https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvecake-bg.e2e958a5.png&w=1200&q=75')] rounded-[32px] p-5 flex absolute ">
            <div>
                <img alt="pancakeSwapLogo" src="https://pancakeswap.finance/_next/static/media/vecake-title.de07d9b9.png"
                    decoding="async" data-nimg="intrinsic"
                    class="h-[25px] fill-white block inset-0 top-1" />
                <div class="h-[232px] font-semibold">
                    <div class="text-[#ffb237] text-[28px]" style="text-shadow: 2px 2px 0 #7645d9, -2px -2px 0 #7645d9;">
                        Your CAKE, Your Voice 
                    </div>
                    <div class="text-[#280d5f] text-[24px]"> 
                        <span class="text-[#7645d9]">
                            Introducing
                        </span> 
                        Gauges Voting 
                        <span class="text-[#7645d9]">
                            and 
                        </span> 
                        veCAKE
                    </div>
                    <div class="flex mt-2">
                        <button id="connectWalletBunny"
                            class="mr-2 z-10  text-white hover:bg-[#228F8F] dark:text-[#faf9fa] tracking-[0.03em] shadow-[0px_-1px_0px_0px_inset_rgba(14, 14, 44, 0.4)] cursor-pointer text-base font-semibold bg-colorsPrimary border-colorsPrimary border-solid border rounded-2xl h-12 px-6 fill-current relative flex items-center justify-center ">
                                Get started 
                        </button>
                        <a class="" href="">
                            <button class="z-10 text-colorsPrimary text-base font-semibold border-colorsPrimary border-solid border mr-1 rounded-2xl h-12 px-6 bg-white flex items-center justify-center ">
                                Learn More
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div class="bottom-[120px] left-[150px] relative">
                <img src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvecake-ruby.8d684b20.png&w=256&q=75"
                        class="lg:visible animate-bounce-slow h-[64px] right-[10px] top-[70px] relative">
                <img src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvecake-desktop-bunny.625811b4.png&w=256&q=75"
                        class="h-[257px] left-[220px] bottom-[25px] relative">
            </div>
        </div>    
    `,
    },
    banner3: {
        commDiv_innerHTML: `
        <div class="slide h-[192px] w-[1128px] bg-gradient-to-tl from-[#313d5c] to-[#3d2a54] rounded-[32px] absolute">
            <div class="h-full w-full rounded-[32px] bg-[url('https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgame-desktop-bg.6da793f3.png&w=1200&q=75')] p-5 flex ">
                <div>
                    <img alt="pancakeSwapLogo"
                        src="https://pancakeswap.finance/_next/static/media/vecake-title.de07d9b9.png"
                        decoding="async" data-nimg="intrinsic"
                        class="h-[25px] fill-white block inset-0 top-1" />
                    <div>
                        <span class="h-[32px] text-[28px] text-[#FFD737] font-semibold"
                            style="text-shadow: 2px 2px 0 #35FBA6, -2px -2px 0 #35FBA6;">
                            PancakeSwap Gaming Marketplace
                        </span><br>
                        <div class="text-[19px] flex items-center">
                            <span class="text-[#35FBA6] font-semibold mr-1">
                                Explore Your  
                            </span>
                            <img alt="gameText"
                                 src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgame-text.cc784fb7.png&amp;w=384&amp;q=75"
                                 class="h-[19px]">
                            <span class="text-[#FDE038] ml-1">
                                1.5 Monthly Players Await!
                            </span>
                        </div>
                        <div class="flex mt-2">
                            <div class=" z-10  text-[#35FBA6]  tracking-[0.03em] shadow-[0px_-1px_0px_0px_inset_rgba(14, 14, 44, 0.4)] cursor-pointer text-base font-semibold bg-transparent border-none  rounded-2xl h-12 px-6 fill-current relative flex items-center justify-start ">
                            Try Now!
                                <svg viewBox="0 0 24 24" color="#35FBA6" ml="4px" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-grXZZQ dBBtLS">
                                    <path
                                    d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-[120px] left-[130px] relative">
                    <img src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgame-cube.fb41a1ee.png&amp;w=128&amp;q=75"
                                    class="lg:visible animate-bounce-slow h-[64px] right-[-10px] top-[70px] relative"
                                    alt="">
                    <img src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgame-desktop-bunny.79c23af5.png&w=384&q=75"
                                    class="h-[192px]  top-[35px] right-[-150px] relative">
                </div>
            </div>
        </div>
        `
    },
    banner4: {
        commDiv_innerHTML: `
        <div class="slide h-[192px] w-[1128px] bg-cover bg-[url('https://pancakeswap.finance/_next/static/media/galxe-traverse-bg.fcab2d26.png')] rounded-[32px] p-5 flex absolute">
            <div>
                <img alt="pancakeSwapLogo"
                    src="https://pancakeswap.finance/_next/static/media/vecake-title.de07d9b9.png"
                    decoding="async" data-nimg="intrinsic"
                    class="h-[25px] fill-white block inset-0 top-1" />
                <div>
                    <span class="h-[32px] text-[32px] text-[#FFC836] font-semibold"
                        style="text-shadow: 2px 2px 0 #822E00, -2px -2px 0 #822E00;">
                          Traverse the Treasure Island on Galxe
                    </span><br>
                    <span class="text-[24px] text-[#270E5F] font-semibold">
                        Claim Your Exclusive NFTs Now!
                    </span>
                </div>
                <div class="flex mt-2">
                <button id="connectWalletBunny"
                    class="mr-2 z-10  text-white hover:bg-[#228F8F] dark:text-[#faf9fa] tracking-[0.03em] shadow-[0px_-1px_0px_0px_inset_rgba(14, 14, 44, 0.4)] cursor-pointer text-base font-semibold bg-colorsPrimary border-colorsPrimary border-solid border rounded-2xl h-12 px-6 fill-current relative flex items-center justify-center ">
                        Get started 
                        <svg viewBox="0 0 24 24" color="white" ml="4px" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-grXZZQ dBBtLS">
                                    <path
                                    d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z">
                                    </path>
                        </svg>
                </button>
            </div>
            </div>
            <div class="bottom-[120px] left-[150px] relative">
                    <img src="https://pancakeswap.finance//_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgalxe-traverse-bunny.6166be6f.png&w=640&q=75"
                        class="lg:visible animate-bounce-slow h-[170px] right-[10px] top-[70px] z-10 relative"
                        style="--animate-duration: 5s;" alt="">
            </div>
        </div>
        `},
    banner5: {
        commDiv_innerHTML: `
        <div class="slide h-[192px] w-[1128px] bg-gradient-to-t from-[#472A7E] to-[#7344D3] rounded-[32px] p-5 flex absolute ">
                        <div>
                            <img alt="pancakeSwapLogo"
                                src="https://pancakeswap.finance/_next/static/media/vecake-title.de07d9b9.png"
                                decoding="async" data-nimg="intrinsic"
                                class="h-[25px] fill-white block inset-0 top-1" />
                            <div>
                                <span class="h-[32px] text-[20px] text-[#EF9C01] font-bold">
                                    Perpetual Futures
                                </span><br>
                                <span class="text-[40px] text-white font-semibold">
                                    UP TO 1001x LEVERAGE
                                </span>
                                <button class="mr-2 z-10  text-[#472A7E] hover:bg-[#228F8F] dark:text-[#faf9fa] tracking-[0.03em] shadow-[0px_-1px_0px_0px_inset_rgba(14, 14, 44, 0.4)] cursor-pointer text-base font-semibold bg-colorsPrimary border-colorsPrimary border-solid border rounded-2xl h-12 px-6 fill-current relative flex items-center justify-center ">
                        Get started 
                        <svg viewBox="0 0 24 24" color="invertedContrast" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-grXZZQ hxxPRP"><path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path></svg>
                </button>
                            </div>
                        </div>
                        <div class="bottom-[120px] left-[150px] relative">
                            <img src="https://pancakeswap.finance//_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperpetual.fd0aa080.png&w=828&q=75"
                                class="lg:visible animate-bounce-slow h-[231px] right-[-100px] top-[60px] relative"
                                alt="">
                        </div>
                    </div>
        `
    },
    banner6: {
        commDiv_innerHTML: `
        <div id=""  class="slide h-[192px] w-[1128px] bg-cover bg-[url('https://assets.pancakeswap.finance/web/banners/nemesis-downfall/background-image.jpg')] rounded-[32px] p-5 flex absolute ">
            <div>
                <div class="flex">
                    <img alt="pancakeSwapLogo"
                        src="https://pancakeswap.finance/_next/static/media/vecake-title.de07d9b9.png"
                        decoding="async" data-nimg="intrinsic"
                        class="h-[25px] fill-white block inset-0 top-1" />
                    <img alt="pancakeSwapLogo"
                        src="https://assets.pancakeswap.finance/web/banners/nemesis-downfall/logo-1.png"
                        decoding="async" data-nimg="intrinsic"
                        class="h-[22px] fill-white block ml-1 inset-0 top-1" />
            </div>
            <div>
                <span class="h-[32px] text-[28px] text-[#EF9C01] font-bold">
                    Nemesis Downfall Now Live on <br>
                    PancakeSwap Gaming Marketplace
            </span><br>
            <button id="connectWalletBunny"
                    class="mr-2 z-10  text-white hover:bg-[#8f2e23bb] dark:text-[#faf9fa] tracking-[0.03em] shadow-[0px_-1px_0px_0px_inset_rgba(14, 14, 44, 0.4)] cursor-pointer text-base font-semibold bg-[#8F2E23] rounded-2xl h-12 px-6 fill-current relative flex items-center justify-center ">
                        Play Now 
                        <svg viewBox="0 0 24 24" color="white" ml="4px" width="20px"
                                    xmlns="http://www.w3.org/2000/svg" class="sc-grXZZQ dBBtLS">
                                    <path
                                    d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z">
                                    </path>
                        </svg>
                </button>
            </div>
        </div>
        <div class="bottom-[120px] left-[150px] relative">
            <img src="https://assets.pancakeswap.finance/web/banners/nemesis-downfall/floating-item.png"
                class="lg:visible animate-bounce-slow h-[99px] right-[10px] top-[70px] relative">
            <img src="https://assets.pancakeswap.finance/web/banners/nemesis-downfall/bg-desktop.png"
                class="lg:visible h-[224px] right-[00px] top-[-32px] relative" alt="">
        </div>
    </div>
    `},
};

// colore dello slide
const toggleColorButtonBan = (button) => {
    document.querySelectorAll(".buttonBanner").forEach(btn => {
        if (btn !== button) {
            btn.classList.remove('bg-white');
        }
    });
    button.classList.toggle('bg-white');
};

// BANNER AL CLICK
document.querySelectorAll(".buttonBanner").forEach(btn => {
    btn.addEventListener("click", (event) => {
        const cardKey = event.target.dataset.key;
        const banner = banners[cardKey];
        const content = document.getElementById('contentBanner');
        content.innerHTML = banner.commDiv_innerHTML;
        const button = document.querySelector(`[data-key="${cardKey}"]`);
        toggleColorButtonBan(button)
    })
});

// visualizzazione nel tempo
let currentBannerIndex = 0;
const changeBanner = () => {
    const bannerKeys = Object.keys(banners);
    const nextIndex = (currentBannerIndex + 1) % bannerKeys.length;
    const nextKey = bannerKeys(nextIndex)
    const nextButton = document.querySelector(`[data-key="${nextKey}"]`);
    nextButton.click()
    currentBannerIndex = nextIndex;
}
setInterval(changeBanner, 7000)

// BANNER IN DEFAULT
const defaultKeyBanner = 'banner2';
const defaultButtonBanner = document.querySelector(`[data-key="${defaultKeyBanner}"]`);
if (defaultButtonBanner) {
    defaultButtonBanner.click();
}

// COMMUNITY

const communitySlides = {
    community1: {
        commDiv_innerHTML: `
        <div class="w-[290px] h-[290px] text-[14px] text-[#f4eeff] dark:text-[#280d5f]">
    <div class="text-[16px] mb-6">Top Tweet of the week</div>
    <div class="h-[48px] w-[48px] bg-[#48D8E4] rounded-[8px] flex items-center justify-center">
        <svg viewBox="0 0 198 199" width="30" lass="h-[30px] " xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M98.552 198.607c-29.49-.022-53.246-7.027-69.844-19.609C11.91 166.265 3 148.195 3 127.748c0-19.701 8.891-33.907 18.952-43.51 7.884-7.525 16.584-12.344 22.642-15.117-1.37-4.162-3.079-9.61-4.608-15.238-2.046-7.53-4.053-16.366-4.053-22.84 0-7.663 1.687-15.36 6.238-21.34C46.98 3.385 54.218 0 62.926 0c6.806 0 12.584 2.499 17.108 6.81 4.324 4.12 7.202 9.593 9.189 15.298 3.491 10.024 4.85 22.618 5.232 35.187h8.341c.382-12.569 1.741-25.163 5.233-35.187 1.987-5.705 4.865-11.177 9.189-15.298C121.741 2.5 127.519 0 134.325 0c8.708 0 15.947 3.385 20.755 9.703 4.551 5.98 6.239 13.677 6.239 21.34 0 6.474-2.007 15.31-4.054 22.84-1.529 5.628-3.238 11.076-4.608 15.238 6.058 2.773 14.759 7.592 22.643 15.118 10.06 9.602 18.952 23.808 18.952 43.509 0 20.447-8.911 38.517-25.708 51.25-16.598 12.582-40.354 19.587-69.844 19.609h-.148z"
                fill="#633001"></path>
            <path
                d="M62.926 7.288c-12.754 0-18.626 9.516-18.626 22.675 0 10.46 6.822 31.408 9.621 39.563.63 1.835-.36 3.844-2.164 4.555-10.222 4.031-40.39 18.789-40.39 52.588 0 35.603 30.658 62.448 87.191 62.49h.135c56.534-.042 87.19-26.887 87.19-62.49 0-33.799-30.167-48.557-40.389-52.588-1.804-.71-2.794-2.72-2.164-4.555 2.799-8.154 9.621-29.103 9.621-39.563 0-13.16-5.871-22.675-18.626-22.675-18.36 0-22.936 26.007-23.263 53.92-.022 1.863-1.528 3.375-3.392 3.375H89.58c-1.863 0-3.37-1.512-3.391-3.375-.326-27.913-4.903-53.92-23.263-53.92z"
                fill="#D1884F"></path>
            <path
                d="M98.693 177.755c-41.538 0-87.253-22.235-87.325-51.018v.134c0 35.632 30.705 62.491 87.325 62.491 56.62 0 87.325-26.859 87.325-62.491v-.134c-.072 28.783-45.787 51.018-87.325 51.018z"
                fill="#FEDC90"></path>
            <path class="eye"
                d="M75.614 117.896c0 9.718-4.593 14.779-10.258 14.779-5.665 0-10.258-5.061-10.258-14.779s4.593-14.779 10.258-14.779c5.665 0 10.258 5.061 10.258 14.779zM142.288 117.896c0 9.718-4.592 14.779-10.257 14.779-5.666 0-10.258-5.061-10.258-14.779s4.592-14.779 10.258-14.779c5.665 0 10.257 5.061 10.257 14.779z"
                fill="#633001"></path>
        </svg>
    </div>
    <div class="mt-2">
        PancakeSwap🥞Ev3ryone's Favourite D3X
    </div>
    <svg viewBox="0 0 24 24" ml="3px" mt="9px" color="var(--colors-secondary)" width="20px"
        xmlns="http://www.w3.org/2000/svg" class="sc-grXZZQ kCvLZJ">
        <path
            d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z">
        </path>
    </svg>
    <div class="flex text-[#b8add2]">
        <div>@PancakeSwap</div>
        <div>Feb 7</div>
        <div class="w- flex-nowrap flex justify-between">
            <svg viewBox="0 0 16 16" width="16" color="var(--colors-textSubtle)" mr="2px"
                xmlns="http://www.w3.org/2000/svg" class="sc-grXZZQ cLhBHz">
                <g clip-path="url(#clip0_316_14296)">
                    <path
                        d="M13.1067 2.66044C11.3467 1.46044 9.17334 2.02044 8.00001 3.39377C6.82668 2.02044 4.65334 1.45377 2.89334 2.66044C1.96001 3.30044 1.37334 4.38044 1.33334 5.52044C1.24001 8.1071 3.53334 10.1804 7.03334 13.3604L7.10001 13.4204C7.60668 13.8804 8.38668 13.8804 8.89334 13.4138L8.96668 13.3471C12.4667 10.1738 14.7533 8.10044 14.6667 5.51377C14.6267 4.38044 14.04 3.30044 13.1067 2.66044ZM8.06668 12.3671L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z">
                    </path>
                </g>
                <defs>
                    <clipPath id="clip0_316_14296">
                        <rect width="16" height="16"></rect>
                    </clipPath>
                </defs>
            </svg>
            <div>1.1k</div>
        </div>
        <div class="flex">
            <svg viewBox="0 0 16 16" color="var(--colors-textSubtle)" width="20px"
                xmlns="http://www.w3.org/2000/svg" class="sc-grXZZQ ciiwbH">
                <g clip-path="url(#clip0_316_14299)">
                    <path
                        d="M4.26668 6.13301H4.40001C4.91334 6.13301 5.33334 6.55301 5.33334 7.06634V11.733C5.33334 12.2463 4.91334 12.6663 4.40001 12.6663H4.26668C3.75334 12.6663 3.33334 12.2463 3.33334 11.733V7.06634C3.33334 6.55301 3.75334 6.13301 4.26668 6.13301ZM8.00001 3.33301C8.51334 3.33301 8.93334 3.75301 8.93334 4.26634V11.733C8.93334 12.2463 8.51334 12.6663 8.00001 12.6663C7.48668 12.6663 7.06668 12.2463 7.06668 11.733V4.26634C7.06668 3.75301 7.48668 3.33301 8.00001 3.33301ZM11.7333 8.66634C12.2467 8.66634 12.6667 9.08634 12.6667 9.59967V11.733C12.6667 12.2463 12.2467 12.6663 11.7333 12.6663C11.22 12.6663 10.8 12.2463 10.8 11.733V9.59967C10.8 9.08634 11.22 8.66634 11.7333 8.66634Z">
                    </path>
                </g>
                <defs>
                    <clipPath id="clip0_316_14299">
                        <rect width="16" height="16" fill="white"></rect>
                    </clipPath>
                </defs>
            </svg>
            <div>99.2k</div>
        </div>
    </div>
    <div> 🐲 Step into the Dragon Lunar Lottery at PancakeSwap! Chase a treasure of 16,000 CAKE & an additional
    $3,880 in USDT prizes! ✨</div>
        `,
    },
    community2: {
        commDiv_innerHTML: `
    <div class="w-[290px] h-[290px] text-[14px] text-[#f4eeff] dark:text-[#280d5f]">
        <div class="text-[16px] mb-6">
            Top Tweet of the week
        </div>
        <img class="w-[290px] h-[140px] rounded-2xl" src="https://sgp1.digitaloceanspaces.com/strapi.space/07697db1c49bbd5983866a24391f0936.jpg" alt="">
        <div class="text-[#b8add2]">
            2024-03-08
        </div>
    <div class="mt-[10px]"> February 2024: PancakeSwap's CAKE Burn</div>
        `,
    },
};

// colore dello slide 
const toggleColorButtonCom = (button) => {
    document.querySelectorAll(".buttonSlider").forEach(btn => {
        if (btn !== button) {
            btn.classList.remove('bg-[#7645d9]');
        }
    });
    button.classList.toggle('bg-[#7645d9]');
};

// al click cambia contenuto community
document.querySelectorAll(".buttonSlider").forEach(btn => {
    btn.addEventListener("click", (event) => {
        const cardKey = event.target.dataset.key;
        const obSlider = communitySlides[cardKey];
        const button = document.querySelector(`[data-key="${cardKey}"]`);
        toggleColorButtonCom(button)
        const content = document.getElementById('contentCommunity');
        content.innerHTML = obSlider.commDiv_innerHTML;

    })
});

// inizio in default
const defaultKey = 'community2';
const defaultButton = document.querySelector(`[data-key="${defaultKey}"]`);
if (defaultButton) {
    defaultButton.click();
}


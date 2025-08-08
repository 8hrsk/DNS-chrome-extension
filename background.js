import CookieParser from './src/Utils/CookieParser.js';

const TARGET_PAGE = "mow2.sale.partner.ru";

const getCookies = async () => {
  const cookieParser = new CookieParser();
  await cookieParser.getCookies((cookies) => {
    console.log(cookies);
  });
}; getCookies();

const getCookiesInterval = setInterval(() => {
  getCookies();
}, 5000);

const handleSwitch = async () => {
  const [ tab ] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  if (!tab || !tab.url) return;
  try {
    const currentUrl = new URL(tab.url);
    if (currentUrl.hostname !== TARGET_PAGE) return;

    let newPath;
    
    if (currentUrl.pathname.startsWith('/consultant')) {
      newPath = '/cashier';
    }

    if (currentUrl.pathname.startsWith('/cashier')) {
      newPath = '/consultant';
    }

    if (!newPath) {
      return;
    }
    
    const newUrl = `${currentUrl.protocol}//${currentUrl.hostname}${newPath}${currentUrl.search}`;
    
    chrome.tabs.update(tab.id, {
      url: newUrl
    });
  } catch (error) {
    console.error('ERROR: ', error);
    throw new Error(error);
  }
}

const printCheck = async () => {
  console.log('check');
}

chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle-page") {
    handleSwitch();
  }
});
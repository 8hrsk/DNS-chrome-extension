const TARGET_PAGE = "mow2.sale.partner.ru";

const handleSwitch = async () => {
  const [tab] = await chrome.tabs.query({
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
    } else if (currentUrl.pathname.startsWith('/cashier')) {
      newPath = '/consultant';
    } else {
      return;
    }
    
    const newUrl = `${currentUrl.protocol}//${currentUrl.hostname}${newPath}${currentUrl.search}`;
    
    chrome.tabs.update(tab.id, {
      url: newUrl
    });
  } catch (error) {
    console.error('ERROR: ', error);
  }
}

chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle-page") {
    handleSwitch();
  }
});
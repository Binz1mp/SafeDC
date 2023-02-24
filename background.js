chrome.runtime.onInstalled.addListener(function (details) {
  const reason = details.reason;
  switch(reason) {
    // case 'install': {  }
    case 'install':
      chrome.tabs.create({
        url: chrome.runtime.getURL("changelog/update.html"),
      });
      break;
    case 'update':
    chrome.tabs.create({
      url: chrome.runtime.getURL("changelog/update.html"),
    });
    break;
    case 'chrome_update': break;
    case 'shared_module_update': break;
  }
  chrome.storage.sync.set({ "isSafeDCdark": false });
});
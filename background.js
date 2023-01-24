chrome.runtime.onInstalled.addListener(function () {
  const reason = details.reason;
  switch(reason) {
    // case 'install': {  }
    case 'update':
      chrome.tabs.create({
        url: chrome.runtime.getURL("changelog/update.html"),
      });
  }
  chrome.storage.sync.set({ "isSafeDCdark": false });
});
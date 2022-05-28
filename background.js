chrome.runtime.onInstalled.addListener(function () {
  chrome.tabs.create({
    url: chrome.runtime.getURL("changelog/update.html"),
  });
  chrome.storage.sync.set({ "isSafeDCOn": true });
  chrome.storage.sync.set({ "isSafeDCdark": false });
});
////////////
const safeDCimg = document.getElementById('safeDCimg');
chrome.storage.sync.get('isSafeDCOn', (storage) => {
  safeDCimg.checked = storage.isSafeDCOn;
});
safeDCimg.addEventListener("click", (event) => {
  chrome.storage.sync.set({"isSafeDCOn": safeDCimg.checked});
})
////////////
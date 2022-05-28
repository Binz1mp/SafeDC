//////////// 세이프디씨 기능 온오프 시작 ////////////
const safeDCimg = document.getElementById('safeDCimg');
chrome.storage.sync.get('isSafeDCOn', (storage) => {
  safeDCimg.checked = storage.isSafeDCOn;
});
safeDCimg.addEventListener("click", (event) => {
  chrome.storage.sync.set({"isSafeDCOn": safeDCimg.checked});
})
//////////// 세이프디씨 기능 온오프 끝 ////////////
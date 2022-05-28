//////////// 세이프디씨 기능 온오프 시작 ////////////
const safeDCimg = document.getElementById('safeDCimg');
chrome.storage.sync.get('isSafeDCOn', (storage) => {
  safeDCimg.checked = storage.isSafeDCOn;
});
safeDCimg.addEventListener("click", (event) => {
  chrome.storage.sync.set({"isSafeDCOn": safeDCimg.checked});
})
//////////// 세이프디씨 기능 온오프 끝 ////////////
//////////// 야간모드일 경우 이미지 색반전 체크 시작 ////////////
const safeDCdarkmode = document.getElementById('safeDCdarkmode');
chrome.storage.sync.get('isSafeDCdark', (storage) => {
  safeDCdarkmode.checked = storage.isSafeDCdark;
});
safeDCdarkmode.addEventListener("click", (event) => {
  chrome.storage.sync.set({"isSafeDCdark": safeDCdarkmode.checked});
})
//////////// 야간모드일 경우 이미지 색반전 체크 끝 ////////////
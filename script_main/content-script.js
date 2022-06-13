let dcpost = $('.write_div');
let gallviewcontents = $('.gallview_contents');
let dccons = $('.written_dccon');
let sizerbutton = $('<button id = "sizer">SafeDC</button>');
let images = $('img');
let videos = $('video');
let dcimageStatusImage = dcpost.find(images).not(dccons);
let dcimageStatusVideo = dcpost.find(videos).not(dccons);
if (window.location.href.indexOf("board/view") > -1) {
  if (dcimageStatusImage.length > 0 || dcimageStatusVideo.length > 0) {
    gallviewcontents.prepend(sizerbutton);
    dcpost.find(videos).not(dccons).removeAttr("style");
  }
  chrome.storage.sync.get('isSafeDCdark', storage => {
    if (!storage.isSafeDCdark) {
      sizerbutton.on("click", function () {
        dcimageStatusImage.toggleClass('imgThumbnail');
        dcimageStatusVideo.toggleClass('imgThumbnail');
      });
    } else if (storage.isSafeDCdark) {
      dcimageStatusVideo.addClass('safeDCdark');
      dcimageStatusImage.addClass('safeDCdark');
      sizerbutton.on("click", function () {
        dcimageStatusImage.toggleClass('safeDCdark');
        dcimageStatusImage.toggleClass('imgThumbnail-safeDCdark');
        dcimageStatusVideo.toggleClass('safeDCdark');
        dcimageStatusVideo.toggleClass('imgThumbnail-safeDCdark');
      });
    }
  });
}
chrome.storage.sync.get('isSafeDCOn', storage => {
  if (storage.isSafeDCOn) {
    $(document).ready(function () {
      if (window.location.href.indexOf("board/view") > -1) {
        let dcpost = $('.write_div');
        let gallviewcontents = $('.gallview_contents');
        let dccons = $('.written_dccon');
        let sizerbutton = $('<button id = "sizer">SafeDC</button>');
        let images = $('img');
        let videos = $('video')
        let dcimageStatusImage = dcpost.find(images).not(dccons);
        let dcimageStatusVideo = dcpost.find(videos).not(dccons);
        dcpost.find(videos).not(dccons).removeAttr("style");
        if (dcimageStatusImage.length > 0 || dcimageStatusVideo.length > 0) {
          gallviewcontents.prepend(sizerbutton);
          sizerbutton.on("click", function () {
            dcimageStatusImage.toggleClass('imgThumbnail');
            dcimageStatusVideo.toggleClass('imgThumbnail');
          });
        } else {
          console.log("업서요");
        }
      }
    });
  }
});
chrome.storage.sync.get('isSafeDCOn', storage => {
  if (storage.isSafeDCOn) {
    $(document).ready(function () {
      if (window.location.href.indexOf("board/view") > -1) {
        let dcpost = $('.write_div');
        let gallviewcontents = $('.gallview_contents');
        let allImgElement = $('img');
        let allVidElement = $('video');
        let dccons = $('.written_dccon');
        let dcimageStatusImage = dcpost.find(allImgElement).not(dccons);
        let dcimageStatusVideo = dcpost.find(allVidElement).not(dccons);
        let sizerbutton = $('<button id = "sizer">SafeDC</button>');
        gallviewcontents.prepend(sizerbutton);

        sizerbutton.on("click", function () {
          dcimageStatusImage.toggleClass('imgThumbnail')
          dcimageStatusVideo.toggleClass('imgThumbnail')
        });
      }
    });
  }
});
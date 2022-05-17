chrome.storage.sync.get('isSafeDCOn', storage => {
  if (storage.isSafeDCOn) {
    $(document).ready(function () {
      if (window.location.href.indexOf("board/view") > -1) {
        let dcpost = $('.write_div');
        let gallviewcontents = $('.gallview_contents');
        let dccons = $('.written_dccon');
        let sizerbutton = $('<button id = "sizer">SafeDC</button>');

        gallviewcontents.prepend(sizerbutton);
        sizerbutton.on("click", function () {
          dcpost.find($('img')).not(dccons).toggleClass('imgThumbnail')
          dcpost.find($('video')).not(dccons).toggleClass('imgThumbnail')
        });
      }
    });
  }
});
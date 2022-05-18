$(document).ready(function () {
  let dcpost = $('.write_div');
  let gallviewcontents = $('.gallview_contents');
  let dccons = $('.written_dccon');
  let sizerbutton = $('<button id = "sizer">SafeDC</button>');
  dcpost.find($('img')).not(dccons).hide();
  dcpost.find($('video')).not(dccons).hide();
  let dcimageStatusImage = dcpost.find($('img')).not(dccons);
  let dcimageStatusVideo = dcpost.find($('video')).not(dccons);
  if (dcimageStatusImage.length > 0 || dcimageStatusVideo.length > 0) {
  gallviewcontents.prepend(sizerbutton);
  sizerbutton.each(function() {
    $(this).on("click", function () {
      dcimageStatusImage.toggle("show");
      dcimageStatusVideo.toggle("show");
      });
    }); 
  }
});


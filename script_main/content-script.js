$(document).ready(function () {
let dcpost = $('.write_div');
let gallviewcontents = $('.gallview_contents');
let allImgElement = $('img');
let allVidElement = $('video');
let dccons = $('.written_dccon');
let sizerbutton = $('<button id = "sizer">이미지 모두 보이기</button>');
dcpost.find(allImgElement).not(dccons).hide();
dcpost.find(allVidElement).not(dccons).hide();
dcpost.after(sizerbutton);
gallviewcontents.prepend(sizerbutton);
let dcimageStatusImage = dcpost.find(allImgElement).not(dccons);
let dcimageStatusVideo = dcpost.find(allVidElement).not(dccons);

sizerbutton.each(function() {
  $(this).on("click", function () {
    dcimageStatusImage.toggle("show");
    dcimageStatusVideo.toggle("show");
    });
  }); 
});


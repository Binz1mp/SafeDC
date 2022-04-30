let dcthreads = document.querySelector(".gall_list");
// setTimeout(() => {
//   // window.onload = function () {
    if ( window.location.href.indexOf("lists/?id=") > -1 && dcthreads.className.indexOf("empty") > -1) {
      location.reload();
    } else if ( window.location.href.indexOf("gall.dcinside.com/mgallery/board/lists?id=") > -1 && dcthreads.className.indexOf("empty") > -1) {
      location.reload();
    }
//   // };
// }, 1000);
const bannerShowTakeaway = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("banner").style.display = "";
    } else {
      document.getElementById("banner").style.display = "none";
    }
    prevScrollpos = currentScrollPos;
  }
}

export { bannerShowTakeaway };

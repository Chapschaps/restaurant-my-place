const preloader = () => {
  window.addEventListener('load', () => {
    const preload = document.querySelector('.preloader');
    // var op = 1;  // initial opacity
    // var timer = setInterval(function () {
    //     if (op <= 0.1){
    //         clearInterval(timer);
    //         preload.style.display = 'none';
    //     }
    //     preload.style.opacity = op;
    //     preload.style.filter = 'alpha(opacity=' + op * 100 + ")";
    //     op -= op * 0.1;
    // }, 50);
    preload.style.display = "none";
    document.body.style.overflow = 'auto';
  });
}

export { preloader };

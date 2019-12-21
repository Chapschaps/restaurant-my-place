const navOnClick = () => {
  if (document.getElementById('js-menu')) {
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    let open = document.getElementById('opening-menu');
    let close = document.getElementById('closing-menu');

    navBarToggle.addEventListener('click', function () {
      open.style.display = open.style.display === 'none' ? '' : 'none';
      close.style.display = close.style.display === 'none' ? '' : 'none';
      mainNav.classList.toggle('active');
    });
    mainNav.addEventListener('click', function () {
      close.style.display = 'none';
      open.style.display = '';
      mainNav.classList.toggle('active');
    });
    // close.addEventListener('click', function () {
    //   close.style.display = 'none';
    //   open.style.display = 'block';
    // });
  };
}

export { navOnClick };


  // let open = document.getElementById('opening-menu');
  // let close = document.getElementById('closing-menu');

  // open.addEventListener('click', function () {
  //   open.style.display = 'none';
  // });

const navOnClick = () => {
  if (document.getElementById('js-menu')) {
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });
    mainNav.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });
  };
}


export { navOnClick };



const disableAnimAos = () => {
  if (window.innerWidth < 768) {
    if (document.querySelector('.no-animation-mobile')) {
      const disableFirstAnimations = document.querySelectorAll('.no-animation-mobile');
      disableFirstAnimations.forEach((item) => {
        delete item.dataset.aos;
      });
      }
    }
}

export { disableAnimAos };

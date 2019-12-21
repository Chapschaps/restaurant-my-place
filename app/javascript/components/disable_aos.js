const disableAnimAos = () => {
  if (window.innerWidth < 768) {
    if (document.getElementById('no-animation-mobile')) {
      const disableFirstAnimation = document.getElementById('no-animation-mobile');
      delete disableFirstAnimation.dataset.aos;
      }
    }
}

export { disableAnimAos };

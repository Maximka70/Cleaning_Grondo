export function headerScroll() {
  const header = document.querySelector('.header');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle('header--scrolled', window.scrollY > 10);
        ticking = false;
      });
      ticking = true;
    }
  });
}
export function touchHover() {
  const tiles = document.querySelectorAll('.hero__heading-tile');
  const advantageItems = document.querySelectorAll('.advantages__list-item');
  const priceItems = document.querySelectorAll('.price__item');
  const otherCards = document.querySelectorAll('.otherServices__card');
  const galleryItems = document.querySelectorAll('.gallery__item');
  const socialItemsFooter = document.querySelectorAll('.footer__social-link');
  const socialItemsHeader = document.querySelectorAll('.header__social-link');
  const menuItemsHeader = document.querySelectorAll('.header__menu-item');

  const addTouch = (elements) => {
    elements.forEach(el => {
      el.addEventListener('touchstart', () => {
        el.classList.add('is-touched');
      }, { passive: true });

      el.addEventListener('touchend', () => {
        setTimeout(() => {
          el.classList.remove('is-touched');
        }, 300);
      }, { passive: true });
    });
  };

  addTouch(tiles);
  addTouch(advantageItems);
  addTouch(priceItems);
  addTouch(otherCards);
  addTouch(galleryItems);
  addTouch(socialItemsFooter);
  addTouch(socialItemsHeader);
  addTouch(menuItemsHeader);
}
export function touchHover() {
  const selectors = [
    '.header__social-links',
    '.hero__heading-tiles',
    '.price__module-price',
    '.gallery__grid',
    '.contactUs__information',
    '.footer__social-links',
  ];

  selectors.forEach(selector => {
    const parent = document.querySelector(selector);
    if (!parent) return;

    parent.addEventListener('touchstart', (e) => {
      const target = e.target.closest('[class*="__heading-tile"], [class*="__list-item"], [class*="__item"], [class*="__card"], [class*="__social-link"], [class*="__information-item"]');
      if (target) target.classList.add('is-touched');
    }, { passive: true });

    parent.addEventListener('touchend', (e) => {
      const target = e.target.closest('[class*="__heading-tile"], [class*="__list-item"], [class*="__item"], [class*="__card"], [class*="__social-link"], [class*="__information-item"]');
      if (target) setTimeout(() => target.classList.remove('is-touched'), 300);
    }, { passive: true });
  });
}
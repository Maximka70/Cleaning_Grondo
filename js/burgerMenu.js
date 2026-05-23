export function burgerMenu() {
  const logo = document.querySelector('.header__logo a');
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');
  const overlay = document.querySelector('.header__overlay');
  const menuLinks = document.querySelectorAll('.header__menu-item a');

  burger.addEventListener('click', () => {
    logo.classList.toggle('header__logo--active');
    burger.classList.toggle('header__burger--active');
    menu.classList.toggle('header__menu--open');
    overlay.classList.toggle('header__overlay--visible');
    document.body.style.overflow =
      menu.classList.contains('header__menu--open') ? 'hidden' : '';
  });

  overlay.addEventListener('click', () => {
    closeMenu();
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  function closeMenu() {
    logo.classList.remove('header__logo--active');
    burger.classList.remove('header__burger--active');
    menu.classList.remove('header__menu--open');
    overlay.classList.remove('header__overlay--visible');
    document.body.style.overflow = '';
  }
}
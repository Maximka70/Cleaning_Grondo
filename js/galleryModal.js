export function initGalleryModal() {
  const images = document.querySelectorAll('.gallery__item img');
  const modal = document.querySelector('.gallery__modal');
  const modalImg = document.querySelector('.gallery__modal-img');

  images.forEach(img => {
    img.addEventListener('click', () => {
      modal.classList.add('active');
      modalImg.src = img.src;

      document.body.classList.add('no-scroll');
    });
  });

  modal.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
}
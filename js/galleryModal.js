export function initGalleryModal() {
  const grid = document.querySelector('.gallery__grid');
  const modal = document.querySelector('.gallery__modal');
  const modalImg = document.querySelector('.gallery__modal-img');

  grid.addEventListener('click', (e) => {
    const img = e.target.closest('.gallery__item img');
    if (!img) return;
    modalImg.src = img.src;
    modal.classList.add('active');
    document.body.classList.add('no-scroll');
  });

  modal.addEventListener('click', () => {
    modal.classList.remove('active');
    modalImg.src = ''; // ← очищай src чтобы не было пустого запроса
    document.body.classList.remove('no-scroll');
  });
}
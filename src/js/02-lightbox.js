import { galleryItems } from './gallery-items.js';
// Change code below this line
//console.log(typeof SimpleLightbox);

const gallery = document.querySelector('.gallery');

function renderGallery() {
  const galleryMarkup = galleryItems
    .map(
      image => `
        <li class="gallery__item"><a class="gallery__link" href="${image.original}">
            <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
            </a>
        </li>`
    )
    .join('');
  gallery.innerHTML = galleryMarkup;
}
renderGallery();
//console.log(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  navigation: true,
  animationSlide: true,
  animationSpeed: 150,
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  close: true,
  showCounter: true,
  swipeClose: true,
});

import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function renderGallery() {
  const galleryMarkup = galleryItems
    .map(
      image => `
           <li class="gallery__item">
                <a class="gallery__link" href="${image.original}">
                <img
                class="gallery__image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
                />
                </a>
            </li>`
    )
    .join('');
  gallery.innerHTML = galleryMarkup;
}
renderGallery();
//console.log(galleryItems);

gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const largeImage = event.target.getAttribute('data-source');
    //console.log(largeImage);
  }
});

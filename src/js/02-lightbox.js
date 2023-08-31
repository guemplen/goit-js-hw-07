import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(typeof SimpleLightbox);

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  navigation: true,
  //   animationSlide: true,
  //   animationSpeed: 150,
  //   captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  close: true,
  showCounter: true,
  swipeClose: true,
});
console.log(lightbox);

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

gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const imageSrc = event.target.parentElement.getAttribute('href');
    const imageTitle = event.target.getAttribute('alt');
    modalShow(imageSrc, imageTitle);
    //console.log(imageSrc, imageTitle);
  }
});

function modalShow(imageSrc, imageTitle) {
  console.log('Модальное окно:', imageSrc, imageTitle);
  lightbox.open({ source: imageSrc, caption: imageTitle });
  //   function closeEscModal(event) {
  //     if (event.key === 'Escape') {
  //       lightbox.close();
  //       document.removeEventListener('keydown', closeEscModal);
  //     }
  //   }

  //   document.addEventListener('keydown', closeEscModal);
}

// function modalShow(imageSrc, imageTitle) {
//   lightbox.open({ source: imageSrc, caption: imageTitle });
//   document.addEventListener('keydown', event => {
//     if (event.key === 'Escape') {
//       lightbox.close();
//       document.removeEventListener('keydown', modalShow);
//     }
//   });
// }

import { galleryItems } from './gallery-items.js';
// Change code below this line

const listGalleryRef = document.querySelector('.gallery');

function createGalleryImages(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

const createMarkup = createGalleryImages(galleryItems);

listGalleryRef.insertAdjacentHTML('beforeend', createMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

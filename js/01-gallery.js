import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGalleryRef = document.querySelector('.gallery');

const createGalleryImages = array => {
  return array
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join('');
};

const createMarkup = createGalleryImages(galleryItems);

divGalleryRef.insertAdjacentHTML('beforeend', createMarkup);

const instance = basicLightbox.create(`
    <img  src="#" width="800" height="600">
`);

const onImageZoom = event => {
  event.preventDefault();
  const elemImg = instance.element().children[0].firstChild;
  console.log(elemImg);
  const urlBigImage = event.target.dataset.source;
  const currentElement = event.target.classList.value;

  if (currentElement === 'gallery__image') {
    elemImg.src = `${urlBigImage}`;
    instance.show();
  }
  return;
};

divGalleryRef.addEventListener('click', onImageZoom);

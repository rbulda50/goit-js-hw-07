import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const refs = {
    gallery: document.querySelector('.gallery'),
};


refs.gallery.addEventListener('click', onShowFullImage);


refs.gallery.insertAdjacentHTML('beforeend', onCreateGalleryCards(galleryItems));

function onCreateGalleryCards(images) {
    return images.map(({preview, original, description}) => {
        return`
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>
        `
    })
        .join('');
};

const showFullImage = basicLightbox.create(
    `<img src="">`, {
        onClose: window.addEventListener('keydown', onEscCloseFullImage),
    });

// showFullImage.show(() => console.log('lightbox'));
// console.log(basicLightbox.create(`<img src=""/>`)});

function onShowFullImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    };
    // console.log(event.target.dataset.source);
    showFullImage.element().querySelector('img').src = event.target.dataset.source;
    showFullImage.show();
};

function onEscCloseFullImage(event) {
    // console.log(event);
    const ESC_KEY_CODE = 'Escape';

    if (event.code === ESC_KEY_CODE) {
        showFullImage.close();
    };
};
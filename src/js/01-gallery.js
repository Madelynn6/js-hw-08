// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const div = document.querySelector(".gallery");

galleryItems.forEach((elem) => {
    const link = document.createElement("a");
    const img = document.createElement("img");
    
    link.classList.add("gallery__item");
    link.href = elem.original;
    img.classList.add("gallery__image");
    img.src = elem.preview;
    img.alt = elem.description;
    div.append(link);
    link.append(img);
})

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });


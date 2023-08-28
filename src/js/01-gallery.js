import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const markup = galleryItems.map(({original, preview, description}) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`).join("");

galleryList.insertAdjacentHTML("beforeend", markup);

new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });
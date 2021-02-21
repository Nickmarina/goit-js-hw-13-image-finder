// JS files
import refs from './refs';

// Templates
import galleryListItemsTemplate from '../templates/galleryListItems.hbs';

function updateGallery(pictures) {
  const markup = galleryListItemsTemplate(pictures);
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

export default updateGallery;

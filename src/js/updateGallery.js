// Templates
import picturesTemplate from '../templates/galleryItems.hbs';
// JS files
import refs from './refs';

function updateGallery(pictures) {
  console.log('1');
  const markup = picturesTemplate(pictures);
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

export default updateGallery;

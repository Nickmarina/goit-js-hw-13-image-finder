// Templates
import picturesTemplate from '../templates/galleryItems.hbs';
// JS files
import refs from './refs';
// Notify
import error from './notify';

function updateGallery(pictures) {
  // console.log('1');
  const markup = picturesTemplate(pictures.hits);
  return refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

export default updateGallery;

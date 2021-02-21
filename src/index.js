// Styles
import './sass/styles.scss';

// Js-files
import apiService from './js/apiService';
import refs from './js/refs';
import updateGallery from './js/updateGallery';

refs.searchForm.addEventListener('submit', searchItemsFn);

function searchItemsFn(event) {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  clearGalleryList();
  // refs.galleryList.innerHTML = '';
  apiService.resetPage();
  fetchGallery();
  form.reset();
}

function clearGalleryList() {
  refs.galleryList.innerHTML = '';
}
function fetchGallery() {
  apiService.fetchPictures().then(pictures => updateGallery(pictures));
}

// Js-files
import apiService from './js/apiService';
import updateGallery from './js/updateGallery';
import refs from './js/refs';
import scrollFn from './js/scrollFn';

// Styles
import './sass/styles.scss';

// Notify
import info from './js/notify';

refs.searchForm.addEventListener('submit', submitHandlerFn);
refs.loadBtn.addEventListener('click', fetchPicturesFn);

function submitHandlerFn(event) {
  refs.loadBtn.classList.add('visually-hidden');
  event.preventDefault();
  refs.galleryList.innerHTML = '';
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  console.log(apiService.query);

  if (!apiService.query) {
    info('Type something');
    return;
  }
  apiService.resetPage();
  fetchPicturesFn();
  form.reset();
}

function fetchPicturesFn() {
  apiService.fetchPictures().then(pictures => {
    if (pictures.total === 0) {
      info('Please try again with another request');
      return;
    }
    updateGallery(pictures);
    refs.loadBtn.classList.remove('visually-hidden');
    scrollFn();
  });
}

// Js-files
import apiService from './js/apiService';
import updateGallery from './js/updateGallery';
import refs from './js/refs';

// Styles
import './sass/styles.scss';

// Notify
import info from './js/notify';

// // Debounce
// import debounce from 'lodash.debounce';

refs.searchForm.addEventListener('submit', submitHandlerFn);
refs.searchBtn.addEventListener('click', hideLoadBtnFn);
refs.loadBtn.addEventListener('click', fetchPicturesFn);

function submitHandlerFn(event) {
  event.preventDefault();
  refs.galleryList.innerHTML = '';
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  console.log(apiService.query);

  if (apiService.query === '') {
    info('Type something');
  }

  if (!apiService.query) {
    return;
  }
  apiService.resetPage();
  fetchPicturesFn();
  form.reset();
}

function fetchPicturesFn() {
  refs.loadBtn.classList.remove('visually-hidden');
  apiService.fetchPictures().then(updateGallery);

  window.scrollTo({
    top: document.body.clientHeight - 650,
    behavior: 'smooth',
  });
  // window.scrollTo({
  //   top: document.body.scrollHeight - 700,
  //   behavior: 'smooth',
  // });
  // window.scrollTo(0, document.documentElement.clientHeight);
  // refs.galleryList.scrollIntoView({ block: 'end', behavior: 'smooth' });
}

function hideLoadBtnFn() {
  refs.loadBtn.classList.add('visually-hidden');
}

// refs.searchForm.addEventListener('input', debounce(submitHandlerFn, 500));
//  const inputValue = event.target.value;

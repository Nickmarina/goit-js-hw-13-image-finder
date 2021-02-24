// Js-files
import apiService from './js/apiService';
import updateGallery from './js/updateGallery';
import refs from './js/refs';

// Styles
import './sass/styles.scss';

// Notify
import error from './js/notify';

refs.searchForm.addEventListener('submit', submitHandlerFn);

function submitHandlerFn(event) {
  event.preventDefault();
  refs.galleryList.innerHTML = '';
  const form = event.currentTarget;
  const inputValue = form.elements.query.value;

  console.log(inputValue);
  if (inputValue === '') {
    error('Type something');
  }

  if (!inputValue) {
    return;
  }

  apiService(inputValue).then(updateGallery);

  form.reset();
}

// // Debounce
// import debounce from 'lodash.debounce';

// refs.searchForm.addEventListener('input', debounce(submitHandlerFn, 500));
//  const inputValue = event.target.value;

// apiService.query = form.elements.query.value;
// console.log(apiService.query);

// apiService.resetPage();

// form.reset();
// function searchItemsFn(event) {
//   event.preventDefault();
//  apiService.fetchPictures(inputValue).then(updateGallery);
//   // const form = event.currentTarget;
//   // apiService.query = form.elements.query.value;
//   const inputValue = event.target.value;

//   if (inputValue === '') {
//     // if (apiService.query === '') {
//     return alert('Введи что-то нормальное');
//   }
//   console.log(inputValue);

//   // apiService.resetPage();
//   // clearGalleryList();

//   // form.reset();
// }

// // function clearGalleryList() {
// //   refs.galleryList.innerHTML = '';
// // }
// // function fetchGallery(inputValue) {
// //   apiService
// //     .fetchPictures(inputValue)
// //     .then(pictures => updateGallery(pictures));
// // }

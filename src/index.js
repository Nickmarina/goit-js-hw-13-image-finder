// Js-files
import apiService from './js/apiService';
import updateGallery from './js/updateGallery';
import refs from './js/refs';
// Styles
import './sass/styles.scss';
// // Debounce
// import debounce from 'lodash.debounce';

refs.searchForm.addEventListener('submit', submitHandlerFn);

function submitHandlerFn(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const inputValue = form.elements.query.value;
  console.log(inputValue);
  if (inputValue === '') {
    return alert('Введи что-то нормальное');
  }
  if (!inputValue) {
    return;
  }

  // apiService.query = form.elements.query.value;
  // console.log(apiService.query);
  refs.galleryList.innerHTML = '';

  apiService.resetPage();
  apiService.fetchPictures(inputValue).then(updateGallery());

  form.reset();
}

// // refs.searchForm.addEventListener('submit', searchItemsFn);
// refs.searchForm.addEventListener('input', debounce(searchItemsFn, 500));

// function searchItemsFn(event) {
//   event.preventDefault();

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
//   apiService.fetchPictures(inputValue).then(updateGallery);
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

const apiKey = '20361468-1e955d15f48e5b2a394a029cb';

export default {
  searchQuery: '',
  page: 1,

  fetchPictures() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;
    // const options = {
    //   headers: { Authorization: apiKey },
    // };
    return fetch(url)
      .then(res => res.json)
      .then(({ pictures }) => {
        this.incrementPage();
        return pictures;
      })
      .catch(error => console.log(error));
  },

  resetPage() {
    this.page = 1;
  },

  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};

function scrollFn() {
  setTimeout(() => {
    return window.scrollTo({
      top: window.innerHeight + window.pageYOffset,
      behavior: 'smooth',
    });
    //     // window.scrollTo({
    //     //   top: document.body.scrollHeight,
    //     //   left: 0,
    //     //   behavior: 'smooth',
    //     // });
  }, 200);
}
export default scrollFn;

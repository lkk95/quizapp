function bookmarkFunction(bookmark) {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('stroke');
  });
}

export { bookmarkFunction };

function bookmarkFunction(bookmark) {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('filled');
  });
}

export { bookmarkFunction };

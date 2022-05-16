const homepage = document.querySelector('[data-js="homepage"]');
const bookmarkspage = document.querySelector('[data-js="bookmarkspage"]');
const createpage = document.querySelector('[data-js="createpage"]');
const profilespage = document.querySelector('[data-js="profilepage"]');

const homebutton = document.querySelector('[data-js="home"]');
const bookmarkbutton = document.querySelector('[data-js="bookmarks"]');
const createbutton = document.querySelector('[data-js="create"]');
const profilebutton = document.querySelector('[data-js="profiles"]');

function spa() {
  homebutton.addEventListener('click', () => {
    homepage.classList.remove('hiddenpage');
    bookmarkspage.classList.add('hiddenpage');
    createpage.classList.add('hiddenpage');
    profilespage.classList.add('hiddenpage');
  });

  bookmarkbutton.addEventListener('click', () => {
    homepage.classList.add('hiddenpage');
    bookmarkspage.classList.remove('hiddenpage');
    createpage.classList.add('hiddenpage');
    profilespage.classList.add('hiddenpage');
  });

  createbutton.addEventListener('click', () => {
    homepage.classList.add('hiddenpage');
    bookmarkspage.classList.add('hiddenpage');
    createpage.classList.remove('hiddenpage');
    profilespage.classList.add('hiddenpage');
  });

  profilebutton.addEventListener('click', () => {
    homepage.classList.add('hiddenpage');
    bookmarkspage.classList.add('hiddenpage');
    createpage.classList.add('hiddenpage');
    profilespage.classList.remove('hiddenpage');
  });
}

export { spa };

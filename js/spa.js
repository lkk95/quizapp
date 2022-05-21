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
    homepage.classList.remove('hidden');
    bookmarkspage.classList.add('hidden');
    createpage.classList.add('hidden');
    profilespage.classList.add('hidden');
  });

  bookmarkbutton.addEventListener('click', () => {
    homepage.classList.add('hidden');
    bookmarkspage.classList.remove('hidden');
    createpage.classList.add('hidden');
    profilespage.classList.add('hidden');
    const bookmarkedCards = questionCards.filter(questionCard => {
      return questionCard.isBookmarked === true;
    });
  });

  createbutton.addEventListener('click', () => {
    homepage.classList.add('hidden');
    bookmarkspage.classList.add('hidden');
    createpage.classList.remove('hidden');
    profilespage.classList.add('hidden');
  });

  profilebutton.addEventListener('click', () => {
    homepage.classList.add('hidden');
    bookmarkspage.classList.add('hidden');
    createpage.classList.add('hidden');
    profilespage.classList.remove('hidden');
  });
}

export { spa };

import { toggleAnswer } from './toggleAnswer.js';
import { bookmarkFunction } from './bookmarkFunction.js';

//Change color of bookmark
const bookmarks = document.querySelectorAll('[data-js="bookmark"]');

bookmarks.forEach(bookmarkFunction);

//Show answer
const buttons = document.querySelectorAll('[data-js="button"]');

buttons.forEach(toggleAnswer);

//Pages
const homepage = document.querySelector('[data-js="homepage"]');
const bookmarkspage = document.querySelector('[data-js="bookmarkspage"]');
const createpage = document.querySelector('[data-js="createpage"]');
const profilespage = document.querySelector('[data-js="profilepage"]');

//Navbuttons
const homebutton = document.querySelector('[data-js="home"]');
const bookmarkbutton = document.querySelector('[data-js="bookmarks"]');
const createbutton = document.querySelector('[data-js="create"]');
const profilebutton = document.querySelector('[data-js="profiles"]');

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

import { toggleAnswer } from './toggleAnswer.js';
import { bookmarkFunction } from './bookmarkFunction.js';
import { spa } from './spa.js';
import { counter } from './counter.js';
import { dynamicCards } from './dynamicCards.js';
//import { fetchQuestions } from './fetchQuestions';
let questionCards = [];
//Load Pages in Single Page Application
spa(questionCards);

//Fetch data from Opentdb, create dynamic cards from data and implement bookmarks and answer toggles

const apiURL = 'https://opentdb.com/api.php?amount=15&type=boolean';

fetchQuestions(apiURL);

async function fetchQuestions(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    questionCards = data.results.map(card => {
      return { ...card, isBookmarked: false, id: Math.random() + '' };
    });
    console.log(questionCards);
    dynamicCards(questionCards);
    document.querySelectorAll('[data-js="bookmark"]').forEach(bookmarkFunction);
    document.querySelectorAll('[data-js="button"]').forEach(toggleAnswer);
  } catch (error) {
    console.error(error.message);
  }
}

//Count length of input in create-form
counter();

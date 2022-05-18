import { toggleAnswer } from './toggleAnswer.js';
import { bookmarkFunction } from './bookmarkFunction.js';
import { spa } from './spa.js';
import { counter } from './counter.js';
import { dynamicCards } from './dynamicCards.js';

//Load Pages in Single Page Application
spa();

//Create cards object
const cards = [
  {
    cardtext: 'Which desert is the biggest in the world?',
    cardanswer: 'Actually the biggest desert in the world is the Antarctic.',
    cardtags: ['desert', 'nature'],
  },
  {
    cardtext: 'When did the French Revolution start?',
    cardanswer: 'The French Revolution started in 1789.',
    cardtags: ['history', 'early modern times'],
  },
  {
    cardtext: 'Who is Germanys current minister of foreign affairs?',
    cardanswer: 'Annalena Baerbock',
    cardtags: ['politics', 'German government'],
  },
  {
    cardtext: 'Which band published the song "Smoke on the Water" in 1971?',
    cardanswer: 'Pink Floyd',
    cardtags: ['music', 'british rock'],
  },
];

//Fetch card data of Opentdb
/*
const apiURL = 'https://opentdb.com/api.php?amount=15&type=boolean';

fetchQuestions(apiURL);

async function fetchQuestions(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}*/

//Append cards to homepage section in index_spa.html
cards.forEach(dynamicCards);

//Change color of bookmark
const bookmarks = document.querySelectorAll('[data-js="bookmark"]');

bookmarks.forEach(bookmarkFunction);

//Show answer
const buttons = document.querySelectorAll('[data-js="button"]');

buttons.forEach(toggleAnswer);

//Count length of input in create-form
counter();

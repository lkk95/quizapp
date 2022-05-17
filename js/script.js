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
    cardicon: 'bookmark',
    cardheading: 'QUESTION',
    cardtext: 'Which desert is the biggest in the world?',
    cardbutton: 'Show Answer',
    cardanswer: 'Actually the biggest desert in the world is the Antarctic.',
    cardtag1: 'desert',
    cardtag2: 'nature',
  },
  {
    cardicon: 'bookmark',
    cardheading: 'QUESTION',
    cardtext: 'When did the French Revolution start?',
    cardbutton: 'Show Answer',
    cardanswer: 'The French Revolution started in 1789.',
    cardtag1: 'history',
    cardtag2: 'early modern times',
  },
  {
    cardicon: 'bookmark',
    cardheading: 'QUESTION',
    cardtext: 'Who is Germanys current minister of foreign affairs?',
    cardbutton: 'Show Answer',
    cardanswer: 'Annalena Baerbock',
    cardtag1: 'politics',
    cardtag2: 'German government',
  },
  {
    cardicon: 'bookmark',
    cardheading: 'QUESTION',
    cardtext: 'Which band published the song "Smoke on the Water" in 1971?',
    cardbutton: 'Show Answer',
    cardanswer: 'Pink Floyd',
    cardtag1: 'music',
    cardtag2: 'british rock',
  },
];

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

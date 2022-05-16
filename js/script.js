import { toggleAnswer } from './toggleAnswer.js';
import { bookmarkFunction } from './bookmarkFunction.js';
import { spa } from './spa.js';
import { counter } from './counter.js';

//Change color of bookmark
const bookmarks = document.querySelectorAll('[data-js="bookmark"]');

bookmarks.forEach(bookmarkFunction);

//Show answer
const buttons = document.querySelectorAll('[data-js="button"]');

buttons.forEach(toggleAnswer);

//Load Pages in Single Page Application
spa();

//Count length of input in create-form
counter();

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

//Append child elements for each card
cards.forEach(item => {
  const homemain = document.querySelector('[data-js="homemain"]');
  console.log(homemain);

  const card = document.createElement('section');
  card.className = 'card';
  homemain.append(card);

  const cardicon = document.createElement('span');
  cardicon.className = 'card__bookmark material-icons md-48';
  cardicon.setAttribute('data-js', 'bookmark');
  cardicon.textContent = item.cardicon;

  const cardheading = document.createElement('h2');
  cardheading.className = 'card__heading';
  cardheading.textContent = item.cardheading;

  const cardtext = document.createElement('p');
  cardtext.className = 'card__text';
  cardtext.textContent = item.cardtext;

  const cardbutton = document.createElement('button');
  cardbutton.className = 'button';
  cardbutton.setAttribute('data-js', 'button');
  cardbutton.textContent = item.cardbutton;

  const cardanswer = document.createElement('p');
  cardanswer.className = 'card__text hidden';
  cardanswer.setAttribute('data-js', 'answer');
  cardanswer.textContent = item.cardanswer;

  const cardtags = document.createElement('div');
  cardtags.className = 'card__tags';
  const cardtag1 = document.createElement('a');
  cardtag1.className = 'card__tag';
  cardtag1.setAttribute('href', '');
  cardtag1.textContent = item.cardtag1;
  cardtags.appendChild(cardtag1);
  const cardtag2 = document.createElement('a');
  cardtag2.className = 'card__tag';
  cardtag2.setAttribute('href', '');
  cardtag2.textContent = item.cardtag2;
  cardtags.appendChild(cardtag2);

  card.appendChild(cardicon);
  card.appendChild(cardheading);
  card.appendChild(cardtext);
  card.appendChild(cardbutton);
  card.appendChild(cardanswer);
  card.appendChild(cardtags);
});

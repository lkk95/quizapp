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

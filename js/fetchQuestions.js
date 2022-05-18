//import { dynamicCards } from './dynamicCards.js';

async function fetchQuestions(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    dynamicCards(data.results);
  } catch (error) {
    console.error(error.message);
  }
}

export { fetchQuestions };

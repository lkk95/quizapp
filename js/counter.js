const selectQuest = document.querySelector('[data-js="questinput"]');
const questCounter = document.querySelector('[data-js="questcounter"]');
const selectAnsw = document.querySelector('[data-js="answinput"]');
const answCounter = document.querySelector('[data-js="answcounter"]');

function counter() {
  selectQuest.addEventListener('input', () => {
    const questLength = selectQuest.value.length;
    questCounter.classList.remove('hidden');
    questCounter.textContent = 'Counter: ' + questLength;
  });

  selectAnsw.addEventListener('input', () => {
    const answLength = selectAnsw.value.length;
    answCounter.classList.remove('hidden');
    answCounter.textContent = 'Counter: ' + answLength;
  });
}

export { counter };

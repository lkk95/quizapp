function toggleAnswer(button) {
  button.addEventListener('click', () => {
    if (button.textContent === 'Show Answer') {
      button.textContent = 'Hide Answer';
    } else {
      button.textContent = 'Show Answer';
    }
    const answer = button.parentNode.querySelector('[data-js="answer"]');
    answer.classList.toggle('hidden');
  });
}

export { toggleAnswer };

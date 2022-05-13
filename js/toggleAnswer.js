function toggleAnswer(button) {
  button.addEventListener('click', () => {
    button.textContent === 'Show Answer'
      ? (button.textContent = 'Hide Answer')
      : (button.textContent = 'Show Answer');

    const answer = button.parentNode.querySelector('[data-js="answer"]');
    answer.classList.toggle('hidden');
  });
}

export { toggleAnswer };

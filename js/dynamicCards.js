function dynamicCards(item) {
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
}

export { dynamicCards };

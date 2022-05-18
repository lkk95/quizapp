function dynamicCards(item) {
  const homemain = document.querySelector('[data-js="homemain"]');

  const card = document.createElement('section');
  card.className = 'card';
  homemain.append(card);

  const cardicon = document.createElement('span');
  cardicon.className = 'card__bookmark material-icons md-48';
  cardicon.setAttribute('data-js', 'bookmark');
  cardicon.textContent = 'bookmark';
  card.appendChild(cardicon);

  const cardheading = document.createElement('h2');
  cardheading.className = 'card__heading';
  cardheading.textContent = 'QUESTION';
  card.appendChild(cardheading);

  const cardtext = document.createElement('p');
  cardtext.className = 'card__text';
  cardtext.textContent = item.cardtext;
  card.appendChild(cardtext);

  const cardbutton = document.createElement('button');
  cardbutton.className = 'button';
  cardbutton.setAttribute('data-js', 'button');
  cardbutton.textContent = 'Show Answer';
  card.appendChild(cardbutton);

  const cardanswer = document.createElement('p');
  cardanswer.className = 'card__text hidden';
  cardanswer.setAttribute('data-js', 'answer');
  cardanswer.textContent = item.cardanswer;
  card.appendChild(cardanswer);

  const tagcontainer = document.createElement('div');
  tagcontainer.className = 'card__tags';
  card.appendChild(tagcontainer);
  const taglist = item.cardtags;
  taglist.forEach(tag => {
    const cardtag = document.createElement('a');
    cardtag.className = 'card__tag';
    cardtag.setAttribute('href', '#');
    cardtag.textContent = tag;
    console.log(cardtag);
    tagcontainer.appendChild(cardtag);
  });
}

export { dynamicCards };

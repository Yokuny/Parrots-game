const parrot = (id) => {
  const getId = () => `id0${id}`;
  let img;
  switch (id) {
    case 1:
      img = "./src/img/bobrossparrot.gif";
      break;
    case 2:
      img = "./src/img/fiestaparrot.gif";
      break;
    case 3:
      img = "./src/img/fiestaparrot.gif";
      break;
    case 4:
      img = "./src/img/metalparrot.gif";
      break;
    case 5:
      img = "./src/img/revertitparrot.gif";
      break;
    case 6:
      img = "./src/img/tripletsparrot.gif";
      break;
    case 7:
      img = "./src/img/unicornparrot.gif";
      break;
    default:
      img = "./src/img/parrot.gif";
      break;
  }
  return { getId, img };
};

function numberOfCards() {
  let cardAmount = 0;
  while (cardAmount < 4 || cardAmount > 14 || cardAmount % 2 !== 0) {
    cardAmount = prompt("Digite a quantidade de cards (entre 4 a 14)");
  }
  return cardAmount;
}

function amountOfCards(amount) {
  let cardList = [];
  for (let i = 0; i <= amount; i++) {
    const parrotCard = parrot(i);
    cardList.push(parrotCard);
  }
  return cardList;
}

let cards = amountOfCards(numberOfCards() / 2);
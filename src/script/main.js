const parrot = (id) => {
  const getId = () => `id0${id}`;
  let src;
  switch (id) {
    case 1:
      src = "./src/img/bobrossparrot.gif";
      break;
    case 2:
      src = "./src/img/explodyparrot.gif";
      break;
    case 3:
      src = "./src/img/fiestaparrot.gif";
      break;
    case 4:
      src = "./src/img/metalparrot.gif";
      break;
    case 5:
      src = "./src/img/revertitparrot.gif";
      break;
    case 6:
      src = "./src/img/tripletsparrot.gif";
      break;
    case 7:
      src = "./src/img/unicornparrot.gif";
      break;
    default:
      src = "./src/img/parrot.svg";
      break;
  }
  return { getId, src };
};

function numberOfCards() {
  //pegando a quantidade de cards
  let cardAmount = 0;
  while (cardAmount < 4 || cardAmount > 14 || cardAmount % 2 !== 0) {
    cardAmount = prompt("Digite a quantidade de cards (entre 4 a 14)");
  }
  return cardAmount;
}

function amountOfCards(amount) {
  // criando os object com id e img src
  let cardList = [];
  for (let i = 1; i <= amount; i++) {
    const parrotCard = parrot(i);
    cardList.push(parrotCard);
  }
  return cardList;
}

function cardElements(obj) {
  // criando os elemento html dos card
  let allCards = [];
  function theCard(id, imgSrc) {
    const frontFaceImg = document.createElement("img");
    frontFaceImg.alt = "Parrot";
    frontFaceImg.src = "./src/img/parrot.svg";

    const frontFace = document.createElement("div");
    frontFace.classList.add("front-face");
    frontFace.classList.add("face");
    frontFace.appendChild(frontFaceImg);

    const backFaceImg = document.createElement("img");
    backFaceImg.src = imgSrc;

    const backFace = document.createElement("div");
    backFace.classList.add("back-face");
    backFace.classList.add("face");
    backFace.appendChild(backFaceImg);

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.id = id;

    cardElement.appendChild(frontFace);
    cardElement.appendChild(backFace);

    return cardElement;
  }
  obj.forEach((element) => {
    allCards.push(theCard(element.getId(), element.src));
  });
  return allCards;
}

let allCard = cardElements(amountOfCards(numberOfCards() / 2));
let field = document.getElementById("gameCanva");
allCard.forEach((element) => {
  field.appendChild(element);
});
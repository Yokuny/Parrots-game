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
  let cardAmount = 0;
  while (cardAmount < 4 || cardAmount > 14 || cardAmount % 2 !== 0) {
    cardAmount = prompt("Digite a quantidade de cards (entre 4 a 14)");
  }
  console.log(`>> peguei a quantidade de cards: ${cardAmount}`);
  return cardAmount;
}
function amountOfCards(amount) {
  let cardList = [];
  for (let i = 1; i <= amount; i++) {
    const parrotCard = parrot(i);
    cardList.push(parrotCard);
  }
  console.log(`>> criei objects: ${cardList}`);
  return cardList;
}
function theCard(id, imgSrc) {
  const frontFaceImg = document.createElement("img");
  frontFaceImg.alt = "Parrot";
  frontFaceImg.src = "./src/img/parrot.svg";

  const frontFace = document.createElement("div");
  frontFace.id = "front-face";
  frontFace.classList.add("face");
  frontFace.appendChild(frontFaceImg);

  const backFaceImg = document.createElement("img");
  backFaceImg.src = imgSrc;

  const backFace = document.createElement("div");
  backFace.id = "back-face";
  backFace.classList.add("face");
  backFace.appendChild(backFaceImg);

  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.id = id;
  cardElement.addEventListener("click", function () {
    cardCheck(this);
  });

  cardElement.appendChild(frontFace);
  cardElement.appendChild(backFace);

  return cardElement;
}
function cardElements(obj) {
  let allCards = [];
  obj.forEach((element) => {
    allCards.push(theCard(element.getId(), element.src));
  });
  obj.forEach((element) => {
    allCards.push(theCard(element.getId(), element.src));
  });
  console.log(`>> transformei tudo em elementos html (cards), e os dupliquei em pares`);
  return allCards;
}
// function multiplyElements(elements) {
//   const doubleSize = [];
//   for (let i = 0; i < elements.length; i++) {
//     for (let j = 0; j < 2; j++) {
//       doubleSize.push(elements[i]);
//     }
//   }
//   console.log(`>> criei pares para as cartas ${doubleSize}`);
//   return doubleSize;
// }
function randomizing(array) {
  let random;
  let holding;
  for (let i = array.length; i; ) {
    random = (Math.random() * i--) | 0;
    holding = array[random];
    array[random] = array[i];
    array[i] = holding;
  }
  return array;
}
function renderAll(array) {
  const canva = document.getElementById("gameCanva");
  //console.log(array.length % 3);
  //pensar em forma de selecionar o size
  canva.classList.add("size4");
  array.forEach((element) => {
    canva.appendChild(element);
  });
}
renderAll(randomizing(cardElements(amountOfCards(numberOfCards() / 2))));

function cardCheck(element) {

  let back = element.querySelector("#back-face");
  back.classList.add("card-selected-back");

  let front = element.querySelector("#front-face");
  front.classList.add("card-selected-front");
  
}


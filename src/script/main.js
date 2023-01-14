const parrot = (id) => {
  const getId = () => `${id}`;
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
  return cardAmount;
}
function amountOfCards(amount) {
  let cardList = [];
  for (let i = 1; i <= amount; i++) {
    const parrotCard = parrot(i);
    cardList.push(parrotCard);
  }
  return cardList;
}
function theCard(id, imgSrc, cardNumber) {
  const frontFaceImg = document.createElement("img");
  frontFaceImg.alt = "Parrot";
  frontFaceImg.src = "./src/img/parrot.svg";
  frontFaceImg.setAttribute("data-test", "face-down-image");
  const frontFace = document.createElement("div");
  frontFace.classList.add("front-face");
  frontFace.classList.add("face");
  frontFace.appendChild(frontFaceImg);
  const backFaceImg = document.createElement("img");
  backFaceImg.src = imgSrc;
  backFaceImg.setAttribute("data-test", "face-up-image");
  const backFace = document.createElement("div");
  backFace.classList.add("back-face");
  backFace.classList.add("face");
  backFace.appendChild(backFaceImg);
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.id = `${id}${cardNumber}`;
  cardElement.setAttribute("data-test", "card");
  cardElement.addEventListener("click", function () {
    cardCheck(this);
  });
  cardElement.appendChild(frontFace);
  cardElement.appendChild(backFace);
  return cardElement;
}
function cardElements(obj) {
  let allCards = [];
  for (let i = 0; i < 2; i++) {
    obj.forEach((element) => {
      allCards.push(theCard(element.getId(), element.src, i));
    });
  }
  return allCards;
}
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
// object to control the game
const gameControl = (cardsAmount) => {
  const getCardQty = () => cardsAmount;
  const visibleCard = [];
  const clearArray = () => (visibleCard.length = 0);
  let hits = 0;
  const missCount = () => hits++;
  let qtyFound = 0;
  const hitCount = () => {
    qtyFound++;
    if (qtyFound == getCardQty()) {
      alert(`Você ganhou em ${hits} jogadas! A duração do jogo foi de ${seconds} segundos!`);
      return true;
    }
  };
  let seconds = 0;
  const playTime = () => {
    seconds++;
    return seconds;
  };
  return { getCardQty, visibleCard, clearArray, hitCount, missCount, playTime };
};
// starting the game
const gc = gameControl(numberOfCards() / 2);
renderAll(randomizing(cardElements(amountOfCards(gc.getCardQty()))));
function setTimer() {
  const spanTime = document.getElementById("timer");
  spanTime.textContent = gc.playTime();
  setTimeout(setTimer, 1000);
}
setTimer();
// game function
function cardReveal(card) {
  const back = card.querySelector(".back-face");
  const front = card.querySelector(".front-face");
  back.classList.add("back-flip");
  front.classList.add("front-flip");
}
function hideCards(element) {
  const back = element.querySelector(".back-face");
  const front = element.querySelector(".front-face");
  back.classList.remove("back-flip");
  front.classList.remove("front-flip");
}
function eachElementToHide() {
  for (let i = 0; i < gc.visibleCard.length; i++) {
    setTimeout(hideCards, 1000, gc.visibleCard[i]);
  }
}
function pairCheck(card) {
  gc.visibleCard.push(card);
  if (gc.visibleCard.length == 2) {
    console.log(parseInt(gc.visibleCard[0].id) + 1);
    console.log(gc.visibleCard[1].id);
    if (
      gc.visibleCard[0].id == parseInt(gc.visibleCard[1].id) + 1 ||
      gc.visibleCard[1].id == parseInt(gc.visibleCard[0].id) + 1
    ) {
      gc.clearArray();
      gc.missCount();
      return true;
    } else {
      eachElementToHide();
      gc.clearArray();
      return false;
    }
  }
  return false;
}
function gameReload() {
  if (gc.hitCount()) {
    while (true) {
      let answer = prompt("Reiniciar?\nDigite:\tsim\tnão");
      if (answer == "não") {
        break;
      } else if (answer == "sim") {
        location.reload();
      }
    }
  }
}
// CallBack
function cardCheck(element) {
  cardReveal(element);
  let hit = pairCheck(element);
  if (hit) {
    gameReload();
  } else {
    gc.missCount();
  }
};


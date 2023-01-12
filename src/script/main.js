const parrot = (id) => {
  const getId = () => `id0${id}`;
  let img;
  switch (id) {
    case 1:
      img = "../img/bobrossparrot.gif";
      break;
    case 2:
      img = "./img/fiestaparrot.gif";
      break;
    case 3:
      img = "./src/img/fiestaparrot.gif";
      break;
    case 4:
      img = "../img/metalparrot.gif";
      break;
    case 5:
      img = "../img/revertitparrot.gif";
      break;
    case 6:
      img = "../img/tripletsparrot.gif";
      break;
    case 7:
      img = "../img/unicornparrot.gif";
      break;
    default:
      img = "../img/parrot.gif";
      break;
  }
  return { getId, img };
};

const parro1 = parrot(3);

const imgElement = document.createElement("img");
imgElement.src = parro1.img;
//
const divDaImg = document.getElementById("ass");
divDaImg.append(imgElement);

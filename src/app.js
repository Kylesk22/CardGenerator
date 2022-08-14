/* eslint-disable */
import "bootstrap";
import "./style.css";

let button1 = document.querySelector("button");

function randomNum() {
  let cardNum = Math.floor(Math.random() * 13) + 2;
  if (cardNum === 11) {
    cardNum = "J";
  } else if (cardNum === 12) {
    cardNum = "Q";
  } else if (cardNum === 13) {
    cardNum = "K";
  } else if (cardNum >= 14) {
    cardNum = "A";
  }
  return cardNum;
}
function randomSuitVal() {
  let suit = Math.floor(Math.random() * 4) + 1;
  return suit;
}

function randomSuit() {
  let suit = randomSuitVal();
  let container = document.getElementById("card-container");
  switch (suit) {
    case 1:
      let heartImg = document.createElement("img");
      heartImg.src = "./src/assets/img/hearts.png";
      heartImg.id = "heart-image";
      container.appendChild(heartImg);

      break;
    case 2:
      let spadeImg = document.createElement("img");
      spadeImg.src = "./src/assets/img/spades.png";
      spadeImg.id = "spade-image";
      container.appendChild(spadeImg);

      break;
    case 3:
      let diamondImg = document.createElement("img");
      diamondImg.src = "./src/assets/img/diamonds.png";
      diamondImg.id = "diamond-image";
      container.appendChild(diamondImg);

      break;
    case 4:
      let clubImg = document.createElement("img");
      clubImg.src = "./src/assets/img/clubs.png";
      clubImg.id = "club-image";
      container.appendChild(clubImg);

      break;

    default:
      break;
  }
  return suit;
}
function removeSuit() {
  let container = document.getElementById("card-container");
  if (document.getElementById("heart-image")) {
    container.removeChild(document.getElementById("heart-image"));
  } else if (document.getElementById("spade-image")) {
    container.removeChild(document.getElementById("spade-image"));
  } else if (document.getElementById("diamond-image")) {
    container.removeChild(document.getElementById("diamond-image"));
  } else if (document.getElementById("club-image")) {
    container.removeChild(document.getElementById("club-image"));
  }
}

function randomCardNum1(cardNum) {
  let cardContainer = document.getElementById("card-container");
  let firstNumObj = document.createElement("div");
  firstNumObj.id = "firstNumber";

  firstNumObj.innerHTML = cardNum;

  if (cardNum === 10) {
    firstNumObj.id = "firstNumber10";
  }

  return firstNumObj;
}

function randomCardNum2(cardNum) {
  let cardContainer = document.getElementById("card-container");

  let secondNumObj = document.createElement("div");
  secondNumObj.id = "secondNumber";

  secondNumObj.innerHTML = cardNum;

  if (cardNum === 10) {
    secondNumObj.id = "secondNumber10";
  }

  return secondNumObj;
}

function SuitAndNumCard() {
  let cardContainer = document.getElementById("card-container");

  let cardNum = randomNum();

  let num1 = randomCardNum1(cardNum);
  let num2 = randomCardNum2(cardNum);

  if (cardContainer.hasChildNodes()) {
    if (
      document.getElementById("secondNumber") &&
      document.getElementById("firstNumber")
    ) {
      cardContainer.removeChild(document.getElementById("firstNumber"));
      cardContainer.removeChild(document.getElementById("secondNumber"));
      removeSuit();
    } else if (
      document.getElementById("secondNumber10") &&
      document.getElementById("firstNumber10")
    ) {
      cardContainer.removeChild(document.getElementById("firstNumber10"));
      cardContainer.removeChild(document.getElementById("secondNumber10"));
      removeSuit();
    }
  }

  cardContainer.appendChild(num1);
  cardContainer.appendChild(num2);
  const suit = randomSuit();

  let children = cardContainer.childNodes;
  for (let i = 0; i < children.length; i++) {
    if (suit === 1 || suit === 3) {
      cardContainer.children[i].style.color = "#b30000";
    } else {
      cardContainer.children[i].style.color = "black";
    }
  }
}
button1.addEventListener("click", SuitAndNumCard);

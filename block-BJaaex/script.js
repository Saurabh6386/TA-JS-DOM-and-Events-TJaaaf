// Card data
const cardsArray = [
  {
    name: "shell",
    img: "img/blueshell.png",
  },
  {
    name: "star",
    img: "img/star.png",
  },
  {
    name: "bobomb",
    img: "img/bobomb.png",
  },
  {
    name: "mario",
    img: "img/mario.png",
  },
  {
    name: "luigi",
    img: "img/luigi.png",
  },
  {
    name: "peach",
    img: "img/peach.png",
  },
  {
    name: "1up",
    img: "img/1up.png",
  },
  {
    name: "mushroom",
    img: "img/mushroom.png",
  },
  {
    name: "thwomp",
    img: "img/thwomp.png",
  },
  {
    name: "bulletbill",
    img: "img/bulletbill.png",
  },
  {
    name: "coin",
    img: "img/coin.png",
  },
  {
    name: "goomba",
    img: "img/goomba.png",
  },
];

// select root elm where we need to put every thing
let game = document.getElementById("game");

// add cardsarray twice
let allcards = cardsArray.concat(cardsArray);

// randomize the card indexes
allcards.sort(() => 0.5 - Math.random());

let steps = document.querySelector(".steps");

// create a section where we put our cards
let grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.append(grid);

// creating UI to display card on screen
allcards.forEach((item) => {
  let card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = item.name;

  // Create front of card
  const front = document.createElement("div");
  front.classList.add("front");

  // Create back of card, which contains
  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(${item.img})`;

  // Append card to grid, and front and back to each card
  card.appendChild(front);
  card.appendChild(back);
  grid.appendChild(card);
});

let firstclick = "";
let secondclick = "";
let count = 0;
let first = null;
let totalclick = 0;

grid.addEventListener("click", (event) => {
  let clicked = event.target;
  if (
    clicked.parentNode.id == "game" ||
    clicked.parentNode == first ||
    clicked.parentNode.classList.contains("selected") ||
    clicked.parentNode.classList.contains("match")
  ) {
    return;
  }

  if (count < 2) {
    count++;
    clicked.parentNode.classList.add("selected");

    if (count === 1) {
      firstclick = clicked.parentNode.dataset.name;
    } else {
      secondclick = clicked.parentNode.dataset.name;
      totalclick++;
      steps.innerHTML = totalclick;
    }
    match();
  }
  first = clicked.parentNode;
});

let wincount = 0;
function match() {
  if (firstclick != "" && secondclick != "") {
    if (firstclick == secondclick) {
      wincount = Number(wincount) + 1;

      setTimeout(() => {
        var selected = document.querySelectorAll(".selected");
        selected.forEach((card) => card.classList.add("match"));
        resetmatch();
      }, 1000);
      setTimeout(() => {
        won();
      }, 1100);
    } else {
      setTimeout(() => {
        resetmatch();
      }, 1000);
    }
  }
}

function resetmatch() {
  firstclick = "";
  secondclick = "";
  count = 0;
  first = null;
  var selected = document.querySelectorAll(".selected");
  selected.forEach((card) => card.classList.remove("selected"));
}

function won() {
  if (wincount === cardsArray.length) {
    alert(`Congratulations! You won in ${totalclick} moves!`);
  }
}

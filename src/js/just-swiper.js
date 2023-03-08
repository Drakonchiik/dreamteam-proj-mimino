console.clear();
const bgUrls = [
  
];
const container = document.querySelector(".container");
const cards = document.querySelectorAll(".card");
let xVal = 0;
let xRate = 120;
let sVal = 1;
let sRate = 0.1;
let zIndex = 1;
let forwardCount = 0;

//INITAL SETUP
for (let i = 0; i < cards.length; i++) {
  cards[i].style.setProperty("--xVal", `${xVal}%`);
  cards[i].style.setProperty("--sVal", `${sVal}`);
  cards[i].style.setProperty("--z-index", `${zIndex}`);
  xVal += xRate;
  sVal -= sRate;
  zIndex--;
}

const moveForward = () => {
  if (forwardCount < cards.length - 1) {
    cards.forEach((card) => {
      let xVal = parseFloat(
        card.style.getPropertyValue("--xVal").replace("%", "")
      );
      let sVal = parseFloat(card.style.getPropertyValue("--sVal"));
      let zInd = parseFloat(card.style.getPropertyValue("--z-index"));

      card.style.setProperty("--xVal", `${xVal - xRate}%`);

      if (xVal <= 0) {
        card.style.setProperty("--sVal", `${sVal - sRate}`);
        card.style.setProperty("--z-index", zInd - 1);
      } else {
        card.style.setProperty("--sVal", `${sVal + sRate}`);
        card.style.setProperty("--z-index", zInd + 1);
      }
    });

    forwardCount++;
  }
};

const moveBackwards = () => {
  if (forwardCount) {
    cards.forEach((card) => {
      let xVal = parseFloat(
        card.style.getPropertyValue("--xVal").replace("%", "")
      );
      let sVal = parseFloat(card.style.getPropertyValue("--sVal"));
      let zInd = parseFloat(card.style.getPropertyValue("--z-index"));

      card.style.setProperty("--xVal", `${xVal + xRate}%`);

      if (xVal < 0) {
        card.style.setProperty("--sVal", `${sVal + sRate}`);
        card.style.setProperty("--z-index", zInd + 1);
      } else {
        card.style.setProperty("--sVal", `${sVal - sRate}`);
        card.style.setProperty("--z-index", zInd - 1);
      }
    });

    forwardCount--;
  }
};

container.addEventListener("wheel", (e) => {
  if (e.deltaY === 100) {
    moveForward();
  } else {
    moveBackwards();
  }
});
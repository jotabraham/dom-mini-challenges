"use strict";

// #1
let total = 0;
let totalParagraph = document.querySelector(".total");
let cola = document.querySelector(".cola");
let peanuts = document.querySelector(".peanuts");
let chocolate = document.querySelector(".chocolate");
let gummies = document.querySelector(".gummies");

cola.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `Total: $${total}`;
});
peanuts.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `Total: $${total}`;
});
chocolate.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `Total: $${total}`;
});
gummies.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `Total: $${total}`;
});

// #2
let coinsContainer = document.querySelector(".coins-container");
let moneyForm = document.querySelector(".money-form");

const display = () => {
  let coin = document.createElement("div");
  coin.classList.add("coin");
  coinsContainer.append(coin);
};

moneyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(moneyForm);
  let howMany = formData.get("number");
  let coinType = formData.get("coin");
  for (let i = 1; i <= howMany; i++) {
    coinsContainer.append(coinType);
    display();
  }
});

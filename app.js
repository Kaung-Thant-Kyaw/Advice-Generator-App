"use strict";

const adviceId = document.querySelector("#adviceId");
const adviceText = document.querySelector("#adviceText");
const btn = document.querySelector("#btn");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const adviceIdd = adviceData.slip.id;
      const advice = adviceData.slip.advice;
      adviceId.textContent = adviceIdd;
      adviceText.innerHTML = `<div>${advice}</div>`;
    })
    .catch((error) => {
      console.log(error);
    });
}

btn.addEventListener("click", function () {
  getAdvice();
});

window.onload = function () {
  getAdvice();
};

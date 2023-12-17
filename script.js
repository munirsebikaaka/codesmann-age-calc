"use strict";
let currentYear = 2023;
document.querySelector(".check").addEventListener("click", function () {
  const inputs = Number(document.querySelector(".input").value);
  console.log(inputs, typeof inputs);
  if (!inputs) {
    document.querySelector(".message").textContent =
      "Please enter your birth year...!!!";
  } else if (currentYear - inputs) {
    currentYear - inputs;
    document.querySelector(".message").textContent = `You are ${
      currentYear - inputs
    } years old`;
    if (currentYear - inputs < 18) {
      document.querySelector(
        ".message"
      ).textContent = `You are still young with ${
        currentYear - inputs
      } years old `;
    }
  }
});
document.querySelector(".clear").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Your age is......";
  document.querySelector(".input").value = "";
});

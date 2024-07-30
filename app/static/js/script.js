/** @format */

"use strict";

const slider = document.querySelector(".main__slider");
const images = document.querySelectorAll(".slider__img");
const sliderLeft = document.querySelector(".sliderLeft");
const sliderRight = document.querySelector(".sliderRight");

let slideNum = 0;
sliderLeft.addEventListener("click", () => {
  slideNum--;

  for (let i of images) {
      if (slideNum < 0) {
       slideNum = 0
      i.style.translate = "0%";
    } else i.style.translate = `${slideNum * -100}% `;
  }
});

sliderRight.addEventListener("click", () => {
  slideNum++;
  console.log(slideNum);
  for (let i of images) {
      if (slideNum > images.length - 1) {
          slideNum = 0
       i.style.translate = "0%" ;
      } else {
          i.style.translate = `${slideNum * -100}% `
          console.log(slideNum);
      }
  }
});

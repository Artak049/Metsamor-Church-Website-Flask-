"use strict"

const slider = document.querySelector(".main__slider");
const images = document.querySelectorAll(".slider__img");
const sliderLeft = document.querySelector(".sliderLeft");
const sliderRight = document.querySelector(".sliderRight");


sliderLeft.addEventListener("click", () => {
    for (let i of images) {
      i.style.translate = "0%"
   }
})

sliderRight.addEventListener("click", () => {
    for (let i of images) {
      i.style.translate = "-100%"
   }
})

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

if (slider) {
   slider.insertBefore(sliderSectionLast, slider.firstChild);
}

function moveRight() {
   let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
   slider.style.marginLeft = "-100%";
   slider.style.transition = "all 0.5s";
   setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement("beforeend", sliderSectionFirst);
   }, 500);
}
btnRight.addEventListener("click", function () {
   moveRight();
});
function moveLeft() {
   let sliderSection = document.querySelectorAll(".slider__section");
   let sliderSectionLast = sliderSection[sliderSection.length - 1];
   slider.style.marginLeft = "100";
   slider.style.transition = "all 0.5s";
   setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement("afterbegin", sliderSectionLast);
   }, 500);
}
btnLeft.addEventListener("click", function () {
   moveLeft();
});

setInterval(function () {
   moveRight();
}, 4000);

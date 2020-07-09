const left = document.querySelector(".left");
const right = document.querySelector(".right");
const itemsList = document.querySelector(".slider");
const computedStyles = window.getComputedStyle(itemsList);
const items = document.querySelectorAll(".slider__item");


const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
console.log(itemWidth);
const step = parseInt(itemWidth);
const preShownItems = parseInt(itemWidth) / step;
const maxRight = (items.length - preShownItems) * step;
let currentRight = 0;





itemsList.style.right = currentRight;

right.addEventListener("click", e => {
  e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    itemsList.style.right = `${currentRight}px`;
  }
})

left.addEventListener("click", e => {
  e.preventDefault();

  if (currentRight > minRight) {
    currentRight -= step;
    itemsList.style.right = `${currentRight}px`;
  }
})
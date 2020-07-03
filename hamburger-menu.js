const openButton =document.querySelector(".hamburger");
const closeButton=document.querySelector(".close__link");



openButton.addEventListener('click', event=> {

  const overlay = document.querySelector('.hamburger-block');

overlay.style.display = "block";
event.preventDefault();

})


closeButton.addEventListener('click', event=> {

  const overlay = document.querySelector('.hamburger-block');

overlay.style.display = "none";


})









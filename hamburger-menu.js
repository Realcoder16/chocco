const openButton =document.querySelector(".hamburger");
const closeButton=document.querySelector(".close__link");
const body = document.body



openButton.addEventListener('click', event=> {


  const overlay = document.querySelector('.hamburger-block');

overlay.style.display = "block";
body.style.overflow = 'hidden';

event.preventDefault();

})


closeButton.addEventListener('click', event=> {

  const overlay = document.querySelector('.hamburger-block');

overlay.style.display = "none";
body.style.overflow = "visible";


})









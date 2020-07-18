(function() {
  

const openButton =document.querySelector(".hamburger");
const closeButton=document.querySelector(".close__link");
const body = document.body
 const overlay = document.querySelector('.hamburger-block');
const Items = document.querySelectorAll(".hamburger-menu__item");

openButton.addEventListener('click', event=> {


  

overlay.style.display = "block";
body.style.overflow = 'hidden';

event.preventDefault();

})


closeButton.addEventListener('click', event=> {
  event.preventDefault();
 

overlay.style.display = "none";
body.style.overflow = "visible";


})


for (let index = 0; index < Items.length; index++) {

Items[index].addEventListener('click', function (event) {


   

  overlay.style.display = "none";
  body.style.overflow = "visible";

});



}

})()
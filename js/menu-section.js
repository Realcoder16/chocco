
(function() {


const close = document.querySelectorAll('.close__link--menu');
const hidden = document.querySelectorAll('.menu-section__hidden');

const imageItems = document.querySelectorAll('.menu-section__photo');





document.addEventListener("DOMContentLoaded", function (event) {
  /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
  var widthWind = document.querySelector('body').offsetWidth;
  if (widthWind > 769) {

    for (let index = 0; index < imageItems.length; index++) {

      imageItems[index].addEventListener('click', function (event) {

        if (!hidden[index].classList.contains('menu-section__hidden--animated')) {


          for (let k = 0; k < imageItems.length; k++) {
            hidden[k].classList.remove('menu-section__hidden--animated')
            hidden[k].classList.remove('menu-section__hidden--animated--close')

          };

          hidden[index].classList.add('menu-section__hidden--animated')

        }

        

      });

    }

    for (let j = 0; j < close.length; j++) {

      close[j].addEventListener('click', function (event) {
        event.preventDefault();
        hidden[j].classList.remove('menu-section__hidden--animated');
        if (!hidden[j].classList.contains('menu-section__hidden--animated')) {

          hidden[j].classList.add('menu-section__hidden--animated--close')

        }



      });

    }


  } else {


    for (let index = 0; index < imageItems.length; index++) {

      imageItems[index].addEventListener('click', function (event) {

        for (let k = 0; k < imageItems.length; k++) {
          hidden[k].classList.remove('menu-section__hidden--animated--768')
          hidden[k].classList.remove('menu-section__hidden--animated--close--768')

        };

        hidden[index].classList.add('menu-section__hidden--animated--768')

      });

    }


    for (let j = 0; j < close.length; j++) {

      close[j].addEventListener('click', function (event) {
        event.preventDefault();
        hidden[j].classList.remove('menu-section__hidden--animated--768');
        if (!hidden[j].classList.contains('menu-section__hidden--animated--768')) {

          hidden[j].classList.add('menu-section__hidden--animated--close--768')

        }



      });

    }







  }









});


})()

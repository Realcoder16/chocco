

const close = document.querySelectorAll('.close__link--menu');
const hidden = document.querySelectorAll('.menu-section__hidden');

const imageItems = document.querySelectorAll('.menu-section__photo');

for (let index = 0; index < imageItems.length; index++) {
  
  imageItems[index].addEventListener('click', function (event) {

    for(let k = 0; k < imageItems.length; k++) {
      hidden[k].classList.remove('menu-section__hidden--animated')
      hidden[k].classList.remove('menu-section__hidden--animated--close')

    };

      hidden[index].classList.add('menu-section__hidden--animated')
    
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


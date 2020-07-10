
const reviewItems = document.querySelectorAll('.reviews__items');
const switcherItems = document.querySelectorAll('.reviews__switcher-item');

const reviewArr = Array.from(reviewItems);
const switcherArr =  Array.from(switcherItems);



document.querySelector('.reviews__switcher').addEventListener('click',e => {
  
  e.preventDefault();


  const i = switcherArr.indexOf(e.target);

  if (i !== -1) {



    if (i == 1) {
            reviewArr[i-1].style.display = 'none';
            reviewArr[i].style.display = 'flex';
    }

    if (i == 2) {
      reviewArr[i-1].style.display = 'none';
      reviewArr[i-2].style.display = 'none';
      reviewArr[i].style.display = 'flex';
   }

    else {
      reviewArr[i].style.display = 'flex';

    }
  }

});



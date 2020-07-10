
const reviewItems = document.querySelectorAll('.reviews__items');
const switcherItems = document.querySelectorAll('.reviews__switcher-item');

const reviewArr = Array.from(reviewItems);
const switcherArr = Array.from(switcherItems);



document.querySelector('.reviews__switcher').addEventListener('click', e => {
  e.preventDefault();

$this=(e.currentTarget);
console.log($this);

 switcherArr.forEach((element) =>{

         element.classList.remove('interactive-avatar--active');
         

      });

      const i = switcherArr.indexOf($this);

  if (i !== -1) {



    if (i == 1) {
      reviewArr[i - 1].style.display = 'none';
      reviewArr[i].style.display = 'flex';
      switcherArr[i].classList.add('interactive-avatar--active');

     
     
    }

    if (i == 2) {
      reviewArr[i - 1].style.display = 'none';
      reviewArr[i - 2].style.display = 'none';
      reviewArr[i].style.display = 'flex';
      switcherArr[i].classList.add('interactive-avatar--active');

    

    }

    else {
      reviewArr[i].style.display = 'flex';
      switcherArr[i].classList.add('interactive-avatar--active');

     


    }
  }

});


  

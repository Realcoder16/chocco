
const reviewItems = document.querySelectorAll('.reviews__items');
const switcherItems = document.querySelectorAll('.reviews__switcher-item');
const switcherImg = document.querySelectorAll('.interactive-avatar__img');

const reviewArr = Array.from(reviewItems);
const switcherArr = Array.from(switcherItems);
const switcherImgArr = Array.from(switcherImg);


document.querySelector('.reviews__switcher').addEventListener('click', e => {
  e.preventDefault();
  var elem = e.target;

  const i = switcherImgArr.indexOf(elem);


  switcherArr.forEach((element) => {

    element.classList.remove('interactive-avatar--active');

  });

  switcherArr[i].classList.add('interactive-avatar--active');

  if (i !== -1) {

    reviewArr.forEach((element) => {
      element.style.display = 'none';
    });

    reviewArr[i].style.display = 'flex';
  }

});






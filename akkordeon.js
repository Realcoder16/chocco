const openItem = item => {
  const container = item.closest(".team__item");


  const contentBlock = container.find(".team__content");


  const textBlock = contentBlock.find(".team__hidden");
  const reqHeight = textBlock.height();

  contentBlock.height(reqHeight);
  console.log(reqHeight);
  const arrowS = container.find('.arrow-before');
  const head = container.find(".team__subtitle");;
   head.addClass('team__subtitle--active');
    arrowS.attr('src', './decor/arrow-after.png');
  
}

const closeEveryItem = container => {
  const items = container.find('.team__content');
  const head = items.siblings('.team__subtitle')
  const arrowS = head.find('.arrow-before');
  items.height(0);
   head.removeClass('team__subtitle--active');  
    arrowS.attr('src', './decor/arrow-before.png');

  

}


$('.team__subtitle').on('click', e => {

  
  const $this = $(e.currentTarget);
  const container = $this.closest('.team__list');


if ($this.hasClass('team__subtitle--active')){

 closeEveryItem(container); 

}
else {
  closeEveryItem(container);
  openItem($this);
}

  




});


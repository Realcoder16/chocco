const openItem = item => {
  const container = item.closest(".team__item");


  const contentBlock = container.find(".team__content");


  const textBlock = contentBlock.find(".team__hidden");
  const reqHeight = textBlock.height();

  contentBlock.height(reqHeight);
  console.log(reqHeight);



}

const closeEveryItem = container => {
  const items = container.find('.team__content');
  const head = items.siblings('.team__subtitle')
  const arrow = head.find('.subtitle__img');
  const arrowS = arrow.find('.arrow-before');
  items.height(0);
   head.removeClass('team__subtitle--active');
    arrowS.attr('src', './decor/arrow-before.png');

  

}

const headChanger = fignya => {
  const arrow = fignya.find('.subtitle__img');
  const arrowS = arrow.find('.arrow-before');
  const head = fignya;
  const contentBlock = fignya.siblings('.team__content')
  const textBlock = contentBlock.find('.team__hidden');


  const reqHeight = textBlock.height();


  if (contentBlock.height(reqHeight) !== 0) {
    head.addClass('team__subtitle--active');
    arrowS.attr('src', './decor/arrow-after.png');
  }
  




}


$('.team__subtitle').on('click', e => {

  const $this = $(e.currentTarget);
  const container = $this.closest('.team__list');
  const fignya = $this;


  closeEveryItem(container);
  headChanger(fignya);
  openItem($this);




});


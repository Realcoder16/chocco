const openItem = item => {
  const container = item.closest(".team__item");
  const contentBlock = container.find(".team__content");
  const textBlock = contentBlock.find(".team__hidden");
  const reqHeight = textBlock.height();
  
  contentBlock = textBlock(reqHeight);
  
  }
  
    $('.team__subtitle').on('click', e => {
  
  const $this = $(e.currentTarget);
   
      $this.toggleClass('team__subtitle--active');
  
     openItem.$this;
  
      
  
  
  
  
  });
  
  
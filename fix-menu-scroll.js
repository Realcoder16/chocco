const section = $(".scroll");
const display = $(".maincontent");
const footer = $(".footer");

const sideMenu = $(".fixed-menu");
const menuItems = sideMenu.find('.fixed-menu__item');




let inScroll = false;



section.first().addClass("active");

const countSectionPosition = sectionEq => {
  return sectionEq * -100
}


const resetActiveClass = (items, itemEq, activeClass) => {


  items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);


}

const performTransition = sectionEq => {

  if (inScroll) return;

  const transitionOver = 1000;
  const mouseInertiaOver = 300;


  inScroll = true;
  const position = countSectionPosition(sectionEq);

  display.css({
    transform: `translateY(${position}%)`
  });

  resetActiveClass(section, sectionEq, "active");



  setTimeout(() => {
    inScroll = false;

    resetActiveClass(menuItems, sectionEq, 'fixed-menu__item--active');

  }, transitionOver + mouseInertiaOver);
}


const viewportScroller = () => {

  const activeSection = section.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  return {
    next() {

      if (nextSection.length) {

        performTransition(nextSection.index())
      }

    },

    prev() {

      if (prevSection.length) {

        performTransition(prevSection.index())


      }
    },


  };
};
$(window).on("wheel", e => {

  const deltaY = e.originalEvent.deltaY;
  const scroller =viewportScroller();

  if (deltaY > 0) {
    scroller.next();
  }

  if (deltaY < 0) {
    scroller.prev();

  }

  console.log(deltaY);


});

$(window).on("keydown", e => {
  const tagName = e.target.tagName.toLowerCase();
  const UserTypingInInputs = tagName === "input" || tagName === 'textarea';
  const roller =viewportScroller();
  if (UserTypingInInputs) return;

  switch (e.keyCode) {
    case 38: //prev
roller.prev();
      break;

    case 40: //prev
    roller.next();
    break;

  }



});



$("[data-scroll-to]").click(e => {


  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-scroll-to");
  const reqSection = $(`[data-section-id=${target}]`);
  console.log(reqSection.index());

  performTransition(reqSection.index());

})


$(".wrapper").on("touchmove", e =>e.preventDefault());





$("body").swipe({

swipe:function(
  event,
  direction) {
    const scroller =viewportScroller();
     let scrollDirection = "";

     if(direction === "up") scrollDirection = "next";
     if(direction === "down") scrollDirection = "prev";

     alert(direction);

     scroller[scrollDirection]();
    },

  });


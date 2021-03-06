const validateField = (form, fieldArray, digitsArray) => {

  fieldArray.forEach(field => {
    field.removeClass('input--error');
    if ((field.val().trim() === "") || (field.val() > -Infinity || field.val() < Infinity)) {
      field.addClass('input--error');
    }

  });
    digitsArray.forEach(field => {
      field.addClass('input--error');
     
      if (field.val() > 0 || field.val() <= 9) {
        field.removeClass('input--error')
      }




    });

  





  const errorField = form.find('.input--error');

  return errorField.length == 0;

};

$('.form').submit(e => {

  e.preventDefault();

  const form = $(e.currentTarget);
  const name = form.find("[name='name']");
  var phone = form.find("[name='phone']");
  const comment = form.find("[name='comment']");
  const to = form.find("[name='to']");
  const street = form.find("[name='street']");
  const home = form.find("[name='home']");
  const part = form.find("[name='part']");
  const apart = form.find("[name='apart']");
  const floor = form.find("[name='floor']");
  const modal = $("#modal");
  const content = modal.find(".modal__content");


  const isValid = validateField(form, [name, comment, street, to], [phone, home, part, apart, floor]);


  if (isValid) {

    const request = $.ajax({

      url: "https://webdev-api.loftschool.com/sendmail",
      method: "post",

      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val(),
        street: street.val(),
        home: home.val(),
        part: comment.val(),
        apart: comment.val(),
        floor: comment.val(),


      },





    });

    request.done((data) => {
      content.text(data.message);
      $('.form').trigger('reset');

    });

    request.fail((data) => {
      console.log(data);
      const message = data.responseJSON.message;

      content.text(message);
    });

    request.always((data) => {
      $.fancybox.open({
        src: "#modal",
        type: "inline"

      });
    });

  }

  

});








$('.fancybox--js').on('click', e => {
  e.preventDefault();

  $.fancybox.close();

});



import "./index.sass";

const $form = $(".contact-us__form");
const $formTextarea = $(".form__textarea");
const $textareaCounter = $(".textarea__counter-min");
const $buttonUp = $(".js-button-up");

$formTextarea.on("keyup", function() {
  $textareaCounter.text(this.value.replace(/{.*}/g, "").length);
});

$form.on("submit", function(event) {
  event.preventDefault();
  $.ajax({
    url: "https://httpbin.org/post",
    method: "post",
    dataType: "json",
    data: $(this).serialize(),
    success: function(data) {
      console.log(data);
      $(".success-send").addClass("success-send--visible");
      $(".contact-us__content").addClass("contact-us__content--hide");
    }
  });
});
$(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      $buttonUp.show();
    } else {
      $buttonUp.hide();
    }
  });

  $buttonUp.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

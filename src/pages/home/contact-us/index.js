import "./index.sass";

const $form = $(".contact-us__form");
const $formTextarea = $(".form__textarea");
const $textareaCounter = $(".textarea__counter-min");

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



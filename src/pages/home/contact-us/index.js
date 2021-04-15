import "./index.sass";

$(".form__textarea").on("keyup", function() {
  $(".textarea__counter-min").text(this.value.replace(/{.*}/g, "").length);
});

$(".contact-us__form").on("submit", function(event) {
  event.preventDefault();
  $.ajax({
    url: "http://httpbin.org/post",
    method: "post",
    dataType: "json",
    data: $(this).serialize(),
    success: function(data) {
      console.log(data);
      $(".contact-us__success").addClass("contact-us__success--visible");
      $(".contact-us__content").addClass("contact-us__form--hide");
    }
  });
});

$(".js-success").on("click", function() {
  $(".contact-us__form").trigger("reset");
  $(".contact-us__success").removeClass("contact-us__success--visible");
  $(".contact-us__content").removeClass("contact-us__form--hide");
});

$(".js-button-up").on("click", function() {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});

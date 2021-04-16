import "./index.sass";

$(".js-success").on("click", function() {
  $(".success-send").fadeOut(300);
  $(".contact-us__form").trigger("reset");
  $(".contact-us__content").fadeIn(2000);
});

import "./index.sass";

const $successButton = $(".js-success");

$successButton.on("click", function() {
  $(".contact-us__form").trigger("reset");
  $(".success-send").removeClass("success-send--visible");
  $(".contact-us__content").removeClass("contact-us__content--hide");
});

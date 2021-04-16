import "./index.sass";

$(".form__textarea").on("keyup", function() {
  $(".textarea__counter-min").text(this.value.replace(/{.*}/g, "").length);
});

$(".contact-us__form").on("submit", function(event) {
  event.preventDefault();
  $.ajax({
    url: "https://httpbin.org/post",
    method: "post",
    dataType: "json",
    data: $(this).serialize(),
    success: function(data) {
      console.log(data);
      $(".success-send").fadeIn(2000);
      $(".contact-us__content").fadeOut(300);
    }
  });
});

$(".js-button-up").on("click", function() {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});

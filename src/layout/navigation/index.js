export default () => {
  $(".js-nav-link").on("click", function() {
    let $el = $(this).attr("href");

    $el = $el.replace(/[^\#]*/, ""); //вытаскиваем id из ссылки
    
    $("body,html").animate(
      {
        scrollTop: $($el).offset().top
      },
      1000
    );
    return false;
  });
};

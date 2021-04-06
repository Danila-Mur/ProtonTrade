import './header.sass';

const $burger = $('.js-burger');
const $burgerItem = $burger.find(".header__burger-item");
const $menu = $(".js-open-nav");

$(window).on("resize", function() {
  if ($(document).outerWidth() > 768) {
    $menu.css("display", "");
    $burgerItem.hasClass("header__burger-item--open")
      ? $burgerItem.removeClass("header__burger-item--open")
      : null;
  }
});
$burger.on("click", function() {
  $menu.slideToggle();
  $burgerItem.toggleClass("header__burger-item--open");
  $menu.css('display', 'flex');
});
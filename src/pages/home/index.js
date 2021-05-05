import "./index.sass";
import "./index.pug";

import "./intro";
import "./opportunities";
import "./features";
import "./banner";
import "./partners";
import "./contact-us";
import "./success-send";

export default () => {
  const $buttonUp = $(".js-button-up");

  $(function() {
    $(window).on("scroll", function() {
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
};

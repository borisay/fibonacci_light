/**
 * Created by borisayupov on 11/11/16.
 */
(function ($) {
  Drupal.behaviors.test = {
    attach: function (context, settings) {
      $('body').find('#block-defaultregioncustomblock img').click(function () {
        $(this).css("display","none");
      });
    }
  };
})(jQuery);
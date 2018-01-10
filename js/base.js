/**
 * Created by borisayupov on 11/13/16.
 */
! function($) {
  $(document).ready(function() {
    //-- Search icon
    (function() {

      $(".open-form").click(function(){
        $(".open-form").hide();
        $(".close-form").css("display","block");
        $(".search-block-form").show();
        $(".search-block-form input").focus();
        return false;
      });
      $(".close-form").click(function(){
        $(".close-form").hide();
        $(".open-form").css("display","block");
        $(".search-block-form").hide();
        return false;
      });

    })();
  });
}(jQuery);
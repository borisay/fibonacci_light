/**
 * Created by borisayupov on 12/8/16.
 */
(function($) {
  $(document).ready(function() {
    var $accordion = $('#accordion');
    var $row = $accordion.find('.views-row');
    var $title = $row.find('div:nth-child(2):not(.field-content)');
    $row.filter(":first").addClass('first').addClass("current");
    $title.hover(function() {
      if ($(this).parent().hasClass("current")) {
      } else {
        $row.removeClass('current');
        $(this).parent().addClass('current');
      }
      return false;
    });
  });
})(jQuery);
$(document).ready(function() {
  $("#services").click(function() {
    $(".services").toggle();
  });

  $("#prep").click(function() {
    $(".prep").slideToggle();
  });

  $("#core").click(function() {
    $(".row").fadeToggle();
  });
});

$(document).ready(function () {
  $(".container").click(function () {
    $(".backgroundtopsection").toggleClass("displayblock");
    $(".nav-items").slideToggle("fast");
    $(".bar1").toggleClass("change1");
    $(".bar2").toggleClass("change2");
    $(".bar3").toggleClass("change3");
  })
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('#nav-id').addClass('navbarclass');
    $('#nav-items').addClass('navbarclass');
  }
  else {
    $('#nav-id').removeClass('navbarclass');
    $('#nav-items').removeClass('navbarclass');
  }
});

$(document).ready(function() {
	$(".button").hover(function(){
        $(this).css("background-color", "coral");
    }, function(){
        $(this).css("background-color", "#a6d31d");
    });

    $('navbar a.nav-item').click(function()
    {
      $('navbar a.nav-item').removeClass(" active");
      $(this).addClass(" active");
    });


});
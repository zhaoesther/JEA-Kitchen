$(document).ready(function() {
    $('navbar a.nav-item').click(function()
    {
      $('navbar a.nav-item').removeClass(" active");
      $(this).addClass(" active");
    });
	

    $("#panel").hide(0);
    $("#add-ingredient").click(function(){
    	$("#panel").show(500);
    });


});

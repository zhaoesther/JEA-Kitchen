$(document).ready( function() {
    $("#panel").hide(0);
    $("#add-ingredient").click(function(){
    	$("#panel").show(500);
    });

    // Navbar Active Item selection
    $('navbar a.nav-item').click(function()
    {
      $('navbar a.nav-item').find(".active").removeClass(" active");
      $(this).parent().addClass(" active");
    });
});

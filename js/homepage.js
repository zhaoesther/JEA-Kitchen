$(document).ready(function() {
    
    
    // Navbar Active Item selection
    $('navbar a.nav-item').click(function()
    {
      $('navbar a.nav-item').find(".active").removeClass(" active");
      $(this).parent().addClass(" active");
    });


});

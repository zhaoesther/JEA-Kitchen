$(document).ready(function() {
    $('navbar a.nav-item').click(function()
    {
      $('a.nav-item').find(".active").removeClass(" active");
      $(this).parent().addClass(" active");
      
    });


});

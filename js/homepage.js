$(document).ready(function() {
    $('navbar a.nav-item').click(function()
    {
      $('navbar a.nav-item').removeClass(" active");
      $(this).addClass(" active");
    });


});

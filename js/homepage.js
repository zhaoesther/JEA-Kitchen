$(document).ready(function() {
    
    
    // Navbar Active Selection
    var url = window.location;
    $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
    $('ul.nav a').filter(function() {
          return this.href == url;
    }).parent().addClass('active');

});

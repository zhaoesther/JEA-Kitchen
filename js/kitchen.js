$(document).ready( function() {
    $("#panel").hide(0);
    $("#add-ingredient").click(function(){
    	$("#panel").show(500);
    });

    // Navbar Active Selection
    $('navbar a.nav-item').click(function()
    {
      $('navbar a.nav-item').find(".active").removeClass(" active");
      $(this).parent().addClass(" active");
      setNavigation();
      console.log("Figure out how to change active class");
    });
    
    // Get the modal
    var kitchenmodal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
        kitchenmodal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        kitchenmodal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == kitchenmodal) {
            kitchenmodal.style.display = "none";
        }
    }

    // SEARCH FOR INGREDIENT SEARCHBAR INPUTS
    // Get the input field
    var input = document.getElementById("myInput");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Trigger the button element with a click
        document.getElementById("submit").click();
      }
    });
});

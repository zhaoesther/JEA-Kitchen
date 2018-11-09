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

    $(kitchenmodal).submit(function( event ) {
      event.preventDefault();
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == kitchenmodal) {
            kitchenmodal.style.display = "none";
        }
    }

    // PROB NOT GONNA USE THIS...?
    // // Execute a function when the user releases a key on the keyboard
    // input.addEventListener("keyup", function(event) {
    //   // Cancel the default action, if needed
    //   event.preventDefault();
    //   // Number 13 is the "Enter" key on the keyboard
    //   if (event.keyCode === 13) {
    //     // Trigger the button element with a click
    //     document.getElementById("submit").click();
    //   }
    // });
});

function findingredient () {
  console.log("FINDING INGREDIENT...")
  var input = document.getElementById("ingredientsearch").value;
  input = input.toLowerCase();
  var amt = document.getElementById("ingredientamt").value;
  amt = amt.toLowerCase();
  
  // Hardcoded ingredients :)
  $(".ingredientbutton").hide();
  $("#noingredientsfound").hide();
  switch(input)
  {
    case "broccoli":
      $("#broccoli").show();
      break;
    case "egg":
      $("#egg").show();
      break;
    case "spinach":
      $("#spinach").show();
      break;
    case "all":
      $(".ingredientbutton").show();
      break;
    default:
      $("#noingredientsfound").show();
      break;
  };
  return;
}

function filteringredients() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("ingredientinput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("ingredientlist");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
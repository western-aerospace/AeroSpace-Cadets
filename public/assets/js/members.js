$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
});


// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.dropdown-trigger');
//   var instances = M.Dropdown.init(elems, options);
// });

// Or with jQuery

$('.dropdown-trigger').dropdown();
      


// /api/submit

$(document).ready(function() {
  // Getting references to our form and input
  var PlaneInput = $("form.PlaneInput");
  var makeInput = $("select#dropdown1");
  var modelInput = $("select#dropdown2");
  var serialInput = $("input#serialNumber");



  // When the signup button is clicked, we validate the make and model are not blank
  PlaneInput.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      make: makeInput.val().trim(),
      model: modelInput.val().trim(),
      serial: serialInput.val().trim(),

    };
    console.log(makeInput)
    

    if (!userData.make || !userData.model || !userData.serial) {
      return;
    }
    // If we have an make and model, run the signUpUser function
    signUpUser(userData.make, userData.model, userData.serial, userData.lName);
    makeInput.val("");
    modelInput.val("");
    serialInput.val("");

  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(make, model, serial) {
    $.post("/api/submit", {
      make: make,
      model: model,
      serial : serial,
    }).then(function(data) {
      window.location.replace("/members");
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});

$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var fNameInput = $("input#fName-input");
  var lNameInput = $("input#lName-input");


  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      fName: fNameInput.val().trim(),
      lName: lNameInput.val().trim()
    };
    console.log(emailInput)
    

    if (!userData.email || !userData.password || !userData.fName || !userData.lName ) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.fName, userData.lName);
    emailInput.val("");
    passwordInput.val("");
    fNameInput.val("");
    lNameInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, fName, lName) {
    $.post("/api/signup", {
      email: email,
      password: password,
      fName : fName,
      lName : lName
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


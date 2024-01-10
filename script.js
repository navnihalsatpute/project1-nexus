function toggleForm(formId) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById(formId).style.display = 'block';
}

function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
      item.innerHTML = "";
    }
}

function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateLoginForm() {
    var returnvalue = true;
    clearErrors();
    var username = document.forms["loginform"]["loginUsername"].value;
    var password = document.forms["loginform"]["loginPassword"].value;
    if (username.length == 0){
      seterror("loginUsername", "Please enter a valid username");
      returnvalue = false;
    }
    if (password.length == 0){
      seterror("loginPassword", "Please enter a valid password");
      returnvalue = false;
    }
    return returnvalue;
}

function validateSignupForm(){
    var returnvalue = true;
    clearErrors();
    var username = document.forms["signupform"]["signupUsername"].value;
    var email = document.forms["signupform"]["signupEmail"].value;
    var password = document.forms["signupform"]["signupPassword"].value;
    var cpassword = document.forms["signupform"]["signupCPassword"].value;
    if (username.length == 0){
      seterror("signupUsername", "Username cannot be empty");
      returnvalue = false;
    }
    if (username.length < 0){
      seterror("signupUsername", "Username is too short");
      returnvalue = false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
      seterror("signupEmail", "Please enter a valid email address");
      returnvalue = false;
    }
    if (password.length < 6){
      seterror("signupPassword", "Password must be atleast 6 characters long");
      returnvalue = false;
    }
    if (cpassword != password){
      seterror("signupCPassword", "Password and Confirm Password must match");
      returnvalue = false;
    }
    return returnvalue;
}
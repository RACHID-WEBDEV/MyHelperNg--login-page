function checkInputs() {
var emailValue = email.value.trim();

    if(emailValue === '') {
        showError(email, "Email Field can't be blank");
    } else if (!isEmail(emailValue)) {
        showError(email, 'Not a valid email');
    } else {
        showSucces(email);
    }

}
//Show input error messages
function showError(input, message) {
    var formControl = input.parentElement;
    formControl.className = 'form-control error';
    var small = formControl.querySelector('small');
    small.innerText = message;
}

//show success colour
function showSucces(input) {
    var formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//Event Listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkInputs();
   
});
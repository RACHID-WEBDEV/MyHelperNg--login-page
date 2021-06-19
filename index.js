
var form = document.getElementById('form');
var email = document.getElementById('email');
var password = document.getElementById('password');

function checkInputs() {
	// trim to remove the whitespaces
	var emailValue = email.value.trim();
	var passwordValue = password.value.trim();
	var getRoleValue = document.getElementById("role").value;

    if(emailValue === '') {
		showError(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		showError(email, 'Not a valid email');
	} else {
		showSucces(email);
	}
    if(getRoleValue === '') {
		showError(role, 'Select a role');
	}else {
		showSucces(role);
	}
    if(passwordValue === '') {
		showError(password, 'Password cannot be blank');
	}else {
		showSucces(password);
	}
    

}

//Show input error messages
function showError(input, message) {
    var formControl = input.parentElement;
    formControl.className = 'form-control error';
    var small = formControl.querySelector('small');
    small.innerText = message;
}
//

//show success colour
function showSucces(input,) {
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

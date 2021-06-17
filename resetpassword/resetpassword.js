function checkInputs() {
    var passwordValue = password.value.trim();
	var password2Value = password2.value.trim();
    
    if(passwordValue === '') {
		showError(password, 'Password cannot be blank');
	}else if (!strongPass(passwordValue)) {
		showError(password, 'Must contain number and special character');
	 }else {
		showSucces(password);
	}
	
	if(password2Value === '') {
		showError(password2, 'Confirm password cannot be blank');
	} else if(passwordValue !== password2Value) {
		showError(password2, 'Passwords does not match');
	} else{
		showSucces(password2);
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
    
    function strongPass(password){
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/.test(password);
    }
    
    //Event Listeners
    form.addEventListener('submit',function(e) {
        e.preventDefault();
    
        checkInputs();
       
    });
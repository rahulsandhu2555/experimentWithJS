//Client side validation
    //to check the data before submitting
    //coz improves performance coz if will do server side validation, it will take time
    //its critical to always implement server side validation, coz malicious user can disable the JS and can submit bad data

    //type of client validation
        //built in form validation => better performance than JS, but not customizable
        //JavaScript Validation
            // <div className="form-field error/success">
            //     <label htmlFor="username">Confirm Password:</label>
            //     <input type="password" name="confirm-password" id="confirm-password" autoComplete="off">
            //         <small></small>
            // </div>

            // form.addEventListener('submit', function (e) {
            //     // prevent the form from submitting
            //     e.preventDefault();
            //
            //     // validate forms
            //     let isUsernameValid = checkUsername(),
            //         isEmailValid = checkEmail(),
            //         isPasswordValid = checkPassword(),
            //         isConfirmPasswordValid = checkConfirmPassword();
            //
            //     let isFormValid = isUsernameValid &&
            //         isEmailValid &&
            //         isPasswordValid &&
            //         isConfirmPasswordValid;
            //
            //     // submit to the server if the form is valid
            //     if (isFormValid) {
            //
            //     }
            // });

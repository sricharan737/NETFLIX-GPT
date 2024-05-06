export const checkValidData = (name, email, password) => {
	if(name !== null){
        const isNameValid = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)$/.test(name);
        if (!isNameValid) {
            return "Name is not valid";
        }
    } 
    

	const isEmailValid =
		/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

	const isPasswordValid =
		/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
			password
		);

	if (!isEmailValid && isPasswordValid) {
		return "Email ID is not valid";
	}

	if (!isPasswordValid && isEmailValid) {
		return "Password is not valid";
	}        

	if (!isEmailValid && !isPasswordValid) {
		return "Both the Email and Password are invalid";
	}

	return null;
};

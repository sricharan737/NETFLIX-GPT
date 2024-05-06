import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [errorMessage, setErrorMessage] = useState(null);

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	const handleButtonClick = () => {
		//Validate the form data
		let message = null;
		if (isSignInForm) {
			message = checkValidData(
				null,
				email.current.value,
				password.current.value
			);
		} else {
			if (name.current.value) {
				message = checkValidData(
					name.current.value,
					email.current.value,
					password.current.value
				);
			} else {
				message = checkValidData(
					"",
					email.current.value,
					password.current.value
				);
			}
		}
		setErrorMessage(message);
		if (message) return;

		//Sign In/Up Logic
		if (!isSignInForm) {
			//Sign Up Logic
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user;
					updateProfile(user, {
						displayName: name.current.value, photoURL: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
					  }).then(() => {
						// Profile updated!
						const {uid, email, displayName, photoURL} = auth.currentUser; 
						dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
						navigate("/browse")
					  }).catch((error) => {
						// An error occurred
						
					  });
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + "-" + errorMessage);
				});
		} else {
			//Sign in Logic
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log(user);
					navigate("/browse")
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + "-" + errorMessage);
				});
		}
	};

	return (
		<div>
			<Header />
			<div className="absolute brightness-50">
				<img
					alt="backgorund"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/7510356b-6d23-43ad-97ac-02a8d9313aa1/CA-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_9a5ab034-7530-449d-8242-cd84c2a74ab1_large.jpg"
				/>
			</div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="absolute text-white w-1/5 p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
				<h1 className="font-bold text-3xl py-4">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						ref={name}
						type="text"
						placeholder="Full Name"
						className="p-4 my-2 bg-gray-700 rounded-lg w-full"
					/>
				)}
				<input
					ref={email}
					type="text"
					placeholder="Email Address"
					className="p-4 my-2 bg-gray-700 rounded-lg w-full"
				/>

				<input
					ref={password}
					type="password"
					placeholder="Password"
					className="p-4 my-2 bg-gray-700 rounded-lg w-full"
				/>
				<p className="text-red-500">{errorMessage}</p>

				<button
					className="p-2 my-2 rounded-md bg-red-700 w-full"
					onClick={handleButtonClick}>
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>
				<p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
					{isSignInForm
						? "New to Netflix? Sign Up Now"
						: "Already a user? Sign In Now"}
				</p>
			</form>
		</div>
	);
};

export default Login;

import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
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
			<form className="absolute text-white w-1/5 p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
				<h1 className="font-bold text-3xl py-4">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						type="text"
						placeholder="Full Name"
						className="p-4 my-2 bg-gray-700 rounded-lg w-full"
					/>
				)}
				<input
					type="text"
					placeholder="Email Address"
					className="p-4 my-2 bg-gray-700 rounded-lg w-full"
				/>

				<input
					type="text"
					placeholder="Password"
					className="p-4 my-2 bg-gray-700 rounded-lg w-full"
				/>

				<button className="p-2 my-2 rounded-md bg-red-700 w-full">
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

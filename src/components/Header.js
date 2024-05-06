import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector(store => store.user);
	const handleSignOut = () => {
		signOut(auth).then(() => {
		  // Sign-out successful.		  
		  navigate("/")
		}).catch((error) => {
		  // An error happened.
		  navigate("/error")
		});
	}

	return (
		<div className="absolute bg-gradient-to-b from-black z-10 w-full flex justify-between">
			<img
				className="m-2 p-2 h-16"
				src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
				alt="logo"
			/>
			{user && <div className="flex">
				<img
					className="m-4 p-2 h-16 shadow-sm"
					src= {user?.photoURL}
					alt='userIcon' />
				<button className="m-2 my-7 rounded-lg shadow-md  p-2 font-bold text-white bg-red-700"
				onClick={handleSignOut}>Sign Out</button>
			</div>}
		</div>
	);
};

export default Header;

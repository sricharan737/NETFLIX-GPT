import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(store => store.user);
	const handleSignOut = () => {
		signOut(auth).then(() => {
		  // Sign-out successful.		  
		}).catch((error) => {
		  // An error happened.
		  navigate("/error")
		});
	}

	useEffect(() => {
		const unsubscribe= onAuthStateChanged(auth, (user) => {
		  if (user) {
			// User is signed in, see docs for a list of available properties
			const {uid, email, displayName, photoURL} = user;        
			dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL }))       
			navigate("/browse")
		  } else {
			// User is signed out
			dispatch(removeUser());
			navigate("/")
		  }
		});

		//unsubscribe when component unmounts
		return () => unsubscribe();
	  },[])

	return (
		<div className="absolute bg-gradient-to-b from-black z-10 w-full flex justify-between">
			<img
				className="m-2 p-2 h-16"
				src= {LOGO}
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

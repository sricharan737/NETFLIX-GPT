import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);
	const gptSearch = useSelector((store) => store.gpt.showGptSearch);
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
				navigate("/error");
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				navigate("/browse");
			} else {
				// User is signed out
				dispatch(removeUser());
				navigate("/");
			}
		});

		//unsubscribe when component unmounts
		return () => unsubscribe();
	}, []);

	const handleGptSearchClick = () => {
		//Toggle GPT Search
		dispatch(toggleGptSearchView());
	};

	const handleLanguageChange = (e) => {
		dispatch(changeLang(e.target.value));
	};

	return (
		<div className="absolute bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between">
			<img className="m-2 p-2 h-16 w-36 mx-auto md:mx-0" src={LOGO} alt="logo" />
			{user && (
				<div className="flex justify-between">
					{gptSearch && (
						<select
							className="my-6 px-4 m-2 cursor-pointer bg-slate-800 text-white font-bold rounded-lg"
							onChange={handleLanguageChange}>
							{SUPPORTED_LANGUAGES.map((lang) => (
								<option key={lang.identifier} value={lang.identifier}>
									{lang.name}
								</option>
							))}
						</select>
					)}

					<button
						className="my-6 px-4 m-2 bg-purple-800 text-white rounded-lg font-bold"
						onClick={handleGptSearchClick}>
						{gptSearch ? "HomePage" : "GPT Search"}
					</button>

					<img
						className="hidden md:block m-4 p-2 h-16 shadow-sm"
						src={user?.photoURL}
						alt="userIcon"
					/>
					<button
						className="m-2 my-7 rounded-lg shadow-md  p-2 font-bold text-white bg-red-700"
						onClick={handleSignOut}>
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;

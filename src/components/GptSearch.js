import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BG } from "../utils/constants";

const GptSearch = () => {
	return (
		<>
    <div className="fixed -z-10 brightness-50">
				<img
          className="h-screen object-cover md:h-auto"
					alt="backgorund"
					src= {NETFLIX_BG}
				/>
			</div>
			<div className="">
				<GptSearchBar />
				<GptMovieSuggestions />
			</div>
		</>
	);
};

export default GptSearch;

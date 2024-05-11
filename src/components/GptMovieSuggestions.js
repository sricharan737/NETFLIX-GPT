import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
	const { movieResults, movieNames } = useSelector(
		(store) => store.gpt
	);
	if (!movieNames) return null;

	return (
		<div className="p-4 m-4 bg-black bg-opacity-70  text-white">
			<div>
				{movieResults.map((x,index) => <MovieList					
					title= {movieNames[index]}
					movies={x}
				/>) }
			</div>
		</div>
	);
};

export default GptMovieSuggestions;

import React, { useEffect } from "react";
import Header from "./Header";
import useTrendingMovies from "../hooks/useTrendingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
	const showGpt = useSelector((store) => store.gpt.showGptSearch);
	useTrendingMovies();
	useNowPlayingMovies();
	return (
		<div>
			<Header />
			{showGpt ? (
				<GptSearch />
			) : (
				<>
					<MainContainer />
					<SecondaryContainer />
				</>
			)}

			{/*
				MainContainer
					-Video Background
					-Video Title
				SecondaryContainer
					-MovieList * n
					-Cards * n

			*/}
		</div>
	);
};

export default Browse;

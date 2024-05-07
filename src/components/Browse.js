import React, { useEffect } from "react";
import Header from "./Header";
import useTrendingMovies from "../hooks/useTrendingMovies";
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"


const Browse = () => {

	useTrendingMovies();

	return (
		<div>
			<Header />
			<MainContainer />
			<SecondaryContainer />
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

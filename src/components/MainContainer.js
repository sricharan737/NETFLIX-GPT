import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
	const movies = useSelector((store) => store.movies?.TrendingMovies);
	if (!movies) return; //Early return to counter the movieStore being initially empty and getting an error for movies[0]
	const mainMovie = movies[0];

    const {original_title, overview, id} = mainMovie;

	return (
		<div>
			<VideoTitle title = {original_title} overview = {overview}  />
			<VideoBackground id = {id} />
		</div>
	);
};

export default MainContainer;

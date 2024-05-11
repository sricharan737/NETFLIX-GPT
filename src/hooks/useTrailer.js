import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerId } from "../utils/movieSlice";

import React, { useEffect } from "react";

const useTrailer = (id) => {
	const dispatch = useDispatch();

	const trailerVideo = useSelector(store => store.movies.TrailerId);

	//Fetching the Trailer Video and Updating the store with Trailer ID
	const movieTrailer = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/" +
				id +
				"/videos?language=en-US",
			API_OPTIONS
		);
		const json = await data.json();
		const filterVideos = json.results.filter(
			(x) => x.type === "Trailer"
		);
		const trailer =
			filterVideos.length === 0 ? json.results[0] : filterVideos[0];
		dispatch(addTrailerId(trailer.key));
	};

	useEffect(() => {
		!trailerVideo && movieTrailer();
	}, []);
};

export default useTrailer;

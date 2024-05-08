import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movies);
	return (
		<div className="bg-black text-white">
			<div className="-mt-64 relative z-20">
				<MovieList
					title={"Trending"}
					movies={movies.TrendingMovies}
				/>
				<MovieList
					title={"Now Playing"}
					movies={movies.NowPlayingMovies}
				/>
        <MovieList
					title={"Trending"}
					movies={movies.TrendingMovies}
				/>
        <MovieList
					title={"Now Playing"}
					movies={movies.NowPlayingMovies}
				/>
			</div>
		</div>
	);
};

export default SecondaryContainer;

import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
	return (
		<div className="w-screen">
			<h1 className="px-4 py-6 text-lg md:text-3xl font-bold">{title}</h1>
			<div className="flex overflow-x-scroll">
				<div className="flex">
					{movies?.map((movie) => (
						<MovieCard
							key={movie.id}
							posterPath={movie.poster_path}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieList;


import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrendingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useTrendingMovies = () => {
    //Fetching Data from TMDB API and updating the store
    const dispatch = useDispatch();
	const getTrending = async () => {
		const data = await fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", API_OPTIONS);
		const json = await data.json();
		dispatch(addTrendingMovies(json.results));
	};

	useEffect(()=> {
		getTrending();
	}, [])
}

export default useTrendingMovies;
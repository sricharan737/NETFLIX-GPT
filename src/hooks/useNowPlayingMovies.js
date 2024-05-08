import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useNowPlayingMovies = () => {
    //Fetching Data from TMDB API and updating the store
    const dispatch = useDispatch();
	const getNowPlaying = async () => {
		const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US", API_OPTIONS);
		const json = await data.json();
		dispatch(addNowPlayingMovies(json.results));
	};

	useEffect(()=> {
		getNowPlaying();
	}, [])
}

export default useNowPlayingMovies;
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';
import { useSearchParams } from 'react-router-dom';

const useNowPlayingMovies = () => {
    //Fetching Data from TMDB API and updating the store
    const dispatch = useDispatch();

	//Checkign if the store has NowPlaying movies in redux store
	const nowPlayingMovies = useSelector(store => store.movies.NowPlayingMovies)

	const getNowPlaying = async () => {
		const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US", API_OPTIONS);
		const json = await data.json();
		dispatch(addNowPlayingMovies(json.results));
	};

	useEffect(()=> {
	if(!nowPlayingMovies)getNowPlaying();
	}, [])
}

export default useNowPlayingMovies;
import React from "react";
import {  useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";


const VideoBackground = ({ id }) => {
	const trailerId = useSelector((store)=> store.movies?.TrailerId)
    
    useTrailer(id);	

	return (
		<div>
			<iframe
                className="w-screen aspect-video"
				src={"https://www.youtube.com/embed/"+ trailerId + "?autoplay=1&loop=1&mute=0"}
				title="Youtube Video Player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"></iframe>
		</div>
	);
};

export default VideoBackground;

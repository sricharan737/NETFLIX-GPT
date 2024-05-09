import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { NETFLIX_BG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10 brightness-50">
				<img
					alt="backgorund"
					src= {NETFLIX_BG}
				/>
			</div>
       <GptSearchBar />
       <GptMovieSuggestions /> 
    </div>
  )
}

export default GptSearch
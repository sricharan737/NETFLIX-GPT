import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  
  if(!posterPath) return;
  return (
    <div className='w-36 m-4 shadow-sm'>
        <img src={IMG_CDN + posterPath } alt='moviePoster'/>
    </div>
  )
}

export default MovieCard
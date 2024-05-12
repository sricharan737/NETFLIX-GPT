import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-56 px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-lg md:text-4xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
        <button className='bg-white text-black text-lg font-bold shadow-md rounded-lg hover:bg-opacity-80 px-3 mt-2 py-1 md:py-3 md:px-8 '>Play</button>
            <button className='hidden md:inline-block bg-gray-500 text-white px-8 py-3 mx-4 font-bold shadow-md rounded-lg bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
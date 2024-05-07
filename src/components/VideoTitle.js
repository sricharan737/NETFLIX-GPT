import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-56 px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black px-8 py-3 text-lg font-bold shadow-md rounded-lg hover:bg-opacity-80'>Play</button>
            <button className='bg-gray-500 text-white px-8 py-3 mx-4 font-bold shadow-md rounded-lg bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
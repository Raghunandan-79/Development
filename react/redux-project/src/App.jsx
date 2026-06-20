import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {
  return (
    <div className='h-screen w-full bg-gray-950 text-white'>
      <button className='bg-green-400 px-4 py-5 m-5'   
        onClick={async () => {
          const data = await fetchPhotos('cat')
      }}>Get photos</button>

      <button className='bg-green-400 px-4 py-5 m-5'  
        onClick={async () => {
          const data = await fetchVideos('cat')
      }}>
        Get videos
      </button>
    </div>
  )
}

export default App
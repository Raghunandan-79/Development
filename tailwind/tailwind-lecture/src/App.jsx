import React from 'react'

const App = () => {
  return (
    <>
      <div className='grid grid-row-3 sm:grid-cols-12'>
        <div className='col-span-12 sm:col-span-4 bg-[#ff0000]'>
          Hi
        </div>

        <div className='col-span-12 sm:col-span-4 bg-green-300'>
          Hi
        </div>

        <div className='col-span-12 sm:col-span-4 bg-blue-300'>
          Hi
        </div>
      </div>
    </>
  )
}

export default App
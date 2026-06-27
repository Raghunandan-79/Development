import React from 'react'

const SidebarClass1 = () => {
  return (
    <div className='flex items-start'>
        <div className='transition-all ease-in-out duration-150 bg-red-200 w-0 sm:w-96 h-screen'>
            Sidebar
        </div>
        
        <div className='bg-green-200 w-full h-screen'>
            Content
        </div>
    </div>
  )
}

export default SidebarClass1
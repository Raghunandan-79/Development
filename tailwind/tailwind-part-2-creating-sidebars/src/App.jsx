import React, { useState } from 'react'
import SidebarClass1 from './components/answers/1-basic-project'
import Sidebar2Transitions from './sidebars/Sidebar2Transitions'
import { Sidebar4 } from './sidebars/Sidebar4'

const App = () => {
  return (
    <div className='h-screen'>
      {/* <SidebarClass1 /> */}
      {/* <Sidebar2Transitions /> */}
      <Sidebar4 />
    </div>
  )
}

export default App

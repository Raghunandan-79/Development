/* 
  Single page applications, routing 
  Single Page Applications  (SPAs) are web applications that load a single HTML page
  and dynamically update that page as the user interacts with the app. This 
  approach allows for a smoother user experience compared to traditional multi-page
  applications (MPAs), where each interaction often requires a full page reload
*/

// import React from 'react'
// import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom'

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Layout />}>
//             <Route path='/neet/online-coaching-class-11' element={<Class11Program />} />
//             <Route path='/neet/online-coaching-class-12' element={<Class12Program />} />
//             <Route path='/' element={<Landing />} />
//             <Route path='*' element={<ErrorPage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// function Layout() {
//   return <div>
//     <Link to={"/"}>Home</Link> |
//     <Link to={"/neet/online-coaching-class-11"}>Class 11</Link> |
//     <Link to={"/neet/online-coaching-class-12"}>Class 12</Link>
//     <Outlet />
//     footer
//   </div>
// }

// function ErrorPage() {
//   return <div>
//     Sorry page not found
//   </div>
// }

// function Landing() {
//   return <div>
//     Welcome to allen
//   </div>
// }

// function Class11Program() {
//   return <div>
//     NEET programs for Class 11
//   </div>
// }

// function Class12Program() {
//   // const navigate = useNavigate()

//   // function redirectUser() {
//   //   navigate("/")
//   // }

//   return <div>
//     NEET programs for Class 12
//     {/* <button onClick={redirectUser}>Go back to landing page</button> */}
//   </div>
// }

// export default App

/* 
  useRef
  What is useRef
  In React, useRef is a hook that provides a way to create a reference to a value
  or a DOM element that persists across renders but does not trigger a re-render
  when the value changes

  Key characteristics of useRef
    1. Persistent Across Renders: The value stored in useRef persists between
    component re-renders. This means the value of a ref does not get reset when
    the component re-renders, unlike regular variables

    2. No Re-Renders on change: Changing the value of a ref (ref.current) does not
    cause a component to re-render. This is different from state(useState), which
    triggers a re-render when updated
*/

import React, { useEffect, useRef, useState } from 'react'

// clock with start and stop button
const App = () => {
  const [currentCount, setCurrentCount] = useState(1)
  const timer = useRef()

  function startClock() {
    let value = setInterval(() => {
      setCurrentCount(c => c + 1)
    }, 1000)
    timer.current = value
  }

  function stopClock() {
    console.log(timer)
    clearInterval(timer.current)
  }

  return <div>
    {currentCount}
    <br />
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
  </div>
}

export default App
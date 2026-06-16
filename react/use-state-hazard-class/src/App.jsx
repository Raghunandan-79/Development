// import React, { useState } from 'react'

// /* 
//   UseState: useState is a hook that lets you add state to functional components. It
//   returns an array with the current state and a function to update it
// */

// const App = () => {
//   return <div>
//     <b>
//       Hi there
//     </b>
//     <Counter />
//   </div>
// }

// function Counter() {
//   const [counter, setCounter] = useState(0)

//   setInterval(() => {
//     setCounter(counter + 1)
//   }, 1000)

//   function decreaseCount() {
//     if (counter > 0)  {
//       setCounter(counter - 1)
//     } else {
//       alert(`Value of counter can't be less than zero`)
//     }
//   }

//   function resetCount() {
//     if (counter !== 0) {
//       setCounter(0)
//       alert(`Successfully reset the counter`) 
//     } else {
//       alert(`Counter is already zero. Try increasing the count then resetting`)
//     }
//   }
  
//   return <div>
//     <h1>{ counter }</h1>
//     <button onClick={ decreaseCount }>Decrease count</button>
//     <button onClick={ resetCount }>Reset count</button>
//   </div>
// }

// export default App

// import React, { useEffect, useState } from 'react'

// /* 
//   Conditional rendering: if we want to render a component sometines then we use 
//   conditional rendering
// */

// const App = () => {
//   const [counterVisible, setCounterVisible] = useState(true)

//   useEffect(() => {
//     const clock = setInterval(() => {
//       setCounterVisible(c => !c)
//     }, 5000)

//     return () => clearInterval(clock)
//   }, [])

//   return (
//     <div>
//       { counterVisible && <Counter /> }
//     </div>
//   )
// }

// function Counter() {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     let clock = setInterval(() => {
//       setCount(count => count + 1)
//     }, 1000)

//     return () => clearInterval(clock)
//   }, [])

//   return <div>
//     <h1>{ count }</h1>
//   </div>
// }

// export default App  


import React, { useEffect, useState } from 'react'

// useEffect, dependency array, cleanups
const App = () => {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  function increaseCount() {
    setCounter(c => c + 1)
  }

  function decreaseCount() {
    setCounter2(c => c - 1)
  }

  return (
    <div>
      <Counter count={ counter } count2 = { counter2 } />
      <button onClick={ increaseCount }>Increase Count</button>
      <button onClick={ decreaseCount }>Decrease Count</button>
    </div>
  )
}

//  mounting, re-rendering, unmounting
function Counter(props) {

  useEffect(() => {
    console.log("mount")

    return () => console.log("unmount")
  }, [])

  useEffect(() => {
    console.log("Count has changed")

    return () => {
      console.log("cleanup inside second effect")
    }
  }, [props.count, props.count2])

  return <div>
    Counter 1 { props.count }
    Counter 2 { props.count2 }
  </div>
}

export default App
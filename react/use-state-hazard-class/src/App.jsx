import React, { useState } from 'react'

/* 
  UseState: useState is a hook that lets you add state to functional components. It
  returns an array with the current state and a function to update it
*/

const App = () => {
  return <div>
    <b>
      Hi there
    </b>
    <Counter />
  </div>
}

function Counter() {
  const [counter, setCounter] = useState(0)

  function increaseCount() {
    setCounter(counter + 1)
  }

  function decreaseCount() {
    if (counter > 0)  {
      setCounter(counter - 1)
    } else {
      alert(`Value of counter can't be less than zero`)
    }
  }

  function resetCount() {
    if (counter !== 0) {
      setCounter(0)
      alert(`Successfully reset the counter`) 
    } else {
      alert(`Counter is already zero. Try increasing the count then resetting`)
    }
  }
  
  return <div>
    <h1>{ counter }</h1>
    <button onClick={ increaseCount }>Increase count</button>
    <button onClick={ decreaseCount }>Decrease count</button>
    <button onClick={ resetCount }>Reset count</button>
  </div>
}

export default App
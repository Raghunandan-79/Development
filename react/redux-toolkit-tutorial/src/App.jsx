import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increaseByAmount, increment } from './redux/features/counterSlice'

const App = () => {
  return (
    <>
      <CountDisplay />
      <Buttons />
    </>
  )
}

function CountDisplay() {
  const count = useSelector((state) => state.counter.value)
  return <h1>{count}</h1>
}

function Buttons() {
  const dispatch = useDispatch()
  const [num, setNum] = useState(0)

  return (
    <>
      <button onClick={() => {
        dispatch(increment())
      }}
      >
        Increment
      </button>

      <button onClick={() => {
        dispatch(decrement())
      }}
      >
        Decrement
      </button>

      <input 
        type="number" 
        value={num} 
        onChange={(e) => {
          setNum(e.target.value)
        }
      } placeholder="Enter a number"/>

      <button onClick={() => {
        dispatch(increaseByAmount(Number(num)))
      }}
      >
        Increase by Amount
      </button>
    </>
  )
}

export default App
// import React, { useState } from 'react'

// function useCounter() {
//   const [count, setCount] = useState(0)

//   function increaseCount() {
//     setCount(count + 1)
//     // setCount(c => c + 1)
//   }

//   return {
//     count: count,
//     increaseCount: increaseCount
//   }
// }

// const App = () => {
//   return (
//     <div>
//       <Counter />
//       <Counter />
//       <Counter />
//       <Counter />
//       <Counter />
//     </div>
//   )
// }

// function Counter() {
//   const { count, increaseCount } = useCounter()

//   return <div>
//     <button onClick={increaseCount}>Increase {count}</button>
//   </div>
// }

// export default App


// import React, { useEffect, useState } from 'react'
// import { useFetch } from './hooks/useFetch'



// const App = () => {
//   const [currentPost, setCurrentPost] = useState(1)
//   const { finalData, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`, 5)

//   if (loading) {
//     return <div>
//       Loading....
//     </div>
//   }

//   return (
//     <div>
//       <button onClick={() => setCurrentPost(1)}>1</button>
//       <button onClick={() => setCurrentPost(2)}>2</button>
//       <button onClick={() => setCurrentPost(3)}>3</button>
//       {JSON.stringify(finalData)}
//     </div>
//   )
// }

// export default App  


// import React, { useState } from 'react'
// import { usePrev } from './hooks/usePrev'

// const App = () => {
//   const [state, setState] = useState(0)
//   const prev = usePrev(state)

//   return (
//     <div>
//       <p>{state}</p>
//       <button onClick={() => {
//         setState(curr => curr + 1)
//       }}
//       >Click Me</button>
//       <p>The previos value was {prev}</p>
//     </div>
//   )
// }

// export default App


import React, { useEffect, useRef, useState } from 'react'


const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

const App = () => {
  const [inputVal, setInputVal] = useState("")
  const debouncedValue = useDebounce(inputVal, 200)

  function change(e) {
    setInputVal(e.target.value)
  }

  useEffect(() => {
    // expensive operation
    // fetch
    console.log("expensive operation")
  }, [debouncedValue])

  return (  
    <>
      <input id="input" type="text" onChange={change} />
    </>
  )
}

export default App
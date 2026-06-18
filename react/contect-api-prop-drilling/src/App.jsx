/* 
  Rolling up the state, unoptiomal re-renders
  As your application grows, you might find that multiple components need access to the same state.
  Instead of duplicating state in each component, you can lift the stste up to the LCA, allowing the
  common ancestor to manage it

  https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fb0735ac2-d15c-48cb-b5f7-943c72507b0a%2FScreenshot_2024-10-13_at_5.04.11_PM.png?table=block&id=11e7dfd1-0735-8096-b1a5-c4da243dac10&cache=v2

  https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F2df694a6-6d3c-4d39-9ab9-da3d68df6b15%2FScreenshot_2024-10-13_at_6.41.11_PM.png?table=block&id=11e7dfd1-0735-80ba-aaaf-d5f505430c48&cache=v2
*/

// import React, { useState } from 'react'

// const App = () => {
//   return (
//     <>
//       <LightBulb />
//     </>
//   )
// }

// function LightBulb() {
//   const [bulbOn, setBulbOn] = useState(true)

//   return <div>
//     <BulbState bulbOn={bulbOn} />
//     <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
//   </div>
// }

// function BulbState({ bulbOn }) {
//   return <div>
//     {bulbOn ? "Bulb on" : "Bulb off"}
//   </div>
// }

// function ToggleBulbState({ bulbOn, setBulbOn }) {
//   function toggle() {
//     // setBulbOn(currentState => !currentState)
//     setBulbOn(!bulbOn)
//   }

//   return <div>
//     <button onClick={toggle}>Toggle the bulb</button>
//   </div>
// }

// export default App  

/* 
  Prop drilling
  Prop drilling occurs when you need to pass data from a higher-level component down 
  to a lower-level component that is several layers deep in the component tree. This 
  often leads to the following issues:
  
    - Complexity: You may have to pass props through many intermediate components 
    that don’t use the props themselves, just to get them to the component that 
    needs them.
    
    - Maintenance: It can make the code harder to maintain, as changes in the props 
    structure require updates in multiple components.

    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fa3655493-dd4e-4409-88ab-6833ac39e65a%2FScreenshot_2024-10-13_at_5.04.11_PM.png?table=block&id=11e7dfd1-0735-80cc-a352-ea85e492a657&cache=v2

    Problems with prop drilling
    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Ff37abbf6-aec0-47ee-8773-e5066ba2733e%2FScreenshot_2024-10-13_at_5.08.43_PM.png?table=block&id=11e7dfd1-0735-8034-a8a9-c38327619774&cache=v2
*/

/* 
  Context API
  The Context API is a powerful feature in React that enables you to manage state 
  across your application more effectively, especially when dealing with deeply 
  nested components.
  
  The Context API provides a way to share values (state, functions, etc.) between 
  components without having to pass props down manually at every level. 
  
  Jargon
    - Context: This is created using React.createContext(). It serves as a 
    container for the data you want to share.
  
    - Provider: This component wraps part of your application and provides the 
    context value to all its descendants. Any component that is a child of this 
    Provider can access the context.

    - Consumer: This component subscribes to context changes. It allows you to 
    access the context value (using useContext  hook)
*/

// import React, { createContext, useContext, useState } from 'react'

// const BulbContext = createContext()

// function BulbProvider({ children }) {
//   const [bulbOn, setBulbOn] = useState(true)

//   return <>
//     <BulbContext.Provider value={{
//       bulbOn: bulbOn,
//       setBulbOn: setBulbOn
//     }}>
//       {children}
//     </BulbContext.Provider>
//   </>
// }

// const App = () => {
//   return (
//     <BulbProvider>
//       <Light />
//     </BulbProvider>
//   )
// }

// function Light() {
//   return <div>
//     <LightBulb />
//     <LightSwitch />
//   </div>
// }

// function LightBulb() {
//   const { bulbOn } = useContext(BulbContext)
//   return <div>
//     {bulbOn ? "Bulb on" : "Bulb off"}
//   </div>
// }

// function LightSwitch() {
//   const { bulbOn, setBulbOn } = useContext(BulbContext)

//   function toggle() {
//     setBulbOn(!bulbOn)
//   }

//   return <div>
//     <button onClick={toggle}>Toggle the bulb</button>
//   </div>
// }

// export default App  

// Old code
// import React, { useEffect, useState } from 'react';

// function Parent() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Incrase count={count} setCount={setCount} />
//       <Decrease count={count} setCount={setCount} />
//       <Value count={count} setCount={setCount} />
//     </>
//   );
// }

// function Decrease({ count, setCount }) {
//   return <button onClick={() => setCount(count - 1)}>Decrease</button>;
// }

// function Incrase({ count, setCount }) {
//   return <button onClick={() => setCount(count + 1)}>Increase</button>;
// }

// function Value({ count }) {
//   return <p>Count: {count}</p>;
// }

// // App Component
// const App = () => {
//   return <div>
//     <Parent />
//   </div>
// };

// export default App;


// New code
// import React, { createContext, useContext, useState } from 'react'

// const CountContext = createContext();

// function CountContextProvider({ children }) {
//   const [count, setCount] = useState(0);

//   return <CountContext.Provider value={{ count, setCount }}>
//     {children}
//   </CountContext.Provider>
// }

// function Parent() {
//   return (
//     <CountContextProvider>
//       <Incrase />
//       <Decrease />
//       <Value />
//     </CountContextProvider>
//   );
// }

// function Decrease() {
//   const { count, setCount } = useContext(CountContext);
//   return <button onClick={() => setCount(count - 1)}>Decrease</button>;
// }

// function Incrase() {
//   const { count, setCount } = useContext(CountContext);
//   return <button onClick={() => setCount(count + 1)}>Increase</button>;
// }

// function Value() {
//   const { count } = useContext(CountContext);
//   return <p>Count: {count}</p>;
// }

// const App = () => {
//   return <div>
//     <Parent />
//   </div>
// };

// export default App;

/* 
  Introducing recoil
  To minimise the number of re-renders, and ensure that only components that are 
  subscribed to a value render, state management was introduced.
  
  There are many libraries that let you do state management - 
    1. mobx
    2. recoil
    3. redux
*/
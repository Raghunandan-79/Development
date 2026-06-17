/* 
  Children
  The children prop allows you to pass elements or components as props to other 
  components. eg: card component
*/

// import React from 'react'

// const App = () => {
//   return (
//     <div style={{ display: "flex" }}>
//       <Card>
//         hi there
//       </Card>

//       <Card>
//         <div style={{ color: "white" }}>
//           What do you want to post <br/> <br/>
//           <input type="text" />
//         </div>
//       </Card>
//     </div>
//   )
// }

// function Card({ children }) {
//   return <span style={{
//     backgroundColor: "black",
//     borderRadius: 10,
//     color: "white",
//     padding: 10,
//     margin: 10
//   }}>
//     {children}
//   </span>
// }

// export default App

/* 
  Lists and keys
  When rendering lists, each item should have a unique key prop for react to track
  changes efficiently
*/

// import React from 'react'

// const App = () => {
//   const items = [
//     { id: 1, name: "Item 1" },
//     { id: 2, name: "Item 2" },
//     { id: 3, name: "Item 3" }
//   ]

//   return <ItemList items={items} />
// }

// const ItemList = ({ items }) => {
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   )
// }

// export default App

/* 
  Class based vs functional components

  Earlier, React code was written using class based components. Slowly functional
  components were introduced and today they are the ones you'll see everywhere

  Ref - https://github.com/processing/p5.js-web-editor/issues/2358

  Class components are classes that extend React.Component, while functional
  components are simpler and can use hooks

  Class Based components
  import React, { Component } from 'react';

  class ClassCounter extends Component {
      state = { count: 0 };

      increment = () => {
          this.setState({ count: this.state.count + 1 });
      };

      render() {
          return (
              <div>
                  <p>Count: {this.state.count}</p>
                  <button onClick={this.increment}>Increment</button>
              </div>
          );
      }
  }

  Functional components
  import React, { useState } from 'react';

  const FunctionalCounter = () => {
      const [count, setCount] = useState(0);
      
      function increment() {
        setCount(count => count + 1)
      }

      return (
          <div>
              <p>Count: {count}</p>
              <button onClick={increment}>Increment</button>
          </div>
      );
  };

  Comparison:
  https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F94531bb4-314e-4c0c-a42b-750ac79424bb%2FScreenshot_2024-10-08_at_6.42.48_PM.png?table=block&id=1197dfd1-0735-80b6-80fd-da178f874827&cache=v2
*/

/* 
  Lifecycle events
  In React, lifecycle events (or lifecycle methods) refer to the specific points 
  in a component's life where you can execute code in response to changes or 
  actions. These events help you manage tasks such as data fetching, subscriptions, 
  and cleaning up resources.

  Class-based lifecycle methods
  In class components, lifecycle methods are divided into three main phases:
    1. Mounting: When the component is being inserted into the DOM.
      - constructor(): Called when the component is initialized.
      - componentDidMount(): Called immediately after the component is mounted. 
      Ideal for data fetching.

    2. Updating: When the component is being re-rendered due to changes in props or 
    state.

      - componentDidUpdate(prevProps, prevState): Called after the component has 
      updated. Good for operations based on prop/state changes.
      - Unmounting: When the component is being removed from the DOM.
      - componentWillUnmount(): Ideal for cleanup tasks, like invalidating timers 
      or canceling network requests.
*/

// Functional component with lifecycle events
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or count updated');

  }, [count]); // Runs on mount and when count changes

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component will unmount');
    };
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  )
}

export default App
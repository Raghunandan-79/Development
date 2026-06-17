// import React from 'react'
// import timeImage from './time.png'

// const App = () => {
//   return (
//     <>
//       <div style={{
//         backgroundColor: "#dfe6e9",
//         height: "100vh",
//       }}>
//         <Greeting name={ "Raghu" } />
//         <div style={{
//           display: "flex",
//           justifyContent: "center",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: 10
//         }}>
//           <PostComponent
//             name={ "harkirat" }
//             subtitle={ "20 followers" }
//             time={ "2m ago" }
//             image={ "https://harkirat.classx.co.in/harkirat.png" }
//             description={
//               "Want to know how to win big? Checkout how these folks won $6000 in bounty"
//             }
//           />
//           <PostComponent 
//             name={ "harkirat" }
//             subtitle={ "Promoted" }
//             image={ "https://harkirat.classx.co.in/harkirat.png" }
//             description={
//               "Want to know how to win big? Checkout how these folks won $6000 in bounty"
//             }
//           />
//         </div>
//       </div>
//     </>
//   )
// }

// const style = {
//   width: 300,
//   backgroundColor: "white",
//   borderRadius: 10,
//   borderColor: "gray",
//   padding: 20
// }

// function PostComponent({name, subtitle, time, image, description}) {
//   return <div style={style}>
//     <div style={{
//       display: "flex"
//     }}>
//       <img src={ image }
//         alt="post-image"
//         style={{
//           width: 40,
//           height: 40,
//           borderRadius: 20
//         }}
//       />

//       <div style={{
//         fontSize: 11,
//         marginLeft: 10,
//         marginTop: 5
//       }}>
//         <b>
//           { name }
//         </b>

//         <div>{ subtitle }</div>

//         {time !== undefined && <div style={{
//           display: "flex",
//           gap: 2
//         }}>
//           <div>{ time }</div>
//           <img 
//             src={ timeImage } 
//             alt=""
//             width={15}
//             height={15} 
//           />
//         </div>}
//       </div>
//     </div>

//     <div style={{
//       fontSize: 15
//     }}>
//       { description }
//     </div>
//   </div>
// }

// const Greeting = ({ name }) => {
//   return <h1>Hello, { name }</h1>
// } 

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   return (
//     <div style={{
//       background: "#dfe6e9",
//       height: "100vh"
//     }}>
//       <ToggleMessage />
//       <ToggleMessage />
//       <ToggleMessage />
//     </div>
//   )
// }

// const ToggleMessage = () => {
//   const [notificationCount, setNotificationVisible] = useState(0)

//   function increment() {
//     setNotificationVisible(notificationCount + 1)
//   }

//   return (
//     <div>
//       <button onClick={ increment }>
//         Increase count
//       </button>

//       { notificationCount }
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import PostComponent from './Post'

// const App = () => {
//   const [posts, setPosts] = useState([])

//   const postComponents = posts.map(post => <PostComponent 
//     name={post.name}
//     subtitle={post.subtitle}
//     image={post.image}
//     time={post.time}
//     description={post.description}
//   />)

//   function addPost() {
//     setPosts([...posts, {
//       name: "harkirat",
//       subtitle: "11000 followers",
//       time: "2m ago",
//       image: "https://harkirat.classx.co.in/harkirat.png",
//       description: "Want to know how to win big? Check out how these folks won $6000 in bounties"
//     }])
//   }

//   return (
//     <div style={{
//       background: "#dfe6e9",
//       height: "100%",
//       paddingBottom: 30
//     }}>
//       <button onClick={addPost}>Add Post</button>

//       <div style={{
//         display: "flex",
//         justifyContent: "center"
//       }}>
//         <div style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: 10
//         }}>
//           {[postComponents]}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App


import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [currentTab, setCurrentTab] = useState("feed")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      console.log("Send request to backend to get data for tab" + currentTab)
      setLoading(true)
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")

      console.log(response.data)
      setLoading(false)
    }

    fetchData()
  }, [currentTab])
  
  if (loading) {
    return <h1>Loading.....</h1>
  }

  return (
    <div>
      <button onClick={() => {
        setCurrentTab("feed")
      }} 
        style={{
          color: currentTab == "feed" ? "red" : "black"
      }}>Feed</button>

      <button onClick={() => {
        setCurrentTab("notifications")
      }}
        style={{
          color: currentTab == "notifications" ? "red" : "black"
      }}>Notifications</button>

      <button onClick={() => {
        setCurrentTab("messages")
      }} 
        style={{
          color: currentTab == "messages" ? "red" : "black"
      }}>Messages</button>

      <button onClick={() => {
        setCurrentTab("jobs")
      }} 
        style={{
          color: currentTab == "jobs" ? "red" : "black"
      }}>Jobs</button>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Loaded...</h1>
      )}
    </div>
  )
}


export default App


// Below are all notes for this lecture

/* 
  Components:
  In React, components are the building blocks of the user interface. They allow
  you to split the UI into independent, reusable pieces that can be thought of as
  custom, self-contained HTML elements

  Props:
  Props are the way to pass data from one component to another in React

  import React from 'react'

  const Greeting = {{ name }} => {
    return <h1>Hello, { name }</h1>
  }

  const App = () => {
    return <Greeting name="Alice" />
  }


  Conditional Rendering:
  You can render different components or elements based on certain conditions

  import React, { useState } from 'react';

  const ToggleMessage = () => {
      const [isVisible, setIsVisible] = useState(false);

      return (
          <div>
              <button onClick={() => setIsVisible(!isVisible)}>
                  Toggle Message
              </button>
              {isVisible && <p>This message is conditionally rendered!</p>}
          </div>
      );
  };

  Use State:
  useState is a Hook that lets you add state to functional components. It 
  returns an array with the current state and a function to update it.

  import React, { useState } from 'react';

  const Counter = () => {
      const [count, setCount] = useState(0);

      return (
          <div>
              <p>Count: {count}</p>
              <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
      );
  };

  Notification count code
  import { useState } from "react";

  function App() {
    return (
      <div style={{background: "#dfe6e9", height: "100vh" }}>
        <ToggleMessage />
        <ToggleMessage />
        <ToggleMessage />
      </div>
    )
  }

  // the component isnt re-rendering
  // because we havent used a state variable

  const ToggleMessage = () => {
    let [notificationCount, setNotificationCount] = useState(0);

    console.log("re-render");
    function increment() {
      setNotificationCount(notificationCount + 1);
    }

    return (
        <div>
            <button onClick={increment}>
                Increase count
            </button>
            {notificationCount}
        </div>
    );
  };


  Post component

  const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

  export function PostComponent({name, subtitle, time, image, description}) {
    return <div style={style}> 
      <div style={{display: "flex"}}>
        <img src={image} style={{
          width: 30,
          height: 30,
          borderRadius: 20
        }} />
        <div style={{fontSize: 10, marginLeft: 10}}>
          <b>
            {name}
          </b>
          <div>{subtitle}</div>
          {(time !== undefined) ? <div style={{display: 'flex'}}>
            <div>{time}</div>      
            <img src={"https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="} style={{width: 12, height: 12}} />
          </div> : null}
        </div>
      </div>
      <div style={{fontSize: 12}}>
      {description}
      </div>
    </div>
  }

  Solution:
  import { useState } from "react";
  import { PostComponent } from "./Post";

  function App() {
    const [posts, setPosts] = useState([]);

    const postComponents = posts.map(post => <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.title}
      image={post.image}
      description={post.description}
    />)

    function addPost() {
      setPosts([...posts, {
        name: "harkirat",
        subtitle: "10000 followers",
        time: "2m ago",
        image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
        description: "What to know how to win big? Check out how these folks won $6000 in bounties."
      }])
    }

    return (
      <div style={{background: "#dfe6e9", height: "100vh", }}>
        <button onClick={addPost}>Add post</button>
        <div style={{display: "flex", justifyContent: "center" }}>
          <div>
            {postComponents}
          </div>
        </div>
      </div>
    )
  }

  export default App


  useEffect
  Before we understand useEffect, let's understand what are side effects

  Side effects
  Side effects are operations that interact with tht outside world or have
  effects beyond the component's rendering. Examples include:
  
    - Fetching data from an API
    - Modifying the DOM manually
    - Subcribing to events (like WebSocket connections, timers, or browser events)
    - Starting a clock

  These are called side effects because they don't just compute output based on the
  input, they affect things outside the component first

  Problem in running side effects in React components
  If you try to introduce side effects directly in the rendering logic of a 
  component (in the return statement or before it), React would run that code
  every time the component renders. This can lead to:

    - Unnecessary or duplicated effects (like multiple API calls)
    - Inconsistent behavior (side effects might happen before rendering finishes)
    - Performance issues (side effects could block rendering or cause excessive
    re-rendering)

  How useEffect manages side effects
  The useEffect hook lets you perform side effects in functional components in a
  safe, predictable way:
    useEffect(() => {
      // Code here is the "effect" — this is where side effects happen
      fetchData();

      // Optionally, return a cleanup function that runs when the component unmounts.
      return () => {
        // Cleanup code, e.g., unsubscribing from an event or clearing timers.
      };
    }, [/ dependencies /]);

  - The first argument to useEffect is the effect function, where you put the code
  that performs the side effect

  - The second argument is the dependencies array, which controls when the effect
  runs. This array tells React to re-run the effect only when certain values
  (props or state) change. If you pass an empty array [], the effect will only run
  once after the initial render

  - Optional Cleanup: If your side effect needs cleanup (e.g unsubscribing from a
  WebSocket, clearing intervals), useEffect allows you to return a function that
  React will call when the component unmounts or before re-running the effect

  To recap
  useEffect is a hook that lets you perform side effects in functional components.
  It can be used for data fetching, subscriptions, or manually changing the DOM

  Linkedin Like Topbar
  import { useEffect, useState } from "react";

  function App() {
    const [currentTab, setCurrentTab] = useState(1);
    const [tabData, setTabData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(function() {
      setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
        .then(async res => {
          const json = await res.json();
          setTabData(json);
          setLoading(false);
        });

    }, [])
    
    return <div>
      <button onClick={function() {
        setCurrentTab(1)
      }} style={{color: currentTab == 1 ? "red" : "black"}}>Todo #1</button>
      <button onClick={function() {
        setCurrentTab(2)
      }} style={{color: currentTab == 2 ? "red" : "black"}}>Todo #2</button>
      <button onClick={function() {
        setCurrentTab(3)
      }} style={{color: currentTab == 3 ? "red" : "black"}}>Todo #3</button>
      <button onClick={function() {
        setCurrentTab(4)
      }} style={{color: currentTab == 4 ? "red" : "black"}}>Todo #4</button>
  <br /> 
      {loading ? "Loading..." : tabData.title}
    </div>
  }

  export default App

  Create a countdown
  import React, { useState, useEffect } from 'react';

  const Timer = () => {
      const [seconds, setSeconds] = useState(0);

      useEffect(() => {
          const interval = setInterval(() => {
              setSeconds(prev => prev + 1);
          }, 1000);

          return () => clearInterval(interval); // Cleanup on unmount
      }, []);

      return <div>{seconds} seconds elapsed</div>;
  };

  Fetching data
  import React, { useState, useEffect } from 'react';

  const UserList = () => {
      const [users, setUsers] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
          const fetchData = async () => {
              try {
                  const response = await fetch('https://jsonplaceholder.typicode.com/users');
                  const data = await response.json();
                  setUsers(data);
              } catch (error) {
                  console.error('Error fetching data:', error);
              } finally {
                  setLoading(false);
              }
          };

          fetchData();
      }, []); // Empty dependency array means this runs once when the component mounts.

      if (loading) {
          return <div>Loading...</div>;
      }

      return (
          <ul>
              {users.map(user => (
                  <li key={user.id}>{user.name}</li>
              ))}
          </ul>
      );
  };

  export default UserList;

*/
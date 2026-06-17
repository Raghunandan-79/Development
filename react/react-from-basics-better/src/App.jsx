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



// Below are all notes for this lecture

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


import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App

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
*/
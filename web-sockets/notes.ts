/* 
    Websockets
    WebSockets provide a way to establish a persistent, full-duplex communication
    channel over a single TCP connection between the client (typically a web 
    browser) and the server

    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F9542e210-145e-44b7-b58d-bc4cd859da32%2FScreenshot_2024-04-06_at_4.38.37_PM.png?table=block&id=172e5ca6-4200-4aae-90c4-266726ad219c&cache=v2

    Use Cases for WebSockets:
        - Real-time Applications: Chat applications, live sports updates, real-time
        gaming, and any application requiring instant updates can benefit from 
        WebSockets

        - Live Feeds: Financial tickers, news feeds, and social media updates are
        examples where WebSockets can be used to push live data to users.
        
        - Interactive Services: Collaborative editing tools, live customer support
        chat, and interactive webinars can use WebSockets to enhance user 
        interactions

    Good example: https://www.binance.com/en/trade/SOL_USDT?type=spot

    Why not use HTTP/REST? Why do you need ws?
    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F337fdfd4-982f-4476-b225-c9b705344a54%2FScreenshot_2024-04-06_at_4.43.39_PM.png?table=block&id=9519c351-fa32-462f-b080-7ed5c84e7e34&cache=v2

    1. Network Handshake happens for every request
    2. No way to push server side events (You can use polling but not the best
    approach)

    💡 Leetcode uses polling when you submit a problem
    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F5fada07d-ef88-4927-b5f0-a3daa52fbc6b%2FScreenshot_2024-04-06_at_4.55.10_PM.png?table=block&id=338fe80f-5672-455b-8cf6-cd7ccc7295ae&cache=v2
*/

/* 
    Websockets in Node.js
    There are various libraries that let you create a ws server (similar to how 
    express lets you create an HTTP server)

        1. https://www.npmjs.com/package/websocket
        2. https://github.com/websockets/ws
        3. https://socket.io/
    
    We'll be using the ws library


    💡 Problems with socket.io:
        Even though socket.io is great (it gives you constructs like rooms to make 
        the API much cleaner), it’s harder to support multiple platforms in it 
        (Android, IOS, Rust)
        
        There are implementations in most platforms but not very up to date 
        https://socket.io/blog/native-socket-io-and-android/
        https://github.com/1c3t3a/rust-socketio
*/

/* 
    Ws in Node.js (Code)

        - Initialize an empty Node.js project
            npm init -y

        - Add tsconfig to it
            npm install typescript
            npx tsc --init

        - Update tsconfig
            "rootDir": "./src",
            "outDir": "./dist",

        - Install ws
            npm i ws @types/ws
*/

// Code using http library

// import WebSocket, { WebSocketServer } from 'ws';
// import http from 'http';

// const server = http.createServer(function(request: any, response: any) {
//     console.log((new Date()) + ' Received request for ' + request.url);
//     response.end("hi there");
// });

// const wss = new WebSocketServer({ server });

// wss.on('connection', function connection(ws) {
//   ws.on('error', console.error);

//   ws.on('message', function message(data, isBinary) {
//     wss.clients.forEach(function each(client) {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(data, { binary: isBinary });
//       }
//     });
//   });

//   ws.send('Hello! Message From Server!!');
// });

// server.listen(8080, function() {
//     console.log((new Date()) + ' Server is listening on port 8080');
// });

// Code using express
// import express from 'express'
// import { WebSocketServer } from 'ws'

// const app = express()
// const httpServer = app.listen(8080)

// const wss = new WebSocketServer({ server: httpServer });

// wss.on('connection', function connection(ws) {
//     ws.on('error', console.error);

//     ws.on('message', function message(data, isBinary) {
//         wss.clients.forEach(function each(client) {
//             if (client.readyState === WebSocket.OPEN) {
//                 client.send(data, { binary: isBinary });
//             }
//         });
//     });

//     ws.send('Hello! Message From Server!!');
// });

// Code without HTTP Servers
// import WebSocket, { WebSocketServer } from 'ws';

// const wss = new WebSocketServer({ port: 8080 });

// wss.on('connection', function connection(ws) {
//     ws.on('error', console.error);

//     ws.on('message', function message(data, isBinary) {
//         wss.clients.forEach(function each(client) {
//             if (client.readyState === WebSocket.OPEN) {
//                 client.send(data, { binary: isBinary });
//             }
//         });
//     });
// });

/* 
    Client side code
    Websocket  is a browser API that you can access (very similar to fetch)
    Will work in a raw project , React project and Next project (needs to be client 
    side)
*/

// Create a websocket connection to the server
// import { useEffect, useState } from 'react'
// import './App.css'

// function App() {
//     const [socket, setSocket] = useState<WebSocket | null>(null);

//     useEffect(() => {
//         const newSocket = new WebSocket('ws://localhost:8080');
//         newSocket.onopen = () => {
//             console.log('Connection established');
//             newSocket.send('Hello Server!');
//         }
//         newSocket.onmessage = (message) => {
//             console.log('Message received:', message.data);
//         }
//         setSocket(newSocket);
//         return () => newSocket.close();
//     }, [])

//     return (
//         <>
//             hi there
//         </>
//   )
// }

// export default App

// 💡 Can you convert it to a custom hook called useSocket ?

/* 
    Scaling ws servers
    In the real world, you’d want more than one websocket servers (Especially as 
    your website gets more traffic)
    
    The way to scale websocket servers usually happens by creating a ws fleet
    
    There is usually a central layer behind it that orchestrates  messages
    
    ws servers are kept stateless

    https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fb44488cf-22da-4480-ad1c-402d93799e62%2FScreenshot_2024-04-06_at_6.06.53_PM.png?table=block&id=1477dfd1-0735-8137-9ce7-ffe927a18996&cache=v2
*/


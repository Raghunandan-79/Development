import WebSocket = require("ws");

const wss = new WebSocket.WebSocketServer({ 
    port: 8080
});

wss.on("listening", () => {
    console.log("Web Socket server is up and running on port 8080");
});

// event handler
wss.on("connection", (socket) => {
    console.log("user connected");

    setInterval(() => {
        socket.send("Hello How are you ?");
    }, 5000);

    socket.on("message", (e) => {
        console.log(e.toString());
    });
});
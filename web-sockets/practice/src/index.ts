import WebSocket = require("ws");

const wss = new WebSocket.WebSocketServer({ 
    port: 8080
});

wss.on("listening", () => {
    console.log("Web Socket server is up and running on port 8080");
});

// event handler
wss.on("connection", (socket) => {
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
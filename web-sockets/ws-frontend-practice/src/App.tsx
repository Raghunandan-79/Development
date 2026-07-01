import { useEffect, useRef, useState } from "react"

const App = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function sendMessage() {
    if (!socket) {
      return;
    }

    const message = inputRef.current?.value;

    if (message) {
      socket.send(message)
    }
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080")
    setSocket(ws);

    ws.onmessage = (event) => {
      alert(event.data)
    }
  }, [])

  return (
    <>
      <div>
        <input ref={inputRef} type="text" placeholder="Message..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  )
}

export default App

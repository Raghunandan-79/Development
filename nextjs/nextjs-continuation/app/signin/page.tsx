import axios from "axios";

export default function Signin() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border p-2">
        <input
          className="border p-2"
          type="text"
          placeholder="username"
        />
        <input
          className="border p-2 ml-2 mr-2"
          type="password"
          placeholder="password"
        />

        <button>Signin</button>
      </div>
    </div>
  );
}

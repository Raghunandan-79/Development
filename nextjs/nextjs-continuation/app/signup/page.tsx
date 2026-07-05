"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Signup() {
  const router = useRouter();
  let username = useRef<HTMLInputElement>(null);
  let password = useRef<HTMLInputElement>(null);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border p-2">
        <input
          className="border p-2"
          ref={username}
          type="text"
          placeholder="username"
        />
        <input
          className="border p-2 ml-2 mr-2"
          ref={password}
          type="password"
          placeholder="password"
        />

        <button
          onClick={async () => {
            try {
                await axios.post("http://localhost:3000/api/v1/signup", {
                username: username.current?.value,
                password: password.current?.value,
                });

                if (username.current) username.current.value = "";
                if (password.current) password.current.value = "";

                router.push("/signin");
            } catch (err) {
                console.log(err);
            }
          }}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

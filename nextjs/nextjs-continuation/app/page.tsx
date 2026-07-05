import Link from "next/link";

export default async function Home() {  
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col justify-around">
        Todo application
        <br />
        <Link className="bg-purple-600 p-2 mt-2 border" href="/signin">Sign in to Todo app</Link>

        <br />
        
        <Link className="bg-emerald-600 p-2 mt-2 border" href="/signup">Sign up to Todo app</Link>
      </div>
    </div>
  );
}

// "use client"
// import { SessionProvider, useSession, signOut, signIn } from "next-auth/react"

import { getServerSession } from "next-auth";

// export default function Home() {
//   return <div>
//     <SessionProvider>
//       <RealHome />
//     </SessionProvider>
//   </div>
// }

// function RealHome() {
//   const session = useSession();

//   return <div>{session.status === "authenticated" && <button onClick={() => signOut()}>
//       Logout
//     </button>}

//     {session.status === "unauthenticated" && <button onClick={() => signIn()}>
//         Signin
//       </button>}
//   </div>;
// }

export default async function Home() {
  const session = await getServerSession();

  return <h1>{JSON.stringify(session)}</h1>;
}

import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function NavBar() {
  const session = await auth();

  return (
    <>
      <header className="px-5 py-3 shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
          <Link href="/"><Image alt="YC Clone" src="/logo.png" width={64} height={64} unoptimized={true} /></Link>
          <div className="flex flex-row items-center gap-5">
            {session && session?.user ? (
              <>
                <Link href="/startup/create">Create</Link>
                <form action={async () => {
                  "use server";
                  await signOut();
                }}>
                  <button type="submit">Log Out</button>
                </form>
                <div>
                  <span>Logged in as </span>
                  <Link href={`/users/${session?.user.id}`}>
                    <span className="underline">{session?.user.name}</span>
                  </Link>
                </div>
              </>
            ) : <form action={async () => {
              "use server";
              await signIn('github');
            }}>
              <button type="submit">Log In</button>
            </form>
            }
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar;
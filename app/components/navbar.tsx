import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function NavBar() {
  const session = await auth();

  return (
    <header>
      <nav>
        <Link href="/"><Image alt="YC Clone" src="/logo.png" width={128} height={128} unoptimized={true}/></Link>
        {session && session?.user ? (
          <div>
            <Link href="/startup/create">Create</Link>
            <form action={async () => {
              "use server";
              await signOut();
            }}>
              <button type="submit">Log Out</button>
            </form>
            <Link href={`/users/${session?.user.id}`}>
              <span>{session?.user.name}</span>
            </Link>
          </div>
        ) : <form action={async () => {
          "use server";
          await signIn('github');
        }}>
          <button type="submit">Log In</button>
        </form>
        }
      </nav>
    </header>
  )
}

export default NavBar;
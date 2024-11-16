import Image from "next/image";
import Link from "next/link";
import React from "react";

async function NavBar() {
  return (
    <header>
      <nav>
        <Link href="/"><Image alt="YC Clone" src="/logo.png" width={64} height={64} unoptimized={true}/></Link>
      </nav>
    </header>
  )
}

export default NavBar;
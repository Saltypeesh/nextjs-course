import Link from "next/link";
import React from "react";

export default function MainHeader() {
  return (
    <header>
      <nav>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/news">News</Link>
        </ul>
      </nav>
    </header>
  );
}

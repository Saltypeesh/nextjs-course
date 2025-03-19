import Link from "next/link";
import React from "react";

export default function NewsPage() {
  return (
    <div>
      News Page
      <Link href="/news/first-news">First News Item</Link>
      <Link href="/news/second-news">Second News Item</Link>
      <Link href="/news/third-news">Third News Item</Link>
    </div>
  );
}

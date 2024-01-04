import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
//Thiw is the root page->>>>
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      Hello World
      <ul>
        <Link href="/about">About</Link>
        <Link href="/clients">Clients</Link>
      </ul>
    </main>
  );
}

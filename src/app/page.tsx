import Image from 'next/image'
import Link from 'next/link'
import Header from "@/components/header"
export default function Home() {
  //this is a server comp, hence this console.log() will rn on server not clinet browser console.
  console.log("hellooo")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Header />
      Hi hello
      <Link href="/about">About us</Link>
    </main>
  )
}


//page.tsx and layout.tsx etc are reserved name by next js
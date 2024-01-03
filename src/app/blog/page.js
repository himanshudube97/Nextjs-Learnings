import Link from "next/link";

export default function BlogPage(){
    return <>
    <h1>This is the main blog page</h1>
    <Link href="/blog/post-1">Blog1</Link>
    <Link href="/blog/post-2">Blog2</Link>
    
    </>
}
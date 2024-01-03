"use client";
//like page, loading, layout, this is also a default feture of next.js
//so it will also catch the errors of the page here and all the nested pages.
//THIS SHOULD A CLIENT COMPONENT BECAUSE NEXTJS ENSURES THIS CATCHES EVERY ERROR ,
//LET IT BE SERVER OR CLIENT.
export default function Error(){
    return  (
        <main className="error">
            <h1>An error occured</h1>
        </main>
    )
}
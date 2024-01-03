export default function BlogPostPage({params}){
    return<>
    
    <h1>Dynamic blog poast {params.slug}</h1>
    
    </>
}

//here the parasm are automatically passed by nextjs,
// params.slug is presenting the dynamic value passed from parent.
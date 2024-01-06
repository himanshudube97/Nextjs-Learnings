export default function UserPage(props: any){
    return <>
        kya haal veere <h1>{props.userId}</h1>
    </>
}

export async function getServerSideProps(context:any){
    const {params} = context;

    const userId = params.uid;

    return {
        props: {
            userId: userId
        }
    }
}
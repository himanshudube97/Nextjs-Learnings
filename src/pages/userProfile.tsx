export default function UserProfile(props:any) {
  return (
    <>
      Hi <h1>{props.username}</h1>
    </>
  );
}


export async function getServerSideProps(context:any){
    const {params, req, res} = context; 
    console.log(req, "REQUEST");
    /**
     * unlike in the getstaticProps the context here provides 
     * us access to REQUEST, RESPONSE object.
     */

    return {
        props:{
            username: "Max"
        }
    }
}

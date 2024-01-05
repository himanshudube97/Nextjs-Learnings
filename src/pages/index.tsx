import { json } from "stream/consumers";
import { getFeaturedEvents } from "../../dummy-data";
import fs from "fs/promises";
export default function Home({ products }: any) {
  return (
    <div>
      {products?.map((product: any) => {
        return <li key={product.id}>{product.title}</li>;
      })}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const data = await fs.readFile("src/pages/events/dummy-backend.json");
    const jsonData = JSON.parse(data.toString());

    if(jsonData.products.length === 0){
      return {notFound: true}
    }


    return {
      props: {
        products: jsonData.products,
      },
      revalidate: 60, //when i do npm build this page is formed on my machine, and becomes a static page, so when we deploy this on aws or any other server, it is still a static page, so this option rerenders the whole page every 60 seconds in order to make this page udpated and fresh af.
      notfound: false,
      redirect: ""
    };
  } catch (error) {
    console.log(error, "error");
    return;
  }
}

//here getstatic prop is a async function to call an api and get data.
//its a server side function only/
/**
 * code inside this getStaticprops will not be visible to client
 * hence beest place to make db calls and get data.
 * next js makes this as  a STATIC RENDER COMPONENET.
 * which means, data will be fetched and created during the build process.
 * 
 * MERE GETSTATICPROPS tells nextjs that its a static server component or page.
 * data automatically flows from this to the componenet being rendereed.
 */

//BUT THIS ACTUALLY RUNS ON OUR MACHINE WHEN WE MAKE THE BUILD, NOT THE ACTUAL SERVER.

//so we use revalidate. it will be re generated on server.
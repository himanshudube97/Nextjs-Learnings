import { json } from "stream/consumers";
import { getFeaturedEvents } from "../../dummy-data";
import fs from "fs/promises";
export default function ProductDetailPage(props: any) {
  const { loadedProduct } = props;

  //always use fallback state as data is being fetched and it takes tiem.
 //or we can set fallback: "blocking", hence we will not need this as page will render only after data and page has been prepared and fetched.
  if(!loadedProduct){  
    return <p>loading....</p>
  }
  return (
    <div>
      <>
        <h1>{loadedProduct.title}</h1>
        <h1>{loadedProduct.description}</h1>
      </>
    </div>
  );
}

//using getStaticProps is saying to nextjs, that i want to prerender this page in advance.
export async function getStaticProps(context: any) {
  console.log(context, 'conte')
  const { params } = context;
  const productId = params?.pid;
  try {
    const data = await fs.readFile("src/pages/events/dummy-backend.json");
    const jsonData = JSON.parse(data.toString());
    const product = jsonData.products.find((product: { id: any; }) => product.id === productId);

    if (jsonData.products.length === 0) {
      return { notFound: true };
    }

    return {
      props: {
        loadedProduct: product,
      },
      // revalidate: 60, //when i do npm build this page is formed on my machine, and becomes a static page, so when we deploy this on aws or any other server, it is still a static page, so this option rerenders the whole page every 60 seconds in order to make this page udpated and fresh af.
      // notfound: false,
      // redirect: "",
    };
  } catch (error) {
    console.log(error, "error");
    return;
  }
}

/**
 *  PROBLEM IS NEXT.JS DOSENT KNOW WHICH INFO SHOULD BE HERE, THE PID IS DYNAMIC, SO WHICH ID SHOULD BE THERE.
 */
export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "p1" } }, //This function and values tell Next js that it needs to prerender the pages 3 times with there 3 values. Means our getStaticProps function will run 3 times during build with the 3 ids insdide the paths.
      // { params: { pid: "p2" } },
      // { params: { pid: "p3" } },
    ],
    fallback: true, 
    /**
     * Use of fallback true.
     * so if sites like amazon have 1000 product listed, this will be very heavy here. because all 1000 pages will be pre generated during build.
     * which is not great as many pages or products are not even checked.
     * so FALLBACK:true, just tell nextjs that pre render those pages that are mentioned in thhe path.
     * and rest all proudcts can be rendered on go.
     * SO most ACTIVE OR MOST VISITED PAGES are placed here, and if there are not so , then they are generated on go.
     * if fallback is false, and i didnt mention the ids, it will throw error, as it is considering page to be there prefetched.
     */
  };
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

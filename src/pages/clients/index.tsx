import Link from 'next/link';
import React from 'react';

const Clients = () => {
    return (
        <div>
            This is client page
            <Link href="/clients/max">Max</Link>
            <Link href="/clients/himanshu">Himanshu</Link>
  
  {/* href can be written in object also as {
    pathname: "",
    query: {}

    and if we want to simulate the history.push method on button as 
    it is in react router,
    we can do that here by using router.push("/url");
  } */}
        </div>
    );
};

export default Clients;
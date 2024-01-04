import { useRouter } from 'next/router';
import React from 'react';

const Blogs = () => {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            Dynamic Cath all paths blogs.
        </div>
    );
};

export default Blogs;
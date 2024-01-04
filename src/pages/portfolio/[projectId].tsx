import { useRouter } from 'next/router';
import React from 'react';

const Projects = () => {

    const {query, pathname} = useRouter();

    return (
        <div>
            This is Porject number {query.projectId} at path {pathname};
        </div>
    );
};

export default Projects;
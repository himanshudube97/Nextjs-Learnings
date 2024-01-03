import React from 'react';

const MealsDynamic = ({params}) => {
    console.log(params)
    return (
        <div>
         This is dynamic {params.slug}   
        </div>
    );
};

export default MealsDynamic;
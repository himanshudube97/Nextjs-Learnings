import classes from "./loading.module.css"
export default function MealsLoadingPage(){
    return <p className={classes.loading}>Loading Meals....</p>
}

//like page, layout this loading is also a reserved keyword
//means that if page or any nested page loads or fetches data, this becomes active automatically.
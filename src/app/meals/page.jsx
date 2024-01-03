import Link from "next/link";

import classes from "./meals.module.css";
import MealsGrid from "@/components/meals/meals.grid";
import { getMeals } from "@/lib/meals";
export default async function MealsPage() {
  const meals = await getMeals(); // no use effect nothing as everything is in same project , the frontend and the backend both. unless its a client component.
  return (
    <>
      <header className={classes.header}>
        <h1>Delecious meals, created</h1>
        <p>Choose your favourite recipe and cook it yourself. Its is easy.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your favourite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}

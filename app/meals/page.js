import styles from './page.module.css';
import Link from "next/link";
import MealsGrid from "@/components/Meals/MealsGrid/MealsGrid";
import {getMeals} from "@/lib/meals";
import {Suspense} from "react";

// In normal React App you can not use async here without useEffect hook, but in NextJs we can in server components
async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

function LoadingFallback() {
  return <p className={styles.loading}>Fetching meals...</p>;
}

export default function MealsPage() {


  return <>
    <header className={styles.header}>
      <h1>
        Delicious meals, created{' '}
        <span className={styles.highlight}>by you</span>
      </h1>
      <p>Choose your favorite recipe and cook it yourself.</p>
      <p className={styles.cta}>
        <Link href="/meals/share">Share your favorite recipe</Link>
      </p>
    </header>
    <main>
      <Suspense fallback={LoadingFallback()}>
        <Meals />
      </Suspense>
    </main>
  </>;
}
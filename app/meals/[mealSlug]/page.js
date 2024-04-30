export default function MealInfoPage({params}) {
  const {mealSlug} = params;

  return (
    <main>
      <h1 style={{color: 'white', textAlign: 'center'}}>
        Meal for the slug {mealSlug}
      </h1>
    </main>
  );
}
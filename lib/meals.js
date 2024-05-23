import sql from 'better-sqlite3';

const db = sql('meals.db');

// We added async here event do we don't have to. We wanted to show that we can use async in server side components as well
export async function getMeals() {
  // Adding this timeout so we can simulate loading time in the later steps of the Applications
  await new Promise((resolve) => setTimeout(resolve, 2000));

  //throw new Error('Loading meals failed');
  return db.prepare('SELECT * FROM meals').all();
}
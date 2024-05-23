'use client';

// We don't use the error prop here, but we could if we needed it
export default function Error({error}) {

  return <main className="error">
    <h1>An error occured!</h1>
    <p>Failed to fetch meal data. Please try again later.</p>
  </main>
}
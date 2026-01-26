import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <h2 style={{ color: 'white', textAlign: 'center' }}>
        <Link href="/meals" style={{ color: 'green', textAlign: 'center' }}>Meals Page</Link>
      </h2>
      <h2 style={{ color: 'white', textAlign: 'center' }}>
        <Link href="/meals/community" style={{ color: 'green', textAlign: 'center' }}>Community Page</Link>
      </h2>
      <h2 style={{ color: 'white', textAlign: 'center' }}>
        <Link href="/meals/share" style={{ color: 'green', textAlign: 'center' }}>Share Page</Link>
      </h2>
      <h2 style={{ color: 'white', textAlign: 'center' }}>
        <Link href="/meals/food1" style={{ color: 'green', textAlign: 'center' }}>Food 1</Link>
      </h2>
      <h2 style={{ color: 'white', textAlign: 'center' }}>
        <Link href="/meals/food2" style={{ color: 'green', textAlign: 'center' }}>Food 2</Link>
      </h2>
    </main>
  );
}

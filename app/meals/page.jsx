import Link from "next/link";
import classes from "./page.module.css";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Gorengan Enak, Dibuat Oleh{" "}
          <span className={classes.highlight}>Anda</span>
        </h1>
        <p>
          Pilih resep kesukaanmu dan coba buat sendiri gorengannya. Resep sangat
          mudah dan menyenangnkan!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Bagikan Resep Kesukaan Anda</Link>
        </p>
      </header>
      <main className={classes.main}></main>
    </>
  );
}

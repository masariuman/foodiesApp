import classes from "./page.module.css";
import { Form } from "./component";

export default function ShareMealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Bagikan <span className={classes.highlight}>Gorengan Favorit </span>
          Anda
        </h1>
        <p>Atau Gorengan Lainnya Yang Ingin Anda Bagikan!</p>
      </header>
      <main className={classes.main}>
        <Form />
      </main>
    </>
  );
}

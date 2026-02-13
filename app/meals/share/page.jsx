import ImagePicker from "@/layout/meals/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "./handler";

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
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Nama</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Judul</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Deksripsi Singkat</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Intruksi/Cara Pembuatan</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Gorenganmu" name="image" />
          <p className={classes.actions}>
            <button type="submit">Bagikan Gorengan</button>
          </p>
        </form>
      </main>
    </>
  );
}

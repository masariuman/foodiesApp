import Image from "next/image";
import classes from "./page.module.css";
import { mealDetail } from "./handler";

export default function MealDetailsPage({ params }) {
  const data = mealDetail({ params });
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={data.image} alt={data.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{data.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${data.creator_email}`}>{data.creator}</a>
          </p>
          <p className={classes.summary}>{data.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: data.instructions,
          }}
        ></p>
      </main>
    </>
  );
}

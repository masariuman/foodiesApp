import Image from "next/image";
import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import { notFound } from "next/navigation";

function Meal(id) {
  const meal = getMeal(id.params.masariuman);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return meal;
}

export default function MealDetailsPage({ params }) {
  const data = Meal({ params });
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

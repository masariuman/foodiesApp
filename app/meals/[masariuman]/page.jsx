import Image from "next/image";
import classes from "./page.module.css";
import { mealDetail } from "./handler";

export const generateMetadata = async ({ params }) => {
  const resolvedParams = await params;
  const data = await mealDetail(resolvedParams.masariuman);
  return {
    title: data.title,
    description: data.summary,
  };
};

export default async function MealDetailsPage({ params }) {
  const resolvedParams = await params;
  const data = await mealDetail(resolvedParams.masariuman);
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

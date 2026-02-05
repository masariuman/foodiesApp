import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export const mealDetail = (id) => {
  const meal = getMeal(id.params.masariuman);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return meal;
};

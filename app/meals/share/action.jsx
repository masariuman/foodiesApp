"use server";

import { saveMeal } from "@/lib/meals";
import { redirect } from "next/navigation";
import { validation } from "./handler";
import { revalidatePath } from "next/cache";

export const store = async (formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    (await validation(meal.title)) ||
    (await validation(meal.summary)) ||
    (await validation(meal.instructions)) ||
    (await validation(meal.image)) ||
    (await validation(meal.creator)) ||
    (await validation(meal.creator_email)) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Data yang Diisi Salah.",
    };
  }

  await saveMeal(meal);
  revalidatePath("/", "layout");
  redirect("/meals");
};

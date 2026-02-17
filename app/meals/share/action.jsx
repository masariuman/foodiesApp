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
    validation(meal.title) ||
    validation(meal.summary) ||
    validation(meal.instructions) ||
    validation(meal.image) ||
    validation(meal.creator) ||
    validation(meal.creator_email) ||
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

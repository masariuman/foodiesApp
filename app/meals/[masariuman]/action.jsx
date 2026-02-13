import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export const getDetail = (id) => {
  const data = getMeal(id);
  if (!data) {
    notFound();
  }
  data.instructions = data.instructions.replace(/\n/g, "<br />");
  return data;
};

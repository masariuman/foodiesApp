"use server";

import { store } from "./action";

export const shareMeal = (prevState, formData) => {
  const data = store(formData);
  return data;
};

export const validation = async (data) => {
  if (!data) return true;
  if (typeof data !== "string") {
    data = String(data);
  }
  const trimmed = data.trim();
  return trimmed === "";
};

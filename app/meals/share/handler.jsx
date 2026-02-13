"use server";

import { store } from "./action";

export const shareMeal = async (formData) => {
  const data = store(formData);
  return data;
};

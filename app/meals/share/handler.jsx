"use server";

import { store } from "./action";

export const shareMeal = async (formData) => {
  const data = store(formData);
  return data;
};

export const validation = (data) => {
  return !data || data.trim() === "";
};

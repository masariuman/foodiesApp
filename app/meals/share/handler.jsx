"use server";

import { store } from "./action";

export const shareMeal = async (prevState, formData) => {
  const data = store(formData);
  return data;
};

export const validation = async (data) => {
  return !data || data.trim() === "";
};

import { getDetail } from "./service";

export const mealDetail = (id) => {
  const data = getDetail(id.params.masariuman);
  return data;
};

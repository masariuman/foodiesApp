import { getDetail } from "./action";

export const mealDetail = (id) => {
  const data = getDetail(id.params.masariuman);
  return data;
};

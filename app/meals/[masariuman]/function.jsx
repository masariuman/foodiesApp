import { getDetail } from "./service";

export function mealDetail(id) {
  const data = getDetail(id.params.masariuman);
  return data;
}

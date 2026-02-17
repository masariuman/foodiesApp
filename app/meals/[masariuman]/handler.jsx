import { getDetail } from "./action";

export const mealDetail = async (id) => {
  const data = await getDetail(id);
  return data;
};

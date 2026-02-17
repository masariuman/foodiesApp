import { getDetail } from "./action";

export const mealDetail = async (id) => {
  const params = await id.params;
  const data = await getDetail(params.masariuman);
  return data;
};

import { getDetail } from "./action";

export const mealDetail = async (id) => {
  const params = await id.params;
  const data = await getDetail(params.masariuman);
  return data;
};

export const metadata = async (id) => {
  const data = await getDetail(id);
  return data;
};

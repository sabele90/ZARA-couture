import api from "./index";

export async function getAllClothes() {
  const { data } = await api.get("/clothes");
  console.log("service:", data);
  return data;
}

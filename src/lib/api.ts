import axios from "axios";

export const fetchRecipes = async (search: string) => {
  const url = search
    ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    : `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

  const { data } = await axios.get(url);
  return data.meals || [];
};

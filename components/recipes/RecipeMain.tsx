import { useQuery } from "@tanstack/react-query";
import { fetchRecipes } from "@/lib/api";
import { useState } from "react";
import RecipeItem from "./RecipeItem";
import { Recipe } from "../../types";
import { Input } from "@/components/ui/input";

export default function RecipesPage() {
  const [search, setSearch] = useState("");

  const {
    data: recipes = [],
    isLoading,
    isError,
  } = useQuery<Recipe[]>({
    queryKey: ["recipes", search],
    queryFn: () => fetchRecipes(search),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Recipe List</h1>

      <Input
        className="w-full mb-4 bg-green-50 text-green-900 placeholder-green-700 border border-green-300 focus:border-green-400 focus:ring-green-300 shadow-sm"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching recipes.</p>}
      {!isLoading && recipes.length === 0 && <p>No recipes found.</p>}

      {!isLoading && recipes.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-green-300 rounded">
            <thead className="bg-green-200 text-green-900">
              <tr>
                <th className="text-left p-3 border">Image</th>
                <th className="text-left p-3 border">Name</th>
                <th className="text-left p-3 border">Ingredients</th>
                <th className="text-left p-3 border">Instructions</th>
              </tr>
            </thead>

            <tbody>
              {recipes.map((meal) => (
                <RecipeItem key={meal.idMeal} meal={meal} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

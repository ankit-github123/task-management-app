import { Recipe } from "../../types";

interface Props {
  meal: Recipe;
}

const RecipeItem: React.FC<Props> = ({ meal }) => {
  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const ingredient = meal[`strIngredient${i + 1}`];
    const measure = meal[`strMeasure${i + 1}`];
    return ingredient ? `${ingredient} (${measure?.trim()})` : null;
  })
    .filter(Boolean)
    .join(", ");

  return (
    <tr className="border-t border-green-300  hover:bg-white/60 transition-all duration-200">
      <td className="p-3 border border-green-300 align-top w-24">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-lg shadow-md object-cover w-20 h-20" />
      </td>

      <td className="p-3 border border-green-300 align-top font-semibold text-green-900">{meal.strMeal}</td>

      <td className="p-3 border border-green-300 align-top text-sm text-gray-700">{ingredients}</td>

      <td className="p-3 border border-green-300 align-top text-sm text-gray-600">
        {meal.strInstructions.slice(0, 150)}...
      </td>
    </tr>
  );
};

export default RecipeItem;

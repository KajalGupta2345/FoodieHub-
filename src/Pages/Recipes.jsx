import { useContext } from "react";
import { recipeContext } from "../Context/Recipecontext";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const [data] = useContext(recipeContext);
  // console.log(data);

  const renderRecipes = data.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />
  );
  return <div className="flex p-10 justify-center  gap-x-8 mt-25 flex-wrap">{data.length > 0 ? renderRecipes : "No recipe found!"}</div>;
};

export default Recipes;

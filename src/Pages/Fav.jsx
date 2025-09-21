import RecipeCard from "./RecipeCard";

const Fav = () => {
  
  const fav = JSON.parse(localStorage.getItem("fav")) || [];

  const renderRecipes = fav.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className="flex gap-x-5 p-10 mt-25 justify-center ">
      {fav.length > 0 ? renderRecipes : "No favorite found!"}
    </div>
  );
};

export default Fav;
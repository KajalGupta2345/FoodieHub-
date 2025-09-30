import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipeContext } from "../Context/Recipecontext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setdata] = useContext(recipeContext);
  const recipe = data.find((recipe) => id == recipe.id);

  const [fav, setfav] = useState(JSON.parse(localStorage.getItem("fav")) || []);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: recipe
      ? {
          title: recipe?.title,
          image: recipe?.image,
          chefName: recipe?.chefName,
          description: recipe?.description,
          ingredients: recipe?.ingredients,
          instructions: recipe?.instructions,
          category: recipe?.category,
          price: recipe?.price,
        }
      : {},
  });

  const updateHandler = (recipeData) => {
    const index = data.findIndex((recipe) => id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipeData, id };
    setdata(copydata);
    localStorage.setItem("Recipes", JSON.stringify(copydata));

    const indexFav = fav.findIndex((f) => id == f.id);
    const copyfav = [...fav];
    copyfav[indexFav] = { ...copyfav[indexFav], ...recipeData, id };
    setfav(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
    toast.success("Recipe Updated!");
  };

  const deleteHandler = () => {
    const recipeData = data.filter((recipe) => id !== recipe.id);
    setdata(recipeData);
    localStorage.setItem("Recipes", JSON.stringify(recipeData));
    const filterFav = fav.filter((f) => id !== f.id);
    setfav(filterFav);
    localStorage.setItem("fav",JSON.stringify(filterFav));
    toast.success("Recipe Deleted!");
    navigate("/recipes");
  };

  const FavHandler = () => {
    const copy = [...fav];
    copy.push(recipe);
    setfav(copy);
    localStorage.setItem("fav", JSON.stringify(copy));
  };
  const UnFavHandler = () => {
    const filterFav = fav.filter((f) => f.id != recipe?.id);
    setfav(filterFav);
    localStorage.setItem("fav", JSON.stringify(filterFav));
  };

  useEffect(() => {
    console.log("SingleRecipe.jsx Mounted");
    return () => {
      console.log("SingleRecipe.jsx unMounted");
    };
  }, []);

  return recipe ? (
    <div className="w-[100%] rounded flex  justify-center items-center bg-white p-10 gap-x-18 mt-20 ">
      {/* left */}
      <div className=" relative w-[40%] flex flex-col justify-center items-center gap-y-3 border-4 rounded border-orange-400 p-5">
        {fav.find((f) => f.id == recipe.id) ? (
          <i
            onClick={UnFavHandler}
            className="text-5xl text-orange-600 absolute right-[5%] top-[3%] ri-heart-fill"
          ></i>
        ) : (
          <i
            onClick={FavHandler}
            className="text-5xl text-orange-600 absolute right-[5%] top-[3%] ri-heart-line"
          ></i>
        )}

        <h1 className="text-2xl font-black text-black ">{recipe.title}</h1>
        <img
          src={recipe.image}
          className="w-70 h-70 rounded-md object-cover border-4 border-orange-400"
          alt=""
        />
        <p className="text-xl font-black text-orange-400">{recipe.chefName}</p>
        <p className="text-xl font-black text-orange-400 absolute right-[30%] bottom-[30%] ">
          ₹{recipe.price}
        </p>
        <p className="text-md font-black text-black text-center font-medium">
          {recipe.description.slice(0, 50)}...{" "}
          <span className="text-blue-400">more</span>
        </p>
        <p className="text-md font-black text-black font-medium">
          <span className="font-bold">Category</span> : {recipe.category}
        </p>
      </div>

      {/* right */}
      <form
        className="flex flex-col gap-y-4 w-[50%]
        "
        onSubmit={handleSubmit(updateHandler)}
      >
        <input
          className=" p-2 border border-gray-300 outline-0  focus:ring-2 focus:ring-orange-400 rounded text-black font-bold "
          {...register("title")}
          type="text"
          placeholder="Name of Dish"
        />
        <small className="text-orange-400">This is the error.</small>
        <div className="flex justify-between">
          <input
            className=" p-2  border border-gray-300 outline-0 focus:ring-2 focus:ring-orange-400  text-black  rounded font-bold "
            {...register("chefName")}
            type="text"
            placeholder="Chef name"
          />
          <input
            className=" p-2  border border-gray-300 outline-0 focus:ring-2 focus:ring-orange-400  text-black  rounded font-bold "
            {...register("price")}
            type="text"
            placeholder="Enter Recipe Price"
          />
        </div>
        <input
          className=" p-2 border  border-gray-300 outline-0 focus:ring-2 focus:ring-orange-400 text-black  rounded font-bold "
          {...register("image")}
          type="url"
          placeholder="Enter recipe image"
        />

        <textarea
          className=" p-2 border  border-gray-300 outline-0 focus:ring-2 focus:ring-orange-400 text-black  rounded font-bold "
          {...register("description")}
          type="text"
          placeholder="Description"
        ></textarea>
        <textarea
          className=" p-2 border border-gray-300 outline-0 focus:ring-2 focus:ring-orange-400 text-black  rounded font-bold "
          {...register("ingredients")}
          type="text"
          placeholder="Write ingredients seperated by comma"
        ></textarea>
        <textarea
          className=" p-2 border border-gray-300 outline-0 focus:ring-2 focus:ring-orange-400 text-black rounded font-bold "
          {...register("instructions")}
          type="text"
          placeholder="Write instruction of the recipe"
        ></textarea>
        <select
          className=" p-2 border border-gray-300 outline-0 focus:ring-2 focus:ring-orange-400 text-black  rounded font-bold "
          {...register("category")}
        >
          <option value="dinner">Dinner</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
        </select>
        <div className="flex gap-x-3 justify-center ">
          <button
            type="submit"
            className=" p-2 mt-5  w-1/2 text-white bg-orange-500 hover:bg-orange-600 rounded font-bold"
          >
            Update Recipe
          </button>
          <button
            onClick={deleteHandler}
            className=" p-2 mt-5  w-1/2 text-white bg-orange-500 hover:bg-orange-600 rounded font-bold"
            type="button"
          >
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;

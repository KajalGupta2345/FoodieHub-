import { useForm } from "react-hook-form";
import { useContext } from "react";
import { recipeContext } from "../Context/Recipecontext";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const [data, setdata] = useContext(recipeContext);

  const submitHandler = (recipeData) => {
    recipeData.id = nanoid();
    // console.log(recipeData);

    const copy = [...data];
    copy.push(recipeData);
    setdata(copy);
    localStorage.setItem("Recipes", JSON.stringify(copy));
    toast.success("New recipe created!");
    reset();
    navigate("/recipes");
  };
  return (
    <div className="flex bg-[url(/blob-scene-haikei.svg)] bg-center bg-cover ">
      <div className="flex p-4 px-20 flex-col  ">
        <h1 className="text-5xl sm:text-5xl mt-15 mb-6 px-25 text-orange-400 font-bold">
          CREATE RECIPE
        </h1>
        <form
          className="flex flex-col gap-y-4 w-[100%]
        "
          onSubmit={handleSubmit(submitHandler)}
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
          <div className="flex justify-center ">
            <button
              type="submit"
              className=" p-2 mt-3 text-white w-1/2 text-white bg-orange-500 hover:bg-orange-600 rounded font-bold"
            >
              Save Recipe
            </button>
          </div>
        </form>
      </div>
      <div>
        <img
          src="pizza.png"
          className="w-150 h-150 rounded-full p-4 object-cover absolute right-55 bottom-0 "
          alt=""
        />
      </div>
    </div>
  );
};

export default Create;

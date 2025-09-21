import { useEffect } from "react";
import axios from "../utils/Axios";

const Home = () => {
  const getProduct = async () => {
    //  Using Fetch
    //  const strData = await fetch("https://fakestoreapi.com/products");
    //  const jsonData = await strData.json();
    //  console.log(jsonData);

    // Using Axios
    try {
      const response = await axios.get("/products");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //  useEffect(()=>{
  //    console.log("Home.jsx Mounted!");
  //    getProduct();

  //    return ()=>{
  //     console.log("Home.jsx Unmounted!");
  //    }
  //  });
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="p-5 h-screen bg-[url(/wave.svg)] bg-center bg-cover ">
      <h1 className="text-2xl text-white font-bold ">
        Foodie <i className="ri-restaurant-2-fill"></i>{" "}
      </h1>
      <div className="flex justify-center items-center">
        <img
          src="plate.png"
          className="w-100 h-100 rounded-full p-4 object-cover absolute top-15 left-20 border-b-8 border-orange-400"
          alt=""
        />
        <img
          src="photo.png"
          className="w-80 h-80 object-cover absolute top-55 left-110 rounded-full  border-b-8 border-orange-400"
          alt=""
        />
        <h1 className="absolute right-40 top-45 text-7xl text-center font-black text-black">
          Share & Discover <br /> Delicious Recipes <br /> with Foodie
        </h1>
        <p className="text-md text-gray-500 max-w-xl mb-6  absolute right-45 bottom-40 text-md font-black text-center w-150 ">
          Welcome to{" "}
          <span className="text-orange-500 font-semibold">Foodie</span> — a
          community-driven platform where food lovers come together to share
          their best recipes. From traditional family dishes to quick snacks and
          modern favorites, you’ll find recipes for every mood and occasion. Add
          your own creations, explore recipes from others, and exchange feedback
          to make cooking even more fun and inspiring.
        </p>

        <img
          src="leaves.png"
          className="w-60 h-60  object-cover absolute right-0 bottom-0"
          alt=""
        />
        <a
          href="/create-recipe"
          className="absolute bottom-25 p-3 text-center  w-40  right-130 rounded-full text-white bg-orange-500 hover:bg-orange-600 font-bold"
        >
          Add Recipe ➕
        </a>
        <button className="absolute bottom-25 p-3 w-40  right-70 rounded-full text-white bg-orange-500 hover:bg-orange-600 font-bold">
          Explore more <i class="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Home;

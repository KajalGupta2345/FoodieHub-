import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  // console.log(props);
  
  const {
    id,
    title,
    description,
    instructions,
    ingredients,
    category,
    image,
    chefName,
    price,
  } = props.recipe;

  return (
     <Link to={`/recipe/details/${id}`} className="w-[20%] bg-white border-4 border-orange-400 rounded flex flex-col justify-center items-center p-5 hover:scale-101 transform transition mb-8 duration:150 gap-y-2">
      <img className="w-[70%] aspect-square rounded-full object-cover object-center border-8 border-orange-400 " src={image} alt="" />
      <h1 className="text-2xl font-black text-black  ">{title}</h1>
      <p className="text-xl font-black  text-center text-orange-400">{chefName}</p>
      <p className="text-md font-black text-black font-medium text-center">{description.slice(0,50)}... <span className="text-blue-400">more</span></p>
      {/* <p className="text-md font-black text-black font-medium text-center ">Category : {category}</p> */}
      <div className="flex gap-x-5 ">
      <button className="p-2 w-20 mt-2 text-black border-2 border-black bg-white hover:bg-orange-400 rounded-lg font-bold text-md">₹{price}</button>
      <button className="p-4 mt-2 text-white bg-orange-500 hover:bg-orange-600 rounded-lg font-bold text-s
      ">Buy Now</button>
      </div>
    </Link>
  );
};

export default RecipeCard;

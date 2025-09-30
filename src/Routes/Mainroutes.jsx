import Home from "../Pages/Home";
import About from "../Pages/About";
import Recipes from "../Pages/Recipes";
import { Routes, Route} from "react-router-dom";
import Create from "../Pages/Create";
import SingleRecipe from "../Pages/SingleRecipe";
import Fav from "../Pages/Fav";
import PageNotFound from "../Pages/PageNotFound";

const Mainroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/recipes" element ={<Recipes/>} />
        <Route path="/about" element ={<About/>} />
        <Route path="/create-recipe" element ={<Create/>} />
        <Route path="/recipe/details/:id" element={<SingleRecipe/>}/>
        <Route  path="/favorite-recipe" element={<Fav/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  );
};

export default Mainroutes;

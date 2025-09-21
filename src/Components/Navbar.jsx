import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" absolute top-10  flex  right-10 gap-10 text-xl text-black font-bold">
      <NavLink className={(e) => (e.isActive ? "text-orange-600" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-orange-600" : "")}
        to="/recipes"
      >
        Recipe
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-orange-600" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-orange-600" : "")}
        to="/create-recipe"
      >
        Create Recipe
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-orange-600" : "")}
        to="/favorite-recipe"
      >
        Fav Recipe
      </NavLink>
    </div>
  );
};

export default Navbar;

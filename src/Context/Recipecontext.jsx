import { createContext, useEffect, useState } from "react";
export const recipeContext = createContext(null);

const Recipecontext = (props) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("Recipes")) || []);
  },[]);

  // console.log(data);

  return (
    <recipeContext.Provider value={[data, setdata]}>
      {props.children}
    </recipeContext.Provider>
  );
};

export default Recipecontext;

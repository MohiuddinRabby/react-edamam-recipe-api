import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import RecipeList from "./RecipeList";

const Foods = () => {
  const app_id = "181b6410";
  const app_key = "e3c806042042c4e7350269bd9046507d	";
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");
  useEffect(() => {
    getRecipe();
  }, [query]);
  const getRecipe = () => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
    )
      .then((res) => res.json())
      // .then((dats) => console.log(dats));
      .then((data) => setRecipe(data.hits));
  };
  const updateSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="container py-5">
      <small>Search Here</small>
      <form onSubmit={getSearch}>
        <div className="form-group">
          <input
            type="text"
            className="form-control py-2"
            value={search}
            onChange={updateSearch}
          />
          <button className="btn btn-secondary">Search Food</button>
        </div>
      </form>
      <h3>{query}</h3>
      <div className="row py-2">
        {recipe.map((recipeItem) => (
          <div className="col-md-4" key={recipeItem.recipe.label}>
            <RecipeList
              label={recipeItem.recipe.label}
              img={recipeItem.recipe.image}
              calories={recipeItem.recipe.calories}
              totalWeight={recipeItem.recipe.totalWeight}
              ingredients={recipeItem.recipe.ingredients}
              totalNutrients={recipeItem.recipe.totalNutrients}
            ></RecipeList>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
//app_link = `https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}`;

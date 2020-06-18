import React from "react";
import { Link } from "react-router-dom";
const RecipeList = (props) => {
  const {
    label,
    img,
    calories,
    totalWeight,
    ingredients,
    totalNutrients,
  } = props;
  return (
    <div className="">
      <div>
        <img src={img} alt="" />
      </div>
      <h4>Name:{label}</h4>
      <p>Calories: {calories}</p>
      <p>
        <Link to={"/food-details/" + label}>Click for Details...</Link>
      </p>
    </div>
  );
};

export default RecipeList;

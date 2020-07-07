import React from "react";
import { Link } from "react-router-dom";
const RecipeList = (props) => {
  console.log(props)
  const {
    label,
    img,
    calories,
  } = props;
  return (
    <div className="">
      <div>
        <img src={img} alt="" />
      </div>
      <h4>Name:{label}</h4>
      <p>Calories: {calories}</p>
    </div>
  );
};

export default RecipeList;

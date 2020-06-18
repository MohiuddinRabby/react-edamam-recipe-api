import React from "react";
import { useParams, useHistory } from "react-router-dom";
import RecipeList from "./RecipeList";

const FoodDetails = () => {
  const { label } = useParams();
  let history = useHistory();
  const handleGoBack = () => {
    history.push("/");
  };
  return (
    <div className="container py-5">
      <button onClick={handleGoBack} className="btn btn-primary">
        Go Back
      </button>
      <h4>This is food details {label}</h4>
      <RecipeList></RecipeList>
    </div>
  );
};

export default FoodDetails;

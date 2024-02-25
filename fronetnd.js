import React from 'react';
import { Link } from 'react-router-dom';
import { SiTeapot } from "react-icons/si";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <Link to={`/recipes/${recipe.id}`}>
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} />
        <p>{recipe.description}</p>
      </Link>
      <SiTeapot />
    </div>
  );
};

export default RecipeCard;

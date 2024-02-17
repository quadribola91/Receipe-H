// CulinaryAdventuresCarousel.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CulinaryAdventuresCarousel.css";
import pic1 from "../Pictures/Pizzapic/cheese1.jpg";
import pic2 from "../Pictures/Snacks/classic3.jpg";
import pic3 from "../Pictures/Coffee/americano1.jpg";
import pic4 from "../Pictures/Drinks/cway1.jpg";
import pic5 from "../Pictures/Desserts/cinna1.jpg";

const CulinaryAdventuresCarousel = () => {
  const [recipes] = useState([
    {
      id: 1,
      title: "Pizza",
      description: "A classic Italian pasta dish with a rich meat sauce.",
      image: pic1,
      link: "#",
    },
    {
      id: 2,
      title: "Snacks",
      description:
        "Explore the art of Japanese sushi making with these delicious rolls.",
      image: pic2,
      link: "#",
    },
    {
      id: 3,
      title: "Coffee",
      description:
        "Explore the art of Japanese sushi making with these delicious rolls.",
      image: pic3,
      link: "#",
    },
    {
      id: 4,
      title: "Drinks",
      description:
        "Explore the art of Japanese sushi making with these delicious rolls.",
      image: pic4,
      link: "#",
    },
    {
      id: 5,
      title: "Desserts",
      description:
        "Explore the art of Japanese sushi making with these delicious rolls.",
      image: pic5,
      link: "#",
    },
    // Add more recipes as needed
  ]);

  return (
    <div className="max-w-screen-xl mx-auto mb-8" id="CutAdvent">
      <Link
        to="/FoodGrid1"
        className="text-3xl font-bold mt-8 mb-8 moving-text"
      >
        Culinary Adventures
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="max-w-xs mx-auto sm:mx-0"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              {/* ... (unchanged) */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CulinaryAdventuresCarousel;

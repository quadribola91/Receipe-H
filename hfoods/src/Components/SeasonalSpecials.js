// SeasonalSpecials.js

import React, { useState, useEffect } from "react";
import "./SeasonalSpecials.css"; // Import the corresponding CSS file
import pic1 from "../Pictures/munch/muchit3.webp";
import pic2 from "../Pictures/Drinks/orange1.jpg";
import pic3 from "../Pictures/Coffee/cappu3.jpg";
import pic4 from "../Pictures/Snacks/bbq3.jpg";
import pic5 from "../Pictures/Desserts/vanni1.jpg";

const SeasonalSpecials = () => {
  const [seasonalData] = useState([
    {
      season: "Spring",
      recipes: [
        {
          id: 1,
          title: "Spring Salad",
          description: "A refreshing salad with seasonal greens and fruits.",
          image: pic1,
          link: "#",
        },
        {
          id: 2,
          title: "Lemon Asparagus Pasta",
          description:
            "Delicious pasta dish featuring fresh asparagus and zesty lemon.",
          image: pic2,
          link: "#",
        },
        {
          id: 3,
          title: "Asparagus Pasta",
          description:
            "Delicious pasta dish featuring fresh asparagus and zesty lemon.",
          image: pic3,
          link: "#",
        },
      ],
    },
    {
      season: "Summer",
      recipes: [
        {
          id: 3,
          title: "Grilled Pineapple Chicken Skewers",
          description:
            "Tropical-inspired skewers with grilled pineapple and savory chicken.",
          image: pic4,
          link: "#",
        },
        {
          id: 4,
          title: "Mango Sorbet",
          description: "Cool down with a sweet and tangy mango sorbet.",
          image: pic5,
          link: "#",
        },
      ],
    },
    // Add recipes for other seasons as needed
  ]);

  const [currentSeasonIndex, setCurrentSeasonIndex] = useState(0);

  useEffect(() => {
    const slideshowTimer = setInterval(() => {
      // Increment the index to move to the next season
      setCurrentSeasonIndex((prevIndex) =>
        prevIndex === seasonalData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the duration (in milliseconds) for the time each season stays visible

    return () => {
      // Cleanup the timer when the component unmounts
      clearInterval(slideshowTimer);
    };
  }, [currentSeasonIndex, seasonalData]);

  return (
    <div>
      <div>
        <div
          className="max-w-screen-xl mx-auto mb-8 seasonal-container justify-center"
          id="seasonalspecials"
        >
          <h2 className="text-3xl font-bold mb-4">Seasonal Specials</h2>
          <div className="mb-8 seasonal-section">
            <h3 className="text-2xl font-semibold mb-4">
              {seasonalData[currentSeasonIndex].season}
            </h3>
            <div className="seasonal-carousel">
              {seasonalData[currentSeasonIndex].recipes.map((recipe) => (
                <div key={recipe.id} className="seasonal-card">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {recipe.title}
                      </h3>
                      <p className="text-gray-600">{recipe.description}</p>
                      <a
                        href={recipe.link}
                        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
                      >
                        View Recipe
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalSpecials;

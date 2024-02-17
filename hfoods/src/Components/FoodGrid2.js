// Import React and other necessary modules
// Import React and other necessary modules
import React, { useState, useEffect } from "react";
import shawar1 from "../Pictures/Snacks/shawar1.jpg";
import shawar2 from "../Pictures/Snacks/shawar2.jpg";
import shawar3 from "../Pictures/Snacks/shawar3.jpg";
import classic1 from "../Pictures/Snacks/classic1.jpg";
import classic2 from "../Pictures/Snacks/classic2.jpg";
import classic3 from "../Pictures/Snacks/classic3.jpg";
import bbq1 from "../Pictures/Snacks/bbq1.jpg";
import bbq2 from "../Pictures/Snacks/bbq2.jpg";
import bbq3 from "../Pictures/Snacks/bbq3.jpg";
import crolls1 from "../Pictures/Snacks/crolls1.jpg";
import crolls2 from "../Pictures/Snacks/crolls2.jpg";
import crolls3 from "../Pictures/Snacks/crolls3.jpg";
import mush1 from "../Pictures/Snacks/mush1.jpg";
import mush2 from "../Pictures/Snacks/mush2.jpg";
import mush3 from "../Pictures/Snacks/mush3.jpg";
import bolo1 from "../Pictures/Snacks/bolo1.jpg";
import bolo2 from "../Pictures/Snacks/bolo2.jpg";
import bolo3 from "../Pictures/Snacks/bolo3.jpg";
import pota1 from "../Pictures/Snacks/pota1.jpg";
import pota2 from "../Pictures/Snacks/pota2.jpg";
import pota3 from "../Pictures/Snacks/pota3.jpg";

import "./styles.css"; // Import your styles

const foodItems = [
  {
    id: 1,
    imgSrc: [shawar1, shawar2, shawar3],
    name: "Shawarma Dodster",
    price: "#2,500",
    description:
      "Hot baked wrap with chicken strips, sausages, chili pepper, shawarma sauce",
  },
  {
    id: 1,
    imgSrc: [classic1, classic2, classic3],
    name: "Classic Dodster",
    price: "#2,500",
    description:
      "Hot baked wrap with chicken, tomatoes, mozzarella and mayonnaise & ketchup",
  },
  {
    id: 1,
    imgSrc: [classic1, classic2, classic3],
    name: "Beef Suya Dodster",
    price: "#2,500",
    description:
      "Hot baked wrap with spicy meatballs, red onions, tomatoes, mozzarella and suya mayonnaise sauce",
  },
  {
    id: 1,
    imgSrc: [bbq1, bbq2, bbq3],
    name: "BBQ Chicken wings",
    price: "#3,000",
    description: "Baked chicken wings marinated in BBQ sauce",
  },
  {
    id: 1,
    imgSrc: [mush1, mush2, mush3],
    name: "Chicken Mushroom Pasta",
    price: "#3,000",
    description:
      "Pasta, cocktail sauce, chicken, mushroom, corn, tomato, mozzarella",
  },
  {
    id: 1,
    imgSrc: [crolls1, crolls2, crolls3],
    name: "Cheese Rolls",
    price: "#2,000",
    description:
      "Specialty. Small rolls of Dodo dough with mozzarella and cheese sauce",
  },
  {
    id: 1,
    imgSrc: [bolo1, bolo2, bolo3],
    name: "Bolognese Pasta",
    price: "#3,000",
    description:
      "Pasta, tomato sauce, beef grounded, onion, tomatoes, chili pepper, mayonnaise & suya",
  },
  {
    id: 1,
    imgSrc: [pota1, pota2, pota3],
    name: "Potato Wedges",
    price: "#2,700",
    description: "Hot potatoes baked in oven",
  },
  // Add similar entries for other items
];

const FoodItem = ({ imgSrc, name, price, description }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgSrc.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imgSrc]);

  return (
    <a href="#" className="block">
      <div className="text-center food-item-container">
        <img
          src={imgSrc[currentImageIndex]}
          alt={name}
          className="mx-auto mb-2"
        />
        <h1 className="font-bold">{name}</h1>
        <h2>{price}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default function FoodGrid2() {
  return (
    <div className="container mx-auto mt-12 p-2" id="foodgrid2">
      <h1 className="font-bold text-center text-black text-3xl p-6">Snacks</h1>
      <div className="grid grid-cols-4 gap-4 text-center">
        {foodItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

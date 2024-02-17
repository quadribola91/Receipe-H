// Import React and other necessary modules
// Import React and other necessary modules
import React, { useState, useEffect } from "react";
import americano1 from "../Pictures/Coffee/americano1.jpg";
import americano2 from "../Pictures/Coffee/americano2.jpg";
import americano3 from "../Pictures/Coffee/americano3.jpg";
import latte1 from "../Pictures/Coffee/latte1.jpg";
import latte2 from "../Pictures/Coffee/latte2.jpg";
import latte3 from "../Pictures/Coffee/latte3.jpg";
import cappu1 from "../Pictures/Coffee/cappu1.jpg";
import cappu2 from "../Pictures/Coffee/cappu2.jpg";
import cappu3 from "../Pictures/Coffee/cappu3.jpg";

import "./styles.css"; // Import your styles

const foodItems = [
  {
    id: 1,
    imgSrc: [americano1, americano2, americano3],
    name: "Ameicano",
    price: "#2,000",
    description: "Espresso, hot water",
  },
  {
    id: 1,
    imgSrc: [latte1, latte2, latte3],
    name: "Cafe Latte",
    price: "#2,000",
    description: "Espresso, Steamed Milk",
  },
  {
    id: 1,
    imgSrc: [cappu1, cappu2, cappu3],
    name: "Cappuccino",
    price: "#3,000",
    description: "Espresso, Steamed Milk, Foam Milk",
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

export default function FoodGrid3() {
  return (
    <div className="container mx-auto mt-12 p-2" id="foodgrid3">
      <h1 className="font-bold text-center text-black text-3xl p-6">Coffee</h1>
      <div className="grid grid-cols-4 gap-4 text-center">
        {foodItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

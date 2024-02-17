// Import React and other necessary modules
// Import React and other necessary modules
import React, { useState, useEffect } from "react";
import cway1 from "../Pictures/Drinks/cway1.jpg";
import cway2 from "../Pictures/Drinks/cway2.jpg";
import ora1 from "../Pictures/Drinks/ora1.jpg";
import ora2 from "../Pictures/Drinks/ora2.jpg";
import tropic1 from "../Pictures/Drinks/tropic1.jpg";
import tropic2 from "../Pictures/Drinks/tropic2.jpg";
import coca1 from "../Pictures/Drinks/coca1.jpg";
import coca2 from "../Pictures/Drinks/coca2.jpg";
import heine1 from "../Pictures/Drinks/heine1.jpg";
import heine2 from "../Pictures/Drinks/heine2.jpg";
import mons1 from "../Pictures/Drinks/mons1.jpg";
import mons2 from "../Pictures/Drinks/mons2.jpg";
import "./styles.css"; // Import your styles

const foodItems = [
  {
    id: 1,
    imgSrc: [cway1, cway2],
    name: "C WAY",
    price: "#300",
    description: "Natural water",
  },
  {
    id: 1,
    imgSrc: [ora1, ora2],
    name: "Juice 5 Alive Orange",
    price: "#500",
    description: "Orange",
  },
  {
    id: 1,
    imgSrc: [tropic1, tropic2],
    name: "Juice 5 Alive Orange",
    price: "#500",
    description: "Tropical",
  },
  {
    id: 1,
    imgSrc: [coca1, coca2],
    name: "Coca-Cola",
    price: "#400",
    description: "Natural Cola",
  },
  {
    id: 1,
    imgSrc: [heine1, heine2],
    name: "Beer Heineken",
    price: "#1,500",
    description: "Lager Beer",
  },
  {
    id: 1,
    imgSrc: [mons1, mons2],
    name: "Monster Energy Drink",
    price: "#1,300",
    description: "Energy Refill",
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

export default function FoodGrid4() {
  return (
    <div className="container mx-auto mt-12 p-2" id="foodgrid4">
      <h1 className="font-bold text-center text-black text-3xl p-6">Drinks</h1>
      <div className="grid grid-cols-4 gap-4 text-center">
        {foodItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

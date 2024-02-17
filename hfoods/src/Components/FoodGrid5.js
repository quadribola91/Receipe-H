// Import React and other necessary modules
// Import React and other necessary modules
import React, { useState, useEffect } from "react";
import choco1 from "../Pictures/Desserts/choco1.jpg";
import choco2 from "../Pictures/Desserts/choco2.jpg";
import chocoroll1 from "../Pictures/Desserts/chocoroll1.jpg";
import chocoroll2 from "../Pictures/Desserts/chocoroll2.jpg";
import cinna1 from "../Pictures/Desserts/cinna1.jpg";
import cinna2 from "../Pictures/Desserts/cinna2.jpg";
import straw1 from "../Pictures/Desserts/straw1.jpg";
import straw2 from "../Pictures/Desserts/straw2.jpg";
import vanni1 from "../Pictures/Desserts/vanni1.jpg";
import vanni2 from "../Pictures/Desserts/vanni2.jpg";

import "./styles.css"; // Import your styles

const foodItems = [
  {
    id: 1,
    imgSrc: [cinna1, cinna2],
    name: "Cinnamon Rolls",
    price: "#900",
    description: "Specialty. Small rolls of Dodo dough with cinnamon and sugar",
  },
  {
    id: 1,
    imgSrc: [straw1, straw2],
    name: "Ice cream Strawberry 0.15L",
    price: "#1,400",
    description: "Ice Straw",
  },
  {
    id: 1,
    imgSrc: [choco1, choco2],
    name: "Ice cream chocolate 0.15L",
    price: "#1,400",
    description: "Ice Choco",
  },
  {
    id: 1,
    imgSrc: [vanni1, vanni2],
    name: "Ice cream Vanilla 0.15L",
    price: "#1,400",
    description: "Vanilla",
  },
  {
    id: 1,
    imgSrc: [chocoroll1, chocoroll2],
    name: "Chocolate Rolls",
    price: "#2,000",
    description:
      "Specialty. Small rolls of Dodo dough with melted chocolate and chocolate sauce",
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
    <div className="container mx-auto mt-12 mb-10 p-2" id="foodgrid5">
      <h1 className="font-bold text-center text-black text-3xl p-6">
        Desserts
      </h1>
      <div className="grid grid-cols-4 gap-4 text-center">
        {foodItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

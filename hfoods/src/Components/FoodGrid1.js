// Import React and other necessary modules
import React, { useState, useEffect } from "react";
import half1 from "../Pictures/Pizzapic/half1.jpg";
import half2 from "../Pictures/Pizzapic/half2.jpg";
import half3 from "../Pictures/Pizzapic/half3.jpg";
import dodo1 from "../Pictures/Pizzapic/dodo1.jpg";
import dodo2 from "../Pictures/Pizzapic/dodo2.jpg";
import dodo3 from "../Pictures/Pizzapic/dodo3.jpg";
import mbeef1 from "../Pictures/Pizzapic/mbeef1.jpg";
import mbeef2 from "../Pictures/Pizzapic/mbeef2.jpg";
import mbeef3 from "../Pictures/Pizzapic/mbeef3.jpg";
import cheese1 from "../Pictures/Pizzapic/cheese1.jpg";
import cheese2 from "../Pictures/Pizzapic/cheese2.jpg";
import cheese3 from "../Pictures/Pizzapic/cheese3.jpg";
import cheesy1 from "../Pictures/Pizzapic/cheesy1.jpg";
import cheesy2 from "../Pictures/Pizzapic/cheesy2.jpg";
import cheesy3 from "../Pictures/Pizzapic/cheesy3.jpg";
import chicken1 from "../Pictures/Pizzapic/chicken1.jpg";
import chicken2 from "../Pictures/Pizzapic/chicken2.jpg";
import chicken3 from "../Pictures/Pizzapic/chicken3.jpg";
import marge1 from "../Pictures/Pizzapic/Marge1.jpg";
import marge2 from "../Pictures/Pizzapic/Marge2.jpg";
import marge3 from "../Pictures/Pizzapic/Marge3.jpg";
import veggie1 from "../Pictures/Pizzapic/veggie1.jpg";
import veggie2 from "../Pictures/Pizzapic/veggie2.jpg";
import veggie3 from "../Pictures/Pizzapic/veggie3.jpg";
import "./styles.css"; // Import your styles

const foodItems = [
  {
    id: 1,
    imgSrc: [half1, half2, half3],
    name: "Half & Half Pizza",
    price: "#4,000",
    description: "Two pizzas in one",
  },
  {
    id: 1,
    imgSrc: [dodo1, dodo2, dodo3],
    name: "Dodo BBQ",
    price: "#7,000",
    description:
      "Chicken, Green pepper, red pepper, sausage, corn, plantain, tomato sauce, mozzarella, BBQ",
  },
  {
    id: 1,
    imgSrc: [mbeef1, mbeef2, mbeef3],
    name: "Mexican Beef Pizza",
    price: "#6,000",
    description:
      "Beef crumbles, Tomato sauce, Onion, Tomato, Mozzarella, Cheddar, Mexican Sauce",
  },
  {
    id: 1,
    imgSrc: [cheese1, cheese2, cheese3],
    name: "CheeseBurger Pizza",
    price: "#5,000",
    description:
      "Beef, tomatoes, onions, cheddar, mozzarella, mayonnaise & ketchup, tomato sauce",
  },
  {
    id: 1,
    imgSrc: [cheesy1, cheesy2, cheesy3],
    name: "Cheesy Chicken",
    price: "#5,800",
    description: "Chicken, tomatoes, cheddar, mozzarella, cheese sauce",
  },
  {
    id: 1,
    imgSrc: [chicken1, chicken2, chicken3],
    name: "Chicken BBQ",
    price: "#4,800",
    description:
      "Chicken, red onions, corn, mozzarella, BBQ sauce, tomato sauce",
  },
  {
    id: 1,
    imgSrc: [marge1, marge2, marge3],
    name: "Margherita",
    price: "#4,200",
    description: "Mozzarella, tomato sauce",
  },
  {
    id: 1,
    imgSrc: [veggie1, veggie2, veggie3],
    name: "Veggie Overload",
    price: "#5,000",
    description:
      "Mushrooms, bell peppers, corn, olives, red onions, tomatoes, mozzarella, tomato sauce",
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
      <div className="text-center  food-item-container">
        <img
          src={imgSrc[currentImageIndex]}
          alt={name}
          className="mx-auto mb-5"
        />
        <h1 className="font-bold">{name}</h1>
        <h2>{price}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </a>
  );
};

export default function FoodGrid1() {
  return (
    <div className="container mx-auto mt-12 p-2 w-full" id="foodgrid1">
      <h1 className="font-bold text-center text-black text-3xl p-6">Pizza</h1>
      <div className="grid grid-cols-4 gap-4 text-center">
        {foodItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

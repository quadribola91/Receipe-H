import React from "react";
import chefImage from "../Pictures/chef11.png";

const AboutUs = () => {
  return (
    <div className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 lg:mr-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            About OurBrand
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 font-bold mb-20">
            Welcome to OurBrand, your ultimate destination for delicious recipes
            and culinary inspiration. Our mission is to make cooking fun, easy,
            and accessible to everyone, whether you're a beginner or a seasoned
            chef.
          </p>
          <p className="text-lg lg:text-xl text-gray-600 font-bold mt-4">
            At OurBrand, we believe that food brings people together and that
            cooking should be a joyful experience. That's why we're dedicated to
            providing you with high-quality recipes, cooking tips, and culinary
            resources to help you explore the world of flavors and create
            memorable meals.
          </p>
        </div>
        <div className="lg:w-1/2 lg:ml-8 h-100 w-300">
          <img
            src={chefImage}
            alt="Chef Cooking"
            className="w-full h-300 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

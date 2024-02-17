import React from "react";

const Services = () => {
  return (
    <section className="bg-gray-100" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-700 mb-8 text-center">
          Our{" "}
          <span>
            <em className="text-gray-700">Menus</em>
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:flex sm:flex-wrap sm:justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Recipe Tutorials</h3>
              <p className="text-gray-600 mb-4">
                Learn how to cook your favorite dishes with our detailed recipe
                tutorials.
              </p>
              <iframe
                className="w-full"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Recipe Tutorial"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Ingredient Tips</h3>
              <p className="text-gray-600 mb-4">
                Discover the best ingredients and cooking tips for perfect
                results every time.
              </p>
              <iframe
                className="w-full"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Ingredient Tips"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Culinary Workshops</h3>
              <p className="text-gray-600 mb-4">
                Join our workshops and master the art of cooking from our expert
                chefs.
              </p>
              <iframe
                className="w-full"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Culinary Workshops"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Recipe Collections</h3>
              <p className="text-gray-600 mb-4">
                Explore our curated collections of recipes for every occasion.
              </p>
              <iframe
                className="w-full"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Recipe Collections"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

// DropdownMenu.js
import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="absolute mt-2 bg-red-800 rounded-lg shadow-lg top-6 ">
      <div className="py-5 px-2">
        <Link
          to="/foodgrid2"
          className="block px-4 py-2 text-gray-800 font-bold hover:bg-gray-100"
        >
          Snacks
        </Link>
        <Link
          to="/foodgrid1"
          className="block px-4 py-2 text-gray-800 font-bold hover:bg-gray-100"
        >
          Pizza
        </Link>
        <Link
          to="/foodgrid5"
          className="block px-4 py-2 text-gray-800 font-bold hover:bg-gray-100"
        >
          Desserts
        </Link>
        <Link
          to="/foodgrid3"
          className="block px-4 py-2 text-gray-800 font-bold hover:bg-gray-100"
        >
          Coffee
        </Link>
        <Link
          to="/foodgrid4"
          className="block px-4 py-2 text-gray-800 font-bold hover:bg-gray-100"
        >
          Drinks
        </Link>
      </div>
    </div>
  );
};

export default DropdownMenu;

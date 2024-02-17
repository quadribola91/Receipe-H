import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your subscription logic here
    alert(`Thank you for subscribing! We'll keep you updated.`);
    setEmail(""); // Clear the input field after submission
  };

  return (
    <section className="bg-gray-200 py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-700 mb-8 text-center">
          Subscribe to Our Newsletter
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Your email address"
              required
            />
            <button
              type="submit"
              className="flex-shrink-0 bg-black hover:bg-gray-700 border-none hover:border-teal-700 text-sm border-4 text-white py-3 px-3 rounded"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;

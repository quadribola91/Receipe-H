import React, { useEffect, useState } from "react";
import pic1 from "./munchit.jpg";
import pic2 from "../Pictures/munch/muchit2.jpg";
import pic3 from "../Pictures/munch/muchit4.jpg";
import pic4 from "../Pictures/munch/muchit5.jpg";
import "./Content.css";
import CulinaryAdventuresCarousel from "./CultleryAdvent";
import SeasonalSpecials from "./SeasonalSpecials";
import AboutUs from "./AboutUs";
import FoodGrid1 from "./FoodGrid1";
import FoodGrid2 from "./FoodGrid2";
import FoodGrid3 from "./FoodGrid3";
import FoodGrid4 from "./FoodGrid4";
import FoodGrid5 from "./FoodGrid5";
export default function Content() {
  const [lines, setLines] = useState([
    "Elevate your dining experience with delightful recipes that are not only easy to make but will take your taste buds to new heights.",
    "From quick bites to gourmet delights, HighFoods is your passport to a world of flavor and creativity.",
    "Let's embark on a culinary journey together and make every meal a delightful adventure!",
  ]);

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentPicIndex, setCurrentPicIndex] = useState(0);
  const pics = [pic1, pic2, pic3, pic4];

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 5000); // Move to the next line every 5 seconds

    const picInterval = setInterval(() => {
      setCurrentPicIndex((prevIndex) => (prevIndex + 1) % pics.length);
    }, 4000); // Change the picture every 4 seconds

    return () => {
      clearInterval(lineInterval);
      clearInterval(picInterval);
    };
  }, [lines, pics]);

  return (
    <>
      <div>
        <section
          className="overflow-hidden mt-20 p-8 bg-gray-200 sm:grid sm:grid-cols-2 sm:items-center bg-white"
          id="/"
        >
          <img
            alt="Violin"
            src={pics[currentPicIndex]}
            className="h-full w-full object-fit  md:h-[calc(100% - 4rem)] md:rounded-ss-[60px] animate-pop rounded-full"
          />
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-4xl font-bold text-gray-500 md:text-5xl mb-4">
                HighFoods!
              </h2>

              {lines.map((line, index) => (
                <p
                  key={index}
                  className={`${
                    currentLineIndex === index
                      ? "text-red-500 animate-blink"
                      : "hidden"
                  } mt-4 line-${index + 1} text-2xl font-bold`}
                >
                  {line}
                </p>
              ))}

              <div className="mt-8">
                <a
                  href="/services"
                  className="inline-block rounded bg-gray-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-800 hover:text-white focus:outline-none focus:ring focus:ring-red"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <SeasonalSpecials />
      <AboutUs />
      <FoodGrid1 />
      <FoodGrid2 />
      <FoodGrid3 />
      <FoodGrid4 />
      <FoodGrid5 />
    </>
  );
}

"use client"; 

import { useEffect, useState } from "react";

// Example Promo Data
const promoItems = [
  {
    id: "1",
    title: "Summer Sale - Up to 50% Off!",
    image: "/voucher2.jpg", // Add a real image here
  },
  {
    id: "2",
    title: "New Movies Every Week!",
    image: "/promo2.jpg", // Add a real image here
  },
  {
    id: "3",
    title: "Exclusive Offers for Members!",
    image: "/promo3.jpg", // Add a real image here
  },
];

const PromoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promoItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      <div
        className="absolute inset-0 flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {promoItems.map((promo, index) => (
          <div
            key={promo.id}
            className="w-full h-full flex-shrink-0"
            style={{
              transition: "transform 0.5s ease-in-out",
              // Adding a transition effect to the sliding
              transform: `translateX(${currentIndex === index ? 0 : 100}%)`, // Smooth transition for each item
            }}
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 bg-black text-white text-xl font-semibold text-center">
              {promo.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoSlider;

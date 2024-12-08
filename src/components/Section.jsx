import React, { useState, useEffect } from "react";
import { sectionData } from "../constants";

const Section = () => {
  const [counters, setCounters] = useState(
    sectionData.stats.map((stat) => ({ ...stat, currentValue: 0 }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((counter) => {
          if (counter.currentValue < counter.value) {
            return { ...counter, currentValue: counter.currentValue + 1 };
          }
          return counter;
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-blue-900 py-16">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {sectionData.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8">{sectionData.description}</p>

        {/* Image */}
        <div className="mb-8">
          <img
            src="/path-to-your-image.png" // Replace with your image path
            alt="Dashboard Illustration"
            className="mx-auto"
          />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {counters.map((stat, index) => (
            <div key={index} className="text-white">
              <h3 className="text-4xl font-bold">
                {stat.currentValue}+
              </h3>
              <p className="text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;

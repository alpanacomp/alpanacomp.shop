// src/components/Feedback.jsx
import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Somasree Naskar",
    rating: 5,
    comment: "Very helpful service. The system quality is good.",
    date: "Mar 2025"
  },
  {
    name: "Priya Mukherjee",
    rating: 5,
    comment: "Affordable prices and great customer support. Highly recommended!",
    date: "April 2024"
  },
  {
    name: "Ankit Sinha",
    rating: 5,
    comment: "Got my custom PC assembled here. Smooth process and great performance.",
    date: "April 2024"
  },
  {
    name: "Rina Ghosh",
    rating: 4,
    comment: "Good shop in Champahati area. Wide range of components available.",
    date: "March 2024"
  },
  {
    name: "Sayan Pal",
    rating: 5,
    comment: "Fantastic experience. Will visit again!",
    date: "March 2024"
  },
    {
    name: "Pushan Palit",
    rating: 5,
    comment: "Awsome pricing with great quality.",
    date: "April 2024"
  }
];

function Feedback() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          What Customers Are Saying
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-2">
                <div className="font-semibold text-lg">{review.name}</div>
                <span className="ml-auto text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="flex items-center text-yellow-400 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feedback;

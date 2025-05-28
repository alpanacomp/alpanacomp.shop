import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const services = [
  {
    id: 1,
    title: "Set Up Your Study Centre",
    description:
      "Get the right PC setup for students and educational environments – reliable, affordable, and efficient.",
    animation: "/assets/lottie/study.json",
  },
  {
    id: 2,
    title: "Set Up Your Productivity Centre",
    description:
      "Boost your office or personal productivity with custom desktop configurations for your needs.",
    animation: "/assets/lottie/productivity.json",
  },
  {
    id: 3,
    title: "Set Up Your Entertainment Console",
    description:
      "Build a powerful setup for media streaming, gaming, and more — all in one stylish, compact solution.",
    animation: "/assets/lottie/entertainment.json",
  },
  {
    id: 4,
    title: "Set Up Your Home Server",
    description:
      "Turn your spare room into a server room with Alpana’s custom solutions for home networking and storage.",
    animation: "/assets/lottie/server.json",
  },
];

function Services() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Customized setup solutions for your specific needs
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            {service.animation && (
              <Player
                autoplay
                loop
                src={service.animation}
                className="w-full h-40 mb-4"
              />
            )}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

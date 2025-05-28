import React from "react";

const people = [
  {
    name: "Subhajit Naskar",
    role: "Founder & Financial Lead",
    image: "/assets/team/Subhajit.jpeg",
  },
  {
    name: "Arup Sardar",
    role: "Co-Founder",
    image: "/assets/team/arup.jpg",
  },
  {
    name: "Titas Majumder",
    role: "Technical Lead & Developer",
    image: "/assets/team/Titas.jpg",
  },
];

function People() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900" data-aos="fade-left">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our People</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {people.map((person, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={person.image}
                alt={`Portrait of ${person.name}`}
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default People;

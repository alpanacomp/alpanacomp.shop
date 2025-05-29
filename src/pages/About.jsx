import React from "react";
import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <>
      <Helmet>
        <title>Alpana Computers | Custom PCs & Services</title>
        <meta name="description" content="Get your dream PC, laptop, and accessories at Alpana Computers. Serving West Bengal with custom builds and IT support." />
        <meta name="keywords" content="Custom PC, Computers, West Bengal, Laptop Service, PC Builds, Alpana Computers" />
        <meta name="author" content="Alpana Computers" />
        <link rel="canonical" href="https://alpanacomp.shop/" />
      </Helmet>
      <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Alpana Computers</span> is your trusted partner in affordable,
            high-quality desktop solutions. Whether you're a student, gamer,
            business owner, or a casual user, we offer customized desktops
            tailored to your needs — without breaking your budget.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            With a strong focus on customer satisfaction, we only use genuine and
            tested components to deliver performance and reliability. From
            personal computing to enterprise setups, our desktops are built to
            last.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We're based in India and have served thousands of happy customers
            across the country. Visit our store or contact us online — we’d love
            to help you build your next machine.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function Contact() {
  return (
    <section className="text-gray-900 dark:text-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/assets/contact-hero-bg-04.png")` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        <div className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Get in Touch
              </h1>
              <p className="text-lg text-gray-200 mb-6">
                Whether you're curious about setups, pricing, or support — we're ready to answer any and all questions.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Player
                autoplay
                loop
                src="/assets/lottie/contact.json"
                className="w-64 h-64"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 px-6 bg-gray-50 dark:bg-gray-900" data-aos="fade-right">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Contact Us
          </h2>
          <p className="mb-10 text-center text-gray-600 dark:text-gray-300">
            Have questions or need help? Reach out to us directly or use the form below.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Contact Info */}
            <div className="space-y-1 text-gray-700 dark:text-gray-300" data-aos="fade-right">
              <p className="text-lg font-semibold">Alpana Computers</p>
              <p>
                Phone:{" "}
                <a href="tel:+918250902187" className="text-blue-600 dark:text-blue-400 hover:underline">
                  +91 82509 02187
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:alpanacomp@alpanacomp.shop" className="text-blue-600 dark:text-blue-400 hover:underline">
                  alpanacomp@alpanacomp.shop
                </a>
              </p>
              <p>
                Address:{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Champahati, Chinagram (Talbari), West Bengal, Pin: 743330
                </span>
              </p>

              {/* Map */}
              <div className="mt-4">
                <iframe
                  title="Alpana Computers Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59077.294521678376!2d88.4481765339485!3d22.36478855540444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026b0955c06c45%3A0x25c1bb2643c58e2a!2sChampahati%2C%20West%20Bengal%20743330!5e0!3m2!1sen!2sin!4v1716999999999!5m2!1sen!2sin"
                  width="100%"
                  height="372"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow"
                />
              </div>
            </div>

            {/* Contact Form */}
            <form
              action="https://formspree.io/f/mjkwnzdb"
              method="POST"
              className="grid gap-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow"
              data-aos="fade-left"
            >
              {/* Optional name input – visible to user but not sent to Formspree */}
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Your message..."
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

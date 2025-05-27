import React from "react";

function Contact() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Contact Us
        </h2>
        <p className="mb-10 text-center text-gray-600 dark:text-gray-300">
          Have questions or need help? Reach out to us directly or use the form below.
        </p>

        {/* Contact Details */}
        <div className="mb-10 text-center">
          <p className="text-lg font-semibold">Alpana Computers</p>
          <p className="text-gray-700 dark:text-gray-300">
            Phone: <a href="tel:+918250902187" className="text-blue-600 dark:text-blue-400 hover:underline">+91 82509 02187</a>
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Email: <a href="mailto:alpanacomp1969@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">alpanacomp1969@gmail.com</a>
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Address: <span className="text-blue-600 dark:text-blue-400">Champahati, Chinagram(Talbari), West Bengal, Pin: 743330 </span>
          </p>
        </div>

        {/* Contact Form */}
        <form className="grid gap-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
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
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
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
    </section>
  );
}

export default Contact;

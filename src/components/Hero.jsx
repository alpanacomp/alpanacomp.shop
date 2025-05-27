import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative text-gray-900 dark:text-white py-20 px-6 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center rounded-br-[80px]"
        style={{ backgroundImage: "url('/assets/hero-desktop.png')" }}
      />

      {/* Overlay to make text readable */}
      <div className="absolute inset-0 -z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-br-[80px]" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Affordable & Quality Desktops is here.
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            At <span className="font-semibold text-blue-600 dark:text-blue-400">Alpana Computers</span>,
            we provide reliable and budget-friendly desktop PCs tailored for your home, office, or gaming needs.
          </p>
          <Link
            to="/about"
            className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
          >
            Learn More
          </Link>
        </div>

        {/* Optional Foreground Image */}
        <div className="flex-1">
          <img
            src="/assets/hero-desktop.png"
            alt="Desktop setup"
            className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

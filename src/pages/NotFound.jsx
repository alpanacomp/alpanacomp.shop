import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import notFoundAnimation from "../assets/404.json";
import { Helmet } from 'react-helmet-async';

function NotFound() {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Alpana Computers" />
        <meta property="og:description" content="Custom PC builds and IT services." />
        <meta property="og:image" content="https://alpanacomp.shop/og-image.jpg" />
        <meta property="og:url" content="https://alpanacomp.shop/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <section className="min-h-screen bg-white dark:bg-gray-900 text-center flex flex-col justify-center items-center px-6">
        <div className="w-96 md:w-[400px] mb-6">
          <Lottie animationData={notFoundAnimation} loop autoplay />
        </div>
        <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Sorry, the page you're looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </section>
    </>
  );
}

export default NotFound;

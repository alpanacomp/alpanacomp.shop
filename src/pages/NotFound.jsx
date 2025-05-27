import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-center flex flex-col justify-center items-center px-6">
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
  );
}

export default NotFound;

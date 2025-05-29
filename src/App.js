import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import Loader from "./components/Loader";
import { Helmet } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Alpana Computers | Trusted Since 1969</title>
        <meta name="description" content="Custom PCs, laptops, and IT services in West Bengal." />
        <link rel="canonical" href="https://alpanacomp.shop/" />
      </Helmet>
      <ThemeProvider>
        <Router>
          {loading ? (
            <Loader />
          ) : (
            <div className="flex flex-col min-h-screen text-black dark:text-white">
              <Navbar />
              <main className="flex-grow">
                <AppRoutes />
              </main>
              <Footer />
            </div>
          )}
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

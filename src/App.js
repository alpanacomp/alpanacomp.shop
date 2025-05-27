import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // adjust delay if needed
    return () => clearTimeout(timer);
  }, []);

  return (
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
  );
}

export default App;

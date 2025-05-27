import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Menu, X } from "lucide-react";

function Navbar() {
    const { darkMode, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navbarClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${scrolled
            ? "bg-white dark:bg-gray-900 shadow-md"
            : "bg-white/30 dark:bg-gray-900/30 backdrop-blur-md"}
  `;

    return (
        <nav className={`${navbarClasses} px-6 py-3 flex justify-between items-center`}>

            {/* Logo + Brand */}
            <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Logo" className="w-8 h-8" />

            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-gray-700 dark:text-gray-200 hover:underline">
                    Home
                </Link>
                <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:underline">
                    About
                </Link>

                {/* Toggle Switch */}
                {/* Toggle Switch */}
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={toggleTheme}
                        className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 dark:bg-gray-600 rounded-full transition-colors duration-300"></div>
                    <div
                        className="
      absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full
      transition-transform duration-300
      peer-checked:translate-x-5
    "
                    />
                </label>


            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-gray-800 dark:text-gray-200"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 px-6 flex flex-col gap-4 z-40">
                    <Link to="/" className="text-gray-700 dark:text-gray-200" onClick={() => setMenuOpen(false)}>
                        Home
                    </Link>
                    <Link to="/about" className="text-gray-700 dark:text-gray-200" onClick={() => setMenuOpen(false)}>
                        About
                    </Link>
                    {/* Toggle Switch */}
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={() => {
                                toggleTheme();
                                setMenuOpen(false);
                            }}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-600 peer-checked:bg-blue-600 transition-colors duration-300 relative">
                            <div
                                className="absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-300 peer-checked:translate-x-5"
                            />
                        </div>
                    </label>
                </div>
            )}
        </nav>
    );
}

export default Navbar;

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm pt-10 pb-4 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Contact Info */}
        <div className="space-y-1">
          <p className="font-semibold text-base">Alpana Computers</p>
          <p>Phone: <a href="tel:+918250902187" className="text-blue-600 dark:text-blue-400 hover:underline">+91 82509 02187</a></p>
          <p>Email: <a href="mailto:alpanacomp1969@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">alpanacomp@alpanacomp.shop</a></p>
          <p>Address: <span className="text-blue-600 dark:text-blue-400">Champahati, Chinagram (Talbari), West Bengal, Pin: 743330</span></p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 text-lg">
          <a
            href="https://www.facebook.com/profile.php?id=61575503613633"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/alpanacomp/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@alpanacomp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://github.com/alpanacomp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="pt-2 text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Alpana Computers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

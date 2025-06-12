// src/components/SpecialHeader.js
import { Link } from 'react-router-dom';

const SpecialHeader = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Special Page</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default SpecialHeader;

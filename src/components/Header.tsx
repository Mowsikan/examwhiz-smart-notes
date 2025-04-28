
import { Book, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <GraduationCap className="h-7 w-7 text-examwhiz-blue" />
          <span className="text-2xl font-bold text-examwhiz-blue">
            Exam<span className="text-examwhiz-brightblue">Whiz</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-examwhiz-blue transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-gray-600 hover:text-examwhiz-blue transition-colors font-medium"
          >
            My Notes
          </Link>
          <Link
            to="/"
            className="text-gray-600 hover:text-examwhiz-blue transition-colors font-medium"
          >
            Books
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:flex bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors font-medium">
            Sign Up
          </button>
          <button className="bg-examwhiz-blue text-white px-4 py-2 rounded-lg hover:bg-examwhiz-brightblue transition-colors font-medium">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

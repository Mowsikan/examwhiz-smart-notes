
import { Book } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Book className="h-6 w-6 text-examwhiz-blue" />
          <span className="text-2xl font-bold text-examwhiz-blue">
            Exam<span className="text-examwhiz-brightblue">Whiz</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-examwhiz-blue transition-colors"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-gray-600 hover:text-examwhiz-blue transition-colors"
          >
            My Notes
          </Link>
          <Link
            to="/"
            className="text-gray-600 hover:text-examwhiz-blue transition-colors"
          >
            Books
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <button className="bg-examwhiz-blue text-white px-4 py-2 rounded hover:bg-examwhiz-brightblue transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useState, useEffect } from "react";
import book from "../assets/book.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BookContext } from "../context/Book";

const Navbar = () => {
  const [user, setUser] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { setIsVisible } = useContext(BookContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-10 px-2 py-1 sm:py-1 sm:px-6 flex items-center justify-between ${scrolled ? 'bg-green-300' : ''} transition-all duration-300`}>
      <div className="flex items-center gap-3 sm:gap-10">
        {/* logo */}
        <Link>
          <img src={book} alt="" className="size-16 sm:size-20" />
        </Link>
        {/* search box */}
        <div className="relative w-[180px] sm:w-[400px]">
          <div className="absolute left-2 inline-block inset-y-3">
            <FaSearch className="size-5" />
          </div>
          <input
            type="text"
            placeholder="Search for books"
            className="border px-10 py-2 placeholder:text-gray-500 text-base text-gray-700 font-semibold outline-none rounded-full w-full shadow-sm"
          />
        </div>
      </div>

      {/* auth */}
      <div>
        {user ? (
          <div className="bg-orange-500 px-5 sm:px-10 py-2 rounded-3xl text-lg font-semibold text-white hover:bg-orange-600 cursor-auto">
            Logout
          </div>
        ) : (
          <Link
            to="login"
            className="bg-orange-500 px-5 sm:px-10 py-2 rounded-3xl text-lg font-semibold text-white hover:bg-orange-600 cursor-pointer"
            onClick={() => setIsVisible(true)}
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

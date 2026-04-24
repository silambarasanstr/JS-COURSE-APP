import { useState,useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

useEffect(() => {
  setIsOpen(false);
}, [location]);

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-green-50 text-green-700"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <div className="sticky top-0 z-10 bg-white border-b">
      <div className="container flex items-center justify-between p-5 mx-auto">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#333] rounded-md flex items-center justify-center">
            <span className="text-[10px] font-black text-green-400">JS</span>
          </div>
          <span className="text-xl font-bold text-slate-900">
            COURSE <span className="text-green-600">APP</span>
          </span>
        </Link>

        {/* Hamburger Button */}
        <button
          className="text-gray-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="items-center hidden gap-3 md:flex">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/category/Arrays" className={linkClass}>Arrays</NavLink>
          <NavLink to="/category/Strings" className={linkClass}>Strings</NavLink>
          <NavLink to="/category/Objects" className={linkClass}>Objects</NavLink>
          <NavLink to="/category/Loops" className={linkClass}>Loops</NavLink>
          <NavLink to="/category/Functions" className={linkClass}>Functions</NavLink>
          <NavLink to="/category/Operators" className={linkClass}>Operators</NavLink>

          
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="px-5 pb-4 space-y-2 md:hidden">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/category/Arrays" className={linkClass}>Arrays</NavLink>
          <NavLink to="/category/Strings" className={linkClass}>Strings</NavLink>
          <NavLink to="/category/Objects" className={linkClass}>Objects</NavLink>
          <NavLink to="/category/Loops" className={linkClass}>Loops</NavLink>
          <NavLink to="/category/Functions" className={linkClass}>Functions</NavLink>
          <NavLink to="/category/Operators" className={linkClass}>Operators</NavLink>

         
        </nav>
      )}
    </div>
  );
};

export default NavBar;
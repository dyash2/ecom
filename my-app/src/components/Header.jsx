import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import icon from "../assets/icons/icon-bg.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full border-b bg-gray-100">
      <div className="flex items-center justify-between px-4 py-2 sm:px-8">
        {/* Logo */}
        <img src={icon} alt="Logo" className="h-10 w-auto" />

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-6 font-semibold">
          <a href="#" className="hover:text-gray-500">Home</a>
          <a href="#" className="hover:text-gray-500">About</a>
          <a href="#" className="hover:text-gray-500">Contact</a>
        </nav>

        {/* Desktop Search */}
        <div className="hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-lg border px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden text-xl"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="sm:hidden flex flex-col gap-3 px-4 pb-4 font-semibold">
          {/* Mobile Search */}
          <input
            type="text"
            placeholder="Search..."
            className="rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <a href="#" className="hover:text-gray-500">Home</a>
          <a href="#" className="hover:text-gray-500">About</a>
          <a href="#" className="hover:text-gray-500">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;

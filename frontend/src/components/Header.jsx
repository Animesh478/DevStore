import { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LuSquareMenu, LuX } from "react-icons/lu";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu((prevValue) => !prevValue);
  }

  return (
    <header className="relative z-50">
      <nav className="bg-slate-800 flex items-center justify-between px-10 md:px-20 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-neutral-300 text-xl font-semibold font-poppins cursor-pointer"
        >
          DevStore
        </Link>

        {/* Link icons */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <Link className="flex items-center text-neutral-300 gap-2 cursor-pointer max-sm:hidden hover:text-white transition-colors">
            <FaShoppingCart />
            <span>Cart</span>
          </Link>

          {/* User Icon */}
          <Link className="flex items-center text-neutral-300 gap-2 cursor-pointer max-sm:hidden hover:text-white transition-colors">
            <FaUser />
            <span>Sign In</span>
          </Link>

          <div>
            <div
              onClick={handleShowMenu}
              className="text-neutral-300 sm:hidden cursor-pointer hover:text-white transition-colors"
            >
              {showMenu ? <LuX /> : <LuSquareMenu />}
            </div>
          </div>
        </div>
      </nav>
      {showMenu && (
        <div className="absolute bg-slate-800 text-sm px-2 py-2 top-full left-0 w-full text-center rounded-b-md transition-all duration-300 ease-in-out z-1 border-t border-slate-600 shadow-xl">
          <div className="flex flex-col px-10 py-2 gap-3 items-center">
            <Link className="text-neutral-300 flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <FaShoppingCart />
              <span>Cart</span>
            </Link>
            <Link className="text-neutral-300 flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <FaUser />
              <span>Sign In</span>
            </Link>
          </div>
          {/* <div className="text-neutral-300 cursor-pointer">Cart</div>
          <div className="text-neutral-300 cursor-pointer">Sign In</div> */}
        </div>
      )}
    </header>
  );
}

export default Header;

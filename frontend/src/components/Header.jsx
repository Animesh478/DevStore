import { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LuSquareMenu, LuX } from "react-icons/lu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu((prevValue) => !prevValue);
  }

  return (
    <header className="relative z-50">
      <nav className="bg-slate-800 flex items-center justify-between px-10 md:px-20 py-3">
        {/* Logo */}
        <div className="text-neutral-300 text-xl font-semibold font-poppins">
          DevStore
        </div>

        {/* Link icons */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <div className="flex items-center text-neutral-300 gap-2 cursor-pointer max-sm:hidden hover:text-white transition-colors">
            <FaShoppingCart />
            <span>Cart</span>
          </div>

          {/* User Icon */}
          <div className="flex items-center text-neutral-300 gap-2 cursor-pointer max-sm:hidden hover:text-white transition-colors">
            <FaUser />
            <span>Sign In</span>
          </div>

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
            <div className="text-neutral-300 flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <FaShoppingCart />
              <span>Cart</span>
            </div>
            <div className="text-neutral-300 flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <FaUser />
              <span>Sign In</span>
            </div>
          </div>
          {/* <div className="text-neutral-300 cursor-pointer">Cart</div>
          <div className="text-neutral-300 cursor-pointer">Sign In</div> */}
        </div>
      )}
    </header>
  );
}

export default Header;

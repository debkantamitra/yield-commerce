import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="px-8 py-2">
      <div className="flex justify-end space-x-4 text-[12px] text-[#333333]">
        <button>Help</button>
        <button>Orders & Returns</button>
        <button>Hi, John</button>
      </div>

      <div className="relative flex items-end justify-between">
        <p className="text-[32px] font-bold">ECOMMERCE</p>
        <div className="absolute inset-0 flex items-end justify-center space-x-8 font-semibold leading-5">
          <button>Categories</button>
          <button>Sale</button>
          <button>Clearance</button>
          <button>New stock</button>
          <button>Trending</button>
        </div>
        <div className="flex space-x-8">
          <Image
            src={"/assets/icons/Search.svg"}
            alt="search"
            width={32}
            height={32}
          />
          <Image
            src={"/assets/icons/Cart.svg"}
            alt="shopping_cart"
            width={32}
            height={32}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

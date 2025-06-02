import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";

const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {


  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/*Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <HiMiniXMark className="h-6 w-6 text-lande-peach" />
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;

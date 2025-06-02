import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdMenu } from "react-icons/io";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";

const Nabvar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav
        nav
        className="container mx-auto flex items-center justify-between py-4 px-6"
      >
        {/* Left - Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Landelof Ceramics
          </Link>
        </div>
        {/* Center - Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className=" text-lande-willow hover:text-lande-amber text-sm font-Lato uppercase"
          >
            Inicio
          </Link>
          <Link
            to="#"
            className=" text-lande-willow hover:text-lande-amber text-sm font-Lato uppercase"
          >
            Productos
          </Link>
          <Link
            to="#"
            className=" text-lande-willow hover:text-lande-amber text-sm font-Lato uppercase"
          >
            Taller
          </Link>
          <Link
            to="#"
            className=" text-lande-willow hover:text-lande-amber text-sm font-Lato uppercase"
          >
            Nosotros
          </Link>
          <Link
            to="#"
            className=" text-lande-willow hover:text-lande-amber text-sm font-Lato uppercase"
          >
            Contacto
          </Link>
        </div>
        {/* Right - Icons */}
        <div className=" flex items-center space-x-4">
          <Link
            to="/profile"
            className=" text-lande-willow hover:text-lande-amber"
          >
            <FaRegUser className="h-6 w-6 " />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative text-lande-willow hover:text-lande-amber"
          >
            <TiShoppingCart className="h-6 w-6 " />
            <span className="absolute -top-2 bg-lande-peach text-white text-xs rounded-full px-1.5 py-0.5">
              4
            </span>
          </button>
          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button className="md:hidden">
            <IoMdMenu className="h-6 w-6 text-lande-willow" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
    </>
  );
};

export default Nabvar;

import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdMenu } from "react-icons/io";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import logo from "../../assets/images/logo.png";

const Nabvar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left - Menu and Search (mobile/tablet) */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleNavDrawer}>
            <IoMdMenu className="h-6 w-6 text-lande-willow" />
          </button>
          <div className="overflow-hidden">
            <SearchBar />
          </div>
        </div>

        {/* Center - Logo */}
        <div className="flex-1 flex justify-center md:flex-none md:ml-10 lg:ml-20">
          <Link to="/">
            <section>
              <img
                src={logo}
                alt="hero"
                className="h-14 md:h-20 w-auto"
              />
            </section>
          </Link>
        </div>

        {/* Center - Navigation (desktop) */}
        <div className="hidden md:flex space-x-6 mx-4 flex-1 justify-center">
          <Link
            to="/"
            className="text-lande-willow hover:text-lande-amber text-sm font-Lato uppercase"
          >
            Inicio
          </Link>
          <Link
            to="products/all"
            className="text-lande-willow hover:text-lande-amber text-sm font-Lato uppercase"
          >
            Productos
          </Link>
          <Link
            to="#"
            className="text-lande-willow hover:text-lande-amber text-sm font-Lato uppercase"
          >
            Taller
          </Link>
          <Link
            to="#"
            className="text-lande-willow hover:text-lande-amber text-sm font-Lato uppercase"
          >
            Nosotros
          </Link>
          <Link
            to="#"
            className="text-lande-willow hover:text-lande-amber text-sm font-Lato uppercase"
          >
            Contacto
          </Link>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block overflow-hidden">
            <SearchBar />
          </div>
          <Link
            to="/profile"
            className="text-lande-willow hover:text-lande-amber"
          >
            <FaRegUser className="h-6 w-6" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative text-lande-willow hover:text-lande-amber"
          >
            <TiShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 bg-lande-peach text-white text-xs rounded-full px-1.5 py-0.5">
              4
            </span>
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Overlay para el fondo oscuro */}
      {navDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleNavDrawer}
        />
      )}

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-2/4 sm:w-1/3 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <HiMiniXMark className="h-6 w-6 text-lande-peach" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-3xl font-bebas mb-4">Menu</h2>
          <nav className="flex flex-col space-y-4">
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-lande-willow hover:text-lande-amber text-sm font-Lato uppercase"
            >
              Inicio
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-lande-willow hover:text-lande-amber text-sm font-Lato uppercase"
            >
              Productos
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-lande-willow hover:text-lande-amber text-sm font-Lato uppercase"
            >
              Taller
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-lande-willow hover:text-lande-amber text-sm font-Lato uppercase"
            >
              Nosotros
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-lande-willow hover:text-lande-amber text-sm font-Lato uppercase"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nabvar;
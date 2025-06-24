import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import CartContents from "../Cart/CartContents";
import TermsModal from "../Modals/TermsModal";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    toggleCartDrawer();
    navigate("/checkout");
  };

  const [showTerms, setShowTerms] = useState(false);

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] lg:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/*Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <HiMiniXMark className="h-6 w-6 text-lande-peach" />
        </button>
      </div>
      {/* Cart content with scrollable area */}
      <div className="flex-grow px-4 pb-4  overflow-y-auto">
        <h2 className="text-3xl font-bebas mb-4">Tu carrito</h2>
        <CartContents />
      </div>

      {/*Checkout button fixed at the bottom */}
      <div className="p-4 bg-white sticky bottom-0">
        <button
          onClick={handleCheckout}
          className="w-full bg-lande-peach-2 text-white py-1 rounded-lg font-quicksand hover:bg-lande-peach transition"
        >
          Ir a compra
        </button>
        <p className="font-quicksand text-lande-amber text-xs text-center tracking-tighter ">
          {" "}
          Cargos por envío y descuentos aplicables al pagar{" "}
        </p>
        <p className="font-quicksand text-lande-amber text-xs text-center tracking-tighter">
          Al continuar, aceptas nuestros{" "}
          <button
            onClick={() => setShowTerms(true)}
            className="underline hover:text-lande-peach transition-colors"
          >
            Términos y Condiciones
          </button>
        </p>
      </div>

      {/* Usa el nuevo componente modal */}
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </div>
  );
};

export default CartDrawer;

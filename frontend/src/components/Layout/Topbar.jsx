import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="bg-lande-orang text-lande-amber py-2">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Texto centrado - ocupa espacio flexible */}
        <div className="flex-grow text-center px-4">
          <span className="text-sm md:text-base font-quicksand">
            Diseño y calidad que perdura - Envíos a todo México
          </span>
        </div>

        {/* Iconos a la derecha */}
        <div className="hidden md:flex items-center space-x-4 pr-4">
          <a href="#" className="hover:text-white transition-colors">
            <FaFacebookSquare className="h-6 w-5" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <RiInstagramFill className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <IoLogoWhatsapp className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
